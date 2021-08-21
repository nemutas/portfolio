import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { siteAbouts } from '../../datas/siteAbouts';
import { ContentText } from '../atoms/ContentText';
import { ContentTitle } from '../atoms/ContentTitle';
import { DesignListItem2 } from '../molecules/DesignListItem2';
import { VerticalScrollLayout } from '../VerticalScrollLayout';

export const SiteAbouts: VFC = () => {
	return (
		<VerticalScrollLayout>
			{siteAbouts.map((abouts, i) => (
				<div key={i}>
					<div className={i === 0 ? sDummy : sItemSpan}></div>
					<DesignListItem2
						title={<ContentTitle text={abouts.title} />}
						contents={<ContentText text={abouts.description} />}
					/>
				</div>
			))}
		</VerticalScrollLayout>
	)
}

const sItemSpan = css`
	margin-top: 20px;
`

const sDummy = css``
