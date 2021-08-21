import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, Global } from '@emotion/react';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';

export const GlobalStyles: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)

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
`
