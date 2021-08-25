import Image from 'next/image';
import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ApplicationType } from '../../datas/application';
import { colorThemeState } from '../../lib/store';
import { GitHubButton, QiitaButton } from '../atoms/CustomIconButton';
import { CustomText } from '../atoms/CustomText';
import { LinkLayout } from '../atoms/LinkLayout';

export const ApplicationCard: VFC<{ app: ApplicationType }> = ({ app }) => {
	const classes = useStyles()
	const colorTheme = useRecoilValue(colorThemeState)
	const [expandMore, setExpandMore] = useState(false)

	return (
		<div className={sCardContainer(colorTheme.sub)}>
			<LinkLayout href={app.appUrl} isOuterLink>
				<Image className={sImage} src={app.thumnail} alt={`${app.name} thumnail`} layout="fill" />
			</LinkLayout>

			<div className={sSummaryCard}>
				{/* name */}
				<CustomText color="#F2F2F2" fontSizeRem={1.3}>
					{app.name}
				</CustomText>
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
				<GitHubButton href={app.gitUrl} />
				{/* Qiita Button */}
				<QiitaButton href={app.qiitaUrl} disabled={!app.qiitaUrl} />
				{/* Description */}
				{expandMore && (
					<div className={sDescription}>
						<CustomText color="#F2F2F2">{app.description}</CustomText>
					</div>
				)}
			</div>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		expandIcon: {
			color: '#F2F2F2'
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
	min-width: 300px;
	max-width: 640px;
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
