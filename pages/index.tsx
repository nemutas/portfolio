import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { css } from '@emotion/css';
import { Button, Divider } from '@material-ui/core';
import { AnimetionButton } from '../components/atoms/AnimetionButton';
import { CustomDividerH } from '../components/atoms/CustomDividerH';
import { CustomText } from '../components/atoms/CustomText';
import { LinkLayout } from '../components/atoms/LinkLayout';
import { Layout } from '../components/Layout';
import { colorThemeState } from '../lib/store';

const Home: VFC = () => {
	const colorTheme = useRecoilValue(colorThemeState)

	return (
		<Layout title="Home">
			<div className={sContainer}>
				<div className={sContentsContainer}>
					{/* row 1 */}
					<CustomText color={colorTheme.textMain} fontSizeRem={4}>
						Hello, my name is
					</CustomText>
					<div></div>
					{/* row 2 */}
					<CustomText color={colorTheme.textAccent} fontSizeRem={6}>
						Inoue Hiromichi
					</CustomText>
					<div></div>
					{/* row 3 */}
					<div className={sDivider}>
						<CustomDividerH isLeft={false} crossSize={20} />
					</div>
					{/* row 4 */}
					<div
						className={css`
							margin-left: auto;
						`}>
						<CustomText color={colorTheme.textSub} fontSizeRem={2.5}>
							Web Front-end Engineer
						</CustomText>
					</div>
					<div></div>
					{/* row 5 */}
					<div className={sButtonContainer}>
						<LinkLayout href="/profile">
							<AnimetionButton>About Me</AnimetionButton>
						</LinkLayout>
					</div>
					<div></div>
				</div>
			</div>
		</Layout>
	)
}

export default Home

const sContainer = css`
	display: flex;
	width: 100%;
	height: calc(100vh - 30px);
	justify-content: center;
	align-items: center;
`

const sContentsContainer = css`
	display: grid;
	grid-template-columns: auto 50px;
	grid-template-rows: auto auto auto auto auto;
`

const sDivider = css`
	grid-column-start: 1;
	grid-column-end: 3;
`

const sButtonContainer = css`
	margin: 5rem auto 0 auto;
`
