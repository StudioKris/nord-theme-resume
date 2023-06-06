/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    }
  },
  plugins: [
    require('tailwind-nord'),
  ],
};
