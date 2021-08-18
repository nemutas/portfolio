import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { ApplicationCard } from '../components/application/ApplicationCard';
import { PageLayout } from '../components/PageLayout';
import { applications } from '../datas/application';
import { pageSummary } from '../datas/pageSummary';

const Application: VFC = () => {
	const summary = pageSummary.application

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				<div className={sListContainer}>
					{applications.map((app, i) => (
						<ApplicationCard key={i} app={app} />
					))}
				</div>
			</div>
		</PageLayout>
	)
}

export default Application

const sContainer = css`
	width: 100%;
	height: 100%;
	padding: 30px;
`

const sListContainer = css`
	display: flex;
	flex-wrap: wrap;
	grid-gap: 30px;

	width: 100%;
	height: calc(100vh - 180px);
	overflow-y: auto;
`
