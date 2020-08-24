import React, { memo } from 'react';

import { Tabs } from 'antd';
import { HomeOutlined, MessageOutlined } from '@ant-design/icons';

import OperateMessage from './components/OperateMessage';
const { TabPane } = Tabs;

export default memo(function ProfileOperate() {
	return (
		<div className="operate-wrap">
			<Tabs tabPosition="left" className="tabs">
				<TabPane
					tab={
						<span>
							<HomeOutlined />
							首页
						</span>
					}
					key="home"
				>
					Content of Tab 1
				</TabPane>
				<TabPane
					tab={
						<span>
							<MessageOutlined />
							留言
						</span>
					}
					key="message"
				>
					<OperateMessage />
				</TabPane>
			</Tabs>
		</div>
	);
});
