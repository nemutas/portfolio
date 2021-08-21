import Head from 'next/head';
import React, { useEffect, useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';
import { LinkItem } from './atoms/LinkItem';
import { FrameLines } from './FrameLines';
import { PageMainLayout } from './PageMainLayout';

type PropsType = {
	children: React.ReactNode
	title?: string
	description?: string
}

export const PageLayout: VFC<PropsType> = props => {
	const { children, title = 'Next.js Page', description = '' } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const [activeName, setActiveName] = useState('')
	const linkItems = ['Profile', 'Qiita', 'Application', 'Site Abouts']

	useEffect(() => {
		const pageName = location.pathname.substring(1)

		let linkName = ''
		if (pageName === 'profile') linkName = 'Profile'
		else if (pageName === 'qiita') linkName = 'Qiita'
		else if (pageName === 'application') linkName = 'Application'
		else if (pageName === 'site') linkName = 'Site Abouts'

		setActiveName(linkName)
	}, [])

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>

			<div className={sContainer(colorTheme)}>
				<header className={sHeaderContainer}>
					<div>Logo</div>
					<nav className={sNavigator}>
						{linkItems.map(item => (
							<LinkItem
								key={item}
								href={item === 'Site Abouts' ? '/site' : `/${item.toLowerCase()}`}
								text={item}
								marginTop={item === 'Profile' ? 0 : 40}
								isActive={activeName === item}
								// clickHandler={() => setActiveName(item)}
							/>
						))}
					</nav>
				</header>

				<main className={sMainContainer}>
					<FrameLines />
					<div className={sLineHT(colorTheme)}></div>
					<div className={sLineVT(colorTheme)}></div>
					<div className={sLineVB(colorTheme)}></div>

					<PageMainLayout title={title} description={description}>
						{children}
					</PageMainLayout>
				</main>

				<footer className={sFooterContainer}></footer>
			</div>
		</div>
	)
}

// ==============================================
// styles

const sContainer = (theme: ColorThemeType) => css`
	position: relative;
	display: grid;
	grid-template-columns: auto 1fr auto;
	width: 100%;
	height: 100vh;
	border: 15px solid ${theme.main};
	background-color: ${theme.base};
`

// ------------------------------------
// header

const sHeaderContainer = css`
	width: 300px;
	display: grid;
	flex-direction: row;
	grid-template-rows: 100px 1fr;
`

const sNavigator = css`
	padding: 20px;
`

// ------------------------------------
// main

const sMainContainer = css`
	height: 100%;
`

const sLineHT = (theme: ColorThemeType) => css`
	position: absolute;
	top: 90px;
	left: 250px;
	width: 300px;
	height: 3px;
	background-color: ${theme.main};
`

const sLineVT = (theme: ColorThemeType) => css`
	position: absolute;
	top: 0;
	left: 300px;
	width: 3px;
	height: 300px;
	background-color: ${theme.main};
`

const sLineVB = (theme: ColorThemeType) => css`
	position: absolute;
	bottom: 0;
	right: 60px;
	width: 3px;
	height: 300px;
	background-color: ${theme.main};
`

// ------------------------------------
// footer

const sFooterContainer = css`
	width: 60px;
`
