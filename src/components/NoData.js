import React from 'react';

import { Empty } from 'antd';

const EmptyStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	marginTop: '0'
};

export default function NoData({ desc, hide }) {
	return <Empty style={{ ...EmptyStyle, display: hide ? 'none' : 'block' }} image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" description={desc} />;
}
