import React, { memo, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { Divider, Typography } from '@material-ui/core';
import { skillGroups, SkillGroupType, SkillType } from '../../assets/skill';
import { colorThemeState } from '../../lib/store';
import { ContentTitle } from '../atoms/ContentTitle';
import { DesignListItem2 } from '../molecules/DesignListItem2';

export const Skill: VFC = memo(() => {
	return (
		<>
			<Divider />
			<SkillLegend />
			{skillGroups.map((skillGroup, i) => (
				<div key={i}>
					<div className={sItemSpan}></div>
					<SkillGroup skillGroup={skillGroup} />
				</div>
			))}
		</>
	)
})

const SkillGroup: VFC<{ skillGroup: SkillGroupType }> = ({ skillGroup }) => {
	return (
		<DesignListItem2
			title={<ContentTitle text={skillGroup.groupName} />}
			contents={<Skills skills={skillGroup.skills} />}
		/>
	)
}

const Skills: VFC<{ skills: SkillType[] }> = ({ skills }) => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div className={sSkillsGridContainer}>
			<div className={sSkillItemContainer}>
				{skills.map((skill, i) => {
					const color = skill.active ? colorTheme.textAccent : colorTheme.textSub
					return (
						<div key={i} className={sSkill(color)}>
							<Typography variant="body2">{skill.name}</Typography>
						</div>
					)
				})}
			</div>
		</div>
	)
}

const SkillLegend: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div className={sLegendContainer}>
			<div className={cx(sLegend(colorTheme.textAccent), sLegendPosition)}>
				<Typography variant="body2">現在使っている技術</Typography>
			</div>
			<div className={sLegend(colorTheme.textSub)}>
				<Typography variant="body2">過去に使ったことのある技術</Typography>
			</div>
		</div>
	)
}

// ==============================================
// styles

const sSkillsGridContainer = css`
	display: grid;
	flex-direction: row;
	grid-template-rows: auto auto;
`

const sSkillItemContainer = css`
	display: flex;
	column-gap: 5px;
`

const sSkill = (color: string) => css`
	border-radius: 9999px;
	border: 2px solid ${color};
	padding: 3px 12px;
`

const sLegendContainer = css`
	display: flex;
	column-gap: 5px;
	margin: 20px 0;
`

const sLegend = (color: string) => css`
	border-radius: 9999px;
	border: 2px solid ${color};
	padding: 3px 12px;
`

const sLegendPosition = css`
	margin-left: auto;
`

const sItemSpan = css`
	margin-top: 20px;
`
