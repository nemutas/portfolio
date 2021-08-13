import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	text: string
}

export const SubText: VFC<PropsType> = ({ text }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ textColor: colorTheme.textSub })

	return (
		<Typography className={classes.text} variant="body1">
			{text}
		</Typography>
	)
}

const useStyles = makeStyles<Theme, { textColor: string }>((theme: Theme) =>
	createStyles({
		text: {
			color: ({ textColor }) => textColor,
			fontSize: '0.9rem'
		}
	})
)
