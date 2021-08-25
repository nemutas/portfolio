import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { ColorThemeType } from '../../datas/colorTheme';
import { colorThemeState } from '../../lib/store';
import {
	ColorSelectorButton, GitHubButton, QiitaButton, QRButton
} from '../atoms/CustomIconButton';

export const Footer: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<div className={sFooterIconContainer(colorTheme)}>
			<GitHubButton sizePx={25} />
			<QiitaButton sizePx={25} />
			<QRButton viewBottom={60} viewRight={65} />
			<ColorSelectorButton paletteBottom={0} paletteRight={65} />
		</div>
	)
}

const sFooterIconContainer = (theme: ColorThemeType) => css`
	position: relative;
	width: 100%;
	height: 300px;
	background: linear-gradient(transparent, 40%, ${theme.main});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	row-gap: 10px;
	padding-bottom: 10px;
`
