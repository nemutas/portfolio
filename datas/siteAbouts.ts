type SiteAboutsType = {
	title: string
	description: string
}

export const siteAbouts: SiteAboutsType[] = [
	{
		title: 'フロントエンドフレームワーク',
		description: `このサイトは、Next.jsで作成されています。
      Next.jsは、SSG（静的サイト生成）に対応しているため、SEOに有利に働きます。また、ビルド時にAPIデータを表示するページもPre-fetch、Pre-renderingするため、サイトにアクセスしたときに高速でページが表示されます。
      Reactのラッパーフレームワークなので、HTML要素をパーツごとにコンポーネント化できます。これにより効率のよい開発を行うことができます。`
	},
	{
		title: '使用言語',
		description: `TypeScriptを使用しています。
      TypeScriptは、JavaScriptに静的型付けを加えたスーパーセット言語です。型を導入することでより厳密で安全で保守性の高いコーディングを行うことができます。
      スーパーセットであるため、JavaScriptで使用できる機能はすべて使うことができます。`
	},
	{
		title: 'スタイリング',
		description: `CSS in JSを使用しています。
      コンポーネントファイル（.tsx）に、そのコンポーネントに関連するCSSを書くことで、ファイルの分散を防ぎソースコードの見通しを良くしています。
      CSS in JSとして、Emotionパッケージを使用しています。Emotionを利用すると、CSSの構文がそのまま使え、コンポーネントファイル内でもCSS構文の補完が利きます。`
	},
	{
		title: 'UI',
		description: `コンポーネントのUIには一部、Material UIを使用しています。
			Material UIを利用すると、特に、リッチなアニメーション効果を持つコンポーネントを簡単に扱うことができます。`
	},
	{
		title: 'テーマカラー',
		description: `このサイトは、テーマカラーを変更することができます。その状態管理にはRecoil（Global State）を使用しています。
      Recoilは、Reactの開発元のFacebook社が開発した状態管理ライブラリです。
			状態の変更に伴って効率よくコンポーネントを再レンダリングしたり、使用感についてもRedux tool kitよりも簡単に扱うことができます。`
	},
	{
		title: 'Qiita ページ',
		description: `Qiitaのページでは、Qiita APIを使用して記事を取得しています。
			記事の取得はサイトのビルド時にSSGでPre-fetchして行っているため、クライアントからサイトアクセスがあるたびにAPIリクエストが発生することはないです。このため高速でページが表示されます。
      また、Qiita APIは1時間に1000回のリクエスト制限があり、取得する記事自体の更新頻度も高いわけではないです。このためSSGとの相性が良いです。`
	}
]
