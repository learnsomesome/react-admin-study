import React, { memo, useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

import '../css/map.scss';

export default memo(function IMap() {
	useEffect(() => {
		AMapLoader.load({
			key: '2be1aa6747513cd51898c6702ea8095e',
			plugins: ['AMap.ToolBar']
		}).then(AMap => {
			const map = new AMap.Map('container');
			map.addControl(new AMap.ToolBar());
			map.add(
				new AMap.Marker({
					position: map.getCenter()
				})
			);
		});
	}, []);

	return <div id="container" />;
});
