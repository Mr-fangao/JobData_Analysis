import axios from "axios";
import qs from "qs";
/* eslint-disable */

class Server {
	constructor() {
		axios.interceptors.request.use(config => {
			return config;
		}, error => {
			return Promise.reject(error.request);
		});

		axios.interceptors.response.use(config => {
			return config;
		}, error => {
			return Promise.reject(error.response);
		});
	}

	get(opt) {
		return new Promise((resolve, reject) => {
			if (opt.url.toLowerCase().indexOf("@ip") > -1) {
				opt.url = opt.url.toLowerCase().replace(/@ip/g, onemap.CONST.IP);
			}
			axios.defaults.timeout = opt.timeout || 20000; //5s超时
			axios.get(encodeURI(opt.url), {
				params: opt.params || {}
			})
			.then(function (rsp) {
					if (typeof (rsp.data) === "string") {
							resolve(rsp.data);
					} else {
							rsp.data.netStatus = rsp.status;
							resolve(rsp.data);
					}
			}).catch(err => {
				if (typeof err === "undefined") {
					err = {
						netStatus: 500
					};
				}
				reject({
					netStatus: err.netStatus,
					status: 0,
					message: `${err.netStatus}-服务异常`
				});
			});
		});
	}

	post(opt) {
		return new Promise((resolve, reject) => {
			if (opt.url.toLowerCase().indexOf("@ip") > -1) {
				opt.url = opt.url.toLowerCase().replace(/@ip/g, onemap.CONST.IP);
			}
			axios.defaults.timeout = opt.timeout || 20000; //5s超时
			axios.post(encodeURI(opt.url), qs.stringify(opt.params || {}))
			.then(function (rsp) {
				rsp.data.netStatus = rsp.status;
				resolve(rsp.data);
			}).catch(err => {
				if (typeof err === "undefined") {
					err = {
						netStatus: 500,
					};
				}
				reject({
					netStatus: err.netStatus,
					status: 0,
					message: `${err.netStatus}-服务异常`
				});
			});
		});
	}
}
export const server = new Server();