import axios from 'axios';
import { QiitaPostType, QiitaTagsType } from './types';

export const fetchQiitaPosts = async () => {
	// 記事を取得する
	const result = await axios.get<QiitaPostType[]>(process.env.NEXT_PUBLIC_QIITA_URL!, {
		headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN!}` }
	})
	const posts = result.data

	// 記事のタグ情報（タグ名、タグの使用回数、リスト上の選択状態）を生成する
	const tags: QiitaTagsType = {}
	posts.forEach(post =>
		post.tags.forEach(tag => {
			if (tags.hasOwnProperty(tag.name)) {
				tags[tag.name].count++
			} else {
				tags[tag.name] = { count: 1, selected: true }
			}
		})
	)
	// const tags: QiitaPostTagType[] = []
	// Object.keys(tags).forEach(key => {
	// 	tags.push({ name: key, count: tagsInfo[key].count, selected: tagsInfo[key].selected })
	// })
	// // 使用頻度順に並べ替える
	// tags.sort((a, b) => b.count - a.count)

	return { posts, tags }
}
