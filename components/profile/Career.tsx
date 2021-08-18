import React, { memo, VFC } from 'react';
import { css } from '@emotion/css';
import { Divider, Typography } from '@material-ui/core';
import { careers, CareerType } from '../../datas/career';
import { ContentText } from '../atoms/ContentText';
import { ContentTitle } from '../atoms/ContentTitle';
import { CustomDivider } from '../atoms/CustomDivider';
import { DesignListItem } from '../molecules/DesignListItem';
import { DesignListItem2 } from '../molecules/DesignListItem2';

export const Career: VFC = memo(() => {
	return (
		<>
			{careers.map((career, i) => (
				<div key={i}>
					<div className={sItemSpan}></div>
					<CareerItem career={career} />
				</div>
			))}
		</>
	)
})

const CareerItem: VFC<{ career: CareerType }> = ({ career }) => {
	return (
		<div className={sContainer}>
			<div className={sDateContainer}>
				<Typography variant="caption">{career.date}</Typography>
				<Divider />
			</div>

			<DesignListItem2
				title={<ContentTitle text={career.title} />}
				contents={<ContentText text={career.description} />}
			/>
		</div>
	)
}

// ==============================================
// styles

const sContainer = css`
	display: grid;
	flex-direction: row;
	grid-template-rows: auto 1fr;
	width: 100%;
`

const sDateContainer = css`
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	column-gap: 10px;
	padding: 5px;
`

const sItemSpan = css`
	margin-top: 20px;
`
