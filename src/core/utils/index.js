import {
	server as _server
} from "./server"
import {
	screen
} from "./screen";
import {
	base64
} from "./base64"
import {
	browser
} from "./browser"

//判断是否是空对象
function isEmptyObject(e) {
	var t;
	for (t in e) {
		return !1;
	}
	return !0;
}
//兼容多个浏览器的事件绑定
function bindEvent(node, type, func) {
	if (node.addEventListener) {
		node.addEventListener(type, func, false);
	} 
	else if (node.attachEvent) {
		node.attachEvent("on" + type, func);
	} 
	else {
		node["on" + type] = func;
	}
}
//通过字符串方式实现对象深拷贝
function deepCopy(obj) {
	if (typeof (obj) === "object") {
		return JSON.parse(JSON.stringify(obj));
	}
	return null;
}
//生成自定位数的随机数
function random(n = 10) {
	var rnd = "";
	for (var i = 0; i < n; i++)
		rnd += Math.floor(Math.random() * 10);
	return rnd;
}


export const utils = {
	screen: screen,
	base64: base64,
	browser: browser,
	isEmptyObject: isEmptyObject,
	bindEvent: bindEvent,
	deepCopy: deepCopy,
	random: random
};
export const server = _server;