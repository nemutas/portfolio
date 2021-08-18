type SummaryType = {
	title: string
	description: string
}

type PageType = {
	profile: SummaryType
	qiita: SummaryType
	udemy: SummaryType
	application: SummaryType
	site: SummaryType
}

export const pageSummary: PageType = {
	profile: {
		title: 'Profile',
		description: `Name：井上 啓道 Inoue Hiromichi
			Birthday：1991/8/5
			Age：30`
	},
	qiita: {
		title: 'Qiita',
		description: `学習した内容の備忘録として、また情報の共有のためにQiitaに記事を投稿しています。`
	},
	udemy: {
		title: 'Udemy',
		description: 'this is larning achieve page'
	},
	application: {
		title: 'Application',
		description: `今までに作成したWebアプリケーションです。
			言語は TypeScript、フロントエンドフレームワークは React、UIは Material UI と Emotion/css（CSS in JS） を使用しています。`
	},
	site: {
		title: 'Site',
		description: 'about this site'
	}
}
