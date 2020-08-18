import React from 'react';
import ProfileInfo from "./ProfileInfo";
import ProfileOperate from "./ProfileOperate";

import './css/index.scss';

export default function Profile() {
	return (
		<div className="shadow-radius profile-wrap">
			<ProfileInfo />
			<ProfileOperate />
		</div>
	)
}
