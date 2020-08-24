import React, { useState, useEffect, memo } from 'react';
import TabWeiboItem from './TabWeiboItem';

import { mockWeiboList } from '@/mockData';
import mockRequest from '@/mockRequest';

import { Spin } from 'antd';

export default memo(function TabWeibo() {
	const [weiboList, setWeiboList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		mockRequest(() => setWeiboList(mockWeiboList));
	}, []);

	useEffect(() => {
		if (weiboList.length > 0) {
			setLoading(false);
		}
	}, [weiboList]);

	return (
		<>
			<Spin className="spin-wrap" spinning={loading} />
			<div className="total-weibo">全部微博({weiboList.length})</div>
			{weiboList.map((item, index) => {
				return <TabWeiboItem key={item.id} weiboInfo={item} />;
			})}
		</>
	);
});
