import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { ColorThemeType } from '../../datas/colorTheme';

type PropsType = {
	colorTheme: ColorThemeType
	size: number
}

export const ColorThemeIcon: VFC<PropsType> = ({ colorTheme, size }) => {
	const cellSize = size / 2

	return (
		<div className={sContainer}>
			<div className={sColorContainer(colorTheme.base, cellSize)}></div>
			<div className={sColorContainer(colorTheme.main, cellSize)}></div>
			<div className={sColorContainer(colorTheme.sub, cellSize)}></div>
			<div className={sColorContainer(colorTheme.textAccent, cellSize)}></div>
		</div>
	)
}

const sContainer = css`
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	/* border-radius: 9999px; */
	/* overflow: hidden; */
`

const sColorContainer = (color: string, size: number) => css`
	width: ${size}px;
	height: ${size}px;
	background-color: ${color};
`
