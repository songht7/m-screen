(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-screen-index"],{"09d7":function(t,i,n){"use strict";n.r(i);var a=n("c020"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},"0baa":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-cover-view",{class:["coverView",t.shaneType,"c-"+t.ckey,t.list.danmu?"coverView-danmu":""],style:"floating"==t.shaneType?"random"==t.list.position?{left:t.randomLeft,bottom:t.randomBottom}:t.list.danmu?t.dmPosition[t.list.position]:t.signPosition[t.list.position]:{left:t.randomLeft,bottom:t.randomBottom},attrs:{"data-pos":t.list.position?t.list.position:""}},[n("v-uni-view",{staticClass:"cover-block"},[t.bubbleShow?n("img",{staticClass:"bubble",attrs:{src:t.bubble}}):t._e(),n("v-uni-view",{class:["cover-name",t.txtType]},[t._v(t._s(t.list.name)+" "+t._s(t.list.city?t.list.city:""))]),t.list.blessing?n("v-uni-view",{class:["cover-name",t.txtType,"cover-blessing"]},[t._v(t._s(t.list.blessing))]):t._e()],1)],1)},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},1151:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("c5f6");var a={name:"c-view",props:{list:{type:Object,default:function(){return{}}},ckey:{type:Number,default:0},shaneType:{type:String,default:""},txtType:{type:String,default:"textFlash"},bubble:{type:String,default:""},bubbleShow:{type:Boolean,default:!1},animationCount:{type:String,default:"6"},duration:{type:String,default:"3s"}},data:function(){return{signPosition:[{left:"12%",bottom:"55%","animation-iteration-count":this.animationCount},{left:"38%",bottom:"70%","animation-iteration-count":this.animationCount},{left:"60%",bottom:"70%","animation-iteration-count":this.animationCount},{left:"32%",bottom:"40%","animation-iteration-count":this.animationCount},{left:"20%",bottom:"60%","animation-iteration-count":this.animationCount},{left:"22%",bottom:"40%","animation-iteration-count":this.animationCount},{left:"73%",bottom:"60%","animation-iteration-count":this.animationCount},{left:"32%",bottom:"82%","animation-iteration-count":this.animationCount},{left:"60%",bottom:"40%","animation-iteration-count":this.animationCount},{left:"40%",bottom:"25%","animation-iteration-count":this.animationCount},{left:"70%",bottom:"82%","animation-iteration-count":this.animationCount},{left:"55%",bottom:"25%","animation-iteration-count":this.animationCount},{left:"28%",bottom:"25%","animation-iteration-count":this.animationCount},{left:"77%",bottom:"75%","animation-iteration-count":this.animationCount},{left:"20%",bottom:"82%","animation-iteration-count":this.animationCount},{left:"48%",bottom:"75%","animation-iteration-count":this.animationCount},{left:"27%",bottom:"70%","animation-iteration-count":this.animationCount},{left:"55%",bottom:"85%","animation-iteration-count":this.animationCount},{left:"18%",bottom:"25%","animation-iteration-count":this.animationCount},{left:"45%",bottom:"40%","animation-iteration-count":this.animationCount}],dmPosition:[{left:"2%",bottom:"55%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"16%",bottom:"23%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"18%",bottom:"75%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"35%",bottom:"70%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"52%",bottom:"75%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"68%",bottom:"55%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"32%",bottom:"30%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"50%",bottom:"25%","animation-duration":this.duration,"animation-iteration-count":this.animationCount},{left:"20%",bottom:"50%","animation-duration":this.duration,"animation-iteration-count":this.animationCount}]}},computed:{randomLeft:function(){var t=Math.floor(70*Math.random()+10);return t+"%"},randomBottom:function(){var t=Math.floor(60*Math.random()+10);return t+"%"},shine:function(){var t=Math.floor(99*Math.random()+1);return t}},methods:{}};i.default=a},"1e9e":function(t,i,n){"use strict";var a=n("8b21"),e=n.n(a);e.a},"2b78":function(t,i,n){"use strict";n.r(i);var a=n("e7aa"),e=n("09d7");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("1e9e");var s=n("2877"),c=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"71a554b7",null);i["default"]=c.exports},"2d6c":function(t,i,n){"use strict";n.r(i);var a=n("1151"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},"49d9":function(t,i,n){"use strict";n.r(i);var a=n("0baa"),e=n("2d6c");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("fecd");var s=n("2877"),c=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"d61d5cd2",null);i["default"]=c.exports},"67b2":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'.coverView[data-v-d61d5cd2]{\n\t/* width: 100upx;\n\theight: 100upx; */position:absolute;overflow:initial;bottom:2%;opacity:.5}.coverView-danmu[data-v-d61d5cd2]{width:250px;height:auto}uni-cover-view.coverView-danmu[data-v-d61d5cd2]{white-space:pre-wrap;word-break:break-all}.fadeUpOut[data-v-d61d5cd2]{-webkit-animation-name:fadeUpOut-data-v-d61d5cd2;animation-name:fadeUpOut-data-v-d61d5cd2;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n\t/* animation-play-state: paused; */}.floating[data-v-d61d5cd2]{opacity:0;-webkit-animation-name:floating-data-v-d61d5cd2;animation-name:floating-data-v-d61d5cd2;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:6;animation-iteration-count:6;-webkit-animation-fill-mode:none;animation-fill-mode:none}.big[data-v-d61d5cd2]{width:%?115?%;height:%?115?%}.shine[data-v-d61d5cd2]:before{content:" ";width:0;height:0;border-radius:50%;box-shadow:0 0 %?6?% %?6?% #fff;background:#fff;position:absolute;right:-10%;top:30%;-webkit-animation-name:shine-data-v-d61d5cd2;animation-name:shine-data-v-d61d5cd2;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;opacity:0}.shine[data-v-d61d5cd2]:after{content:" ";width:0;height:0;border-radius:50%;box-shadow:0 0 %?5?% %?5?% #fff;background:#fff;position:absolute;left:-5%;top:80%;-webkit-animation-name:shine-data-v-d61d5cd2;animation-name:shine-data-v-d61d5cd2;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;opacity:0}@-webkit-keyframes fadeUpOut-data-v-d61d5cd2{0%{bottom:2%}10%{opacity:.8}30%{opacity:1}to{opacity:1;bottom:120%}}@keyframes fadeUpOut-data-v-d61d5cd2{0%{bottom:2%}10%{opacity:.8}30%{opacity:1}to{opacity:1;bottom:120%}}@-webkit-keyframes floating-data-v-d61d5cd2{0%{opacity:.1}to{opacity:1}}@keyframes floating-data-v-d61d5cd2{0%{opacity:.1}to{opacity:1}}@-webkit-keyframes shine-data-v-d61d5cd2{0%{opacity:.1}to{opacity:1}}@keyframes shine-data-v-d61d5cd2{0%{opacity:.1}to{opacity:1}}.cover-block[data-v-d61d5cd2]{width:100%;height:100%;line-height:0;position:relative}.cover-name[data-v-d61d5cd2]{color:#fff;z-index:2;font-size:%?10?%;\n\t/*8upx*/\n\t/* position: absolute; */top:0;line-height:1.4;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coverView-danmu .cover-name[data-v-d61d5cd2]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;font-size:%?8?%}.floating .cover-name[data-v-d61d5cd2]{color:#cb937d;background-size:100% 100%}.textFlash[data-v-d61d5cd2]{-webkit-animation-name:flash-data-v-d61d5cd2;animation-name:flash-data-v-d61d5cd2;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate\n\t/* animation-play-state: paused; */}.cover-name.gradual[data-v-d61d5cd2]{background-image:-webkit-linear-gradient(left,#cbb281,#db9824);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-size:200% 100%;-webkit-animation:masked-animation-data-v-d61d5cd2 4s infinite linear;animation:masked-animation-data-v-d61d5cd2 4s infinite linear\n\t/* animation-play-state: paused; */}@-webkit-keyframes masked-animation-data-v-d61d5cd2{0%{background-position:0 0}to{background-position:-100% 0}}@keyframes masked-animation-data-v-d61d5cd2{0%{background-position:0 0}to{background-position:-100% 0}}@-webkit-keyframes flash-data-v-d61d5cd2{0%{text-shadow:0 0 5px #cbb281,0 0 10px #cbb281,0 0 35px #db9824,0 0 40px #db9824}to{text-shadow:0 0 10px #cbb281,0 0 20px #cbb281,0 0 40px #db9824,0 0 70px #db9824}\n\n\t/* from {\n\t\ttext-shadow: 0 0 5px #CBB281,\n\t\t\t0 0 10px #CBB281,\n\t\t\t0 0 15px #CBB281,\n\t\t\t0 0 20px #DB9824,\n\t\t\t0 0 35px #DB9824,\n\t\t\t0 0 40px #DB9824,\n\t\t\t0 0 50px #DB9824,\n\t\t\t0 0 75px #DB9824;\n\t}\n\t\n\tto {\n\t\ttext-shadow: 0 0 10px #CBB281,\n\t\t\t0 0 20px #CBB281,\n\t\t\t0 0 30px #CBB281,\n\t\t\t0 0 40px #DB9824,\n\t\t\t0 0 70px #DB9824,\n\t\t\t0 0 80px #DB9824,\n\t\t\t0 0 100px #DB9824,\n\t\t\t0 0 150px #DB9824;\n\t} */}@keyframes flash-data-v-d61d5cd2{0%{text-shadow:0 0 5px #cbb281,0 0 10px #cbb281,0 0 35px #db9824,0 0 40px #db9824}to{text-shadow:0 0 10px #cbb281,0 0 20px #cbb281,0 0 40px #db9824,0 0 70px #db9824}\n\n\t/* from {\n\t\ttext-shadow: 0 0 5px #CBB281,\n\t\t\t0 0 10px #CBB281,\n\t\t\t0 0 15px #CBB281,\n\t\t\t0 0 20px #DB9824,\n\t\t\t0 0 35px #DB9824,\n\t\t\t0 0 40px #DB9824,\n\t\t\t0 0 50px #DB9824,\n\t\t\t0 0 75px #DB9824;\n\t}\n\t\n\tto {\n\t\ttext-shadow: 0 0 10px #CBB281,\n\t\t\t0 0 20px #CBB281,\n\t\t\t0 0 30px #CBB281,\n\t\t\t0 0 40px #DB9824,\n\t\t\t0 0 70px #DB9824,\n\t\t\t0 0 80px #DB9824,\n\t\t\t0 0 100px #DB9824,\n\t\t\t0 0 150px #DB9824;\n\t} */}.bubble[data-v-d61d5cd2]{width:100%;position:relative;z-index:1}.danmu[data-v-d61d5cd2]{opacity:0;-webkit-animation-name:danmu-data-v-d61d5cd2;animation-name:danmu-data-v-d61d5cd2;-webkit-animation-duration:60s;animation-duration:60s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes danmu-data-v-d61d5cd2{0%{left:110%;opacity:0}5%{opacity:.5}10%{opacity:.8}30%{opacity:1}to{opacity:1;left:-110%}}@keyframes danmu-data-v-d61d5cd2{0%{left:110%;opacity:0}5%{opacity:.5}10%{opacity:.8}30%{opacity:1}to{opacity:1;left:-110%}}',""])},"75fc":function(t,i,n){"use strict";n.r(i);var a=n("a745"),e=n.n(a);function o(t){if(e()(t)){for(var i=0,n=new Array(t.length);i<t.length;i++)n[i]=t[i];return n}}var s=n("774e"),c=n.n(s),r=n("c8bb"),d=n.n(r);function l(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){return o(t)||l(t)||u()}n.d(i,"default",function(){return m})},"8b21":function(t,i,n){var a=n("daf3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("0cff333e",a,!0,{sourceMap:!1,shadowMode:!1})},c020:function(t,i,n){"use strict";var a=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("75fc"));n("28a5");var o=a(n("49d9")),s={data:function(){return{autoplay:!0,loop:!0,muted:!0,videoUrl:"http://plbs-test-1257286922.cos.ap-shanghai.myqcloud.com/data/media_doc/",videoKey:"1576684104",videoType:"video",bubble:"./static/bubble.svg",bgIs:"video",shaneType:"floating",txtType:"textFlash",animationCount:"6",animationDuration:"3s",list:[],listStorage:[],listDelay:[],clearLi:!1,tstBtns:!0,shakeSwitchState:!1,fixedPosition:19,getContNumb:3,fixedType:!0,switchBtn:!1,delayTime:25e3,clearTime:25e3,clearState:!0,setListTime:5e3,ckListStorage:0,getDataType:"api"}},onLoad:function(t){var i=this,n=!!t.btn,a=t.type?"1576684357":"1576684104";i.videoType="1576684104"==a?"video":"blessing",i.videoKey=a,"1576684357"==a&&(i.fixedPosition=8,i.getContNumb=4,i.clearTime=5e4,i.setListTime=2e3,i.delayTime=1,i.clearState=!1,i.animationCount="4",i.animationDuration="2s"),i.switchBtn=n,n&&i.$store.dispatch("getSystemInfo")},onShow:function(){var t=this,i=(t.getDataType,t.setListTime);t.$store.dispatch("connectSocket"),uni.onSocketOpen(function(i){console.log("WebSocket连接已打开！"),t.$store.state.socketErr=""}),t.shakeSwitch("activityCheck"),t.getList(),setInterval(function(){t.sendSocketMessage("heart")},5e4),setInterval(function(){t.setList()},i)},onHide:function(){var t=this;t.sendSocketMessage("space_close")},onUnload:function(){var t=this;t.sendSocketMessage("space_close")},components:{cView:o.default},computed:{},methods:{getList:function(){var t=this,i=t.getDataType,n={fun:function(n){if(console.log(n),"space_close"!=n.data){var a=n.data;if(""==a)return;var o=t.videoType,s={};if("video"==o){var c=a.split("[|]");if(c&&"sign"==c[0]){var r=t.loopPosition();s="socket"==i?{name:n.data,position:r}:{name:c[1],position:r}}}else{c=a.split("[|]");if(c&&"blessing"==c[0]){r=t.loopPosition();s={name:c[1],city:c[2],blessing:c[3],position:r,danmu:!0}}}if(s.name){t.listDelay.push(s);var d=t.delayTime;setTimeout(function(){var i=t.listDelay,n=t.listStorage;t.listStorage=[].concat((0,e.default)(n),(0,e.default)(i)),t.listDelay=[],t.setListStorage()},d)}}}};t.$store.dispatch("onSocketMessage",n)},setList:function(){var t=this,i=t.listStorage.length?t.listStorage:[];i.length<=0?uni.getStorage({key:"listStorage",success:function(n){i=n.data.length?n.data:i,t.setPageList(i)},complete:function(){}}):t.setPageList(i)},setPageList:function(t){var i=this;if(console.log("getList-listStorage:",t),i.checkListStorage(t),t.length){var n=i.fixedPosition,a=i.getContNumb,o=t.filter(function(t,i){return i<a}),s=i.list;i.list=[].concat((0,e.default)(s),(0,e.default)(o)),console.log("---list---",i.list);var c=t.filter(function(t,i){return i>=a});if(i.listStorage=c,i.setListStorage(),i.list.length>=2*n){i.clearLi||(i.clearLi=!0);var r=i.clearTime;setTimeout(function(){i.clearLi&&i.clearList("1")},r)}}else if(i.list.length>0){i.clearLi||(i.clearLi=!0);r=i.clearTime;setTimeout(function(){i.clearLi&&i.clearList("2")},r)}},clearList:function(t){console.log("to-clearList-:",t);var i=this;if(i.clearState){var n=i.list;i.clearLi=!1,i.list=n.filter(function(t,n){return n>i.getContNumb}),console.log("clearList, list:",i.list)}},setListStorage:function(){var t=this,i=t.listStorage;uni.setStorage({key:"listStorage",data:i,success:function(){}})},checkListStorage:function(t){var i=this;t.length<=0?(i.ckListStorage+=2,i.ckListStorage>=12&&(i.list=[],i.ckListStorage=0)):i.ckListStorage=0},sendSocketMessage:function(t){var i=this;i.up=!0,i.paused="running";var n={msg:t,fun:function(){}};console.log(n),i.$store.dispatch("sendSocketMessage",n)},shakeSwitch:function(t){var i=this,n=i.shakeSwitchState,a=t||(n?"activityStop":"activityStart");console.log(n,a);var e={inter:a,fun:function(t){t&&(i.shakeSwitchState="on"==t)}};i.$store.dispatch("getData",e)},loopPosition:function(){var t=this,i=t.$store.state.rPosition,n=t.fixedPosition,a=i+1;return a>n&&(a=0),t.$store.state.rPosition=a,t.fixedType||(a="random"),a},changeShaneType:function(){this.sType="floating"==this.sType?"fadeUpOut":"floating"},test:function(t){var i=this,n=i.videoType,a=i.loopPosition(),o={};"video"==n?o={name:"恒洁洁"+a,position:a}:(o["name"]="恒洁洁"+a,o["city"]="上海",o["blessing"]="欢迎莅临恒洁2020年度经销商大会",o["position"]=a,o["danmu"]=!0),console.log(o),i.listDelay.push(o);var s=i.delayTime;setTimeout(function(){var t=i.listDelay,n=i.listStorage;i.listStorage=[].concat((0,e.default)(n),(0,e.default)(t)),i.listDelay=[],i.setListStorage()},s)},setTxtType:function(t){var i=this;i.txtType=t},reset:function(){this.list=[]},closeTst:function(){this.tstBtns=!1}}};i.default=s},d34e:function(t,i,n){var a=n("67b2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("0303a84e",a,!0,{sourceMap:!1,shadowMode:!1})},daf3:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'uni-page-body[data-v-71a554b7]{width:100%;height:100%}.content[data-v-71a554b7]{width:100%;height:100%;background-repeat:no-repeat;background-position:50% 50%;background-color:#152152;background-size:contain}#MeetVideo[data-v-71a554b7]{width:100%;height:100%;position:relative}.switchBtns[data-v-71a554b7]{width:50%;margin:0 auto;padding:%?50?% 0 0}.typeBox[data-v-71a554b7]{text-align:right;line-height:1.4;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.nav[data-v-71a554b7],.typeBtn[data-v-71a554b7]{color:#fff;font-size:%?48?%;line-height:1.4;cursor:pointer\n\t/* display: none; */}.screen-type-box[data-v-71a554b7]{position:absolute;z-index:1;right:1%;top:1%;line-height:0;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.screen-tst[data-v-71a554b7]{font-size:16px}.socketErr[data-v-71a554b7]{display:inline-block}.nav[data-v-71a554b7]{display:inline;position:relative;line-height:1.2;opacity:.5}\n\n/* \t.typeBox:hover .typeBtn {\n\tdisplay: block;\n}\n\n.typeBox:hover .nav {\n\tdisplay: none;\n} */.nav[data-v-71a554b7]:after,.nav[data-v-71a554b7]:before{content:"\\2014";color:inherit;font-size:inherit;position:absolute;top:20%;left:0;line-height:0}.nav[data-v-71a554b7]:after{top:auto;bottom:20%}',""])},e7aa:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content",style:{"background-image":"img"==t.bgIs?"url(../../static/bg-scren.jpg)":"none"}},[t.switchBtn?[n("v-uni-view",{staticClass:"typeBox switchBtns"},[n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"nav"},[t._v("—")]),n("v-uni-view",{staticClass:"typeBtn shakeSwitch",style:{"font-size":"other"==t.$store.state.systemInfo.platform?"32px":"48upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shakeSwitch("")}}},[n("v-uni-text",{staticClass:"navBtn"},[t._v(t._s(t.shakeSwitchState?"关闭":"开启")+"助力")])],1),t.tstBtns?t._e():[n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.test.apply(void 0,arguments)}}},[t._v("测试")]),n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reset.apply(void 0,arguments)}}},[t._v("清空")]),n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setTxtType("textFlash")}}},[t._v("发光")]),n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setTxtType("gradual")}}},[t._v("渐变")]),n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeShaneType.apply(void 0,arguments)}}},[t._v("切换")]),n("v-uni-view",{staticClass:"typeBtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closeTst.apply(void 0,arguments)}}},[t._v("关闭测试按钮")])]],2)]:["video"==t.bgIs?[n("v-uni-video",{staticClass:"video",attrs:{id:"MeetVideo",autoplay:t.autoplay,loop:t.loop,muted:t.muted,src:t.videoUrl+t.videoKey+".mp4"}},[t._l(t.list,function(i,a){return[n("cView",{key:a+"_0",attrs:{list:i,ckey:a,bubble:t.bubble,duration:t.animationDuration,animationCount:t.animationCount,shaneType:t.shaneType,txtType:t.txtType}})]}),n("v-uni-cover-view",{staticClass:"typeBox screen-type-box"},[t.$store.state.socketErr?n("v-uni-view",{staticClass:"typeBtn screen-tst socketErr",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$store.dispatch("connectSocket")}}},[t._v(t._s(t.$store.state.socketErr))]):t._e(),t._e()],1)],2)]:t._l(t.list,function(i,a){return[n("cView",{key:a+"_0",attrs:{list:i,ckey:a,bubble:t.bubble,shaneType:t.shaneType,txtType:t.txtType}})]})]],2)},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},fecd:function(t,i,n){"use strict";var a=n("d34e"),e=n.n(a);e.a}}]);