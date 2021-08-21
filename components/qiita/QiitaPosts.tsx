import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, Divider, makeStyles, Theme, Typography } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { QiitaPostType, QiitaTagsType } from '../../lib/types';
import { SubText } from '../atoms/SubText';
import { DesignListItem3 } from '../molecules/DesignListItem3';
import { VerticalScrollLayout } from '../VerticalScrollLayout';
import { QiitaTagFilter } from './QiitaTagFilter';

type PropsType = {
	posts: QiitaPostType[]
	tags: QiitaTagsType
}

export const QiitaPosts: VFC<PropsType> = ({ posts, tags }) => {
	const [selectedTags, setSelectedTags] = useState(tags)
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })

	/** 対象の記事に、選択しているTagがあるか */
	const selectedPost = (post: QiitaPostType) => {
		let result = false
		post.tags.forEach(tag => {
			if (selectedTags[tag.name].selected) {
				result = true
				return
			}
		})
		return result
	}

	return (
		<div className={sContainer}>
			<div>
				<QiitaTagFilter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
			</div>
			<Divider orientation="vertical" />
			<VerticalScrollLayout>
				{posts.map(post => (
					<div key={post.id}>
						{selectedPost(post) && <DesignListItem3 contents={<QiitaPostLink post={post} />} />}
					</div>
				))}
			</VerticalScrollLayout>
		</div>
	)
}

const QiitaPostLink: VFC<{ post: QiitaPostType }> = ({ post }) => {
	return (
		<Link href={post.url}>
			<a target="_blank" rel="noopener noreferrer">
				<QiitaPostContents post={post} />
			</a>
		</Link>
	)
}

const QiitaPostContents: VFC<{ post: QiitaPostType }> = ({ post }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const [isHover, setIsHover] = useState(false)
	const classes = useStyles({ colorTheme })

	return (
		<div
			className={sGridContainer}
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}>
			{/* row 1 */}
			<div className={sMetaGridContainer}>
				<div className={sMetaContainer}>
					<SubText text={new Date(post.created_at).toLocaleString()} />
					<div className={sAvatarContainer}>
						<Image
							className={sAvatar}
							loader={() => post.user.profile_image_url}
							src={`avatar-${post.id}.png`}
							width={25}
							height={25}
						/>
						<SubText text={`@${post.user.id}`} />
					</div>
				</div>
			</div>
			{/* row 2 col 1 */}
			<div className={sIconGridContainer}>
				<div
					className={
						isHover
							? sHoveredIconContainer(colorTheme.textAccent)
							: sIconContainer(colorTheme.textAccent)
					}>
					<Typography className={isHover ? classes.hoveredLGTM : classes.LGTM} variant="button">
						LGTM
					</Typography>
					<Typography className={isHover ? classes.hoveredLGTM : classes.LGTM} variant="button">
						{post.likes_count}
					</Typography>
				</div>
			</div>
			{/* row 2 col 2 */}
			<div>
				<Typography variant="h6">{post.title}</Typography>
			</div>
			{/* row 3 col 2 */}
			<div className={sTagContainer}>
				<LocalOfferIcon />
				{post.tags.map((tag, i) => (
					<SubText key={i} text={tag.name} />
				))}
			</div>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		LGTM: {
			color: ({ colorTheme }) => colorTheme.textAccent,
			lineHeight: 0,
			fontSize: '1.1rem'
		},
		hoveredLGTM: {
			color: ({ colorTheme }) => colorTheme.base,
			lineHeight: 0,
			fontSize: '1.1rem'
		},
		divider: {
			marginBottom: theme.spacing(2)
		}
	})
)

// ----------------------------------------------

const sContainer = css`
	display: grid;
	grid-template-columns: auto auto 1fr;
	column-gap: 20px;
	width: 100%;
	height: calc(100vh - 180px);
`

// ----------------------------------------------
// frame grid

const sGridContainer = css`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto auto auto;
	grid-gap: 10px;
`

const sMetaGridContainer = css`
	grid-column-start: 1;
	grid-column-end: 3;
`

const sIconGridContainer = css`
	grid-row-start: 2;
	grid-row-end: 4;
`

// ----------------------------------------------
// meta

const sMetaContainer = css`
	display: flex;
	align-items: center;
	position: relative;
`

const sAvatarContainer = css`
	display: flex;
	align-items: center;
	grid-gap: 5px;
	margin-left: auto;
`

const sAvatar = css`
	border-radius: 9999px;
`

// ----------------------------------------------
// LGTM

const sIconContainer = (color: string) => css`
	display: grid;
	flex-direction: row;
	justify-items: center;
	align-items: center;
	padding: 10px;
	padding-top: 13px;
	height: 70px;
	width: 70px;
	border-radius: 9999px;
	border: 2px solid ${color};
`

const sHoveredIconContainer = (color: string) => css`
	${sIconContainer(color)}
	background-color: ${color};
`

// ----------------------------------------------
// tag

const sTagContainer = css`
	display: flex;
	align-items: center;
	grid-gap: 10px;
`
