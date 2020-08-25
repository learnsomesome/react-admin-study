export const mockFollowList = [
	{
		id: 1,
		avatarSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4270595409,3083351112&fm=26&gp=0.jpg',
		username: 'Klay Thompson',
		isFollowed: true,
		tags: [
			{ color: 'gold', info: 'King of Three' },
			{ color: 'red', info: 'Beijing man' }
		],
		desc: '👑I want to win!!'
	},
	{
		id: 2,
		avatarSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3687831693,3199080788&fm=26&gp=0.jpg',
		username: 'Kevin Durant',
		isFollowed: true,
		tags: [
			{ color: 'gold', info: 'Score King' },
			{ color: 'magenta', info: 'Big heart' },
			{ color: 'purple', info: 'All-Star' }
		],
		desc: '🔪Death moment.'
	},
	{
		id: 3,
		avatarSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1249762672,3060583362&fm=26&gp=0.jpg',
		username: 'Draymond Green',
		isFollowed: true,
		tags: [
			{ color: 'gold', info: 'Defensive king' },
			{ color: 'lime', info: 'Triple Pair Maker' }
		],
		desc: '😶Have nothing to say.'
	}
];

export const mockWeiboList = [
	{
		id: 1,
		imgSrc: '',
		actionNum: {
			forward: 0,
			comment: 0,
			like: 0
		},
		title: 'Strive to win the championship next year🏀!',
		desc: '2020/8/19 23:10'
	},
	{
		id: 2,
		imgSrc: 'https://wx2.sinaimg.cn/mw690/cc9e95d0gy1ggi1cwkoe3j2137137ws4.jpg',
		actionNum: {
			forward: 200,
			comment: 324,
			like: 666
		},
		title: 'You can do all things👌🏽!',
		desc: '2020/8/18 08:33'
	}
];

export const mockHotList = [
	{
		id: 1,
		title: 'item1',
		tag: 'new'
	},
	{
		id: 2,
		title: 'item2',
		tag: 'recommend'
	},
	{
		id: 3,
		title: 'item3'
	},
	{
		id: 4,
		title: 'item4'
	},
	{
		id: 5,
		title: 'item5'
	},
	{
		id: 6,
		title: 'item6'
	},
	{
		id: 7,
		title: 'item7'
	},
	{
		id: 8,
		title: 'item8'
	}
];

export const mockPicList = [
	{
		id: 1,
		picSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1246510420,498844936&fm=26&gp=0.jpg'
	},
	{
		id: 2,
		picSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4060118892,2631067357&fm=26&gp=0.jpg'
	},
	{
		id: 3,
		picSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3789126031,2919229008&fm=26&gp=0.jpg'
	}
];

export const mockWeiboList_operate = [
	{
		key: 'hot',
		list: [
			{
				id: 1,
				imgSrc: '',
				actionNum: {
					forward: 0,
					comment: 0,
					like: 0
				},
				title: 'Strive to win the championship next year🏀!',
				desc: '2020/8/19 23:10'
			}
		]
	},
	{
		key: 'local',
		list: [
			{
				id: 2,
				imgSrc: 'https://wx2.sinaimg.cn/mw690/cc9e95d0gy1ggi1cwkoe3j2137137ws4.jpg',
				actionNum: {
					forward: 200,
					comment: 324,
					like: 666
				},
				title: 'You can do all things👌🏽!',
				desc: '2020/8/18 08:33'
			}
		]
	},
	{
		key: 'topic',
		list: []
	}
];
