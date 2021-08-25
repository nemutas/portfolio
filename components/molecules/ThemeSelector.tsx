import React, { VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import { colorThemes } from '../../datas/colorTheme';
import { colorThemeState, setColorThemeToLocalStorage } from '../../lib/store';
import { ColorThemeIcon } from '../atoms/ColorThemeIcon';

type PropsType = {
	setOpenThemeSelector: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeSelector: VFC<PropsType> = ({ setOpenThemeSelector }) => {
	const setColorTheme = useSetRecoilState(colorThemeState)
	const classes = useStyles()

	const clickHandler = (themeName: string) => {
		setColorTheme(colorThemes[themeName])
		setColorThemeToLocalStorage(themeName)
		setOpenThemeSelector(false)
	}

	return (
		<div className={sContainer}>
			{Object.keys(colorThemes).map(themeName => (
				<div key={themeName}>
					<IconButton
						className={classes.iconButton}
						aria-label="color-theme"
						onClick={() => clickHandler(themeName)}>
						<ColorThemeIcon colorTheme={colorThemes[themeName]} size={20} />
					</IconButton>
				</div>
			))}
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		iconButton: {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.15)'
			}
		}
	})
)

const sContainer = css`
	display: flex;
	justify-content: center;
	column-gap: 10px;
	padding: 10px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.7);
`
