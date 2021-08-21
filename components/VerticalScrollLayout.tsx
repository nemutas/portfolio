import React, { VFC } from 'react';
import { css } from '@emotion/css';

type PropsType = {
	id?: string
	offsetHeight?: number
	children: React.ReactNode
}

export const VerticalScrollLayout: VFC<PropsType> = props => {
	const { id = 'vertical-scroll-layout', offsetHeight = 180, children } = props

	return (
		<div id={id} className={sScrollContainer(offsetHeight)}>
			{children}
		</div>
	)
}

const sScrollContainer = (offsetHeight: number) => css`
	overflow-y: auto;
	height: calc(100vh - ${offsetHeight}px);
	padding-right: 10px;
	scroll-behavior: smooth;
`
