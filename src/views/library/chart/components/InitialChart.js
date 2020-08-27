import React, { memo, useEffect, useRef, useState } from 'react';

import echarts from 'echarts';
import { Spin, Card } from 'antd';

export default memo(function InitialChart({ option, type }) {
	const [loading, setLoading] = useState(true);
	const chartDom = useRef(null);

	useEffect(() => {
		const myChart = echarts.init(chartDom.current, type ? type : 'light');
		myChart.setOption(option);
	}, [option, type]);

	useEffect(() => {
		if (Object.keys(option).length !== 0) {
			setLoading(false);
		}
	}, [option]);

	return (
		// <div className="init-chart-wrap">
		<Card hoverable className="init-chart-wrap">
			<Spin spinning={loading} className="spin-wrap" />
			<div ref={chartDom} className="init-chart"></div>
		</Card>
		// </div>
	);
});
