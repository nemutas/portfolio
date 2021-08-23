import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import { QiitaTagsType } from '../../lib/types';
import { CustomText } from '../atoms/CustomText';
import { VerticalScrollLayout } from '../VerticalScrollLayout';

type PropsType = {
	selectedTags: QiitaTagsType
	setSelectedTags: React.Dispatch<React.SetStateAction<QiitaTagsType>>
}

export const QiitaTagFilter: VFC<PropsType> = ({ selectedTags, setSelectedTags }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })
	const tagNames = Object.keys(selectedTags)
	const [selectedAllTags, setSelectedAllTags] = useState(true)

	const toggleSelectHandler = (tag: string) => {
		setSelectedTags({
			...selectedTags,
			[tag]: { ...selectedTags[tag], selected: !selectedTags[tag].selected }
		})
	}

	const selectAllTagsHandler = () => {
		const selected = !selectedAllTags
		setSelectedAllTags(selected)
		tagNames.forEach(tag => (selectedTags[tag].selected = selected))
		setSelectedTags({ ...selectedTags })
	}

	const sortedTags: { name: string; count: number }[] = []
	tagNames.forEach(tag => sortedTags.push({ name: tag, count: selectedTags[tag].count }))
	sortedTags.sort((a, b) => b.count - a.count)

	return (
		<VerticalScrollLayout id="qiita-tag-filter">
			<div className={sContainer}>
				<div className={sTagFilterContainer}>
					<LocalOfferIcon className={classes.tagIcon} />
					<QiitaTag
						name={selectedAllTags ? 'すべてのタグを解除する' : 'すべてのタグを選択する'}
						selected={!selectedAllTags}
						clickHandler={selectAllTagsHandler}
					/>
				</div>
				<div className={sTagListContainer}>
					{sortedTags.map((tag, i) => (
						<QiitaTag
							key={i}
							name={tag.name}
							selected={selectedTags[tag.name].selected}
							clickHandler={() => toggleSelectHandler(tag.name)}
						/>
					))}
				</div>
			</div>
		</VerticalScrollLayout>
	)
}

type QiitaTagPropsType = {
	name: string
	selected: boolean
	clickHandler: () => void
}

const QiitaTag: VFC<QiitaTagPropsType> = ({ name, selected, clickHandler }) => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div
			className={selected ? sSelectedTagChip(colorTheme) : sTagChip(colorTheme)}
			onClick={clickHandler}>
			<CustomText>{name}</CustomText>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		tagIcon: {
			color: ({ colorTheme }) => colorTheme.textMain
		}
	})
)

const sContainer = css`
	display: grid;
	flex-direction: row;
	grid-template-rows: auto auto;
	grid-gap: 10px;
`

const sTagFilterContainer = css`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 10px;
	align-items: center;
`

const sTagListContainer = css`
	display: flex;
	flex-direction: column;
	row-gap: 5px;
`

const sTagChip = (colorTheme: ColorThemeType) => css`
	border-radius: 9999px;
	border: 2px solid ${colorTheme.textAccent};
	padding: 0px 12px;
	margin-right: auto;
	cursor: pointer;
	color: ${colorTheme.textAccent};
`

const sSelectedTagChip = (colorTheme: ColorThemeType) => css`
	${sTagChip(colorTheme)}
	background-color: ${colorTheme.textAccent};
	color: ${colorTheme.base};
`
