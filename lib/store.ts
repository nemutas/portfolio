import { atom } from 'recoil';
import { colorThemeName, ColorThemeType, getColorTheme } from '../datas/colorTheme';

export const colorThemeState = atom<ColorThemeType>({
	key: 'colorTheme',
	default: getColorTheme(colorThemeName.theme1)
})
