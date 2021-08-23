import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { CustomText } from './CustomText';

type PropsType = {
	children: React.ReactNode
}

export const AnimetionButton: VFC<PropsType> = ({ children }) => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div className={sContainer(colorTheme)}>
			<CustomText fontSizeRem={2}>{children}</CustomText>
		</div>
	)
}

const sContainer = (colorTheme: ColorThemeType) => css`
	position: relative;
	cursor: pointer;
	padding: 0 15px;
	border: 2px solid ${colorTheme.textAccent};
	color: ${colorTheme.textAccent};
	transition: all 0.6s ease;
	/* 枠線 */
	&::before,
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 20%;
		height: 30%;
		border: 2px solid;
		transition: all 0.6s ease;
		border-radius: 2px;
	}
	&::before {
		top: -0.5rem;
		left: -0.5rem;
		border-bottom-color: transparent;
		border-right-color: transparent;
		border-top-color: ${colorTheme.textAccent};
		border-left-color: ${colorTheme.textAccent};
	}
	&::after {
		bottom: -0.5rem;
		right: -0.5rem;
		border-top-color: transparent;
		border-left-color: transparent;
		border-bottom-color: ${colorTheme.textAccent};
		border-right-color: ${colorTheme.textAccent};
	}
	&:hover::before,
	&:hover::after {
		width: calc(100% + 1rem);
		height: calc(100% + 1rem);
	}
	/* 中身 */
	&:hover {
		color: ${colorTheme.base};
		background-color: ${colorTheme.textAccent};
	}
`
