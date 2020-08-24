import React, { useState, memo, useCallback, useEffect } from 'react';

import NoData from '@/components/NoData';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default memo(function OperateMessage() {
	const [messageList, setMessageList] = useState([]);
	const [isHide, setIsHide] = useState(true);

	const deleteMessage = useCallback(
		index => {
			const newMessageList = [...messageList];
			newMessageList.splice(index, 1);
			setMessageList(newMessageList);
		},
		[messageList]
	);

	const submitMessage = useCallback(
		messageInfo => {
			setMessageList([...messageList, messageInfo]);
		},
		[messageList]
	);

	useEffect(() => {
		if (messageList.length === 0) {
			setIsHide(false);
		} else {
			setIsHide(true);
		}
	}, [messageList]);

	return (
		<div className="message-wrap">
			<div className="message-content">
				<TransitionGroup>
					{messageList.map((item, index) => {
						return (
							<CSSTransition key={item.id} classNames="msg" timeout={500}>
								<MessageItem messageInfo={item} deleteMessage={() => deleteMessage(index)} />
							</CSSTransition>
						);
					})}
				</TransitionGroup>
				<NoData desc="暂无留言数据" hide={isHide} />
			</div>
			<div className="message-input">
				<MessageInput submitMessage={messageInfo => submitMessage(messageInfo)} />
			</div>
		</div>
	);
});
