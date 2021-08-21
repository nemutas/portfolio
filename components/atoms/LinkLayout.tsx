import Link from 'next/link';
import { ReactNode, VFC } from 'react';

type PropsType = {
	href: string
	isOuterLink?: boolean
	children: ReactNode
}

export const LinkLayout: VFC<PropsType> = props => {
	const { href, isOuterLink = false, children } = props
	return (
		<Link href={href}>
			{isOuterLink ? (
				<a target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			) : (
				<a>{children}</a>
			)}
		</Link>
	)
}
