import React, { VFC } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

type PropsType = {
	text: string
}

export const ContentText: VFC<PropsType> = ({ text }) => {
	const classes = useStyles()

	return (
		<Typography className={classes.desc} variant="body2">
			{text}
		</Typography>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		desc: {
			whiteSpace: 'pre-line'
		}
	})
)
