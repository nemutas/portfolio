import React, { VFC } from 'react';
import { css } from '@emotion/css';

export const CustomDivider: VFC = () => {
	return (
		<div className={sGridContainer}>
			<div className={sPatternContainer}>{/* <div className={sRhombus}></div> */}</div>
			<div className={sTextContainer}>Text</div>
			<div className={sPatternContainer}>{/* <div className={sRhombus}></div> */}</div>
		</div>
	)
}

const sGridContainer = css`
	display: grid;
	grid-template-columns: auto 1fr auto;
`

const sPatternContainer = css`
	position: relative;
	width: 100px;
	height: 30px;
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	background: repeating-linear-gradient(
			-135deg,
			transparent,
			transparent 14px,
			black 3px,
			black 17px
		),
		repeating-linear-gradient(-45deg, transparent, transparent 14px, black 3px, black 17px);
	/* repeating-linear-gradient(45deg, transparent, transparent 8px, black 1px, black 10px); */
`

const sRhombus = css`
	/* position: absolute; */
	width: 30px;
	height: 30px;
	border: 2px solid black;
	transform: rotate(45deg);
`

const sTextContainer = css`
	border-top: 2px solid black;
	border-bottom: 2px solid black;
`
