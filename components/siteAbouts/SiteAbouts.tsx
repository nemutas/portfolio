import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { siteAbouts } from '../../datas/siteAbouts';
import { ContentsText, ContentsTitle } from '../atoms/CustomText';
import { DesignListItem2 } from '../molecules/DesignListItem2';
import { VerticalScrollLayout } from '../VerticalScrollLayout';

export const SiteAbouts: VFC = () => {
	return (
		<VerticalScrollLayout>
			{siteAbouts.map((abouts, i) => (
				<div key={i}>
					<div className={i === 0 ? sDummy : sItemSpan}></div>
					<DesignListItem2
						title={<ContentsTitle>{abouts.title}</ContentsTitle>}
						contents={<ContentsText>{abouts.description}</ContentsText>}
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
