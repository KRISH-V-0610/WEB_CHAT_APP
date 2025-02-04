import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'

import toast from 'react-hot-toast'
export const useAuthStore = create((set) => ({

  authUser: null,
  isCheckingAuth: false,
  isLoggingIn: false,
  isSigningIn: false,
  isUpdatingProfile: false,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get('/auth/check-auth');
      set({ authUser: response.data })

    } catch (error) {
      console.log("Error in useAuthStore.js checking Auth", error.message)
      set({ authUser: null })

    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {

    set({ isSigningIn: true })

    try {
      const userData = await axiosInstance.post('/auth/signup', data);
      set({ authUser: userData.data })
      toast.success("Account Created Successfully")
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isSigningIn: false })
    }

  },

  logout: async (data) => {
    try {
      await axiosInstance.post('/auth/logout');
      set({ authUser: null })
      toast.success("Logged out Successfully")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  },
  
  login: async (data) => {
    set({ isLoggingIn: true })

    try {
      const userData = await axiosInstance.post('/auth/login', data);
      set({ authUser: userData.data })
      toast.success("Logged in Successfully")
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      set({ isLoggingIn: false })
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true })
    try {
      const userData = await axiosInstance.put('/auth/update-profile', data);
      set({ authUser: userData.data })
      toast.success("Profile Updated Successfully")
    } catch (error) {
      toast.error("File Too large (Max limit 10mb)")
    } finally {
      set({ isUpdatingProfile: false })
    }
  },



}))


