import React, { useState, useEffect, useCallback, memo } from 'react';
import TabFollowItem from './TabFollowItem';

import { mockFollowList } from '@/mockData';
import mockRequest from '@/mockRequest';

import { message, Spin } from 'antd';

export default memo(function TabFollow() {
	const [followList, setFollowList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Mock request
		mockRequest(() => setFollowList(mockFollowList));
	}, []);

	useEffect(() => {
		if (followList.length > 0) {
			setLoading(false);
		}
	}, [followList]);

	const changeFollowState = useCallback(
		index => {
			const newFollowList = [...followList];
			newFollowList[index].isFollowed = !newFollowList[index].isFollowed;
			setFollowList(newFollowList);
			message.success('修改成功');
		},
		[followList]
	);

	return (
		<>
			<Spin className="spin-wrap" spinning={loading} />
			{followList.map((item, index) => {
				return <TabFollowItem key={item.id} followInfo={item} changeFollowState={() => changeFollowState(index)} />;
			})}
		</>
	);
});
