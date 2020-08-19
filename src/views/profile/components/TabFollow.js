import React, { useState, useEffect, useCallback } from 'react';
import TabFollowItem from './TabFollowItem';

import { mockFollowList } from '@/mockData';
import mockRequest from '@/mockRequest';

import { message, Spin, Skeleton } from 'antd';

export default function TabFollow() {
	const [followList, setFollowList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Mock request
		mockRequest(() => setFollowList(mockFollowList)).then(() => {
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
		<>
			{/* <Spin className="spin-wrap" spinning={loading} /> */}
			{
				followList.map((item, index) => {
					return (
						<Skeleton key={item.id} loading={loading} avatar active>
							<TabFollowItem followInfo={item} changeFollowState={() => changeFollowState(index)} />
						</Skeleton>
					)
				})
			}
		</>
	);
}
