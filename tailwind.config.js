/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./src/**/*.{html,js,ts,jsx,tsx,mdx}",
		"./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
	],
  theme: {
    colors: {
      primary: "#C829A9",
      secondary: "black",
      "primary-light": "#E273CD",
      "light-gray": "#FCEEF9",
      "body-gray": "#f5f5f5",
      "blue-gray": "#64728F",
      "primary-gray": "#F8DDF3",
      "primary-dark": "#370B2E",
      white: "#FFFFFF"
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
     
    },
  },
  plugins: [],
  compilerOptions: {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  }
}

