import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { ApplicationCard } from '../components/application/ApplicationCard';
import { PageLayout } from '../components/PageLayout';
import { VerticalScrollLayout } from '../components/VerticalScrollLayout';
import { applications } from '../datas/application';
import { pageSummary } from '../datas/pageSummary';

const Application: VFC = () => {
	const summary = pageSummary.application

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				<VerticalScrollLayout>
					<div className={sListContainer}>
						{applications.map((app, i) => (
							<ApplicationCard key={i} app={app} />
						))}
					</div>
				</VerticalScrollLayout>
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
`
