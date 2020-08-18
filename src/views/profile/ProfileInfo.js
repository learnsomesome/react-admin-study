import React from 'react';
import { Avatar } from 'antd';
import avatar from '@/assets/img/info_avatar.png';
import infoBg from '@/assets/img/info_bg.png';

const info_bg = {
	position: "relative",
	height: "100px",
	background: `url(${infoBg}) no-repeat center -75px/cover`
}

export default function ProfileInfo() {

	return (
		<div className="info-wrap">
			<div className="info-bg" style={info_bg}>
				<Avatar className="info-avatar" size={64} src={avatar}/>
			</div>
			<div className="info-header">
				<h4>Stephen Curry</h4>
				<p>职业篮球运动员</p>
			</div>
		</div>
	)
}
