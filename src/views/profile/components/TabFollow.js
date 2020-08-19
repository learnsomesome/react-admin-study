import React, { useState, useEffect, useCallback, Fragment } from 'react';
import TabFollowItem from './TabFollowItem';

import { mockFollowList } from '@/mockData';
import mockRequest from '@/mockRequest';

import { message, Spin } from 'antd';

export default function TabFollow() {
	const [followList, setFollowList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Mock request
		mockRequest(() => setFollowList(mockFollowList), 1000).then(() => {
			setLoading(false);
		});
	}, []);

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
		<Fragment>
			<Spin className="spin-wrap" spinning={loading} />
			{followList.map((item, index) => (
				<TabFollowItem key={item.id} followInfo={item} changeFollowState={() => changeFollowState(index)} />
			))}
		</Fragment>
	);
}
