import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	title: React.ReactNode
	contents: React.ReactNode
}

export const DesignListItem: VFC<PropsType> = ({ title, contents }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const lineColor = colorTheme.sub

	return (
		<div className={sGridContainer}>
			{/* row 1 */}
			<div className={cx(sBottomLine(lineColor), sRightLine(lineColor))}></div>
			<div className={cx(sLeftRectangleBox, sBottomLine(lineColor))}></div>
			<div></div>
			{/* row 2 */}
			<div className={cx(sBottomLine(lineColor), sRightLine(lineColor))}></div>
			<div className={cx(sTextContainer, sBottomLine(lineColor))}>{title}</div>
			<div className={cx(sBottomSquareBox, sBottomLine(lineColor), sLeftLine(lineColor))}></div>
			{/* row 3 */}
			<div className={cx(sTopSquareBox, sRightLine(lineColor))}></div>
			<div className={sTextContainer}>{contents}</div>
			<div className={sLeftLine(lineColor)}></div>
			{/* row 4 */}
			<div></div>
			<div className={cx(sRightRectangleBox, sTopLine(lineColor))}></div>
			<div className={cx(sTopLine(lineColor), sLeftLine(lineColor))}></div>
		</div>
	)
}

// ==============================================
// styles

const lineLength = 20

const sGridContainer = css`
	display: grid;
	grid-template-columns: ${lineLength}px 1fr ${lineLength}px;
	grid-template-rows: ${lineLength}px auto auto ${lineLength}px;
`

const sTextContainer = css`
	padding: 10px;
`

const sTopLine = (color: string) => css`
	border-top: 2px solid ${color};
`

const sBottomLine = (color: string) => css`
	border-bottom: 2px solid ${color};
`

const sLeftLine = (color: string) => css`
	border-left: 2px solid ${color};
`

const sRightLine = (color: string) => css`
	border-right: 2px solid ${color};
`

const sTopSquareBox = css`
	height: ${lineLength}px;
	width: ${lineLength}px;
	margin-bottom: auto;
`

const sBottomSquareBox = css`
	height: ${lineLength}px;
	width: ${lineLength}px;
	margin-top: auto;
`

const sLeftRectangleBox = css`
	height: ${lineLength}px;
	width: ${lineLength * 4}px;
	margin-right: auto;
`

const sRightRectangleBox = css`
	height: ${lineLength}px;
	width: ${lineLength * 4}px;
	margin-left: auto;
`
