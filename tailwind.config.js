/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
    //원본 덮어쓰기
    extend: {
      //확장(원본 덮어쓰지 않음)
      fontSize: {
        "10xl": "224px",
      },
      animation: {
        "pulse-fast": "pulse 0.2s linear infinite",
      },
    },
  },
  plugins: [],
};
