import { atom } from 'recoil';
import { colorThemes, ColorThemeType, DEFAULT_COLOR_THEME } from '../datas/colorTheme';

export const colorThemeState = atom<ColorThemeType>({
	key: 'colorTheme',
	default: colorThemes[DEFAULT_COLOR_THEME]
})

export const setColorThemeToLocalStorage = (themeName: string) => {
	localStorage.setItem('colorTheme', themeName)
}

export const getColorThemeFromLocalStorage = () => {
	return localStorage.getItem('colorTheme') || DEFAULT_COLOR_THEME
}
