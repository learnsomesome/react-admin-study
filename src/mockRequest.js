const mockRequest = (callBack, timeout = 500) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(callBack && callBack())
		}, timeout);
	})
}

export default mockRequest;
