import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Avatar, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { ColorThemeIcon } from '../atoms/ColorThemeIcon';
import { LinkLayout } from '../atoms/LinkLayout';
import { ThemeSelector } from './ThemeSelector';

export const Footer: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)
	const [openThemeSelector, setOpenThemeSelector] = useState(false)
	const classes = useStyles()

	return (
		<div className={sFooterIconContainer(colorTheme)}>
			<LinkLayout href="https://github.com/nemutas" isOuterLink>
				<IconButton className={classes.iconButton} aria-label="github">
					<GitHubIcon />
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
				<ColorThemeIcon colorTheme={colorTheme} size={20} />
			</IconButton>
			{openThemeSelector && (
				<div className={sThemeSelector}>
					<ThemeSelector setOpenThemeSelector={setOpenThemeSelector} />
				</div>
			)}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		qiitaIcon: {
			width: theme.spacing(3),
			height: theme.spacing(3)
		},
		iconButton: {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.15)'
			}
		}
	})
)

const sFooterIconContainer = (theme: ColorThemeType) => css`
	position: relative;
	width: 100%;
	height: 300px;
	background: linear-gradient(transparent, 40%, ${theme.main});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	row-gap: 10px;
	padding-bottom: 10px;
`

const sThemeSelector = css`
	position: absolute;
	bottom: 0;
	right: 65px;
`
