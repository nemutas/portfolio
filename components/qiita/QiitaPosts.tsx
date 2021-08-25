import Image from 'next/image';
import Link from 'next/link';
import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { QiitaPostType, QiitaTagsType } from '../../lib/types';
import { BP_MD, BP_XS, sDisplayNone_Width_MD } from '../../styles/breakPointStyles';
import { ContentsSubText, CustomText } from '../atoms/CustomText';
import { SimpleDivider } from '../atoms/SimpleDivider';
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
			{/* column 1 */}
			<div
				className={css`
					${sDisplayNone_Width_MD}
				`}>
				<QiitaTagFilter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
			</div>
			{/* column 2 */}
			<div
				className={css`
					${sDisplayNone_Width_MD}
				`}>
				<SimpleDivider orientation="vertical" />
			</div>
			{/* column 3 */}
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

// ==============================================

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
					<ContentsSubText fontSizeRem={0.9}>
						{new Date(post.created_at).toLocaleString()}
					</ContentsSubText>
					<div className={sAvatarContainer}>
						<Image
							className={sAvatar}
							loader={() => post.user.profile_image_url}
							src={`avatar-${post.id}.png`}
							width={25}
							height={25}
						/>
						<ContentsSubText fontSizeRem={0.9}>{`@${post.user.id}`}</ContentsSubText>
					</div>
				</div>
			</div>
			{/* row 2 col 1 */}
			<div className={sIconGridContainer}>
				<div className={isHover ? sHoveredIconContainer(colorTheme) : sIconContainer(colorTheme)}>
					<CustomText fontSizeRem={1.1}>LGTM</CustomText>
					<CustomText fontSizeRem={1.1}>{post.likes_count}</CustomText>
				</div>
			</div>
			{/* row 2 col 2 */}
			<div>
				<CustomText color={colorTheme.textMain} fontSizeRem={1.3}>
					{post.title}
				</CustomText>
			</div>
			{/* row 3 col 2 */}
			<div className={sTagContainer}>
				<LocalOfferIcon className={classes.tagIcon} />
				<div className={sTagNameContainer}>
					{post.tags.map((tag, i) => (
						<ContentsSubText key={i} fontSizeRem={0.9}>
							{tag.name}
						</ContentsSubText>
					))}
				</div>
			</div>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		tagIcon: {
			color: ({ colorTheme }) => colorTheme.textMain
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

	@media (max-width: ${BP_MD}) {
		grid-template-columns: 1fr;
	}
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

const sIconContainer = (colorTheme: ColorThemeType) => css`
	display: grid;
	flex-direction: row;
	justify-items: center;
	align-items: center;
	padding: 10px;
	padding-top: 13px;
	height: 70px;
	width: 70px;
	border-radius: 9999px;
	border: 2px solid ${colorTheme.textAccent};
	color: ${colorTheme.textAccent};

	@media screen and (max-width: ${BP_XS}) {
		height: 60px;
		width: 60px;
		padding-top: 10px;
	}
`

const sHoveredIconContainer = (colorTheme: ColorThemeType) => css`
	${sIconContainer(colorTheme)}
	background-color: ${colorTheme.textAccent};
	color: ${colorTheme.base};
`

// ----------------------------------------------
// tag

const sTagContainer = css`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 10px;
	align-items: center;
`

const sTagNameContainer = css`
	display: flex;
	align-items: center;
	column-gap: 10px;
	row-gap: 10px;
	flex-wrap: wrap;
`
