export type CareerType = {
	title: string
	description: string
	date: string
}

export const careers: CareerType[] = [
	{
		title: '大学 卒業',
		description: '日本大学 理工学部 建築学科',
		date: '2014.3'
	},
	{
		title: '株式会社 構造ソフト',
		description: `4年2か月勤務。建築用の計算ソフトを、Windows用のネイティブアプリケーションとして開発している会社です。
      主にC#（.NET）、Javaを使って画面まわりの開発に携わっていました。また、仕様書の作成、プログラミング、テスト、保守、コード管理など開発に必要な業務も一通り行っていました。`,
		date: '2014.4'
	},
	{
		title: '機械学習',
		description: `機械学習（DeepLearning）の勉強を始めました。
      言語はPython、フレームワークはKerasを選択しました。勉強をする中で、機械学習モデルを「作る方」ではなく「使う方」に興味を持ちました。`,
		date: '2018.6'
	},
	{
		title: 'Webアプリケーション',
		description: `フロントエンドの技術を中心に、Webアプリケーションの勉強を始めました。
      理由は、作成したアプリケーションの公開のしやすさ、アプリケーションの表現力の自由度、使用言語（JavaScript）の汎用性など、自分のニーズに合っていて技術的にも将来性が一番あると思ったからです。
      HTML・CSS・JavaSctiptの学習から始め、コードの品質向上のためにTypeScript、フロントエンドフレームワークにReact・Next.js、サーバーレス環境にFirebase、APIサーバーにNode.js（Express）などを順に学んできました。`,
		date: '2021.1'
	}
]
