import { VFC } from 'react';
import { PageLayout } from '../components/PageLayout';
import { pageSummary } from '../datas/pageSummary';

const Udemy: VFC = () => {
	const summary = pageSummary.udemy

	return (
		<PageLayout title={summary.title} description={summary.description}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</PageLayout>
	)
}

export default Udemy
