import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { qiitaDummydatas } from '../assets/dummyData';
import { pageSummary } from '../assets/pageSummary';
import { PageLayout } from '../components/PageLayout';
import { QiitaPosts } from '../components/QiitaPosts';
import { fetchQiitaPosts } from '../lib/fetch';
import { QiitaPostType } from '../lib/types';

const Qiita: VFC<{ posts: QiitaPostType[] }> = ({ posts }) => {
	const summary = pageSummary.qiita

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				<QiitaPosts posts={posts} />
			</div>
		</PageLayout>
	)
}

export default Qiita

export const getStaticProps: GetStaticProps = async () => {
	// const posts = await fetchQiitaPosts()
	const posts = qiitaDummydatas

	return {
		props: { posts }
	}
}

// ==============================================
// styles

const sContainer = css`
	width: 100%;
	padding: 30px;
`
