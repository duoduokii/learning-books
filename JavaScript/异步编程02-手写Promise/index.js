function Promise(executor) {
	// TODO
	const self = this;
	// Promise 当前的状态
	self.status = "pending";
	// Promise 的值
	self.data = undefined;
	// Promise resolve时的回调函数
	self.onResolvedCallback = [];
	// Promise rejected时的回调函数
	self.onRejectedCallback = [];

	function resolve(value) {
		if (self.status === "pending") {
			self.status = "resolved";
			self.data = value;
			for (let i = 0; i < self.onRejectedCallback.length; i++) {
				self.onResolvedCallback[i](value);
			}
		}
	}

	function reject(reason) {
		if (self.status === "pending") {
			self.status = "rejected";
			self.data = reason;
			for (let i = 0; i < self.onRejectedCallback.length; i++) {
				self.onRejectedCallback[i](reason);
			}
		}
	}

	// 执行executor，并传入相应的参数
	try {
		executor(resolve, reject);
	} catch (error) {
		reject(error);
	}
}

/**
 * then 方法接受两个参数 onResolved 和 onRejected，分别为Promise成功和失败后的回调
 * @param {*} onResolved
 * @param {*} onRejectd
 */
Promise.prototype.then = function (onResolved, onRejectd) {
	const self = this;
	let promise2;
	//  如果then的参数不是function，则需要忽略它
	onResolved = typeof onResolved === "function" ? onResolved : function (v) {};
	onRejectd = typeof onRejectd === "function" ? onRejectd : function (r) {};
	if (self.status === "resolved") {
		return (promise2 = new Promise(function (resolve, reject) {}));
	}
	if (self.status === "rejected") {
		return (Promise2 = new Promise(function (resolve, reject) {}));
	}
};
