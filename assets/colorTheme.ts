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

export const colorThemeName = {
	theme1: 'theme1',
	theme2: 'theme2'
}

export const colorTheme: PaletteType = {
	theme1: {
		base: '#E4DBBF',
		main: '#383127',
		sub: '#70AB8F',
		textAccent: '#DC5B21',
		textMain: '#1F1F1F',
		textSub: '#5D5F5F'
	},
	theme2: {
		base: '#E4DBBF',
		main: '#383127',
		sub: '#70AB8F',
		textAccent: '#DC5B21',
		textMain: '#1F1F1F',
		textSub: '#78797C'
	}
}

export const getColorTheme = (themeName: string) => {
	return colorTheme[themeName]
}
