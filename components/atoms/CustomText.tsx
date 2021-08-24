import React, { ElementType, VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { createStyles, makeStyles, PropTypes, Theme, Typography } from '@material-ui/core';
import { colorThemeState } from '../../lib/store';

type TextLayoutPropsType = {
	component?: ElementType
	align?: PropTypes.Alignment
	color?: string
	fontSizeRem?: number
	children: React.ReactNode
}

export const CustomText: VFC<TextLayoutPropsType> = props => {
	const { color, fontSizeRem = 1, children, ...definedProps } = props
	const classes = useStyles({ color: color ? color : 'black', size: fontSizeRem })

	return (
		<Typography className={`${classes.root} ${color && classes.color}`} {...definedProps}>
			{children}
		</Typography>
	)
}

const useStyles = makeStyles<Theme, { color: string; size: number }>((theme: Theme) =>
	createStyles({
		root: {
			fontSize: ({ size }) => `${size}rem`,
			whiteSpace: 'pre-line'
		},
		color: {
			color: ({ color }) => color
		}
	})
)

// ==============================================

export const ContentsTitle: VFC<{ children: React.ReactNode }> = ({ children }) => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<CustomText component="h3" color={colorTheme.textMain} fontSizeRem={2}>
			{children}
		</CustomText>
	)
}

// ==============================================

export const ContentsText: VFC<{ children: React.ReactNode }> = ({ children }) => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<CustomText color={colorTheme.textMain} fontSizeRem={1}>
			{children}
		</CustomText>
	)
}

// ==============================================

type ContentsSubTextPropsType = {
	fontSizeRem?: number
	children: React.ReactNode
}

export const ContentsSubText: VFC<ContentsSubTextPropsType> = props => {
	const { fontSizeRem = 0.8, children } = props
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<CustomText color={colorTheme.textSub} fontSizeRem={fontSizeRem}>
			{children}
		</CustomText>
	)
}
