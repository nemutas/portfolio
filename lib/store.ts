import { atom } from 'recoil';
import { colorThemes, ColorThemeType } from '../datas/colorTheme';

export const colorThemeState = atom<ColorThemeType>({
	key: 'colorTheme',
	default: colorThemes['theme1']
})
