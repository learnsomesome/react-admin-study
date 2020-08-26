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
		avatarSrc: require('@/assets/img/info_avatar.png'),
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
		avatarSrc: require('@/assets/img/info_avatar.png'),
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
		title: '爸爸要求儿子每天户外玩2小时',
		tag: 'new'
	},
	{
		id: 2,
		title: '王源ThinkBook',
		tag: 'recommend'
	},
	{
		id: 3,
		title: '海底捞排号'
	},
	{
		id: 4,
		title: '乘风破浪的爱情'
	},
	{
		id: 5,
		title: '梅西'
	},
	{
		id: 6,
		title: '以家人之名'
	},
	{
		id: 7,
		title: '看到情侣的我'
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
				avatarSrc: 'https://tvax1.sinaimg.cn/crop.0.0.996.996.180/005WAsLuly8gd0lun5ghnj30ro0rodhe.jpg?KID=imgbed,tva&Expires=1598379631&ssig=%2FLc%2FC7aGs4',
				actionNum: {
					forward: 0,
					comment: 19,
					like: 191
				},
				title: '东契奇牛逼！🐮 ​​​​',
				desc: '2020/8/24 06:37'
			},
			{
				id: 2,
				imgSrc: '',
				avatarSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3687831693,3199080788&fm=26&gp=0.jpg',
				actionNum: {
					forward: 2003,
					comment: 1986,
					like: 3000
				},
				title: `​​​​I can't wait to play`,
				desc: '2020/8/26 08:45'
			}
		]
	},
	{
		key: 'local',
		list: [
			{
				id: 1,
				imgSrc: 'https://wx1.sinaimg.cn/mw690/61ff3255gy1ghta4266u1j20v90v37wh.jpg',
				avatarSrc: 'https://tvax4.sinaimg.cn/crop.0.0.690.690.180/61ff3255ly8gerzkz4k0ej20j60j60tb.jpg?KID=imgbed,tva&Expires=1598378495&ssig=tWd5%2FccuCa',
				actionNum: {
					forward: 11,
					comment: 49,
					like: 406
				},
				title: '杜威哈三人拿下了过去11个赛季中的9个得分王 😊',
				desc: '2020/8/17 03:05'
			}
		]
	},
	{
		key: 'topic',
		list: [
			{
				id: 1,
				imgSrc: 'https://wx4.sinaimg.cn/mw690/76a19fefly1gi3swq35ccj20uk0lhtab.jpg',
				avatarSrc: 'https://tvax4.sinaimg.cn/crop.0.0.180.180.180/90e188d3ly8gdimdwiuw4j2050050t8n.jpg?KID=imgbed,tva&Expires=1598411619&ssig=ub9kirGyy8',
				actionNum: {
					forward: 3239,
					comment: 3625,
					like: 81382
				},
				title: '据阿根廷媒体《奥莱报》的消息，梅西已经对自己的未来做出了决定，预计未来几个小时可能就会宣布。留下还是离开呢？🤨',
				desc: '2020/8/25 19:52'
			}
		]
	}
];
