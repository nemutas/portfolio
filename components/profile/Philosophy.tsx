import React, { memo, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { philosophies, PhilosophyType } from '../../datas/philosophy';
import { colorThemeState } from '../../lib/store';
import { CustomDividerH } from '../atoms/CustomDividerH';
import { ContentsText, ContentsTitle } from '../atoms/CustomText';
import { SimpleDivider } from '../atoms/SimpleDivider';
import { DesignListItem2 } from '../molecules/DesignListItem2';

export const Philosophy: VFC = memo(() => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<>
			<SimpleDivider color={colorTheme.textAccent} thickness={2} />
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
			title={<ContentsTitle>{philosophy.title}</ContentsTitle>}
			contents={<ContentsText>{philosophy.description}</ContentsText>}
		/>
	)
}

// ==============================================
// styles

const sItemSpan = css`
	margin-top: 20px;
`
