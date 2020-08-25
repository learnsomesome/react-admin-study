import React, { memo } from 'react';

import { mockHotList, mockPicList } from '@/mockData';

import { Input, Carousel } from 'antd';
import { SearchOutlined, FireTwoTone, ProjectTwoTone } from '@ant-design/icons';
import HotListItem from './HotListItem';

export default memo(function OperateHomeLeft() {
	return (
		<div className="home-left">
			<Input className="left-search" prefix={<SearchOutlined />} placeholder="请输入查找内容......" />
			<div className="left-title">
				<FireTwoTone twoToneColor="#FF0000" /> &nbsp;热搜词条
			</div>
			<div className="hot-list">
				<div className="list-side">
					{[...mockHotList].splice(0, 4).map(item => {
						return <HotListItem key={item.id} listItemInfo={item} />;
					})}
				</div>
				<div className="list-side">
					{[...mockHotList].splice(4, 3).map(item => {
						return <HotListItem key={item.id} listItemInfo={item} />;
					})}
					<a href="/#">更多热搜 &gt;</a>
				</div>
			</div>
			<div className="left-title">
				<ProjectTwoTone /> &nbsp;最新资讯
			</div>
			<div className="carousel-list">
				<Carousel effect="fade" autoplay dotPosition="bottom">
					{mockPicList.map(item => {
						return (
							<div key={item.id} className="pic-item">
								<img className="pic-item" src={item.picSrc} alt="pic" />
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
});
