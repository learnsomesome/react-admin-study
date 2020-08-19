const mockRequest = (callBack, timeout = 500) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			callBack && callBack();
			resolve();
		}, timeout);
	})
}

export default mockRequest;
