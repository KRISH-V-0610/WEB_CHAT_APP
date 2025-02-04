// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';  // Correct import for Tailwind CSS
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,  // Initialize Tailwind CSS
    autoprefixer,  // Initialize Autoprefixer
  ],
};
