import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	title: React.ReactNode
	contents: React.ReactNode
}

export const DesignListItem2: VFC<PropsType> = ({ title, contents }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const lineColor = colorTheme.sub

	return (
		<div className={sGridContainer}>
			{/* row 1 */}
			<div className={cx(sSquareBox, sBottomLine(lineColor), sRightLine(lineColor))}></div>
			<div className={cx(sSquareBox, sLeft, sBottomLine(lineColor))}></div>
			{/* row 2 */}
			<div className={cx(sSquareBox, sTop, sRightLine(lineColor))}></div>
			<div className={cx(sTextContainer, sSubBottomLine(lineColor))}>{title}</div>
			{/* row 3 */}
			<div></div>
			<div className={sTextContainer}>{contents}</div>
		</div>
	)
}

// ==============================================
// styles

const lineLength = 20

const sGridContainer = css`
	display: grid;
	grid-template-columns: ${lineLength}px 1fr;
`
const sBottomLine = (color: string) => css`
	border-bottom: 2px solid ${color};
`

const sRightLine = (color: string) => css`
	border-right: 2px solid ${color};
`

const sSubBottomLine = (color: string) => css`
	border-bottom: 1px solid ${color};
`

const sSquareBox = css`
	height: ${lineLength}px;
	width: ${lineLength}px;
`

const sTop = css`
	margin-bottom: auto;
`

const sLeft = css`
	margin-right: auto;
`

const sTextContainer = css`
	padding: 10px;
`
