import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { ColorThemeType } from '../../assets/colorTheme';
import { colorThemeState } from '../../lib/store';

type PropsType = {
	selectedTags: { [key: string]: boolean }
	setSelectedTags: React.Dispatch<
		React.SetStateAction<{
			[key: string]: boolean
		}>
	>
}

export const QiitaTagFilter: VFC<PropsType> = ({ selectedTags, setSelectedTags }) => {
	const tags = Object.keys(selectedTags)

	return (
		<div className={sTagListContainer}>
			{tags.map((tag, i) => (
				<QiitaTag
					key={i}
					name={tag}
					selected={selectedTags[tag]}
					clickHandler={() => setSelectedTags({ ...selectedTags, [tag]: !selectedTags[tag] })}
				/>
			))}
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

const sTagListContainer = css`
	display: flex;
	grid-gap: 10px;
	margin-bottom: 30px;
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
