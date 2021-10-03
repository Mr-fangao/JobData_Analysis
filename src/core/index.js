import {pubsub} from "./utils/pubsub";
import {utils,server} from "./utils";
var onemap = onemap || {};
(function () {
  onemap.pubsub = pubsub; //观察者、订阅者 
  onemap.server = server;
  onemap.utils = utils; //utils相关方法
})();
window.onemap = onemap;
