export type ColorThemeType = {
	base: string
	main: string
	sub: string
	textAccent: string
	textMain: string
	textSub: string
}

type PaletteType = {
	[theme: string]: ColorThemeType
}

export const colorThemes: PaletteType = {
	theme1: {
		base: '#E4DBBF',
		main: '#383127',
		sub: '#70AB8F',
		textAccent: '#DC5B21',
		textMain: '#1F1F1F',
		textSub: '#5D5F5F'
	},
	theme2: {
		base: '#222A38',
		main: '#065F46',
		sub: '#3468CC',
		textAccent: '#88C8EE',
		textMain: '#F2F2F2',
		textSub: '#D8D7D6'
	},
	theme3: {
		base: '#312D2D',
		main: '#FFE7E2',
		sub: '#71C8E2',
		textAccent: '#F14C2E',
		textMain: '#F2F2F2',
		textSub: '#D8D7D6'
	}
}
