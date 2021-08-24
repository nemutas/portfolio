import React, { useEffect, VFC } from 'react';
import { useRecoilState } from 'recoil';
import { css, Global } from '@emotion/react';
import { colorThemes, ColorThemeType } from '../datas/colorTheme';
import { colorThemeState, getColorThemeFromLocalStorage } from '../lib/store';
import { BP_XS } from './breakPointStyles';

export const GlobalStyles: VFC = () => {
	const [colorTheme, setColorTheme] = useRecoilState(colorThemeState)

	useEffect(() => {
		const themeName = getColorThemeFromLocalStorage()
		setColorTheme(colorThemes[themeName])
	}, [])

	return <Global styles={sGlobal(colorTheme)} />
}

const sGlobal = (colorTheme: ColorThemeType) => css`
	::-webkit-scrollbar {
		width: 3px;
		height: 3px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${colorTheme.textAccent};
	}

	/* @media screen and (max-width: 900px) {
		* {
			font-size: 60%;
		}
	} */

	@media screen and (max-width: ${BP_XS}) {
		* {
			font-size: 80%;
		}
	}
`
