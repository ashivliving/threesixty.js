!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ThreeSixty=t():e.ThreeSixty=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function o(e,t,n){var i=t.get(e);if(!i)throw new TypeError("attempted to set private field on non-instance");if(i.set)i.set.call(e,n);else{if(!i.writable)throw new TypeError("attempted to set read only private field");i.value=n}return n}var r=function(){function t(e,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s.set(this,{writable:!0,value:null}),a.set(this,{writable:!0,value:null}),u.set(this,{writable:!0,value:null}),o(this,a,n),o(this,u,{container:{mousedown:function(e){return o(r,s,e.pageX)},touchstart:function(e){return o(r,s,e.touches[0].clientX)},touchend:function(){return o(r,s,null)}},prev:{mousedown:function(t){t.preventDefault(),e.play(!0)},mouseup:function(t){t.preventDefault(),e.stop()},touchstart:function(t){t.preventDefault(),e.prev()}},next:{mousedown:function(t){t.preventDefault(),e.play()},mouseup:function(t){t.preventDefault(),e.stop()},touchstart:function(t){t.preventDefault(),e.next()}},global:{click:function(){e.click()},mouseup:function(){return o(r,s,null)},mousemove:function(t){i(r,s)&&Math.abs(i(r,s)-t.pageX)>i(r,a).dragTolerance&&(e.stop(),i(r,s)>t.pageX?e.prev():e.next(),o(r,s,t.pageX))},touchmove:function(t){i(r,s)&&Math.abs(i(r,s)-t.touches[0].clientX)>i(r,a).swipeTolerance&&(e.stop(),i(r,s)>t.touches[0].clientX?e.prev():e.next(),o(r,s,t.touches[0].clientX))},keydown:function(t){[37,39].includes(t.keyCode)&&e.play(37===t.keyCode)},keyup:function(t){[37,39].includes(t.keyCode)&&e.stop()}}}),this._initEvents()}var r,c,h;return r=t,(c=[{key:"destroy",value:function(){i(this,a).swipeTarget.removeEventListener("mousedown",i(this,u).container.mousedown),i(this,a).swipeTarget.removeEventListener("touchstart",i(this,u).container.touchstart),i(this,a).swipeTarget.removeEventListener("touchend",i(this,u).container.touchend),e.removeEventListener("mouseup",i(this,u).global.mouseup),e.removeEventListener("mousemove",i(this,u).global.mousemove),e.removeEventListener("touchmove",i(this,u).global.touchmove),e.removeEventListener("keydown",i(this,u).global.keydown),e.removeEventListener("keyup",i(this,u).global.keyup),i(this,a).prev&&(i(this,a).prev.removeEventListener("mousedown",i(this,u).prev.mousedown),i(this,a).prev.removeEventListener("mouseup",i(this,u).prev.mouseup),i(this,a).prev.removeEventListener("touchstart",i(this,u).prev.touchstart)),i(this,a).next&&(i(this,a).next.removeEventListener("mousedown",i(this,u).next.mousedown),i(this,a).next.removeEventListener("mouseup",i(this,u).next.mouseup),i(this,a).next.removeEventListener("touchstart",i(this,u).next.touchstart))}},{key:"_initEvents",value:function(){e.addEventListener("click",i(this,u).global.click),i(this,a).draggable&&(i(this,a).swipeTarget.addEventListener("mousedown",i(this,u).container.mousedown),e.addEventListener("mouseup",i(this,u).global.mouseup),e.addEventListener("mousemove",i(this,u).global.mousemove)),i(this,a).swipeable&&(i(this,a).swipeTarget.addEventListener("touchstart",i(this,u).container.touchstart),i(this,a).swipeTarget.addEventListener("touchend",i(this,u).container.touchend),e.addEventListener("touchmove",i(this,u).global.touchmove)),i(this,a).keys&&(e.addEventListener("keydown",i(this,u).global.keydown),e.addEventListener("keyup",i(this,u).global.keyup)),i(this,a).prev&&(i(this,a).prev.addEventListener("mousedown",i(this,u).prev.mousedown),i(this,a).prev.addEventListener("mouseup",i(this,u).prev.mouseup),i(this,a).prev.addEventListener("touchstart",i(this,u).prev.touchstart)),i(this,a).next&&(i(this,a).next.addEventListener("mousedown",i(this,u).next.mousedown),i(this,a).next.addEventListener("mouseup",i(this,u).next.mouseup),i(this,a).next.addEventListener("touchstart",i(this,u).next.touchstart))}}])&&n(r.prototype,c),h&&n(r,h),t}(),s=new WeakMap,a=new WeakMap,u=new WeakMap;t.a=r}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var i=n(1);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function u(e,t,n){var i=t.get(e);if(!i)throw new TypeError("attempted to set private field on non-instance");if(i.set)i.set.call(e,n);else{if(!i.writable)throw new TypeError("attempted to set read only private field");i.value=n}return n}var c=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h.set(this,{writable:!0,value:null}),l.set(this,{writable:!0,value:0}),p.set(this,{writable:!0,value:null}),v.set(this,{writable:!0,value:!1}),d.set(this,{writable:!0,value:!1}),f.set(this,{writable:!0,value:null}),this.container=e,u(this,h,Object.assign({width:300,height:300,aspectRatio:0,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,inverted:!1,containerName:"reactThreesixtyContainer"},n)),u(this,l,n.startIndex?n.startIndex:0),a(this,h).swipeTarget=a(this,h).swipeTarget||this.container,a(this,h).count=a(this,h).image.length,Object.freeze(a(this,h)),u(this,f,new i.a(this,a(this,h))),this._windowResizeListener=this._windowResizeListener.bind(this),this._initContainer()}var n,c,m;return n=t,(c=[{key:"next",value:function(){a(this,d)&&this.goto(a(this,h).inverted?a(this,l)-1:a(this,l)+1)}},{key:"prev",value:function(){a(this,d)&&this.goto(a(this,h).inverted?a(this,l)+1:a(this,l)-1)}},{key:"goto",value:function(e){var t=a(this,l),n=document.querySelector("#".concat(a(this,h).containerName," > .reactThreesixtyImage_").concat(t));n&&(n.style.visibility="hidden"),u(this,l,(a(this,h).count+e)%a(this,h).count),this._update()}},{key:"play",value:function(e){this.looping||(this._loop(e),u(this,v,!0))}},{key:"stop",value:function(){this.looping&&(e.clearTimeout(a(this,p)),u(this,v,!1))}},{key:"click",value:function(){var e=new CustomEvent("".concat(a(this,h).containerName,"_image_clicked"),{detail:{image_index:a(this,l)}});document.dispatchEvent(e)}},{key:"toggle",value:function(e){this.looping?this.stop():this.play(e)}},{key:"destroy",value:function(){this.stop(),a(this,f).destroy(),this.container.style.width="",this.container.style.height="",this.isResponsive&&window.removeEventListener("resize",this._windowResizeListener)}},{key:"_loop",value:function(t){var n=this;t?this.prev():this.next(),u(this,p,e.setTimeout((function(){n._loop(t)}),a(this,h).speed))}},{key:"_update",value:function(){var e=document.querySelector("#".concat(a(this,h).containerName," > .reactThreesixtyImage_").concat(a(this,l)));if(e){var t=new CustomEvent("".concat(a(this,h).containerName,"_image_changed"),{detail:{image_index:a(this,l)}});document.dispatchEvent(t),e.style.visibility="visible"}}},{key:"_stopScroll",value:function(){u(this,d,!1)}},{key:"_allowScroll",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){u(this,d,!0)}))},{key:"_updateImage",value:function(e){u(this,h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a(this,h),{image:e})),this._initializeImage()}},{key:"_initializeImage",value:function(){var e=this;this.container.setAttribute("id","".concat(a(this,h).containerName)),this.container.setAttribute("class","".concat(a(this,h).containerName)),this.container.style.height="100%",this.container.style.width="100%",this.container.innerHTML="",a(this,h).image.map((function(t,n){var i=document.createElement("img");i.setAttribute("style","visibility:".concat(n===a(e,l)?"visible":"hidden",";position:").concat(n?"absolute":"relative",";transform:").concat(!n&&a(e,h).isMobile?"translateY(-5em)":a(e,h).isMobile?"initial":"translateX(-50%)",";max-width:100%;max-height:100%;left:").concat(a(e,h).isMobile?"0px":"50%",";top:0px;pointer-events: none;")),i.setAttribute("src","".concat(t)),i.setAttribute("class","reactThreesixtyImage_".concat(n)),e.container.appendChild(i)}))}},{key:"_windowResizeListener",value:function(){this.container.style.height=this.containerHeight+"px",this._update()}},{key:"_initContainer",value:function(){this.isResponsive||(this.container.style.width=this.containerWidth+"px"),this.container.style.height=this.containerHeight+"px",this.isResponsive&&window.addEventListener("resize",this._windowResizeListener),this._initializeImage()}},{key:"isResponsive",get:function(){return a(this,h).aspectRatio>0}},{key:"containerWidth",get:function(){return this.isResponsive?this.container.clientWidth:a(this,h).width}},{key:"containerHeight",get:function(){return this.isResponsive?this.container.clientWidth*a(this,h).aspectRatio:a(this,h).height}},{key:"index",get:function(){return a(this,l)}},{key:"looping",get:function(){return a(this,v)}},{key:"prevIndex",get:function(){var e=a(this,h).inverted?a(this,l)+1:a(this,l)-1;return(a(this,h).count+e)%a(this,h).count}}])&&s(n.prototype,c),m&&s(n,m),t}(),h=new WeakMap,l=new WeakMap,p=new WeakMap,v=new WeakMap,d=new WeakMap,f=new WeakMap;t.default=c}.call(this,n(0))}]).default}));