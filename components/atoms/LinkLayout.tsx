import Link from 'next/link';
import { ReactNode, VFC } from 'react';

type PropsType = {
	href: string
	children: ReactNode
}

export const LinkLayout: VFC<PropsType> = ({ href, children }) => {
	return (
		<Link href={href}>
			<a target="_blank" rel="noopener noreferrer">
				{children}
			</a>
		</Link>
	)
}
