import { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';

export const FrameLines: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)

	const lines = [300, 200, 150, 100, 50]
	const span = 30

	return (
		<div>
			{lines.map((line, i) => (
				<div key={i}>
					<div className={sLineHB(colorTheme, line, (i + 1) * span)}></div>
					<div className={sLineVB(colorTheme, line, (i + 1) * span)}></div>
					<div className={sLineHT(colorTheme, line, (i + 1) * span)}></div>
					<div className={sLineVT(colorTheme, line, (i + 1) * span)}></div>
				</div>
			))}
		</div>
	)
}

const sLineHB = (theme: ColorThemeType, length: number, bottom: number) => css`
	position: absolute;
	bottom: ${bottom}px;
	left: 0;
	width: ${length}px;
	height: 3px;
	background-color: ${theme.main};
`

const sLineVB = (theme: ColorThemeType, length: number, left: number) => css`
	position: absolute;
	bottom: 0;
	left: ${left}px;
	width: 3px;
	height: ${length}px;
	background-color: ${theme.main};
`

const sLineHT = (theme: ColorThemeType, length: number, top: number) => css`
	position: absolute;
	top: ${top}px;
	right: 0;
	width: ${length}px;
	height: 3px;
	background-color: ${theme.main};
`

const sLineVT = (theme: ColorThemeType, length: number, right: number) => css`
	position: absolute;
	top: 0;
	right: ${right}px;
	width: 3px;
	height: ${length}px;
	background-color: ${theme.main};
`
