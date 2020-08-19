import React from 'react';
import { Avatar, Button, Tag } from 'antd';

export default function TabFollowItem({ followInfo, changeFollowState }) {
	const { avatarSrc, username, isFollowed, tags, desc } = followInfo;

	return (
		<div className="follow-item">
			<Avatar size={64} src={avatarSrc} />
			<div className="item-info">
				<div className="info-header">
					<h4>{username}</h4>
					<Button type={isFollowed ? 'danger' : 'primary'} shape="round" onClick={changeFollowState}>
						{isFollowed ? 'UnFollow' : '+ Follow'}
					</Button>
				</div>
				<div className="info-content">
					{tags.map((item, index) => (
						<Tag key={index} color={item.color}>
							{item.info}
						</Tag>
					))}
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
}
