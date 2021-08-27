import Image from 'next/image';
import React, { useState, VFC } from 'react';
import { css } from '@emotion/css';
import { LinkLayout } from './atoms/LinkLayout';

export const Logo: VFC = () => {
	const [hover, setHover] = useState(false)

	return (
		<div
			className={sImageContainer}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<LinkLayout href="/">
				<Image
					className={sImage}
					src={hover ? '/assets/images/logo-connect.png' : '/assets/images/logo-disconnect.png'}
					width={200}
					height={90}
				/>
			</LinkLayout>
		</div>
	)
}

const sImageContainer = css`
	display: flex;
	justify-content: center;
	width: 300px;
	height: 90px;
	cursor: pointer;
	/* background-color: red; */
`

const sImage = css`
	object-fit: cover;
	object-position: 50% 15%;
`
