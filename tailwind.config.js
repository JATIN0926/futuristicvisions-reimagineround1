/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lander-grande": ['"Lander Grande"', "sans-serif"],
        "sodo-sans": ['"SoDo Sans"', "sans-serif"],
        "MaleoTrials-Bold": ['"MaleoTrials Bold"', "sans-serif"],
        "MaleoTrials-Medium": ['"MaleoTrials Medium"', "sans-serif"],
        "MaleoTrials-Regular": ['"MaleoTrials Regular"', "sans-serif"],
      },
      backgroundImage: {
        "gift-bg": "url(/images/gift_bg.png)",
      },
      screens: {
        mbMini: "290px",
        mbXSmall: "400px",
        mbMedSmall: "500px",
        mbSmall: "600px",
        mbMedium: "800px",
        laptop: "1000px",
        tbPortrait: "1200px",
        tbMedium: "1400px",
        tbLandscape: "1600px",
        Desktop: "2000px",
        lgDesktop: "2400px",
      },
    },
  },
  plugins: [],
};
