import React, { useEffect, useRef, useState, VFC } from 'react';
import { css } from '@emotion/css';
import { LinkItem } from '../components/atoms/LinkItem';
import { PageLayout } from '../components/PageLayout';
import { Career } from '../components/profile/Career';
import { Philosophy } from '../components/profile/Philosophy';
import { Skill } from '../components/profile/Skill';
import { pageSummary } from '../datas/pageSummary';

const Profile: VFC = () => {
	const [activeNav, setActiveNav] = useState<'Career' | 'Skill' | 'Philosophy'>('Career')
	const summary = pageSummary.profile

	useEffect(() => {
		// スクロールに応じてナビゲーターのアクティブ状態を変更する
		const profileContainer = document.getElementById('profile-container')!
		profileContainer.onscroll = e => {
			const offsetTop = 225
			const skillTop = document.getElementById('skill')!.getClientRects()[0].top - offsetTop
			const philosophyTop =
				document.getElementById('philosophy')!.getClientRects()[0].top - offsetTop
			const sectionBoundary = profileContainer.getClientRects()[0].height / 3

			if (philosophyTop < sectionBoundary) {
				setActiveNav('Philosophy')
			} else if (skillTop < sectionBoundary) {
				setActiveNav('Skill')
			} else {
				setActiveNav('Career')
			}
		}
	}, [])

	return (
		<PageLayout title={summary.title} description={summary.description}>
			<div className={sContainer}>
				{/* navigation */}
				<div className={sNavContainer}>
					<LinkItem href="#career" text="Career" subText="経歴" isActive={activeNav === 'Career'} />
					<LinkItem href="#skill" text="Skill" subText="スキル" isActive={activeNav === 'Skill'} />
					<LinkItem
						href="#philosophy"
						text="Philosophy"
						subText="理念"
						isActive={activeNav === 'Philosophy'}
					/>
				</div>

				{/* contents */}
				<div id="profile-container" className={sContentsContainer}>
					<a id="career"></a>
					<Career />
					<div className={sSectionSpan}></div>

					<a id="skill"></a>
					<Skill />
					<div className={sSectionSpan}></div>

					<a id="philosophy"></a>
					<Philosophy />
				</div>
			</div>
		</PageLayout>
	)
}
export default Profile

// ==============================================
// styles

const sContainer = css`
	display: grid;
	flex-direction: row;
	grid-template-rows: 120px 1fr;
	width: 100%;
	padding: 0 30px;
`

const sNavContainer = css`
	display: flex;
	column-gap: 50px;
	justify-content: flex-start;
	align-items: center;
`

const sContentsContainer = css`
	max-height: calc(100vh - 250px);
	overflow-y: auto;
	scroll-behavior: smooth;
`

const sSectionSpan = css`
	margin-bottom: 50px;
`
