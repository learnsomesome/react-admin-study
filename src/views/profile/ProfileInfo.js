import React, { useState, memo } from 'react';

import TabMain from './components/TabMain';
import TabWeibo from './components/TabWeibo';
import TabFollow from './components/TabFollow';

import { Avatar, Card } from 'antd';

import avatar from '@/assets/img/info_avatar.png';
import infoBg from '@/assets/img/info_bg.png';

const info_bg = {
	position: 'relative',
	height: '100px',
	background: `url(${infoBg}) no-repeat center -75px/cover`
};

const tabList = [
	{
		key: 'main',
		tab: '主页'
	},
	{
		key: 'weibo',
		tab: '微博'
	},
	{
		key: 'follow',
		tab: '关注'
	}
];

const contentList = {
	main: <TabMain />,
	weibo: <TabWeibo />,
	follow: <TabFollow />
};

export default memo(function ProfileInfo() {
	const [key, setKey] = useState(tabList[1].key);

	return (
		<div className="info-wrap">
			<div className="info-bg" style={info_bg}>
				<Avatar className="info-avatar" size={64} src={avatar} />
			</div>
			<Card hoverable className="info-card" bodyStyle={{ paddingTop: 0, overflow: 'scroll', height: '505px', position: 'relative' }} title="Stephen Curry" tabList={tabList} activeTabKey={key} onTabChange={key => setKey(key)}>
				{contentList[key]}
			</Card>
		</div>
	);
});
