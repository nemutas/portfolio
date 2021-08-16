import React, { useState, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { ColorThemeType } from '../../assets/colorTheme';
import { colorThemeState } from '../../lib/store';
import { QiitaTagsType } from '../../lib/types';
import { ContentText } from '../atoms/ContentText';

type PropsType = {
	selectedTags: QiitaTagsType
	setSelectedTags: React.Dispatch<React.SetStateAction<QiitaTagsType>>
}

export const QiitaTagFilter: VFC<PropsType> = ({ selectedTags, setSelectedTags }) => {
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
		<div className={sContainer}>
			<div className={sTagFilterContainer}>
				<LocalOfferIcon />
				<ContentText text="Tag Selector" />
				<QiitaTag
					name={selectedAllTags ? 'すべての選択を解除する' : 'すべて選択する'}
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
	)
}

type QiitaTagPropsType = {
	name: string
	selected: boolean
	clickHandler: () => void
}

const QiitaTag: VFC<QiitaTagPropsType> = ({ name, selected, clickHandler }) => {
	const colorTheme = useRecoilValue(colorThemeState)
	const classes = useStyles({ colorTheme })

	return (
		<div
			className={
				selected ? sSelectedTagChip(colorTheme.textAccent) : sTagChip(colorTheme.textAccent)
			}
			onClick={clickHandler}>
			<Typography className={selected ? classes.selectedTagText : classes.tagText} variant="body1">
				{name}
			</Typography>
		</div>
	)
}

// ==============================================
// styles

const useStyles = makeStyles<Theme, { colorTheme: ColorThemeType }>((theme: Theme) =>
	createStyles({
		tagText: {
			color: ({ colorTheme }) => colorTheme.textAccent,
			fontSize: '0.9rem',
			userSelect: 'none'
		},
		selectedTagText: {
			color: ({ colorTheme }) => colorTheme.base,
			fontSize: '0.9rem',
			userSelect: 'none'
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
	display: flex;
	grid-gap: 10px;
	align-items: center;
`

const sTagListContainer = css`
	display: flex;
	flex-wrap: wrap;
	column-gap: 10px;
	row-gap: 5px;
`

const sTagChip = (color: string) => css`
	border-radius: 9999px;
	border: 2px solid ${color};
	padding: 0px 12px;
	&:hover {
		cursor: pointer;
	}
`

const sSelectedTagChip = (color: string) => css`
	${sTagChip(color)}
	background-color: ${color};
`
