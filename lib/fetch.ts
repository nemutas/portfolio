import axios from 'axios';
import { QiitaPostType } from './types';

export const fetchQiitaPosts = async () => {
	const posts = await axios.get<QiitaPostType[]>(process.env.NEXT_PUBLIC_QIITA_URL!, {
		headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN!}` }
	})
	return posts.data
}
