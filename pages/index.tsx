import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { LinkLayout } from '../components/atoms/LinkLayout';
import { Layout } from '../components/Layout';
import { colorThemeState } from '../lib/store';

const Home: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ textColor: colorTheme.textMain })

	return (
		<Layout title="Home">
			<LinkLayout href="/profile">
				<Button variant="contained" color="primary">
					Known Me
				</Button>
			</LinkLayout>
			<Typography className={classes.text}>
				Hello<span className={sTextAccent(colorTheme.textAccent)}>.</span>
			</Typography>
			<Typography className={classes.text}>
				My name is <span className={sTextAccent(colorTheme.textAccent)}>Inoue Hiromichi</span>
			</Typography>
			<Typography className={classes.text}>Web Front-end Engineer</Typography>
		</Layout>
	)
}

export default Home

const useStyles = makeStyles<Theme, { textColor: string }>((theme: Theme) =>
	createStyles({
		text: {
			color: ({ textColor }) => textColor,
			fontSize: '4rem'
		}
	})
)

const sTextAccent = (color: string) => css`
	color: ${color};
	/* font-size: 4rem; */
`
