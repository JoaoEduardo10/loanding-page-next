export const theme = {
	colors: {
		primaryColor: '#350053',
		secondaryColor: '#0FCE33',
		white: '#FFFFFF',
		mediumGray: '#AFAFAF',
	},
	font: {
		family: {
			default: '\'Open Sans\', sans-serif',
			secondary: '\'Montserrat\', sans-serif',
		},
		sizes: {
			xsmall: '8rem',
			small: '1.6rem',
			medium: '2.4rem',
			large: '3.2rem',
			xlarge: '4.0rem',
			xxlarge: '4.8rem',
			huge: '5.6rem',
			xhuge: '6.4rem',
		},
	},
	media: {
		lteMedium: '(max-width: 768px)',
		phone: '(max-width: 780px)',
		tablet: '(max-width: 950px)',
		lapTop: '(max-width: 1500px)',
	},
	spacings: {
		xsmall: '8rem',
		small: '1.6rem',
		medium: '2.4rem',
		large: '3.2rem',
		xlarge: '4.0rem',
		xxlarge: '4.8rem',
		huge: '5.6rem',
		xhuge: '6.4rem',
	},
} as const;