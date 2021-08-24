import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Avatar, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';
import { ColorThemeIcon } from './atoms/ColorThemeIcon';
import { LinkLayout } from './atoms/LinkLayout';
import { SimpleDivider } from './atoms/SimpleDivider';
import { ThemeSelector } from './footer/ThemeSelector';
import { GlobalNavigator } from './GlobalNavigator';

type PropsType = {
	setOpenModalNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalNavigator: VFC<PropsType> = ({ setOpenModalNav }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })
	const [openThemeSelector, setOpenThemeSelector] = useState(false)

	return (
		<div className={sViewContainer(colorTheme.base)}>
			<div className={sContainer}>
				<div className={sCloseButton}>
					<IconButton aria-label="close" onClick={() => setOpenModalNav(false)}>
						<CloseIcon className={classes.close} />
					</IconButton>
				</div>
				{/* row 1 */}
				<div className={sContentsContainer}>
					<GlobalNavigator />
				</div>
				{/* row 2 */}
				<SimpleDivider color={colorTheme.sub} thickness={5} />
				{/* row 3 footer */}
				<div className={sFooterContainer}>
					<LinkLayout href="https://github.com/nemutas" isOuterLink>
						<IconButton className={classes.iconButton} aria-label="github">
							<GitHubIcon className={classes.githubIcon} />
						</IconButton>
					</LinkLayout>
					<LinkLayout href="https://qiita.com/nemutas" isOuterLink>
						<IconButton className={classes.iconButton} aria-label="qiita">
							<Avatar className={classes.qiitaIcon} src="/assets/icons/qiita.png" />
						</IconButton>
					</LinkLayout>
					<IconButton
						className={classes.iconButton}
						aria-label="color-theme"
						onClick={() => setOpenThemeSelector(!openThemeSelector)}>
						<ColorThemeIcon colorTheme={colorTheme} size={24} />
					</IconButton>
					{openThemeSelector && (
						<div className={sThemeSelector}>
							<ThemeSelector setOpenThemeSelector={setOpenThemeSelector} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		close: {
			color: ({ colorTheme }) => colorTheme.textAccent,
			fontSize: '2rem'
		},
		githubIcon: {
			fontSize: '30px'
		},
		qiitaIcon: {
			width: theme.spacing(4),
			height: theme.spacing(4)
		},
		iconButton: {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.15)'
			}
		}
	})
)

const sViewContainer = (color: string) => css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 30px);
	/* background-color: rgba(0, 0, 0, 0.8); */
	background-color: ${color}E6;
	z-index: 10;
	overflow-y: auto;
`

const sContainer = css`
	position: relative;
	width: 100%;
	height: 100%;
	/* padding: 30px; */

	display: grid;
	grid-template-rows: 1fr auto auto;
	/* row-gap: 30px; */
`

const sCloseButton = css`
	position: absolute;
	top: 0;
	right: 0;
`

const sContentsContainer = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

// ----------------------------------------------
// footer

const sFooterContainer = css`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;

	background-color: rgba(0, 0, 0, 0.7);
	padding: 20px;
`

const sThemeSelector = css`
	position: absolute;
	bottom: 100px;
`
