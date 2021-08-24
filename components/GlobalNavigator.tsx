import React, { useEffect, useState, VFC } from 'react';
import { LinkItem } from './atoms/LinkItem';

export const GlobalNavigator: VFC = () => {
	const [activeName, setActiveName] = useState('')
	const linkItems = ['Profile', 'Qiita', 'Application', 'Site Abouts']

	useEffect(() => {
		const pageName = location.pathname.substring(1)

		let linkName = ''
		if (pageName === 'profile') linkName = 'Profile'
		else if (pageName === 'qiita') linkName = 'Qiita'
		else if (pageName === 'application') linkName = 'Application'
		else if (pageName === 'site') linkName = 'Site Abouts'

		setActiveName(linkName)
	}, [])

	return (
		<nav>
			{linkItems.map(item => (
				<LinkItem
					key={item}
					href={item === 'Site Abouts' ? '/site' : `/${item.toLowerCase()}`}
					text={item}
					marginTop={item === 'Profile' ? 0 : 40}
					isActive={activeName === item}
					// clickHandler={() => setActiveName(item)}
				/>
			))}
		</nav>
	)
}
