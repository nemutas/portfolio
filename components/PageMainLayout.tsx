import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { colorThemeState } from '../lib/store';
import { ContentsText, CustomText } from './atoms/CustomText';

type PropsType = {
	children: React.ReactNode
	title: string
	description: string
}

export const PageMainLayout: VFC<PropsType> = props => {
	const { children, title, description } = props
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div className={sContainer}>
			<div className={sTitleContainer}>
				<div className={sTitle}>
					<CustomText component="h1" color={colorTheme.textMain} fontSizeRem={3}>
						{title}
					</CustomText>
				</div>
				<ContentsText>{description}</ContentsText>
			</div>
			<div className={sMainContainer}>{children}</div>
		</div>
	)
}

const sContainer = css`
	display: grid;
	grid-template-rows: 90px 1fr;
	height: 100%;
`

const sMainContainer = css`
	/* background-color: rgba(0, 0, 0, 0.5); */
`

// ----------------------------
// title

const sTitleContainer = css`
	display: grid;
	grid-template-columns: auto 1fr 300px;
	grid-template-rows: 90px;
	align-items: center;
	column-gap: 1.5rem;
`

const sTitle = css`
	margin-left: 1.5rem;
`
