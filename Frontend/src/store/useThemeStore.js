import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  // Define your app state here

  theme: localStorage.getItem('chat-theme') || 'light',

  setTheme: (theme) => {
    localStorage.setItem('chat-theme', theme),
      set({ theme: theme })
  }

}))