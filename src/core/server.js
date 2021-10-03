import Axios from "axios";
import QS from "qs";
export default class Server {
  static get(opt) {
    return new Promise((resolve, reject) => {
      // if (opt.url.toLowerCase().indexOf("@ip") > -1) {
      //   opt.url = opt.url.toLowerCase().replace(/@ip/g, IP);
      // }
      this.setInitAxios(opt.timeout);
      Axios.get(encodeURI(opt.url), {
        params: opt.params || {}
      })
        .then(function (rsp) {
          resolve(rsp.data);
        }).catch(err => {
          resolve({
            status: 0,
            message: "请求超时"
          });
        });
    });
  }
  static post(opt) {
    return new Promise((resolve, reject) => {
      if (opt.url.toLowerCase().indexOf("@ip") > -1) {
        opt.url = opt.url.toLowerCase().replace(/@ip/g, IP);
      }
      this.setInitAxios(opt.timeout);
      Axios.post(encodeURI(opt.url), QS.stringify(opt.params || {}))
        .then(function (rsp) {
          resolve(rsp.data);
        }).catch(err => {
          resolve({
            status: 0,
            message: err.message
          });
        });
    });
  }

  static setInitAxios(timeout) {
    if (!timeout) {
      Axios.defaults.timeout = 30000;
    } else {
      Axios.defaults.timeout = timeout
    }
    Axios.interceptors.request.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });

    Axios.interceptors.response.use(config => {
      return config;
    }, error => {
      return Promise.reject(error);
    });
  }
}
