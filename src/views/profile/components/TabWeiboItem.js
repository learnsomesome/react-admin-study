import React from 'react';

import { Card, Avatar } from 'antd';
import { ExportOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';

export default function TabWeiboItem({ weiboInfo }) {
	const { imgSrc, actionNum, title, desc } = weiboInfo;
	const { forward, comment, like } = actionNum;

	return (
		<div className="weibo-item">
			<Card
				cover={imgSrc ? <img alt="Weibo-img" src={imgSrc} /> : null}
				actions={[
					<span><ExportOutlined /> {forward ? forward : '转发'}</span>,
					<span><MessageOutlined /> {comment ? comment : '评论'}</span>,
					<span><LikeOutlined /> {like ? like : '点赞'}</span>,
				]}
			>
				<Card.Meta
					avatar={<Avatar size={48} src={require('@/assets/img/info_avatar.png')} />}
					title={title}
					description={desc}
				/>
			</Card>
		</div>
	)
}
