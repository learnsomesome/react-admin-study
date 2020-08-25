import React, { memo } from 'react';

import { Tabs } from 'antd';
import TabWeiboItem from './TabWeiboItem';
import { mockWeiboList_operate } from '@/mockData';
const { TabPane } = Tabs;

const tabList = [
	{
		key: 'hot',
		tab: '热点'
	},
	{
		key: 'local',
		tab: '本地'
	},
	{
		key: 'topic',
		tab: '话题'
	}
];

export default memo(function OperateHomeRight() {
	return (
		<div className="home-right">
			<Tabs tabBarStyle={{ textAlign: 'center' }}>
				{tabList.map((tabItem, index) => {
					return (
						<TabPane tab={tabItem.tab} key={tabItem.key} className="tab-item">
							{mockWeiboList_operate[index].list.map(item => {
								return <TabWeiboItem key={item.id} weiboInfo={item} />;
							})}
						</TabPane>
					);
				})}
			</Tabs>
		</div>
	);
});
