/* eslint-disable */
class Screen {
    constructor() {}

    toggle(id) {
        if (document.fullscreenElement ||
            document.msFullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement || false) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        } else {
            var el = document.getElementById(id) || document.documentElement;
            var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen; //定义不同浏览器的全屏API
            // 执行全屏
            if (typeof rfs !== "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject !== "undefined") {
                var wScript = new ActiveXObject("WScript.Shell");
                if (wScript != null) {
                    wScript.SendKeys("{F11}");
                }
            }
        }
    }
}
export const screen = new Screen();