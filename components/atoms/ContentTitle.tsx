import React, { VFC } from 'react';
import { Typography } from '@material-ui/core';

type PropsType = {
	text: string
}

export const ContentTitle: VFC<PropsType> = ({ text }) => {
	return (
		<Typography variant="h6" component="h3">
			{text}
		</Typography>
	)
}
