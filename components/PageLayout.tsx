import Head from 'next/head';
import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';
import { BP_SM, sDisplayNone_Width_SM } from '../styles/breakPointStyles';
import { Footer } from './footer/Footer';
import { FrameLines } from './FrameLines';
import { GlobalNavigator } from './GlobalNavigator';
import { Logo } from './Logo';
import { ModalNavigator } from './ModalNavigator';
import { PageMainLayout } from './PageMainLayout';

type PropsType = {
	children: React.ReactNode
	title?: string
	description?: string
}

export const PageLayout: VFC<PropsType> = props => {
	const { children, title = 'Next.js Page', description = '' } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })
	const [openModalNav, setOpenModalNav] = useState(false)

	return (
		<div>
			<Head>
				<title>{`Portfolio｜${title}`}</title>
			</Head>

			<div className={sContainer(colorTheme)}>
				<header className={sHeaderContainer}>
					<div>
						<Logo />
					</div>
					<div className={sNavigator}>
						<GlobalNavigator />
					</div>
				</header>

				<main className={sMainContainer}>
					<div>
						<FrameLines />
						<div className={sLineHT(colorTheme)}></div>
						<div className={sLineVT(colorTheme)}></div>
						<div className={sLineVB(colorTheme)}></div>
					</div>

					<PageMainLayout title={title} description={description}>
						{children}
					</PageMainLayout>
				</main>

				{openModalNav ? (
					<ModalNavigator setOpenModalNav={setOpenModalNav} />
				) : (
					<div className={sModalNavButtonContainer}>
						<IconButton aria-label="modal-navigator" onClick={() => setOpenModalNav(true)}>
							<MenuIcon className={classes.menu} />
						</IconButton>
					</div>
				)}

				<footer className={sFooterContainer}>
					<Footer />
				</footer>
			</div>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		menu: {
			color: ({ colorTheme }) => colorTheme.textAccent,
			fontSize: '2rem'
		}
	})
)

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
	grid-template-rows: 100px 1fr;

	${sDisplayNone_Width_SM}
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

	@media (max-width: ${BP_SM}) {
		left: 0;
	}
`

const sLineVT = (theme: ColorThemeType) => css`
	position: absolute;
	top: 0;
	left: 300px;
	width: 3px;
	height: 300px;
	background-color: ${theme.main};

	${sDisplayNone_Width_SM}
`

const sLineVB = (theme: ColorThemeType) => css`
	position: absolute;
	bottom: 0;
	right: 60px;
	width: 3px;
	height: 300px;
	background-color: ${theme.main};

	${sDisplayNone_Width_SM}
`

// ------------------------------------
// footer

const sFooterContainer = css`
	width: 60px;
	display: flex;
	align-items: flex-end;
	justify-content: center;

	${sDisplayNone_Width_SM}
`

// ------------------------------------
// Modal Navigator

const sModalNavButtonContainer = css`
	position: absolute;
	top: 0;
	right: 0;

	@media (min-width: ${BP_SM}) {
		display: none;
	}
`
