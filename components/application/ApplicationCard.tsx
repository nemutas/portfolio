import Image from 'next/image';
import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Avatar, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ApplicationType } from '../../datas/application';
import { colorThemeState } from '../../lib/store';
import { LinkLayout } from '../atoms/LinkLayout';

export const ApplicationCard: VFC<{ app: ApplicationType }> = ({ app }) => {
	const classes = useStyles()
	const colorTheme = useRecoilValue(colorThemeState)
	const [expandMore, setExpandMore] = useState(false)

	return (
		<div className={sCardContainer(colorTheme.sub)}>
			<LinkLayout href={app.appUrl}>
				<Image className={sImage} src={app.thumnail} alt={`${app.name} thumnail`} layout="fill" />
			</LinkLayout>

			<div className={sSummaryCard}>
				{/* name */}
				<Typography className={classes.name} variant="h6">
					{app.name}
				</Typography>
				{/* Expand more less Button */}
				<div>
					<IconButton
						className={classes.iconButton}
						aria-label="expand"
						onClick={() => setExpandMore(!expandMore)}>
						{expandMore ? (
							<ExpandLessIcon className={classes.expandIcon} />
						) : (
							<ExpandMoreIcon className={classes.expandIcon} />
						)}
					</IconButton>
				</div>
				{/* GitHub Button */}
				<LinkLayout href={app.gitUrl}>
					<IconButton className={classes.iconButton} aria-label="github">
						<GitHubIcon className={classes.githubIcon} />
					</IconButton>
				</LinkLayout>
				{/* Qiita Button */}
				{app.qiitaUrl ? (
					<LinkLayout href={app.qiitaUrl}>
						<IconButton className={classes.iconButton} aria-label="qiita">
							<Avatar className={classes.qiitaIcon} src="/assets/icons/qiita.png" />
						</IconButton>
					</LinkLayout>
				) : (
					<IconButton className={classes.iconButton} aria-label="qiita" disabled>
						<Avatar className={classes.qiitaDisableIcon} src="/assets/icons/qiita.png" />
					</IconButton>
				)}
				{/* Description */}
				{expandMore && (
					<div className={sDescription}>
						<Typography className={classes.desc} variant="body1">
							{app.description}
						</Typography>
					</div>
				)}
			</div>
		</div>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		name: {
			color: '#F2F2F2'
		},
		desc: {
			color: '#F2F2F2',
			whiteSpace: 'pre-line'
		},
		expandIcon: {
			color: '#F2F2F2'
		},
		githubIcon: {
			color: '#F2F2F2'
		},
		qiitaIcon: {
			width: theme.spacing(3),
			height: theme.spacing(3)
		},
		qiitaDisableIcon: {
			width: theme.spacing(3),
			height: theme.spacing(3),
			filter: 'grayscale(100%)'
		},
		iconButton: {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.15)'
			}
		}
	})
)

const sCardContainer = (borderColor: string) => css`
	position: relative;
	width: 640px;
	height: 360px;
	border-radius: 20px 0 20px 0;
	border: 3px solid ${borderColor};
	overflow: hidden;
`

const sImage = css`
	cursor: pointer;
	transition-duration: 0.5s;
	&:hover {
		transform: scale(1.1);
		transition-duration: 0.5s;
	}
`

const sSummaryCard = css`
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 10px;

	display: grid;
	grid-template-columns: auto 1fr auto auto;
	align-items: center;
	grid-gap: 5px;
`

const sDescription = css`
	grid-column-start: 1;
	grid-column-end: 5;
	grid-template-rows: 2;
	grid-template-rows: 3;
`
