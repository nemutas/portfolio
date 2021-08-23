import React, { memo, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Divider, Typography } from '@material-ui/core';
import { careers, CareerType } from '../../datas/career';
import { colorThemeState } from '../../lib/store';
import { ContentsSubText, ContentsText, ContentsTitle } from '../atoms/CustomText';
import { SimpleDivider } from '../atoms/SimpleDivider';
import { DesignListItem2 } from '../molecules/DesignListItem2';

export const Career: VFC = memo(() => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<>
			<SimpleDivider color={colorTheme.textAccent} thickness={2} />
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
				<ContentsSubText>{career.date}</ContentsSubText>
				<SimpleDivider />
			</div>

			<DesignListItem2
				title={<ContentsTitle>{career.title}</ContentsTitle>}
				contents={<ContentsText>{career.description}</ContentsText>}
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
