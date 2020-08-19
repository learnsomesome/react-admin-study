import React, { useState, useEffect } from 'react';
import TabWeiboItem from './TabWeiboItem';

import { mockWeiboList } from '@/mockData';
import mockRequest from '@/mockRequest';

import { Skeleton } from 'antd';

export default function TabWeibo() {
	const [weiboList, setWeiboList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		mockRequest(() => setWeiboList(mockWeiboList)).then(() => {
			setLoading(false);
		})
	}, [])

	return (
		<>
			<div className="total-weibo">全部微博({weiboList.length})</div>
			{
				weiboList.map((item, index) => {
					return (
						<Skeleton key={item.id} loading={loading} avatar={{size: 48}} active>
							<TabWeiboItem weiboInfo={item} />
						</Skeleton>
						)
				})
			}
		</>
	)
}
