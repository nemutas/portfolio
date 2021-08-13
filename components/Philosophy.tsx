import React, { memo, VFC } from 'react';
import { css } from '@emotion/css';
import { Divider } from '@material-ui/core';
import { philosophies, PhilosophyType } from '../assets/philosophy';
import { ContentText } from './atoms/ContentText';
import { ContentTitle } from './atoms/ContentTitle';
import { DesignListItem2 } from './molecules/DesignListItem2';

export const Philosophy: VFC = memo(() => {
	return (
		<>
			<Divider />
			{philosophies.map((philosophy, i) => (
				<div key={i}>
					<div className={sItemSpan}></div>
					<PhilosophyItem philosophy={philosophy} />
				</div>
			))}
		</>
	)
})

const PhilosophyItem: VFC<{ philosophy: PhilosophyType }> = ({ philosophy }) => {
	return (
		<DesignListItem2
			title={<ContentTitle text={philosophy.title} />}
			contents={<ContentText text={philosophy.description} />}
		/>
	)
}

// ==============================================
// styles

const sItemSpan = css`
	margin-top: 20px;
`
