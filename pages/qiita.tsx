import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { PageLayout } from '../components/PageLayout';
import { QiitaPosts } from '../components/qiita/QiitaPosts';
import { pageSummary } from '../datas/pageSummary';
import { fetchQiitaPosts } from '../lib/fetch';
import { QiitaPostType, QiitaTagsType } from '../lib/types';
import { BP_XXS } from '../styles/breakPointStyles';

const Qiita: VFC<{ posts: QiitaPostType[]; tags: QiitaTagsType }> = ({ posts, tags }) => {
	const summary = pageSummary.qiita

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

	@media screen and (max-width: ${BP_XXS}) {
		padding: 10px;
	}
`
