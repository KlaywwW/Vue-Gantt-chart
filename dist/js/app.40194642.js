(function(t){function e(e){for(var a,l,s=e[0],o=e[1],c=e[2],u=0,f=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,s=1;s<i.length;s++){var o=i[s];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},r={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0842":function(t,e,i){"use strict";var a=i("58a6"),r=i.n(a);r.a},"3d88":function(t,e,i){var a=i("fe1f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("45f1890c",a,!0,{sourceMap:!1,shadowMode:!1})},4034:function(t,e,i){"use strict";var a=i("c4a0"),r=i.n(a);r.a},"56d7":function(t,e,i){"use strict";i.r(e);i("560b"),i("450d");var a=i("dcdc"),r=i.n(a),n=(i("6611"),i("e772")),l=i.n(n),s=(i("1f1a"),i("4e4b")),o=i.n(s),c=(i("b5c2"),i("20cf")),d=i.n(c),u=(i("eca7"),i("3787")),f=i.n(u),h=(i("425f"),i("4105")),m=i.n(h),p=(i("f4f9"),i("c2cc")),g=i.n(p),b=(i("7a0f"),i("0f6c")),v=i.n(b),y=(i("10cb"),i("f3ad")),x=i.n(y),T=(i("1951"),i("eedf")),k=i.n(T),w=(i("826b"),i("c263")),A=i.n(w),_=(i("06f1"),i("6ac9")),R=i.n(_),O=(i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("2b0e")),S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"top-bar"},[i("el-form",{attrs:{inline:!0,size:"small"}},[i("el-form-item",{attrs:{label:"Vue-Gantt-Chart"}},[i("el-date-picker",{staticStyle:{width:"300px"},attrs:{size:"small",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.times,callback:function(e){t.times=e},expression:"times"}})],1),i("el-form-item",{attrs:{label:"行数"}},[i("el-input",{staticStyle:{width:"60px"},attrs:{size:"small",placeholder:""},model:{value:t.rowNum,callback:function(e){t.rowNum=t._n(e)},expression:"rowNum"}})],1),i("el-form-item",{attrs:{label:"块数"}},[i("el-input",{staticStyle:{width:"60px"},attrs:{size:"small",placeholder:""},model:{value:t.colNum,callback:function(e){t.colNum=t._n(e)},expression:"colNum"}})],1),i("el-form-item",{attrs:{label:"cellHeight"}},[i("el-slider",{staticStyle:{width:"60px"},attrs:{min:20,max:100,size:"small"},model:{value:t.cellHeight,callback:function(e){t.cellHeight=e},expression:"cellHeight"}})],1),i("el-form-item",{attrs:{label:"cellWidth"}},[i("el-slider",{staticStyle:{width:"60px"},attrs:{min:20,max:100,size:"small"},model:{value:t.cellWidth,callback:function(e){t.cellWidth=e},expression:"cellWidth"}})],1),i("el-form-item",{attrs:{label:"scale"}},[i("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"",size:"small"},model:{value:t.scale,callback:function(e){t.scale=e},expression:"scale"}},t._l(t.scaleList,(function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),i("el-form-item",[i("el-checkbox",{model:{value:t.hideHeader,callback:function(e){t.hideHeader=e},expression:"hideHeader"}},[t._v("hideHeader")])],1),i("el-form-item",[i("el-checkbox",{model:{value:t.hideSecondGantt,callback:function(e){t.hideSecondGantt=e},expression:"hideSecondGantt"}},[t._v("hideSecondGantt")])],1)],1)],1),i("div",{staticClass:"container"},[i("v-gantt-chart",{attrs:{startTime:t.times[0],endTime:t.times[1],cellWidth:t.cellWidth,cellHeight:t.cellHeight,timeLines:t.timeLines,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",hideHeader:t.hideHeader,dataKey:t.dataKey,arrayKeys:t.arrayKeys,scrollToPostion:t.positionA,datas:t.datasA},on:{scrollLeft:t.scrollLeftA},scopedSlots:t._u([{key:"block",fn:function(e){var a=e.data,r=e.item;return[i("Test",{attrs:{data:a,updateTimeLines:t.updateTimeLines,cellHeight:t.cellHeight,currentTime:t.currentTime,item:r}})]}},{key:"left",fn:function(t){var e=t.data;return[i("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v("铁胆火车侠日程表 ")]},proxy:!0}])}),t.hideSecondGantt?t._e():i("v-gantt-chart",{attrs:{startTime:t.times[0],endTime:t.times[1],cellWidth:t.cellWidth,cellHeight:t.cellHeight,timeLines:t.timeLines,titleHeight:t.titleHeight,scale:t.scale,titleWidth:t.titleWidth,showCurrentTime:"",hideHeader:"",dataKey:t.dataKey,arrayKeys:t.arrayKeys,scrollToPostion:t.positionB,customGenerateBlocks:"",datas:t.datasB},on:{scrollLeft:t.scrollLeftB},scopedSlots:t._u([{key:"block",fn:function(e){var a=e.data,r=e.getPositonOffset,n=e.getWidthAbout2Times,l=e.isInRenderingTimeRange,s=(e.startTimeOfRenderArea,e.endTimeOfRenderArea,e.isAcrossRenderingTimeRange);return t._l(a.gtArray,(function(e,o){return l(e.start)||l(e.end)||s(e.start,e.end)?i("div",{key:e.id,staticClass:"gantt-block-item",style:{left:r(e.start)+"px",width:n(e.start,e.end)+"px"}},[i("Test",{attrs:{data:a,updateTimeLines:t.updateTimeLines,cellHeight:t.cellHeight,currentTime:t.currentTime,item:e}})],1):t._e()}))}},{key:"left",fn:function(t){var e=t.data;return[i("TestLeft",{attrs:{data:e}})]}},{key:"title",fn:function(){return[t._v(" 铁胆火车侠日程表 ")]},proxy:!0}],null,!1,2076741516)})],1),t._m(0)])},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"main-footer"},[t._v(" MIT ©wuchouchou"),i("span",{staticStyle:{float:"right"}},[t._v("注:该demo由两个甘特组件组合而成")])])}],L=(i("d81d"),i("d3b7"),i("e25e"),i("25f0"),i("1276"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-popover",{attrs:{placement:"bottom",trigger:"hover"}},[i("div",{staticClass:"plan",style:{"background-color":t.statusColor,"margin-top":.1*t.cellHeight+"px"},attrs:{slot:"reference"},on:{click:t.onClick},slot:"reference"},[i("div",{staticClass:"runTime"},[i("span",[t._v("S:"+t._s(t.startToString))]),i("span",[t._v("E:"+t._s(t.endToString))])]),i("div",{staticClass:"middle"},[t._v("编号"+t._s(t.item.id))])]),i("div",{staticClass:"detail"},[i("span",{staticClass:"header"},[t._v(t._s(t.data.type)+t._s(t.data.name)+t._s(t.data.id))]),i("ul",[i("li",[i("span",[t._v("发车时间：")]),i("span",[t._v(t._s(t.startToString))])]),i("li",[i("span",[t._v("到站时间：")]),i("span",[t._v(t._s(t.endToString))])]),i("li",[i("span",[t._v("载员：")]),i("span",[t._v(t._s(t.item.passenger))])]),i("li",[i("span",[t._v("编号：")]),i("span",[t._v(t._s(t.item.id))])])])])])}),W=[],B=(i("a9e3"),i("5a0c")),N=i.n(B),C="#D5F8EA",P="#BFF2FE",D="#F2F2F2",K={name:"Test",props:{data:Object,item:Object,currentTime:N.a,updateTimeLines:Function,cellHeight:Number,startTimeOfRenderArea:Number},data:function(){return{dayjs:N.a}},computed:{statusColor:function(){var t=this.item,e=this.currentTime,i=N()(t.start),a=N()(t.end);return i.isBefore(e)&&a.isAfter(e)?C:a.isBefore(e)?D:P},startToString:function(){return N()(this.item.start).format("HH:mm")},endToString:function(){return N()(this.item.end).format("HH:mm")}},methods:{onClick:function(){this.updateTimeLines(this.item.start,this.item.end)}}},M=K,j=(i("4034"),i("2877")),z=Object(j["a"])(M,L,W,!1,null,"1f42d51a",null),E=z.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"name",style:{background:t.data.colorPair.light}},[i("div",{staticClass:"colorBar",style:{background:t.data.colorPair.dark}}),i("div",{staticClass:"type"},[t._v(t._s(t.data.type))]),i("div",{staticClass:"carId"},[t._v(t._s(t.data.name)+t._s(t.data.id))]),i("div",{staticClass:"speed"},[t._v(t._s(t.data.speed)+"km/s")])])},$=[],X={name:"TestLeft",props:{data:Object}},Y=X,G=(i("e1a4"),Object(j["a"])(Y,I,$,!1,null,"5622c88e",null)),F=G.exports,V=(i("5319"),i("96eb")),q=i.n(V),Q=["(252, 105, 100)","(247, 167, 71)","(116, 202, 90)","(83, 186, 241)","(208, 142, 2231)"],J="希望号,飞翼号,光明号,窥探号,力神号,警官号,闪电流星号,博士号,霹雳火神号,狙击手号,希望之光号,南海忍者号,火速E3号,山神号,安全卫士号,铁锤号,寿星号,星星号,罗曼斯卡,欲望号,霹雳雷电号,消防号,欧洲之星号".split(","),U="🚅,🚈,🚄".split(","),Z=q.a.Random,tt=10,et=[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],it={id:function(){return"JHR"+Z.natural(100,999)+Z.character("upper")+Z.character("upper")},name:function(){return Z.pick(J)},type:function(){return Z.pick(U)},colorPair:function(){var t="rgb"+Z.pick(Q);return{dark:t.replace(")",",0.8)"),light:t.replace(")",",0.1)")}},speed:function(){return Z.natural(0,200)},gtArray:function(){var t=[],e=0,i=Z.natural(tt-1,tt),a=N()(et[0]).subtract(12,"hour"),r=N()(et[0]).subtract(12,"hour");while(e<i)a=r.add(Z.natural(1,5),"hour"),r=a.add(Z.natural(1,5),"hour"),t.push({id:Z.character("upper")+Z.character("upper")+Z.natural(1e3,9999),passenger:Z.natural(10,200),start:a.toString(),end:r.toString()}),e++;return t}};function at(t,e,i){tt=e,et=i;for(var a=[],r=0,n=Z.natural(t,t);r<n;r++)a.push(q.a.mock(it));return a}var rt="1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440".split(",").map((function(t){return parseInt(t)})),nt={name:"App",components:{Test:E,TestLeft:F},data:function(){return{timeLines:[{time:N()().add(2,"hour").toString()},{time:N()().add(5,"hour").toString(),color:"#747e80"}],currentTime:N()(),cellWidth:50,cellHeight:30,titleHeight:40,titleWidth:250,scale:60,times:[N()().subtract(5,"hour").toString(),N()().add(2,"day").add(2,"hour").toString()],rowNum:100,colNum:10,datasA:[],datasB:[],dataKey:"id",scaleList:rt,scrollToTime:N()().add(1,"day").toString(),scrollToPostion:{x:1e4,y:1e4},hideHeader:!1,hideSecondGantt:!1,arrayKeys:["gtArray","error"],scrollToY:0,positionB:{},positionA:{}}},watch:{rowNum:"updateData",colNum:"updateData",times:"updateData",scrollToY:function(t){this.positionA={x:t}}},mounted:function(){this.updateData()},methods:{updateData:function(){this.datasA=at(this.rowNum,this.colNum,this.times),this.datasB=at(this.rowNum,this.colNum,this.times)},updateTimeLines:function(t,e){this.timeLines=[{time:t},{time:e,color:"#747e80"}]},scrollLeftA:function(t){this.positionB={x:t}},scrollLeftB:function(t){this.positionA={x:t}}}},lt=nt,st=(i("0842"),Object(j["a"])(lt,S,H,!1,null,"1a2f2191",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-chart",on:{"&wheel":function(e){return t.wheelHandle(e)}}},[i("div",{staticClass:"gantt-container",style:{height:"calc(100% - "+t.scrollXBarHeight+"px)",width:"calc(100% - "+t.scrollYBarWidth+"px)"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideHeader,expression:"!hideHeader"}],staticClass:"gantt-header",style:{width:"calc(100% + "+t.scrollYBarWidth+"px)"}},[i("div",{staticClass:"gantt-header-title",style:{"line-height":t.titleHeight+"px",height:t.titleHeight+"px",width:t.titleWidth+"px"}},[t._t("title",[t._v("welcome v-gantt-chart")])],2),i("div",{ref:"headerTimeline",staticClass:"gantt-header-timeline"},[i("div",{staticClass:"gantt-timeline-wrapper",style:{width:t.totalWidth+t.scrollYBarWidth+"px"}},[i("timeline",{attrs:{start:t.start,end:t.end,cellWidth:t.cellWidth,titleHeight:t.titleHeight,scale:t.scale}})],1)])]),i("div",{staticClass:"gantt-body",style:{height:"calc(100% - "+t.actualHeaderHeight+"px)"}},[i("div",{staticClass:"gantt-table"},[i("div",{ref:"marklineArea",staticClass:"gantt-markline-area",style:{marginLeft:t.titleWidth+"px"}},[t.showCurrentTime?i("CurrentTime",{attrs:{getPositonOffset:t.getPositonOffset}}):t._e(),t._l(t.timeLines,(function(e,a){return i("mark-line",{key:a,attrs:{markLineTime:e.time,getPositonOffset:t.getPositonOffset,color:e.color}})}))],2),i("div",{ref:"leftbarWrapper",staticClass:"gantt-leftbar-wrapper",style:{width:t.titleWidth+"px",height:"calc(100% + "+t.scrollXBarHeight+"px)"}},[i("LeftBar",{style:{height:t.totalHeight+t.scrollXBarHeight+"px"},attrs:{datas:t.datas,dataKey:t.dataKey,scrollTop:t.scrollTop,heightOfRenderAera:t.heightOfRenderAera,widthOfRenderAera:t.widthOfRenderAera,cellHeight:t.cellHeight},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return[t._t("left",null,{data:i})]}}],null,!0)})],1),i("div",{ref:"blocksWrapper",staticClass:"gantt-blocks-wrapper"},[i("blocks",{style:{width:t.totalWidth+"px"},attrs:{scrollTop:t.scrollTop,scrollLeft:t.scrollLeft,heightOfRenderAera:t.heightOfRenderAera,widthOfRenderAera:t.widthOfRenderAera,arrayKeys:t.arrayKeys,itemKey:t.itemKey,dataKey:t.dataKey,datas:t.datas,cellWidth:t.cellWidth,cellHeight:t.cellHeight,scale:t.scale,getPositonOffset:t.getPositonOffset,getWidthAbout2Times:t.getWidthAbout2Times,customGenerateBlocks:t.customGenerateBlocks,startTimeOfRenderArea:t.startTimeOfRenderArea,endTimeOfRenderArea:t.endTimeOfRenderArea},scopedSlots:t._u([t.customGenerateBlocks?{key:"default",fn:function(e){var i=e.data,a=e.getPositonOffset,r=e.getWidthAbout2Times,n=e.isInRenderingTimeRange,l=e.isAcrossRenderingTimeRange;return[t._t("block",null,{data:i,getPositonOffset:a,getWidthAbout2Times:r,isInRenderingTimeRange:n,isAcrossRenderingTimeRange:l,startTimeOfRenderArea:t.startTimeOfRenderArea,endTimeOfRenderArea:t.endTimeOfRenderArea})]}}:{key:"default",fn:function(e){var i=e.data,a=e.item;return[t._t("block",null,{data:i,item:a})]}}],null,!0)})],1)])])]),i("div",{ref:"scrollYBar",staticClass:"gantt-scroll-y",style:{width:t.scrollYBarWidth+"px",height:"calc(100% - "+t.actualHeaderHeight+"px",marginTop:t.actualHeaderHeight+"px"},on:{"&scroll":function(e){return t.syncScrollY(e)}}},[i("div",{style:{height:t.totalHeight+"px"}})]),i("div",{ref:"scrollXBar",staticClass:"gantt-scroll-x",style:{height:t.scrollXBarHeight+"px",width:"calc(100% - "+t.titleWidth+"px )",marginLeft:t.titleWidth+"px"},on:{"&scroll":function(e){return t.syncScrollX(e)}}},[i("div",{style:{width:t.totalWidth+"px"}})])])},dt=[],ut=(i("99af"),i("caad"),i("9129"),i("2532"),i("159b"),i("6dd8")),ft=(i("a15b"),[1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440]);function ht(t){if(!ft.includes(t))throw new RangeError("错误的scale值，输入值为".concat(t,",可用的scale值为").concat(ft.join(",")));return!0}function mt(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;ht(i);var a=t.clone(),r=i/60;return i>60?(e=Math.floor(t.hour()/r),a=a.hour(e*r).minute(0).second(0)):(e=Math.floor(t.minute()/i),a=a.minute(e*i).second(0)),a}function pt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60;if(t.isAfter(e))throw new TypeError("错误的参数顺序，函数calcScalesAbout2Times的第一个时间参数必须大于第二个时间参数");ht(i);var a=mt(t,i),r=0;while(!a.isAfter(e))r++,a=a.add(i,"minute");return r}function gt(t){return void 0===t||null===t}function bt(t){return void 0!==t&&null!==t}function vt(t){console.warn(t)}var yt=function(){var t={},e={};return function(i,a){return t[i]!==a&&(t[i]=a,e[i]=kt(a)),e[i]}}();function xt(t,e,i){var a=i.scale,r=i.cellWidth,n=yt("pStart",t),l=kt(e);return wt(n,l)/a*r}function Tt(t,e,i){var a=i.scale,r=i.cellWidth,n=yt("pStart",t),l=yt("pBeginTimeOfTimeLine",e);return wt(l,n)/a*r}function kt(t){return new Date(t)}function wt(t,e){var i=e.getTime()-t.getTime();return i/1e3/60}function At(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=t,r=!0;return function(){var t=arguments,n=this;return r?(a.apply(n,t),r=!1):!e&&void(e=setTimeout((function(){clearTimeout(e),e=null,a.apply(n,t)}),i))}}var _t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-timeline",style:{"margin-left":-t.cellWidth/2+"px"}},t._l(t.getDays,(function(e,a){return i("div",{key:a,staticClass:"gantt-timeline-block",style:{width:t.getTimeScales(e).length*t.cellWidth+"px"}},[i("div",{staticClass:"gantt-timeline-day ",style:t.heightStyle},[t._v(" "+t._s(e.format("MM/DD"))+" ")]),i("div",{staticClass:"gantt-timeline-scale ",style:t.heightStyle},t._l(t.getTimeScales(e),(function(e,a){return i("div",{key:a,style:t.cellWidthStyle},[t._v(" "+t._s(e)+" ")])})),0)])})),0)},Rt=[],Ot=(i("a4d3"),i("e01a"),Symbol()),St=Symbol(),Ht=Symbol();function Lt(t,e){return t.isSame(e,"day")}var Wt={name:"Timeline",props:{start:{type:N.a},end:{type:N.a},cellWidth:{type:Number},titleHeight:{type:Number},scale:{type:Number}},computed:{getDays:function(){for(var t=[],e=this.start,i=this.end;!Lt(e,i);e=e.add(1,"day"))t.push(e);return t.push(e),t},cellWidthStyle:function(){return{width:"".concat(this.cellWidth,"px")}},heightStyle:function(){return{height:this.titleHeight/2+"px","line-height":this.titleHeight/2+"px"}}},methods:{getTimeScales:function(t){var e=this.start,i=this.end;return Lt(t,e)?this.generateTimeScale(Ot):Lt(t,i)?this.generateTimeScale(Ht):this.generateTimeScale(St)},generateTimeScale:function(t){var e,i,a=[],r=this.start,n=this.end,l=this.scale;switch(t){case Ot:e=mt(r,l),i=Lt(r,n)?n:r.endOf("day");break;case Ht:e=n.startOf("day"),i=n;break;case St:e=r.startOf("day"),i=r.endOf("day");break;default:throw new TypeError("错误的计算类型")}while(!e.isAfter(i))l>=60?a.push(e.format("HH")):a.push(e.format("HH:mm")),e=e.add(l,"minute");return a}}},Bt=Wt,Nt=Object(j["a"])(Bt,_t,Rt,!1,null,null,null),Ct=Nt.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mark-line",{attrs:{markLineTime:t.currentTime,getPositonOffset:t.getPositonOffset,color:"rgba(255,0,0,.4)"}})},Dt=[],Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"gantt-markline",style:{"background-color":t.color,left:t.getPosition()+"px"}},[i("div",{staticClass:"gantt-markline-label",style:{"background-color":t.color}},[t._v(" "+t._s(t.dayjs(t.markLineTime).format("HH:mm:ss"))+" ")])])},Mt=[],jt={name:"MarkLine",props:{markLineTime:{validator:function(t){return N()(t).isValid()}},color:{type:String,default:"#0ca30a"},getPositonOffset:{type:Function,required:!0}},data:function(){return{visible:!1,dayjs:N.a}},methods:{getPosition:function(){return null==this.markLineTime?(this.visible=!1,0):(this.visible=!0,this.getPositonOffset(this.markLineTime))}}},zt=jt,Et=Object(j["a"])(zt,Kt,Mt,!1,null,null,null),It=Et.exports,$t={name:"CurrentTime",components:{MarkLine:It},props:{getPositonOffset:{type:Function,required:!0}},data:function(){return{currentTime:N()().toString()}},created:function(){var t=this,e=setInterval((function(){t.currentTime=N()().toString()}),1e3);this.$once("hook:beforeDestroy",(function(){clearInterval(e)}))}},Xt=$t,Yt=Object(j["a"])(Xt,Pt,Dt,!1,null,null,null),Gt=Yt.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-leftbar"},[i("div",{staticClass:"gantt-leftbar-item gantt-block-top-space",style:{height:t.topSpace+"px"}}),t._l(t.showDatas,(function(e,a){return i("div",{key:t.dataKey?e[t.dataKey]:a,staticClass:"gantt-leftbar-item",style:t.cellHeightStyle},[t._t("default",[i("div",{staticClass:"gantt-leftbar-defalutItem"},[t._v("need slot")])],{data:e})],2)}))],2)},Vt=[],qt=(i("fb6a"),{props:{scrollTop:{type:Number,required:!0},heightOfRenderAera:{type:Number,required:!0},cellHeight:{type:Number,required:!0},datas:{type:Array,required:!0}},data:function(){return{oldTopIndex:0,preload:1,startRenderNum:0,endRenderNum:0}},computed:{blockHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},currentTopIndex:function(){return Math.ceil(this.scrollTop/this.cellHeight)},showDatas:function(){var t=this.startRenderNum,e=this.endRenderNum,i=this.datas;return i.slice(t,e)},topSpace:function(){var t=this.oldTopIndex,e=this.cellHeight,i=this.preload,a=t-i>0?t-i:0;return a*e}},watch:{currentTopIndex:function(t){var e=this.oldTopIndex,i=this.preload;if(0!==i){if(e!==t){var a=1;(t<e-(i-a)||t>e+(i-a))&&(this.oldTopIndex=t,this.sliceData())}}else this.sliceData()},datas:function(){this.sliceData()},heightOfRenderAera:function(){this.sliceData()},cellHeight:function(){this.sliceData()}},created:function(){this.sliceData()},methods:{sliceData:function(){var t=this.heightOfRenderAera,e=this.currentTopIndex,i=this.cellHeight,a=this.preload;return 0===t||0===i?(this.endRenderNum=0,void(this.startRenderNum=0)):0===a?(this.endRenderNum=1/0,void(this.startRenderNum=-1/0)):(this.endRenderNum=e+Math.ceil(t/i)+a,void(this.startRenderNum=e-a>0?e-a:0))}}}),Qt=qt,Jt={name:"LeftBar",mixins:[Qt],props:{dataKey:String,datas:{type:Array,required:!0}},computed:{cellHeightStyle:function(){return{height:"".concat(this.cellHeight,"px")}}}},Ut=Jt,Zt=Object(j["a"])(Ut,Ft,Vt,!1,null,null,null),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gantt-blocks",style:{height:t.blockHeight+"px"}},[i("div",{staticClass:"gantt-block gantt-block-top-space",style:{height:t.topSpace+"px"}}),t._l(t.showDatas,(function(e,a){return i("div",{key:t.dataKey?e[t.dataKey]:a,staticClass:"gantt-block",style:t.blockStyle},[t.customGenerateBlocks?[t._t("default",[t._v("need slot ")],{data:e,getPositonOffset:t.getPositonOffset,getWidthAbout2Times:t.getWidthAbout2Times,isInRenderingTimeRange:t.isInRenderingTimeRange,isAcrossRenderingTimeRange:t.isAcrossRenderingTimeRange})]:t._l(t.concatArray(e),(function(a,r){return i("div",{key:t.itemKey?a[t.itemKey]:r,staticClass:"gantt-block-item",style:{left:t.getPosition(a)+"px",width:t.getWidth(a)+"px"}},[t.isInRenderingTimeRangeOrIsAcrossRenderingTimeRange(a.start,a.end)?[t._t("default",[i("div",{staticClass:"gantt-block-defaultBlock"},[t._v("need slot")])],{data:e,item:a})]:t._e()],2)}))],2)}))],2)},ie=[],ae={name:"Blocks",mixins:[Qt],props:{dataKey:String,itemKey:String,arrayKeys:{type:Array},scrollLeft:Number,cellWidth:{type:Number,required:!0},scale:{type:Number,required:!0},widthOfRenderAera:{type:Number,required:!0},endTimeOfRenderArea:[Number,null],startTimeOfRenderArea:[Number,null],getPositonOffset:Function,getWidthAbout2Times:Function,customGenerateBlocks:Boolean},computed:{renderAarrys:function(){var t=this.arrayKeys;return t.length>0?t:["gtArray"]},blockStyle:function(){return{backgroundSize:"".concat(this.cellWidth,"px ").concat(this.cellHeight,"px"),height:"".concat(this.cellHeight,"px")}}},methods:{concatArray:function(t){return this.renderAarrys.reduce((function(e,i){return Array.isArray(t[i])?e.concat(t[i]):e}),[])},isInRenderingTimeRangeOrIsAcrossRenderingTimeRange:function(t,e){if(0===this.heightOfRenderAera)return!1;var i=this.startTimeOfRenderArea,a=this.endTimeOfRenderArea;if(gt(i)||gt(a))return!1;var r=new Date(t).getTime(),n=new Date(e).getTime();return i>=r&&n>=a||(i<=r&&r<=a||i<=n&&n<=a)},isInRenderingTimeRange:function(t){if(0===this.heightOfRenderAera)return!1;var e=this.startTimeOfRenderArea,i=this.endTimeOfRenderArea;if(gt(e)||gt(i))return!1;var a=new Date(t).getTime();return e<=a&&a<=i},isAcrossRenderingTimeRange:function(t,e){if(0===this.heightOfRenderAera)return!1;var i=this.startTimeOfRenderArea,a=this.endTimeOfRenderArea;if(gt(i)||gt(a))return!1;var r=new Date(t).getTime(),n=new Date(e).getTime();return i>=r&&n>=a},getWidth:function(t){return gt(t.start)||gt(t.end)?0:this.getWidthAbout2Times(t.start,t.end)},getPosition:function(t){return gt(t.start)?(vt("错误，该数据项不含start 值 ".concat(JSON.stringify(t),"，无法计算偏移值。")),0):this.getPositonOffset(t.start)}}},re=ae,ne=Object(j["a"])(re,ee,ie,!1,null,null,null),le=ne.exports,se={name:"Gantt",components:{Timeline:Ct,LeftBar:te,Blocks:le,MarkLine:It,CurrentTime:Gt},props:{startTime:{default:function(){return N()()},validator:function(t){var e=N()(t).isValid();return e||vt("非法的开始时间 ".concat(t)),e}},endTime:{default:function(){return N()()},validator:function(t){var e=N()(t).isValid();return e||vt("非法的结束时间 ".concat(t)),e}},cellWidth:{type:Number,default:50},cellHeight:{type:Number,default:20},titleHeight:{type:Number,default:40},titleWidth:{type:Number,default:200},scale:{type:Number,default:60,validator:function(t){return ft.includes(t)}},datas:{type:Array,default:function(){return[]}},dataKey:{type:String,default:void 0},itemKey:{type:String,default:void 0},arrayKeys:{type:Array,default:function(){return[]}},showCurrentTime:{type:Boolean,default:!1},timeLines:{type:Array},scrollToTime:{validator:function(t){return N()(t).isValid()}},scrollToPostion:{validator:function(t){var e=!bt(t.x)||!Number.isNaN(t.x),i=!bt(t.y)||!Number.isNaN(t.y);return!(!e&&!i)||(vt("scrollToPostion x或y 有值为非Number类型"),!1)}},hideHeader:{type:Boolean,default:!1},hideXScrollBar:{type:Boolean,default:!1},hideYScrollBar:{type:Boolean,default:!1},customGenerateBlocks:{type:Boolean,default:!1}},data:function(){return{selector:{gantt_leftbar:{},gantt_table:{},gantt_scroll_y:{},gantt_timeline:{},gantt_scroll_x:{},gantt_markArea:{}},scrollTop:0,scrollLeft:0,heightOfRenderAera:0,widthOfRenderAera:0,startTimeOfRenderArea:null,endTimeOfRenderArea:null,scrollBarWitdh:17}},computed:{start:function(){return N()(this.startTime)},end:function(){var t=this.start,e=this.widthOfRenderAera,i=this.scale,a=this.cellWidth,r=N()(this.endTime),n=pt(t,r,i)*a;return(t.isAfter(r)||n<=e)&&(r=t.add(e/a*i,"minute")),r},totalWidth:function(){var t=this.cellWidth,e=this.totalScales;return t*e},totalScales:function(){var t=this.start,e=this.end,i=this.scale;return pt(t,e,i)},totalHeight:function(){var t=this.datas,e=this.cellHeight;return t.length*e},beginTimeOfTimeLine:function(){var t=mt(this.start,this.scale);return t},beginTimeOfTimeLineToString:function(){return this.beginTimeOfTimeLine.toString()},avialableScrollLeft:function(){var t=this.totalWidth,e=this.widthOfRenderAera;return t-e-1},avialableScrollTop:function(){var t=this.totalHeight,e=this.heightOfRenderAera;return t-e-1},scrollXBarHeight:function(){return this.hideXScrollBar?0:this.scrollBarWitdh},scrollYBarWidth:function(){return this.hideYScrollBar?0:this.scrollBarWitdh},actualHeaderHeight:function(){return this.hideHeader?0:this.titleHeight}},watch:{scrollLeft:function(){this.getTimeRange()},widthOfRenderAera:function(){this.getTimeRange()},cellWidth:function(){this.getTimeRange()},scrollToTime:{handler:function(t){var e=this;if(t){var i=this.start,a=this.end,r=N()(t);if(r.isAfter(i)&&r.isBefore(a)){var n=this.getPositonOffset(t);this.$nextTick((function(){return e.syncScrollX({target:{scrollLeft:n}},!0)}))}else vt("当前滚动至".concat(t,"不在").concat(i,"和").concat(a,"的范围之内"))}},immediate:!0},scrollToPostion:{handler:function(t){var e=this;if(t){var i=Number.isNaN(t.x)?void 0:t.x,a=Number.isNaN(t.y)?void 0:t.y;this.$nextTick((function(){bt(i)&&i!==e.scrollLeft&&e.syncScrollX({target:{scrollLeft:i}},!0),bt(a)&&a!==e.scrollTop&&e.syncScrollY({target:{scrollTop:a}},!0)}))}},immediate:!0}},mounted:function(){var t=this;this.getSelector();var e=At((function(e){e.forEach((function(e){var i=e.contentRect;t.heightOfRenderAera=i.height,t.widthOfRenderAera=i.width}))})),i=new ut["default"](e);i.observe(this.$refs.blocksWrapper)},methods:{getTimeRange:function(){if(0!==this.heightOfRenderAera){var t=this.beginTimeOfTimeLine,e=this.scrollLeft,i=this.cellWidth,a=this.scale,r=this.widthOfRenderAera;this.startTimeOfRenderArea=t.add(e/i*a,"minute").toDate().getTime(),this.endTimeOfRenderArea=t.add((e+r)/i*a,"minute").toDate().getTime()}},getWidthAbout2Times:function(t,e){var i={scale:this.scale,cellWidth:this.cellWidth};return xt(t,e,i)},getPositonOffset:function(t){var e={scale:this.scale,cellWidth:this.cellWidth};return Tt(t,this.beginTimeOfTimeLineToString,e)},getSelector:function(){this.selector.gantt_leftbar=this.$refs.leftbarWrapper,this.selector.gantt_table=this.$refs.blocksWrapper,this.selector.gantt_scroll_y=this.$refs.scrollYBar,this.selector.gantt_timeline=this.$refs.headerTimeline,this.selector.gantt_scroll_x=this.$refs.scrollXBar,this.selector.gantt_markArea=this.$refs.marklineArea},wheelHandle:function(t){var e=this,i=t.deltaX,a=t.deltaY;this.$nextTick((function(){var t=e.scrollTop,r=e.scrollLeft,n=e.avialableScrollLeft,l=e.avialableScrollTop;0!==a&&(t+a>=l&&t!==l?e.syncScrollY({target:{scrollTop:l}},!0):t+a<0&&0!==t?e.syncScrollY({target:{scrollTop:0}},!0):e.syncScrollY({target:{scrollTop:t+a}},!0)),0!==i&&(r+i>=n&&r!==n?e.syncScrollX({target:{scrollLeft:n}},!0):r+i<0&&0!==r?e.syncScrollX({target:{scrollLeft:0}},!0):e.syncScrollX({target:{scrollLeft:r+i}},!0))}))},syncScrollY:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.selector,a=i.gantt_leftbar,r=i.gantt_table,n=i.gantt_scroll_y,l=t.target.scrollTop;e?n.scrollTop=l:(a.scrollTop=l,r.scrollTop=l,this.scrollTop=l,this.$emit("scrollTop",l))},syncScrollX:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.selector,a=i.gantt_table,r=i.gantt_timeline,n=i.gantt_markArea,l=i.gantt_scroll_x,s=t.target.scrollLeft;e?l.scrollLeft=s:(a.scrollLeft=s,r.scrollLeft=s,n.style.left="-"+s+"px",this.scrollLeft=s,this.$emit("scrollLeft",s))}}},oe=se,ce=(i("c3ab"),Object(j["a"])(oe,ct,dt,!1,null,null,null)),de=ce.exports,ue={install:function(t,e){t.component("v-gantt-chart",de)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(ue);var fe=ue;i("0fae");O["default"].config.productionTip=!1,O["default"].use(fe),O["default"].use(R.a),O["default"].use(A.a),O["default"].use(k.a),O["default"].use(x.a),O["default"].use(v.a),O["default"].use(g.a),O["default"].use(m.a),O["default"].use(f.a),O["default"].use(d.a),O["default"].use(o.a),O["default"].use(l.a),O["default"].use(r.a),new O["default"]({render:function(t){return t(ot)}}).$mount("#app")},"58a6":function(t,e,i){var a=i("5b0f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("1e9b8589",a,!0,{sourceMap:!1,shadowMode:!1})},"5aab":function(t,e,i){e=t.exports=i("24fb")(!1);var a=i("1de5"),r=i("ea92"),n=a(r);e.push([t.i,".gantt-chart{position:relative;overflow:hidden;outline:1px solid #f0f0f0}.gantt-chart,.gantt-container{height:100%;width:100%}.gantt-header{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;outline:1px solid #f0f0f0}.gantt-header-title{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%;background:#747e80;color:#fff;text-align:center}.gantt-header-timeline{overflow:hidden}.gantt-body,.gantt-timeline{position:relative}.gantt-timeline{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex}.gantt-timeline-day{overflow:hidden;font-weight:700;color:#777}.gantt-timeline-scale{display:-webkit-box;display:-ms-flexbox;display:flex}.gantt-timeline-scale>div{height:100%;font-size:.8rem;font-weight:700;color:#777}.gantt-timeline-block:first-child .gantt-timeline-scale div:first-child{visibility:hidden}.gantt-leftbar{width:100%;height:100%;background:#fff;color:#777;font-size:.8rem}.gantt-leftbar-wrapper{-webkit-box-flex:0;-ms-flex:none;flex:none;position:relative;overflow:hidden;background:#fff;outline:1px solid #f0f0f0;z-index:100}.gantt-leftbar-defalutItem{width:100%;height:100%;outline:1px solid #f0f0f0}.gantt-table{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.gantt-markline-area{position:absolute;z-index:99}.gantt-markline{position:absolute;z-index:100;width:2px;height:100vh}.gantt-markline-label{padding:3px;float:left;color:#fff;font-size:.7rem}.gantt-blocks-wrapper{overflow:hidden}.gantt-block{position:relative;background-image:url("+n+");background-repeat:repeat}.gantt-block-container{position:relative;height:100%}.gantt-block-item{position:absolute;height:100%}.gantt-block-defaultBlock{width:100%;height:100%;outline:1px solid #f0f0f0;background:#f0f0f0}.gantt-scroll-y{overflow-y:scroll;position:absolute;z-index:1000;top:0;right:0;height:100%;width:17px}.gantt-scroll-y>div{width:17px}.gantt-scroll-x{overflow-x:scroll;position:absolute;z-index:1000;left:0;bottom:0;width:100%;height:17px}.gantt-scroll-x>div{height:17px}",""])},"5b0f":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,"body[data-v-1a2f2191]{font:12px;margin:0;padding:0;width:100%;height:100%}#app[data-v-1a2f2191]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 10px;height:calc(100vh - 2px)}label[data-v-1a2f2191]{margin-left:10px}input[data-v-1a2f2191]{width:40px;height:20px;vertical-align:middle}input[type=range][data-v-1a2f2191]{width:100px}.container[data-v-1a2f2191]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}[data-v-1a2f2191] .el-slider{width:100px}",""])},"67bf":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".middle[data-v-1f42d51a]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;padding-left:5px}.runTime[data-v-1f42d51a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.plan[data-v-1f42d51a],.runTime[data-v-1f42d51a]{display:-webkit-box;display:-ms-flexbox;display:flex}.plan[data-v-1f42d51a]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:80%;border:1px solid #f0f0f0;border-radius:5px;color:#333;padding-left:5px;font-size:.8rem}.detail .header[data-v-1f42d51a]{text-align:center;font-size:1rem}.detail ul[data-v-1f42d51a]{list-style:none;padding:0}.detail ul li span[data-v-1f42d51a]{display:inline-block;width:80px;color:#777;font-size:.8rem}.detail ul li span[data-v-1f42d51a]:first-child{text-align:right}",""])},c3ab:function(t,e,i){"use strict";var a=i("c663"),r=i.n(a);r.a},c4a0:function(t,e,i){var a=i("67bf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("1848b8e0",a,!0,{sourceMap:!1,shadowMode:!1})},c663:function(t,e,i){var a=i("5aab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("499e").default;r("6f59555e",a,!0,{sourceMap:!1,shadowMode:!1})},e1a4:function(t,e,i){"use strict";var a=i("3d88"),r=i.n(a);r.a},ea92:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAXCAYAAACVp2gDAAAAbElEQVRYR+3SMQ3AMBAEQRtZoAXwk7DCYVN5DsAWo9vLMoGZeXdWE1pA4xMABRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkPBRoLxDkP/QP0U427N+eeAzRXSxcMkEWCAAAAAElFTkSuQmCC"},fe1f:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".name[data-v-5622c88e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;height:100%;width:100%;padding:0 5px 0 0;border-radius:8px 0 0 8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.colorBar[data-v-5622c88e]{width:10px;height:100%}.carId[data-v-5622c88e]{-webkit-box-flex:1;-ms-flex:1;flex:1}.type[data-v-5622c88e]{padding:0 5px 0 0;font-size:1.2rem}",""])}});
//# sourceMappingURL=app.40194642.js.map