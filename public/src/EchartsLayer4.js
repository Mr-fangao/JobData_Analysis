define(["dojo/_base/declare", "dojo/_base/lang", "esri/geometry/Point", "esri/geometry/ScreenPoint"],
    function (e, t, n, i) {
        return e("Echarts3Layer", null, {
            name: "Echarts3Layer",
            _map: null,
            _ec: null,
            _geoCoord: [],
            _option: null,
            _mapOffset: [0, 0],
            constructor: function (e, t) {
                this._map = e;
                var n = this._echartsContainer = document.createElement("div");
                n.style.position = "absolute",
                    n.id = "echarts_for_esri_maps",
                    n.style.height = e.height + "px",
                    n.style.width = e.width + "px",
                    n.style.top = 0,
                    n.style.left = 0,
                    e.container.querySelector('.esri-view-root').querySelector('.esri-view-surface').appendChild(n),
                    this._init(e, t)
            },
            _init: function (e, t) {
                var o = this;
                o._map = e,
                    o._ec = t,
                    o.getEchartsContainer = function () {
                        return o._echartsContainer
                    },
                    o.getMap = function () {
                        return o._map
                    },
                    o.geoCoord2Pixel = function (e) {
                        var t = new n(e[0], e[1]),
                            i = o._map.toScreen(t);
                        return [i.x, i.y]
                    },
                    o.pixel2GeoCoord = function (e) {
                        var t = o._map.toMap(new i(e[0], e[1]));
                        return [t.lng, t.lat]
                    },
                    o.initECharts = function () {
                        return o._ec = t.init.apply(o, arguments),
                            o._ec.Geo.prototype.dataToPoint = function (e) {
                                var t = new n(e[0], e[1]),
                                    i = o._map.toScreen(t);
                                return [i.x, i.y]
                            },
                            o._bindEvent(),
                            o._ec
                    },
                    o.getECharts = function () {
                        return o._ec
                    },
                    o.setOption = function (e, t) {
                        o._option = e,
                            o._ec.setOption(e, t)
                    },
					o.deleteECharts = function () {
                        o._echartsContainer.parentNode.removeChild(o._echartsContainer);
						o._option=null;
                    },
                    o.setFlowLine = function(color,name,radian,data){
                        var dataFun = function(data){
                            var jsonArr = data.split(",")
                            var dot = new Array();
                            for(var i=0;i<jsonArr.length-1; i+=2){
                                var point = new Array();
                                point.push(jsonArr[i]);
                                point.push(jsonArr[i+1]);
                                dot.push([parseFloat(jsonArr[i]),parseFloat(jsonArr[i+1])]);
                            }
                            var wrapper = new Array();
                            for(var i = 0;i<dot.length; i++){
                                var data = new Array();
                                var obj = {
                                    coord:dot[i]
                                }
                                var obj2 = {
                                    coord:dot[i+1]
                                }
                                data.push(obj,obj2)
                                wrapper.push(data)
                            }
                            return wrapper;
                        }
                        var option = {
                            geo: {
                                map: '',
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                roam: true,
                            },
                            series: [
                                {
                                    name: name,
                                    type: 'lines',
                                    zlevel: 1,
                                    effect: {
                                        show: true,
                                        period: 2,
                                        trailLength: 0.6,
                                        color: color,
                                        constantSpeed: 20,
                                        symbolSize: 3
                                    },
                                    lineStyle: {
                                        normal: {
                                            color: "#fff",
                                            opacity: 0,
                                            width: 2.5,
                                            curveness: radian
                                        }
                                    },
                                    data: dataFun(data)
                                }
                            ]
                        };
                        return option;
                    },
                    o.setCircle = function(data,color){
                        var dataFun = function(data){
                            var jsonArr = data.split(",")
                            var dot = new Array();
                            for(var i=0;i<jsonArr.length-1; i+=2){
                                var point = new Array();
                                point.push(jsonArr[i]);
                                point.push(jsonArr[i+1]);
                                dot.push([parseFloat(jsonArr[i]),parseFloat(jsonArr[i+1])]);
                            }
                            var wrapper = new Array();
                            for(var i of dot){
                                var value = new Array();
                                value.push(i[0],i[1],1000)
                                var obj = {
                                    name:" ",
                                    value:value
                                }
                                wrapper.push(obj)
                            }
                            return wrapper;
                        }
                        var option = {
                            geo: {},
                            series: [
                                {
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    zlevel: 2,
                                    rippleEffect: {
                                        period: 4, //动画时间，值越小速度越快
                                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                                        scale: 5, //波纹圆环最大限制，值越大波纹越大
                                        trailLength: 0,
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'right',
                                            formatter: '{b}'
                                        }
                                    },
                                    symbol: 'circle',
                                    symbolSize: 5,
                                    itemStyle: {
                                        normal: {
                                            color: color
                                        }
                                    },
                                    data: dataFun(data)
                                }
                            ]
                        };
                        return option;
                    },
                    o._bindEvent = function () {
                        o._map.watch('animation', function (e) {
                            if (e && e.state === "running") {
                                o._echartsContainer.style.visibility = "hidden"
                            }
                            else {
                                o._ec.resize(),
                                    o._echartsContainer.style.visibility = "visible"
                            }
                        }),
                            o._map.watch("zoom", function (e) {
                                o._ec.resize()
                            })
                        o._map.on('drag', function (e) {
                            if (e.action === "start") {
                                o._echartsContainer.style.visibility = "hidden"
                            }
                            else if (e.action === "end") {
                                o._ec.resize(),
                                    o._echartsContainer.style.visibility = "visible"
                            }
                        }),
                            o._map.on("resize",
                                function () {
                                    var e = o._echartsContainer.parentNode.parentNode;
                                    o._mapOffset = [-parseInt(e.style.left) || 0, -parseInt(e.style.top) || 0],
                                        o._echartsContainer.style.left = o._mapOffset[0] + "px",
                                        o._echartsContainer.style.top = o._mapOffset[1] + "px",
                                        setTimeout(function () {
                                            o._ec.resize()
                                        },
                                            200),
                                        o._echartsContainer.style.visibility = "visible"
                                }),
                            o._ec.getZr().on("dragstart",
                                function (e) {
                                }),
                            o._ec.getZr().on("dragend",
                                function (e) {
                                }),
                            o._ec.getZr().on("mousewheel",
                                function (e) {
                                    o._lastMousePos = o._map.toMap(new i(e.event.x, e.event.y));
                                    var t = e.wheelDelta,
                                        n = o._map,
                                        a = n.zoom;
                                    t = t > 0 ? Math.ceil(t) : Math.floor(t),
                                        t = Math.max(Math.min(t, 4), -4),
                                        t = Math.max(n.constraints.effectiveMinZoom, Math.min(n.constraints.effectiveMaxZoom, a + t)) - a,
                                        o._delta = 0,
                                        o._startTime = null,
                                        t && (n.zoom = a + t)
                                })
                    }
            }
        })
    });