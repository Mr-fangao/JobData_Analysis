class PubSub {
  constructor() {
    this.subUid = 0;
    this.topics = {};
  }

  publish(topic, args) {
    if (!this.topics[topic]) {
      return false;
    }
    let subscribes = this.topics[topic];
    let len = subscribes ? subscribes.length : 0;

    while (len--) {
      subscribes[len].func(args);
    }
    return this;
  }
  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    var token = (++this.subUid).toString();
    this.topics[topic].push({
      token: token,
      func: func
    });
    return token;
  }

  unsubscribe(token) {
    for (var m in this.topics) {
      if (this.topics[m]) {
        for (var i = 0, j = this.topics[m].length; i < j; i++) {
          if (this.topics[m][i].token === token) {
            this.topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  }

  unsubscribebyname(name) {
    delete this.topics[name]
  }

  hassubscribe(name) {
    return this.topics.hasOwnProperty(name);
  }
}

export const pubsub = new PubSub();
