import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { fetchQiitaPosts } from '../lib/fetch';
import { colorThemeState } from '../lib/store';
import { QiitaPostType } from '../lib/types';
import { SubText } from './atoms/SubText';
import { DesignListItem3 } from './molecules/DesignListItem3';

type PropsType = {
	posts: QiitaPostType[]
}

// const fetcher = (url: string) =>
// 	axios
// 		.get<QiitaPostType[]>(url, {
// 			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN!}` }
// 		})
// 		.then(res => res.data)

const fetcher = () => fetchQiitaPosts()

export const QiitaPosts: VFC<PropsType> = ({ posts }) => {
	// const { data, error } = useSWR('fetch-qiita-posts', fetcher, {
	// 	initialData: posts,
	// 	revalidateOnMount: true
	// })

	// if (error || !data) {
	// 	return <>記事を取得出来ませんでした</>
	// }

	return (
		<div>
			{posts.map(post => (
				<DesignListItem3 key={post.id} contents={<QiitaPostLink post={post} />} />
			))}
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
	const classes = useStyles({ textColor: colorTheme.base })

	return (
		<div className={sGridContainer}>
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
				<div className={sIconContainer(colorTheme.textAccent)}>
					<Typography className={classes.LGTM} variant="button">
						LGTM
					</Typography>
					<Typography className={classes.LGTM} variant="button">
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
	background-color: ${color};
`

// ----------------------------------------------
// tag

const sTagContainer = css`
	display: flex;
	align-items: center;
	grid-gap: 10px;
`

const useStyles = makeStyles<Theme, { textColor: string }>((theme: Theme) =>
	createStyles({
		LGTM: {
			color: ({ textColor }) => textColor,
			lineHeight: 0,
			fontSize: '1.1rem'
		}
	})
)
