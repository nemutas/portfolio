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

export const DEFAULT_COLOR_THEME = 'theme1'

const BlackMainText = '#1F1F1F'
const BlackSubText = '#5D5F5F'
const WhiteMainText = '#F2F2F2'
const WhiteSubText = '#D8D7D6'

export const colorThemes: PaletteType = {
	theme1: {
		base: '#E4DBBF',
		main: '#383127',
		sub: '#70AB8F',
		textAccent: '#DC5B21',
		textMain: BlackMainText,
		textSub: BlackSubText
	},
	theme2: {
		base: '#222A38',
		main: '#065F46',
		sub: '#3468CC',
		textAccent: '#88C8EE',
		textMain: WhiteMainText,
		textSub: WhiteSubText
	},
	theme3: {
		base: '#312D2D',
		main: '#FFE7E2',
		sub: '#71C8E2',
		textAccent: '#F14C2E',
		textMain: WhiteMainText,
		textSub: WhiteSubText
	},
	theme4: {
		base: '#F2E0D7',
		main: '#EF7D3C',
		sub: '#263165',
		textAccent: '#60955F',
		textMain: BlackMainText,
		textSub: BlackSubText
	}
}
