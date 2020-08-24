const mockRequest = (callBack, timeout = 500) => {
	setTimeout(() => {
		callBack && callBack();
	}, timeout);
};

export default mockRequest;
