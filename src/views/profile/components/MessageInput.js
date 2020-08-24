import React, { useState, memo } from 'react';
import moment from 'moment';

import { Button, Input } from 'antd';
const { TextArea } = Input;

export default memo(function MessageInput({ submitMessage }) {
	const [message, setMessage] = useState('');

	const handleMessageInfo = () => {
		const messageInfo = {
			id: moment().valueOf(),
			avatar: require('@/assets/img/info_avatar.png'),
			nickname: 'Stephen Curry',
			datetime: moment(),
			message: message
		};

		submitMessage(messageInfo);

		setMessage('');
	};

	return (
		<>
			<TextArea className="input-textarea" placeholder="请输入留言内容......" value={message} onChange={e => setMessage(e.target.value)}></TextArea>
			<Button type="primary" onClick={handleMessageInfo}>
				提交留言
			</Button>
		</>
	);
});
