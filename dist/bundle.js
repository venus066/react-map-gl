!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("immutable"),require("mapbox-gl"),require("react")):"function"==typeof define&&define.amd?define(["immutable","mapbox-gl","react"],t):"object"==typeof exports?exports["@urbica/react-map-gl"]=t(require("immutable"),require("mapbox-gl"),require("react")):e["@urbica/react-map-gl"]=t(e.immutable,e["mapbox-gl"],e.react)}(this,function(e,t,r){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}})},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(3),l=o(p),c=r(0),f=r(4),d=r(5),y=o(d),h=r(6),m=o(h),g=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._queryParams={},l.default&&(l.default.accessToken=e.accessToken),t.supported()||(r.componentDidMount=u,r.componentWillReceiveProps=u,r.componentDidUpdate=u),r._onClick=r._onClick.bind(r),r._onHover=r._onHover.bind(r),r._onViewportChange=r._onViewportChange.bind(r),r}return a(t,e),s(t,null,[{key:"supported",value:function(){return l.default&&l.default.supported()}}]),s(t,[{key:"componentDidMount",value:function(){if(l.default){var e=c.Map.isMap(this.props.mapStyle)?this.props.mapStyle.toJS():this.props.mapStyle,t=new l.default.Map({container:this._container,style:e,center:[this.props.longitude,this.props.latitude],zoom:this.props.zoom,pitch:this.props.pitch,bearing:this.props.bearing,interactive:!!this.props.onViewportChange,attributionControl:this.props.attributionControl,preserveDrawingBuffer:this.props.preserveDrawingBuffer}),r=t.getCanvas();r&&(r.style.outline="none"),this.props.onLoad&&t.once("load",this.props.onLoad),t.on("click",this._onClick),t.on("mousemove",this._onHover),t.on("dragend",this._onViewportChange),t.on("zoomend",this._onViewportChange),this._map=t,this._updateMapViewport(this.props),this._updateQueryParams(this.props.mapStyle)}}},{key:"componentWillReceiveProps",value:function(e){l.default&&(this._updateMapViewport(e),this._updateMapStyle(this.props,e))}},{key:"componentWillUnmount",value:function(){l.default&&this._map&&this._map.remove()}},{key:"getMap",value:function(){return this._map}},{key:"queryRenderedFeatures",value:function(e,t){var r=t||this._queryParams;return r.layers&&0===r.layers.length?[]:this._map.queryRenderedFeatures(e,r)}},{key:"_updateQueryParams",value:function(e){var t=(0,m.default)(e);this._queryParams={layers:t}}},{key:"_updateSource",value:function(e){var t=this._map,r=e.source.toJS();if("geojson"===r.type){var o=t.getSource(e.id);if("geojson"===o.type){var n=o.workerOptions;if(!(void 0!==r.maxzoom&&r.maxzoom!==n.geojsonVtOptions.maxZoom||void 0!==r.buffer&&r.buffer!==n.geojsonVtOptions.buffer||void 0!==r.tolerance&&r.tolerance!==n.geojsonVtOptions.tolerance||void 0!==r.cluster&&r.cluster!==n.cluster||void 0!==r.clusterRadius&&r.clusterRadius!==n.superclusterOptions.radius||void 0!==r.clusterMaxZoom&&r.clusterMaxZoom!==n.superclusterOptions.maxZoom))return void o.setData(r.data)}}t.removeSource(e.id),t.addSource(e.id,r)}},{key:"_setDiffStyle",value:function(e,t){function r(e){return e.map(function(){return!0}).delete("layers").delete("sources").toJS()}var o=this,n=e&&(r(e)||{}),i=r(t),a=this._map;if(!e||function(){var r=Object.keys(n),o=Object.keys(i);return r.length!==o.length||!!o.some(function(r){return e.get(r)!==t.get(r)})}())return void a.setStyle(t.toJS());var u=(0,y.default)(e,t),s=u.sourcesDiff,p=u.layersDiff;if(p.updates.some(function(e){return e.layer.get("ref")}))return void a.setStyle(t.toJS());s.enter.forEach(function(e){return a.addSource(e.id,e.source.toJS())}),s.update.forEach(function(e){return o._updateSource(e)}),s.exit.forEach(function(e){return a.removeSource(e.id)}),p.exiting.forEach(function(e){a.style.getLayer(e.id)&&a.removeLayer(e.id)}),p.updates.forEach(function(e){e.enter||a.removeLayer(e.id),a.addLayer(e.layer.toJS(),e.before)})}},{key:"_updateMapStyle",value:function(e,t){var r=t.mapStyle,o=e.mapStyle;r!==o&&(c.Map.isMap(r)?this.props.preventStyleDiffing?this._map.setStyle(r.toJS()):this._setDiffStyle(o,r):this._map.setStyle(r),this._updateQueryParams(r))}},{key:"_updateMapViewport",value:function(e){var t=this._map,r=t.getCenter();(e.latitude!==r.lat||e.longitude!==r.lng||e.zoom!==t.getZoom()||e.pitch!==t.getPitch()||e.bearing!==t.getBearing())&&t.flyTo({center:[e.longitude,e.latitude],zoom:e.zoom,pitch:e.pitch,bearing:e.bearing})}},{key:"_onViewportChange",value:function(e){var t=e.target,r=t.getCenter(),o=r.lng,n=r.lat,i=t.getZoom(),a=t.getPitch(),u=t.getBearing(),s={latitude:n,longitude:o,zoom:i,pitch:a,bearing:u};this.props.onViewportChange(s)}},{key:"_getFeatures",value:function(e,t){if(t){var r=[[e[0]-t,e[1]-t],[e[0]+t,e[1]+t]];return this._map.queryRenderedFeatures(r,this._queryParams)}return this._map.queryRenderedFeatures(e,this._queryParams)}},{key:"_onHover",value:function(e){if(this.props.onHover){var t=[e.point.x,e.point.y];e.features=this._getFeatures(t,this.props.clickRadius),e.features.length>0&&this.props.onHover(e)}}},{key:"_onClick",value:function(e){if(this.props.onClick){var t=[e.point.x,e.point.y];e.features=this._getFeatures(t,this.props.clickRadius),this.props.onClick(e)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,o=t.style;return(0,f.createElement)("div",{ref:function(t){return e._container=t},style:o,className:r})}}]),t}(f.PureComponent);g.displayName="MapGL",g.defaultProps={className:null,mapStyle:"mapbox://styles/mapbox/light-v8",accessToken:null,preserveDrawingBuffer:!1,onViewportChange:null,onClick:null,onHover:null,clickRadius:0,attributionControl:!0,preventStyleDiffing:!1,bearing:0,pitch:0,onLoad:null},t.default=g},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";function o(e,t){var r=e.get("sources"),o=t.get("sources"),n=[],i=[],a=[],u=r.keySeq().toArray(),s=o.keySeq().toArray();return u.forEach(function(e){var t=o.get(e);t?t.equals(r.get(e))||i.push({id:e,source:o.get(e)}):a.push({id:e,source:r.get(e)})}),s.forEach(function(e){r.get(e)||n.push({id:e,source:o.get(e)})}),{enter:n,update:i,exit:a}}function n(e,t){var r=e.get("layers"),o=t.get("layers"),n=[],i=[],a={},u={};return o.forEach(function(e,t){var r=e.get("id"),n=o.get(t+1);u[r]={layer:e,id:r,before:n?n.get("id"):null,enter:!0}}),r.forEach(function(e,t){var o=e.get("id"),n=r.get(t+1);a[o]={layer:e,id:o,before:n?n.get("id"):null},u[o]?u[o].enter=!1:i.push(a[o])}),o.reverse().forEach(function(e){var t=e.get("id");a[t]&&a[t].layer.equals(u[t].layer)&&a[t].before===u[t].before||n.push(u[t])}),{updates:n,exiting:i}}function i(e,t){return{sourcesDiff:o(e,t),layersDiff:n(e,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.diffSources=o,t.diffLayers=n,t.default=i},function(e,t,r){"use strict";function o(e){if(n.Map.isMap(e)){var t=e.get("layers");if(t)return t.filter(function(e){return e.get("interactive")}).map(function(e){return e.get("id")}).toJS()}return[]}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=o}])});
//# sourceMappingURL=bundle.js.map