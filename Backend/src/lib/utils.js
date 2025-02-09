import jwt from 'jsonwebtoken'

export const generateToken = (userId,res)=>{

  const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})

  res.cookie("token",token,{
    maxAge: 7*60*60*1000, //milliseconds
    httpOnly: true,//prevents XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV === "production" ? true : false, // true for https
    sameSite: "strict" // "strict" or "lax" CSRF protection 
  })

  return token;
}


