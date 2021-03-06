import React from 'react';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from '@/redux/store';
import './assets/css/app';
import './assets/css/common';

class App extends React.PureComponent {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
