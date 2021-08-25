import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { ColorThemeType } from '../datas/colorTheme';
import { colorThemeState } from '../lib/store';
import { ColorSelectorButton, GitHubButton, QiitaButton, QRButton } from './atoms/CustomIconButton';
import { SimpleDivider } from './atoms/SimpleDivider';
import { GlobalNavigator } from './GlobalNavigator';

type PropsType = {
	setOpenModalNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalNavigator: VFC<PropsType> = ({ setOpenModalNav }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })

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
					<GitHubButton sizePx={30} />
					<QiitaButton sizePx={30} />
					<QRButton sizePx={27} viewBottom={100} />
					<ColorSelectorButton sizePx={24} paletteBottom={100} />
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
		}
	})
)

const sViewContainer = (color: string) => css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100vh - 30px);
	background-color: ${color}E6;
	z-index: 10;
	overflow-y: auto;
`

const sContainer = css`
	position: relative;
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-rows: 1fr auto auto;
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
