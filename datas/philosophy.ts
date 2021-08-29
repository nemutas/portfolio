export type PhilosophyType = {
	title: string
	description: string
}

export const philosophies: PhilosophyType[] = [
	{
		title: '様々な表現を',
		description: `Webアプリケーションの開発は、「表現力」を身につけることをモチベーションとして行っています。
      CSSを使ったアニメーションや、グラフを用いたデータを視覚化、3D表現を使用した高度な表現など、ユーザーが有益な情報も得られて見てても楽しいアプリケーション・サイトを作ろうと勉強しています。`
	},
	{
		title: '仕事に対する思い',
		description: `ITエンジニアにおける仕事とは、「成果物」、「コード」、「技術の選定」に対する品質の追求だと思っています。
      成果物の品質の追求とは、クライアントから要求された機能を満たした上で、更にUX、パフォーマンス、SEO対策などを向上させる姿勢です。
      コードの品質の追求とは、将来のことを考えてコードの拡張性や保守性を担保する書き方・設計をする姿勢です。
      技術選定の品質の追求とは、要件や技術的なブームに沿って合理的で先進的な技術（フレームワークやクラウドサービス）を選ぶ姿勢です。`
	},
	{
		title: 'レガシー・マイナーからの脱却',
		description: `古い技術やマイナーなブラウザへの対応を考えるあまり、生産性や表現力、管理の品質を落とすのは非合理だと思っています。
      切り捨てるところは切り捨てることで、より高品質なものを高い生産性で開発できると思っています。
      これはクライアントに対して厳しいだけではなく、技術者も常に最先端の技術を学んでいく必要があるという考えています。`
	}
]
