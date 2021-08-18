export type SkillType = {
	name: string
	active: boolean
}

export type SkillGroupType = {
	groupName: string
	skills: SkillType[]
}

export const skillGroups: SkillGroupType[] = [
	{
		groupName: 'Webフロントエンド',
		skills: [
			{ name: 'HTML', active: true },
			{ name: 'CSS', active: true },
			{ name: 'JavaScript', active: true },
			{ name: 'TypeScript', active: true },
			{ name: 'React', active: true },
			{ name: 'Next.js', active: true }
		]
	},
	{
		groupName: 'Webバックエンド',
		skills: [
			{ name: 'Node.js', active: true },
			{ name: 'Express', active: true },
			{ name: 'Flask', active: false }
		]
	},
	{
		groupName: 'サービス',
		skills: [
			{ name: 'GitHub', active: true },
			{ name: 'Firebase', active: true },
			{ name: 'Heroku', active: true },
			{ name: 'AWS Lambda', active: false },
			{ name: 'AccuRev', active: false },
			{ name: 'Jenkins', active: false }
		]
	},
	{
		groupName: 'エディター',
		skills: [
			{ name: 'VSCode', active: true },
			{ name: 'Visual Stadio', active: true },
			{ name: 'Eclipse', active: false }
		]
	},
	{
		groupName: '機械学習',
		skills: [
			{ name: 'Python', active: true },
			{ name: 'Keras', active: true }
		]
	},
	{
		groupName: 'ネイティブアプリケーション',
		skills: [
			{ name: 'C#(.Net)', active: true },
			{ name: 'Java', active: false },
			{ name: 'VB(.Net)', active: false },
			{ name: 'VBA', active: false },
			{ name: 'Swift', active: false }
		]
	}
]
