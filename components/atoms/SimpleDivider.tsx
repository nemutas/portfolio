import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { createStyles, Divider, makeStyles, Theme } from '@material-ui/core';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	orientation?: 'horizontal' | 'vertical'
	color?: string
	thickness?: number
}

export const SimpleDivider: VFC<PropsType> = props => {
	const colorTheme = useRecoilValue(colorThemeState)
	const { orientation = 'horizontal', color = colorTheme.textSub, thickness = 1 } = props
	const classes = useStyles({ color, thickness })

	return (
		<Divider
			className={orientation === 'horizontal' ? classes.horiozntal : classes.vertical}
			orientation={orientation}
		/>
	)
}

const useStyles = makeStyles<Theme, { color: string; thickness: number }>((theme: Theme) =>
	createStyles({
		horiozntal: {
			backgroundColor: ({ color }) => color,
			height: ({ thickness }) => `${thickness}px`
		},
		vertical: {
			backgroundColor: ({ color }) => color,
			width: ({ thickness }) => `${thickness}px`
		}
	})
)
