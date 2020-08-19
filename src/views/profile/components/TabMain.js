import React from 'react';

export default function TabMain() {
	return (
		<>
			<div className="basic-info">
				<h3>基本资料</h3>
					<div className="info-item">
						<span>信息</span>
						<span role="img" aria-label="strong">男&nbsp;&nbsp;30岁&nbsp;&nbsp;💪I can do all things!</span>
					</div>
					<div className="info-item">
						<span>职业</span>
						<span>NBA联赛篮球运动员</span>
					</div>
					<div className="info-item">
						<span>所在地</span>
						<span>San Francisco, U.S</span>
					</div>
					<div className="info-item">
						<span>注册时间</span>
						<span>2016-10-05</span>
					</div>
			</div>
			<div className="photo-info">
				<h3>精选照片</h3>
				<div className="photo-area">
					<div>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597854056592&di=5b01ef5eca993cc34fbf26808d712882&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw419h308%2F20180303%2F4bea-fwnpcnt4950692.jpg" alt="pic-show"/>
					</div>
					<div>
						<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1536600458,2434283189&fm=26&gp=0.jpg" alt="pic-show"/>
					</div>
				</div>
			</div>
		</>
	)
}
