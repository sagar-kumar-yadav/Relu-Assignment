/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'Mongolian-Baiti': ['Mongolian Baiti', 'serif'],
    },
    extend: {
      backgroundImage: {
        rightSideBar:
          "url('../src/assets/profile_pic/pexels-ekaterina-12203460.png')",
      },
    },
  },
  plugins: [],
};
