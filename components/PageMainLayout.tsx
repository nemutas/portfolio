import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

type PropsType = {
	children: React.ReactNode
	title: string
	description: string
}

export const PageMainLayout: VFC<PropsType> = props => {
	const { children, title, description } = props
	const classes = useStyles()

	return (
		<div className={sContainer}>
			<div className={sTitleContainer}>
				<Typography className={classes.title} variant="h3" component="h1">
					{title}
				</Typography>
				<Typography className={classes.desc}>{description}</Typography>
			</div>
			<div className={sMainContainer}>{children}</div>
		</div>
	)
}

const sContainer = css`
	display: grid;
	flex-direction: row;
	grid-template-rows: 90px 1fr;
`

const sMainContainer = css`
	/* background-color: rgba(0, 0, 0, 0.5); */
`

// ----------------------------
// title

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			padding: theme.spacing(0, 5)
		},
		desc: {
			whiteSpace: 'pre-line'
		}
	})
)

const sTitleContainer = css`
	display: grid;
	grid-template-columns: auto 1fr 300px;
	grid-template-rows: 90px;
	align-items: center;
`
