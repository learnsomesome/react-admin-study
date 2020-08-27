import React, { memo, useState, useEffect } from 'react';

import '../css/chart.scss';

import InitialChart from './components/InitialChart';
import { mockChartOptions } from '@/mockData';
import mockRequest from '@/mockRequest';

export default memo(function IChart() {
	const [histogram, setHistogram] = useState({});
	const [line, setLine] = useState({});
	const [pie, setPie] = useState({});

	useEffect(() => {
		mockRequest(() => {
			setHistogram(mockChartOptions[0]);
			setLine(mockChartOptions[1]);
			setPie(mockChartOptions[2]);
		});
	}, []);

	return (
		<div className="charts-wrap">
			<InitialChart option={histogram} />
			<InitialChart option={line} />
			<InitialChart option={pie} type="dark" />
		</div>
	);
});
