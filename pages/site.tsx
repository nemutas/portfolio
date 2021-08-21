import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { PageLayout } from '../components/PageLayout';
import { SiteAbouts } from '../components/siteAbouts/SiteAbouts';
import { pageSummary } from '../datas/pageSummary';

const Site: VFC = () => {
	const summary = pageSummary.site

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				<SiteAbouts />
			</div>
		</PageLayout>
	)
}

export default Site

const sContainer = css`
	width: 100%;
	height: 100%;
	padding: 30px;
`
