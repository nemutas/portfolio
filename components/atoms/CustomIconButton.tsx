import Image from 'next/image';
import React, { useState, VFC } from 'react';
import { ImExit } from 'react-icons/im';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { Avatar, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { ThemeSelector } from '../molecules/ThemeSelector';
import { ColorThemeIcon } from './ColorThemeIcon';
import { LinkLayout } from './LinkLayout';

// ==============================================

type GitHubButtonPropsType = {
	href?: string
	sizePx?: number
}

export const GitHubButton: VFC<GitHubButtonPropsType> = props => {
	const { href = 'https://github.com/nemutas', sizePx = 20 } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ size: sizePx, colorTheme })

	return (
		<LinkLayout href={href} isOuterLink>
			<IconButton className={classes.iconButton} aria-label="github">
				<GitHubIcon className={classes.githubIcon} />
			</IconButton>
		</LinkLayout>
	)
}

// ==============================================

type QiitaButtonPropsType = {
	href?: string
	sizePx?: number
	disabled?: boolean
}

export const QiitaButton: VFC<QiitaButtonPropsType> = props => {
	const { href = 'https://qiita.com/nemutas', sizePx = 20, disabled = false } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ size: sizePx, colorTheme })

	return (
		<>
			{disabled ? (
				<IconButton className={classes.iconButton} aria-label="qiita" disabled>
					<Avatar className={classes.qiitaDisableIcon} src="/assets/icons/qiita.png" />
				</IconButton>
			) : (
				<LinkLayout href={href} isOuterLink>
					<IconButton className={classes.iconButton} aria-label="qiita">
						<Avatar className={classes.qiitaIcon} src="/assets/icons/qiita.png" />
					</IconButton>
				</LinkLayout>
			)}
		</>
	)
}

// ==============================================

type QRButtonPropsType = {
	sizePx?: number
	viewTop?: number
	viewBottom?: number
	viewLeft?: number
	viewRight?: number
}

export const QRButton: VFC<QRButtonPropsType> = props => {
	const { sizePx = 20, viewTop, viewBottom, viewLeft, viewRight } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ size: sizePx, colorTheme })
	const [open, setOpen] = useState(false)

	return (
		<>
			<IconButton className={classes.iconButton} aria-label="qr" onClick={() => setOpen(!open)}>
				<Image src="/assets/icons/qr.png" width={sizePx} height={sizePx} />
			</IconButton>
			{open && (
				<div
					className={cx(
						sAbsolute,
						{
							[sTop(viewTop as number)]: Number.isInteger(viewTop)
						},
						{
							[sBottom(viewBottom as number)]: Number.isInteger(viewBottom)
						},
						{
							[sLeft(viewLeft as number)]: Number.isInteger(viewLeft)
						},
						{
							[sRight(viewRight as number)]: Number.isInteger(viewRight)
						}
					)}>
					<QRViewer />
				</div>
			)}
		</>
	)
}

const QRViewer: VFC = () => {
	return (
		<div className={sViewContainer}>
			<Image src="/assets/images/qr.png" width={200} height={200} />
		</div>
	)
}

// ==============================================

type ColorSelectorButtonPropsType = {
	sizePx?: number
	paletteTop?: number
	paletteBottom?: number
	paletteLeft?: number
	paletteRight?: number
}

export const ColorSelectorButton: VFC<ColorSelectorButtonPropsType> = props => {
	const { sizePx = 20, paletteTop, paletteBottom, paletteLeft, paletteRight } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ size: sizePx, colorTheme })
	const [openThemeSelector, setOpenThemeSelector] = useState(false)

	return (
		<>
			<IconButton
				className={classes.iconButton}
				aria-label="color-theme"
				onClick={() => setOpenThemeSelector(!openThemeSelector)}>
				<ColorThemeIcon colorTheme={colorTheme} size={sizePx} />
			</IconButton>
			{openThemeSelector && (
				<div
					className={cx(
						sAbsolute,
						{
							[sTop(paletteTop as number)]: Number.isInteger(paletteTop)
						},
						{
							[sBottom(paletteBottom as number)]: Number.isInteger(paletteBottom)
						},
						{
							[sLeft(paletteLeft as number)]: Number.isInteger(paletteLeft)
						},
						{
							[sRight(paletteRight as number)]: Number.isInteger(paletteRight)
						}
					)}>
					<ThemeSelector setOpenThemeSelector={setOpenThemeSelector} />
				</div>
			)}
		</>
	)
}

// ==============================================

type ToHomeButtonPropsType = {
	sizePx?: number
}

export const ToHomeButton: VFC<ToHomeButtonPropsType> = props => {
	const { sizePx = 20 } = props
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ size: sizePx, colorTheme })

	return (
		<LinkLayout href="/">
			<IconButton className={classes.iconButton} aria-label="home">
				<ImExit className={sToHome(sizePx)} />
			</IconButton>
		</LinkLayout>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { size: number; colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		close: {
			color: ({ colorTheme }) => colorTheme.textAccent,
			fontSize: ({ size }) => `${size}rem`
		},
		githubIcon: {
			fontSize: ({ size }) => `${size}px`
		},
		qiitaIcon: {
			width: ({ size }) => `${size}px`,
			height: ({ size }) => `${size}px`
		},
		qiitaDisableIcon: {
			width: ({ size }) => `${size}px`,
			height: ({ size }) => `${size}px`,
			filter: 'grayscale(100%)'
		},
		qrIcon: {
			width: ({ size }) => `${size}px`,
			height: ({ size }) => `${size}px`
		},
		iconButton: {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.15)'
			}
		}
	})
)

const sAbsolute = css`
	position: absolute;
`

const sTop = (top: number) => css`
	top: ${top}px;
`

const sBottom = (bottom: number) => css`
	bottom: ${bottom}px;
`

const sLeft = (left: number) => css`
	left: ${left}px;
`

const sRight = (right: number) => css`
	right: ${right}px;
`

const sViewContainer = css`
	display: flex;
	width: 260px;
	height: 260px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.7);
`

const sToHome = (size: number) => css`
	width: ${size}px;
	height: ${size}px;
	transform: scale(-1, 1);
`
