import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import cloudinary from '../lib/cloudinary.js';

export const getUsersForSidebar = async (req, res) => {

  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.log("", error.message);
    res.status(500).json({ message: error.message });
  }

}

export const getMessages = async (req, res) => {

  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: userToChatId, recieverId: myId },
        { senderId: myId, recieverId: userToChatId }
      ]
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages Controller", error.message);
    res.status(500).json({ message: error.message });
  }
}

export const sendMessage = async (req, res) => {

  try {
    const {text,image} = req.body;
    const {id:recieverId} = req.params;      
    const senderId = req.user._id;

    let imageURL;

    if(image)
    {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageURL = uploadResponse.secure_url;
    }

    const newMessage = await Message.create({ 
      senderId, 
      recieverId, 
      text, 
      image: imageURL 
    });

    //todo : Realtime functionality


    res.status(201).json(newMessage);


  } catch (error) { 
    console.log("Error in sendMessage Controller", error.message);
    res.status(500).json({ message: error.message });

  }
}