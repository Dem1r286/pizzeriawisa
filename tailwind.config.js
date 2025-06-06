/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {},
      screens: {
        "3xs": "250px",
        "2xs": "340px",
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        "2xl": '1536px',
        "3xl": '1800px',
      },
    },
    plugins: [],
  }