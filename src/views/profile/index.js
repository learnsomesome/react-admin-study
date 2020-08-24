import React, { memo } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileOperate from './ProfileOperate';

import './css/index.scss';

export default memo(function Profile() {
	return (
		<div className="profile-wrap">
			<ProfileInfo />
			<ProfileOperate />
		</div>
	);
});
