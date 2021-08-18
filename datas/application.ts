export type ApplicationType = {
	name: string
	description: string
	appUrl: string
	gitUrl: string
	qiitaUrl?: string
	thumnail: string
}

export const applications: ApplicationType[] = [
	{
		name: 'Earthquake Infomation',
		description: '過去1ヶ月間に発生した地震の情報を閲覧するアプリケーション',
		appUrl: 'https://nemutas.github.io/app-earthquake-info/',
		gitUrl: 'https://github.com/nemutas/app-earthquake-info',
		thumnail: '/assets/thums/Earthquake_Infomation.png'
	},
	{
		name: 'MNIST Simulator',
		description: 'MNIST学習モデルを使って、手書き文字を推測するアプリケーション',
		appUrl: 'https://nemutas.github.io/app-mnist/',
		gitUrl: 'https://github.com/nemutas/app-mnist',
		qiitaUrl: 'https://qiita.com/nemutas/items/7826389f7b58bc22607c',
		thumnail: '/assets/thums/MNIST_Simulator.png'
	},
	{
		name: 'LegoMan Designer',
		description: 'Lego人形の色や質感をデザインするアプリケーション',
		appUrl: 'https://nemutas.github.io/app-legoman-designer/',
		gitUrl: 'https://github.com/nemutas/app-legoman-designer',
		qiitaUrl: 'https://qiita.com/nemutas/items/27a8e961dd8f65360b0b',
		thumnail: '/assets/thums/LegoMan_Designer.png'
	},
	{
		name: 'Create JWT App',
		description: `JWTを発行するアプリケーション
		発行したJWTは、「Todo Request App」で使用します。
		テスト用 Email：test@example.com
		テスト用 Password：xf57pkpmnsbg`,
		appUrl: 'https://nemutas-express-jwt.web.app/',
		gitUrl: 'https://github.com/nemutas/jwt-create-app',
		qiitaUrl: 'https://qiita.com/nemutas/items/bc13a81e49d9c67fa4fd',
		thumnail: '/assets/thums/Create_JWT_App.png'
	},
	{
		name: 'Todo Request App',
		description: `REST APIを使用して、TodoのCRUD操作を行うアプリケーション
		JWTは、「Create JWT App」で発行したものを使用します。`,
		appUrl: 'https://nemutas.github.io/jwt-request-app/',
		gitUrl: 'https://github.com/nemutas/jwt-request-app',
		qiitaUrl: 'https://qiita.com/nemutas/items/bc13a81e49d9c67fa4fd',
		thumnail: '/assets/thums/Todo_Request_App.png'
	}
]
