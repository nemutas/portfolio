import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { qiitaDummydatas } from '../assets/dummyData';
import { pageSummary } from '../assets/pageSummary';
import { PageLayout } from '../components/PageLayout';
import { QiitaPosts } from '../components/qiita/QiitaPosts';
import { fetchQiitaPosts } from '../lib/fetch';
import { QiitaPostType, QiitaTagsType } from '../lib/types';

// const fetcher = (url: string) =>
// 	axios
// 		.get<QiitaPostType[]>(url, {
// 			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN!}` }
// 		})
// 		.then(res => res.data)

// const fetcher = () => fetchQiitaPosts()

const Qiita: VFC<{ posts: QiitaPostType[]; tags: QiitaTagsType }> = ({ posts, tags }) => {
	const summary = pageSummary.qiita

	// const { data, error } = useSWR('fetch-qiita-posts', fetcher, {
	// 	initialData: posts,
	// 	revalidateOnMount: true
	// })

	// if (error || !data) {
	// 	return <>記事を取得出来ませんでした</>
	// }

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				<QiitaPosts posts={posts} tags={tags} />
			</div>
		</PageLayout>
	)
}

export default Qiita

export const getStaticProps: GetStaticProps = async () => {
	const { posts, tags } = await fetchQiitaPosts()

	return {
		props: { posts, tags }
	}
}

// ==============================================
// styles

const sContainer = css`
	width: 100%;
	height: 100%;
	padding: 30px;
`
