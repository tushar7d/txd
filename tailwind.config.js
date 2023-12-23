/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ]
    },

      fontFamily: {
        'serif': ['var(--font-recoleta)'],
        
       
      },
      animation: {
        text: "text 5s ease infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(230px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-120px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blobr: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-230px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(120px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
