import React from 'react';
import { Avatar } from 'antd';

export default function ProfileInfo() {
	return (
		<div className="info-wrap">
			<div className="info-header">
				<Avatar size={64} src="../../assets/img/avatar.png"/>
			</div>
		</div>
	)
}
