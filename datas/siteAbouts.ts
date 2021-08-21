type SiteAboutsType = {
	title: string
	description: string
}

export const siteAbouts: SiteAboutsType[] = [
	{
		title: 'フロントエンドフレームワーク',
		description: `このサイトは、Next.jsで作成されています。
      Next.jsは、SSG（静的サイト生成）に対応しているため、SEOに有利に働きます。そしてビルド時にAPIデータを表示するページもPre-fetch、Pre-renderingするため、クライアントがアクセスしたときに高速でページを表示されます。
      また、Reactのラッパーフレームワークなので、HTML要素をパーツごとにコンポーネント化できるので、効率のよい開発を行うことができます。`
	},
	{
		title: '使用言語',
		description: `TypeScriptを使用しています。
      TypeScriptは、JavaScriptに静的型付けを加えたスーパーセット言語です。型を導入することでより厳密で安全で保守性の高いコーディングを行うことができます。
      スーパーセットであるため、JavaScriptで使用できる機能はすべて使うことができます。`
	},
	{
		title: 'スタイリング',
		description: `CSS in JS（Emotion/css）を使用しています。
      コンポーネントファイル（.tsx）に、そのコンポーネントに関連するCSSを書くことで、ファイルの分散を防ぎソースコードの見通しを良くしています。
      CSS in JSに、Emotion/cssパッケージを使用することで、元のCSSの構文をそのまま使えるようにしています。CSSの補完が効くのも利点です。`
	},
	{
		title: 'UI',
		description: `Material UIを使用しています。
      このサイトは、独自でデザインしているためフォントやボタン程度の使用になっています。`
	},
	{
		title: '状態管理',
		description: `Global Stateの管理には、Recoilを使用しています。
      Recoilは、Reactの開発元のFacebook社が開発した状態管理ライブラリで、状態の変更に伴って効率よくコンポーネントを再レンダリングしてくれます。
      また、使用感でもRedux tool kitよりも簡単に扱うことができます。
      このサイトでは、Global Navigationのアクティブ状態（色）の管理、テーマカラーの管理に使用しています。`
	},
	{
		title: 'API',
		description: `Qiitaのページでは、Qiita APIを使用して記事を取得しています。
      Qiita APIは、1時間に1000回のリクエストしかできず、記事自体の投稿の頻度も高いわけではないので、SSGを利用してこのサイトのビルド時に記事を取得するようにしています。`
	}
]
