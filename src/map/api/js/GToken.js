export default class GToken {
  constructor() {
    this.tokens = null;
    this.obj = {};

    let loginInfo = sessionStorage.getItem(parent.onemap.CONST.AppId + "-login-info") || null;
    this.userJson = JSON.parse(onemap.utils.base64.decode(loginInfo));
  }

  get(name) {
    return new Promise(resolve => {
      if (name === "") {
        resolve("");
        return false;
      }
      let tokenStr = this.obj[name] || null;
      if (tokenStr === null) {
        let tokenObj = this.getTokenByName(name);
        if (tokenObj.url.indexOf("http:") > -1) {
          if (name.toLowerCase().indexOf("gateway") === -1) {
            onemap.server.get({
              url: tokenObj.url
            }).then(token => {
              let _tokenStr = token.replace(/[\r\n]/g, "");
              this.obj[tokenObj.name] = _tokenStr;
              resolve(`?token=${_tokenStr}`);
            });
          } else {
            onemap.server.post({
              url: tokenObj.url,
              params: {
                client_id: parent.onemap.CONST.AppId,
                client_secret: "secret",
                scope: "authenticationAPI",
                grant_type: "password",
                response_type: "code id_token",
                username: this.userJson.user,
                password: this.userJson.psd
              }
            }).then(rsp => {
              var token = rsp.access_token;
              let _tokenStr = `${token.replace(/[\r\n]/g, "")}`;
              this.obj[tokenObj.name] = _tokenStr;
              resolve(`?access_token=${_tokenStr}`);
            }, error => {
              this.$Message.warning(error.message);
            });
          }
        } else {
          var _tokenStr = tokenObj.url.replace(/[\r\n]/g, "")
          this.obj[name] = _tokenStr;
          resolve(`?token=${_tokenStr}`)
        }
      } else {
        if (name.toLowerCase().indexOf("gateway") === -1) {
          resolve(`?token=${tokenStr}`);
        } else {
          resolve(`?access_token=${tokenStr}`);
        }
      }
    });
  }

  getTokenByName(name) {
    var _token = null;
    if (this.tokens === null) {
      this.tokens = parent.onemap.CONFIG.getTokens();
    }

    for (var i = 0, token; token = this.tokens[i]; i++) {
      if (token.name === name) {
        _token = token
        break;
      }
    }
    return _token;
  }
}
