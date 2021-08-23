import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	isLeft?: boolean
	isRight?: boolean
	crossSize?: number
}

export const CustomDividerH: VFC<PropsType> = props => {
	const { isLeft = true, isRight = true, crossSize = 30 } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const color = colorTheme.sub

	return (
		<div className={sGridContainer}>
			{/* row 1 */}
			{isLeft ? (
				<div className={cx(sBox(crossSize), sBorderBottom(color), sBorderRight(color))}></div>
			) : (
				<div className={cx(sBox(crossSize), sBorderBottom(color))}></div>
			)}
			<div className={sBorderBottom(color)}></div>
			{isRight ? (
				<div className={cx(sBox(crossSize), sBorderBottom(color), sBorderLeft(color))}></div>
			) : (
				<div className={cx(sBox(crossSize), sBorderBottom(color))}></div>
			)}
			{/* row 2 */}
			{isLeft ? (
				<div className={cx(sBox(crossSize), sBorderRight(color))}></div>
			) : (
				<div className={cx(sBox(crossSize))}></div>
			)}
			<div></div>
			{isRight ? (
				<div className={cx(sBox(crossSize), sBorderLeft(color))}></div>
			) : (
				<div className={cx(sBox(crossSize))}></div>
			)}
		</div>
	)
}

const sGridContainer = css`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: auto auto;
`

const sBox = (size: number) => css`
	width: ${size}px;
	height: ${size}px;
`

const sBorderBottom = (color: string) => css`
	border-bottom: 2px solid ${color};
`

const sBorderRight = (color: string) => css`
	border-right: 2px solid ${color};
`

const sBorderLeft = (color: string) => css`
	border-left: 2px solid ${color};
`
