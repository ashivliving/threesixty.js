!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ThreeSixty=t():e.ThreeSixty=t()}(window,(function(){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";(function(e){function i(e,t){var i=t.get(e);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(e):i.value}function s(e,t,i){var s=t.get(e);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(e,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var n=new WeakMap,o=new WeakMap,r=new WeakMap;t.a=class{constructor(e,t){n.set(this,{writable:!0,value:null}),o.set(this,{writable:!0,value:null}),r.set(this,{writable:!0,value:null}),s(this,o,t),s(this,r,{container:{mousedown:e=>s(this,n,e.pageX),touchstart:e=>s(this,n,e.touches[0].clientX),touchend:()=>s(this,n,null)},prev:{mousedown:t=>{t.preventDefault(),e.play(!0)},mouseup:t=>{t.preventDefault(),e.stop()},touchstart:t=>{t.preventDefault(),e.prev()}},next:{mousedown:t=>{t.preventDefault(),e.play()},mouseup:t=>{t.preventDefault(),e.stop()},touchstart:t=>{t.preventDefault(),e.next()}},global:{mouseup:()=>s(this,n,null),mousemove:t=>{i(this,n)&&Math.abs(i(this,n)-t.pageX)>i(this,o).dragTolerance&&(e.stop(),i(this,n)>t.pageX?e.prev():e.next(),s(this,n,t.pageX))},touchmove:t=>{i(this,n)&&Math.abs(i(this,n)-t.touches[0].clientX)>i(this,o).swipeTolerance&&(e.stop(),i(this,n)>t.touches[0].clientX?e.prev():e.next(),s(this,n,t.touches[0].clientX))},keydown:t=>{[37,39].includes(t.keyCode)&&e.play(37===t.keyCode)},keyup:t=>{[37,39].includes(t.keyCode)&&e.stop()}}}),this._initEvents()}destroy(){i(this,o).swipeTarget.removeEventListener("mousedown",i(this,r).container.mousedown),i(this,o).swipeTarget.removeEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.removeEventListener("touchend",i(this,r).container.touchend),e.removeEventListener("mouseup",i(this,r).global.mouseup),e.removeEventListener("mousemove",i(this,r).global.mousemove),e.removeEventListener("touchmove",i(this,r).global.touchmove),e.removeEventListener("keydown",i(this,r).global.keydown),e.removeEventListener("keyup",i(this,r).global.keyup),i(this,o).prev&&(i(this,o).prev.removeEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.removeEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.removeEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.removeEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.removeEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.removeEventListener("touchstart",i(this,r).next.touchstart))}_initEvents(){i(this,o).draggable&&(i(this,o).swipeTarget.addEventListener("mousedown",i(this,r).container.mousedown),e.addEventListener("mouseup",i(this,r).global.mouseup),e.addEventListener("mousemove",i(this,r).global.mousemove)),i(this,o).swipeable&&(i(this,o).swipeTarget.addEventListener("touchstart",i(this,r).container.touchstart),i(this,o).swipeTarget.addEventListener("touchend",i(this,r).container.touchend),e.addEventListener("touchmove",i(this,r).global.touchmove)),i(this,o).keys&&(e.addEventListener("keydown",i(this,r).global.keydown),e.addEventListener("keyup",i(this,r).global.keyup)),i(this,o).prev&&(i(this,o).prev.addEventListener("mousedown",i(this,r).prev.mousedown),i(this,o).prev.addEventListener("mouseup",i(this,r).prev.mouseup),i(this,o).prev.addEventListener("touchstart",i(this,r).prev.touchstart)),i(this,o).next&&(i(this,o).next.addEventListener("mousedown",i(this,r).next.mousedown),i(this,o).next.addEventListener("mouseup",i(this,r).next.mouseup),i(this,o).next.addEventListener("touchstart",i(this,r).next.touchstart))}}}).call(this,i(0))},function(e,t,i){"use strict";i.r(t),function(e){var s=i(1);function n(e,t){var i=t.get(e);if(!i)throw new TypeError("attempted to get private field on non-instance");return i.get?i.get.call(e):i.value}function o(e,t,i){var s=t.get(e);if(!s)throw new TypeError("attempted to set private field on non-instance");if(s.set)s.set.call(e,i);else{if(!s.writable)throw new TypeError("attempted to set read only private field");s.value=i}return i}var r=new WeakMap,a=new WeakMap,h=new WeakMap,u=new WeakMap,l=new WeakMap,c=new WeakMap;t.default=class{constructor(e,t){r.set(this,{writable:!0,value:null}),a.set(this,{writable:!0,value:0}),h.set(this,{writable:!0,value:null}),u.set(this,{writable:!0,value:!1}),l.set(this,{writable:!0,value:null}),c.set(this,{writable:!0,value:!1}),this.container=e,o(this,r,Object.assign({width:300,height:300,aspectRatio:0,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,inverted:!1},t)),n(this,r).swipeTarget=n(this,r).swipeTarget||this.container,o(this,c,!Array.isArray(n(this,r).image)),this.sprite||(n(this,r).count=n(this,r).image.length),Object.freeze(n(this,r)),o(this,l,new s.a(this,n(this,r))),this._windowResizeListener=this._windowResizeListener.bind(this),this._initContainer()}get isResponsive(){return n(this,r).aspectRatio>0}get containerWidth(){return this.isResponsive?this.container.clientWidth:n(this,r).width}get containerHeight(){return this.isResponsive?this.container.clientWidth*n(this,r).aspectRatio:n(this,r).height}get index(){return n(this,a)}get looping(){return n(this,u)}get sprite(){return n(this,c)}next(){this.goto(n(this,r).inverted?n(this,a)-1:n(this,a)+1)}prev(){this.goto(n(this,r).inverted?n(this,a)+1:n(this,a)-1)}goto(e){o(this,a,(n(this,r).count+e)%n(this,r).count),this._update()}play(e){this.looping||(this._loop(e),o(this,u,!0))}stop(){this.looping&&(e.clearTimeout(n(this,h)),o(this,u,!1))}toggle(e){this.looping?this.stop():this.play(e)}destroy(){this.stop(),n(this,l).destroy(),this.container.style.width="",this.container.style.height="",this.container.style.backgroundImage="",this.container.style.backgroundPositionX="",this.container.style.backgroundPositionY="",this.container.style.backgroundSize="",this.isResponsive&&window.removeEventListener("resize",this._windowResizeListener)}_loop(t){t?this.prev():this.next(),o(this,h,e.setTimeout(()=>{this._loop(t)},n(this,r).speed))}_update(){this.sprite?(this.container.style.backgroundPositionX=-n(this,a)%n(this,r).perRow*this.containerWidth+"px",this.container.style.backgroundPositionY=-Math.floor(n(this,a)/n(this,r).perRow)*this.containerHeight+"px"):this.container.style.backgroundImage=`url("${n(this,r).image[n(this,a)]}")`}_calculateBackgroundSize(){return 100*n(this,r).perRow+"%"+" "+(this.containerHeight*n(this,r).count/n(this,r).perRow+"px")}_windowResizeListener(){this.container.style.height=this.containerHeight,this.container.style.backgroundSize=this._calculateBackgroundSize(),this._update()}_initContainer(){this.isResponsive||(this.container.style.width=this.containerWidth+"px"),this.container.style.height=this.containerHeight+"px",this.sprite&&(this.container.style.backgroundImage=`url("${n(this,r).image}")`,this.container.style.backgroundSize=this._calculateBackgroundSize()),this.isResponsive&&window.addEventListener("resize",this._windowResizeListener),this._update()}}}.call(this,i(0))}]).default}));