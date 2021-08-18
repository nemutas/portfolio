import Head from 'next/head';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';
import { FrameLines } from './FrameLines';

type PropsType = {
	children: React.ReactNode
	title?: string
}

export const Layout: VFC<PropsType> = props => {
	const { children, title = 'Next.js Page' } = props
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<main className={sContainer(colorTheme)}>
				<FrameLines />
				{children}
			</main>
		</div>
	)
}

const sContainer = (theme: ColorThemeType) => css`
	position: relative;
	width: 100%;
	min-height: 100vh;
	border: 15px solid ${theme.main};
	background-color: ${theme.base};
`
