/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlywhenSupported: true,
	},
	content: ["./src/**/*.{html,njk,md,js}"],
	theme: {
		fontFamily: {
			yellowtail: ["yellowtail", "sans-serif"],
			rubik: ["rubik", "sans-serif"],
		},

		container: {
			center: true,
			padding: "1rem",
		},

		extend: {
			colors: {
				pink: "#f70766",
				"pink-medium": "#df0664",
				"pink-dark": "#c50662",
				lime: "#74F000",
				green: "#15C000",
				"green-dark": "#11A500",
				"off-white": "#FAFAFA",
				gray: "#EFEFEF",
				black: "#282828",
			},

			screens: {
				"2xl": "1672px",
			},

			spacing: {
				4.5: "1.125",
				13: "3.25rem",
				15: "3.75rem",
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
				76: "19rem",
				84: "21rem",
				88: "22rem",
				92: "23rem",
				100: "25rem",
				104: "26rem",
				108: "27rem",
				112: "28rem",
				116: "29rem",
				120: "30rem",
				124: "31rem",
				128: "32rem",
				132: "33rem",
				136: "34rem",
				140: "35rem",
				144: "36rem",
				148: "37rem",
				152: "38rem",
				156: "39rem",
				160: "40rem",
				164: "41rem",
				168: "42rem",
				172: "43rem",
				176: "44rem",
				180: "45rem",
				184: "46rem",
				188: "47rem",
				190: "48rem",
				194: "49rem",
				200: "50rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
