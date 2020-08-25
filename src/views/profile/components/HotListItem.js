import React, { memo } from 'react';

import { Tag } from 'antd';

export default memo(function HotListItem({ listItemInfo }) {
	const { title, tag } = listItemInfo;

	return (
		<div className="list-item">
			<span className="item-content">{title}</span>
			{tag && <Tag color={tag === 'new' ? '#f50' : '#2db7f5'}>{tag === 'new' ? '新' : '荐'}</Tag>}
		</div>
	);
});
