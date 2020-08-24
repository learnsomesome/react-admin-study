import React, { memo } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';

export default memo(function messageItem({ messageInfo, deleteMessage }) {
	const { avatar, nickname, datetime, message } = messageInfo;

	return (
		<Comment
			className="messageItem"
			author={<span style={{ cursor: 'pointer' }}>{nickname}</span>}
			avatar={<Avatar src={avatar} alt={nickname} />}
			content={<p>{message}</p>}
			datetime={
				<Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
					<span>{datetime.fromNow()}</span>
				</Tooltip>
			}
			actions={[
				<span onClick={deleteMessage}>
					<DeleteOutlined /> 删除
				</span>
			]}
		/>
	);
});
