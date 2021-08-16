export type QiitaPostType = {
	id: string
	title: string
	url: string
	likes_count: number
	created_at: string
	tags: { name: string }[]
	user: {
		id: string
		profile_image_url: string
	}
}

export type QiitaTagsType = {
	[name: string]: {
		count: number
		selected: boolean
	}
}
