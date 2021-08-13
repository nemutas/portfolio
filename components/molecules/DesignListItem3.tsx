import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	contents: React.ReactNode
}

export const DesignListItem3: VFC<PropsType> = ({ contents }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const lineColor = colorTheme.sub

	return (
		<div className={sGridContainer}>
			{/* row 1 */}
			<div className={cx(sSquareBox, sBottomLine(lineColor), sRightLine(lineColor))}></div>
			<div className={sBottomLine(lineColor)}></div>
			{/* row 2 */}
			<div className={cx(sSquareBox, sTop, sRightLine(lineColor))}></div>
			<div className={sContentsContainer}>{contents}</div>
		</div>
	)
}

// ==============================================
// styles

const lineLength = 20

const sGridContainer = css`
	display: grid;
	grid-template-columns: ${lineLength}px 1fr;
	grid-template-rows: ${lineLength}px auto;
`

const sSquareBox = css`
	height: ${lineLength}px;
	width: ${lineLength}px;
`

const sBottomLine = (color: string) => css`
	border-bottom: 2px solid ${color};
`

const sRightLine = (color: string) => css`
	border-right: 2px solid ${color};
`

const sTop = css`
	margin-bottom: auto;
`

const sContentsContainer = css`
	padding: 10px;
`
