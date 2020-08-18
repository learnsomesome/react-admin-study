import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ component: Component, ...rest }) => {
	const isLogged = localStorage.getItem('isLogin') === '1' ? true : false;

	/* render 不能与 component 属性一起使用
	 *  render 属性中 routeProps 为 match, location and history
	*/

	return <Route {...rest} render={routeProps => (isLogged ? <Component {...routeProps} /> : <Redirect to={'/login'} />)} />;

	// return isLogged ? <Route {...rest} component={Component} /> : <Redirect to={'/login'} />;
};

/* 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上 */
export default withRouter(AuthRouter);

// export default AuthRouter;
