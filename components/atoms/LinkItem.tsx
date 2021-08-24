import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { colorThemeState } from '../../lib/store';
import { CustomText } from './CustomText';

type PropsType = {
	href: string
	text: string
	subText?: string
	marginTop?: number
	isActive?: boolean
	clickHandler?: () => void
}

export const LinkItem: VFC<PropsType> = props => {
	const { href, text, subText, marginTop = 0, isActive = false, clickHandler = () => {} } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const textColor = isActive ? colorTheme.textAccent : colorTheme.textMain

	return (
		<div className={sLinkItemContainer(marginTop)}>
			<Link href={href}>
				<a className={sLinkItem(textColor)} onClick={clickHandler}>
					<div className={sTextContainer}>
						{subText && (
							<CustomText align="left" color={textColor} fontSizeRem={0.8}>
								{subText}
							</CustomText>
						)}
						<CustomText color={textColor} fontSizeRem={2.2}>
							{text}
						</CustomText>
					</div>
				</a>
			</Link>
		</div>
	)
}

// ==============================================
// styles

const sLinkItemContainer = (mt: number) => css`
	margin-top: ${mt}px;
`

const sLinkItem = (lineColor: string) => css`
	position: relative;
	display: inline-block;
	text-decoration: none;
	&::after {
		position: absolute;
		bottom: -4px;
		left: 0;
		content: '';
		width: 100%;
		height: 2px;
		background: ${lineColor};
		transform: scale(0, 1);
		transform-origin: right top;
		transition: transform 0.3s;
	}
	&:hover::after {
		transform-origin: left top;
		transform: scale(1, 1);
	}
`

const sTextContainer = css`
	display: grid;
	flex-direction: row;
	width: 100%;
`
