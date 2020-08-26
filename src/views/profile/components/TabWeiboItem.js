import React, { memo, useState } from 'react';

import { Card, Avatar } from 'antd';
import { ExportOutlined, MessageOutlined, LikeOutlined, LikeFilled } from '@ant-design/icons';

export default memo(function TabWeiboItem({ weiboInfo }) {
	const { imgSrc, actionNum, title, desc, avatarSrc } = weiboInfo;
	const { forward, comment, like } = actionNum;
	const [isLike, setIsLike] = useState(false);

	return (
		<div className="weibo-item">
			<Card
				className="card-border-color"
				cover={imgSrc ? <img alt="Weibo-img" src={imgSrc} /> : null}
				actions={[
					<span>
						<ExportOutlined /> {forward ? forward : '转发'}
					</span>,
					<span>
						<MessageOutlined /> {comment ? comment : '评论'}
					</span>,
					<span onClick={() => setIsLike(!isLike)}>
						{isLike ? (
							<>
								<LikeFilled /> {like + 1}
							</>
						) : (
							<>
								<LikeOutlined /> {like ? like : '点赞'}
							</>
						)}
					</span>
				]}
			>
				<Card.Meta avatar={<Avatar size={48} src={avatarSrc} />} title={title} description={desc} />
			</Card>
		</div>
	);
});
