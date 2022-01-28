(this["webpackJsonpsubtitle-editor"]=this["webpackJsonpsubtitle-editor"]||[]).push([[0],{50:function(t,e,n){},51:function(t,e,n){},54:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(6),s=n.n(i),c=n(25),r=n.n(c),o=n(2),l=n(3),u=n(5),d=n(4),h=n(26),p=n(10),b=n(31),j=n.n(b),f=n(41),m=n(7),v=(n(50),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"d-inline-block "+this.props.className,children:[Object(a.jsx)("button",{className:"btn circle-btn add-caption-btn "+(this.props.disabled?"disabled":""),onClick:this.props.onClick,children:Object(a.jsx)("span",{className:this.props.iconClassName})}),this.props.text?Object(a.jsx)("div",{className:"badge",children:Object(a.jsxs)("span",{children:[" ",this.props.text," "]})}):""]})})}}]),n}(s.a.Component)),O=(n(51),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state=void 0,a.fileInput=void 0,a.state={filename:""},a.fileInput=Object(i.createRef)(),a.changeHandler=a.changeHandler.bind(Object(m.a)(a)),a.redirectToInput=a.redirectToInput.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"changeHandler",value:function(t){var e,n=t.target;if(this.props.onChange&&(null===(e=n.files)||void 0===e?void 0:e.length)){var a=n.files[0];this.props.onChange(a),this.setState({filename:a.name})}}},{key:"redirectToInput",value:function(){var t;null===(t=this.fileInput.current)||void 0===t||t.click()}},{key:"render",value:function(){var t=this,e=this.state.filename,n=e?"[".concat(e,"] click to rechoose"):"choose a file";return Object(a.jsxs)("div",{className:"form-group file-input-wrapper",children:[Object(a.jsx)("input",{type:"file",ref:this.fileInput,className:"d-none",onChange:this.changeHandler}),Object(a.jsx)("button",{className:"rounded font-weight-bold btn btn-info w-100 virtual-file-input",onClick:function(e){return t.redirectToInput()},children:Object(a.jsxs)("span",{children:[" ",n," "]})})]})}}]),n}(s.a.Component));function g(t){var e=new CustomEvent("toast",{detail:t});window.dispatchEvent(e)}var C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={isOpen:!1,timerId:0,lastMessage:{kind:"success",message:"",duration:0}},a.disableToast=a.disableToast.bind(Object(m.a)(a)),a.cancelToast=a.cancelToast.bind(Object(m.a)(a)),a.cancelTimer=a.cancelTimer.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"cancelTimer",value:function(){this.state.timerId&&(clearTimeout(this.state.timerId),this.setState({timerId:0}))}},{key:"cancelToast",value:function(){this.cancelTimer(),console.log("errrrr"),this.setState({isOpen:!1})}},{key:"disableToast",value:function(t){this.cancelTimer(),this.setState({timerId:window.setTimeout(this.cancelToast,t)})}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("toast",(function(e){t.setState({lastMessage:e.detail,isOpen:!0}),t.disableToast(e.detail.duration)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("toast")}},{key:"render",value:function(){var t=this.state;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"fixed-bottom m-4 alert "+"alert-".concat(t.lastMessage.kind," ").concat(t.isOpen?"":"d-none"),children:[Object(a.jsx)("button",{className:"close",onClick:this.cancelToast,children:"\xd7"}),Object(a.jsx)("strong",{children:t.lastMessage.message})]})})}}]),n}(s.a.Component),x=function(){function t(e){Object(o.a)(this,t),this.data=void 0,this.data=e}return Object(l.a)(t,[{key:"getData",value:function(){return this.data}},{key:"setData",value:function(t){this.data=t}}]),t}(),y={videoUrl:new x(""),subtitles:new x([])};function k(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=1;n<=e;){var a=Math.pow(10,n);if(!(t>=a))break;n++}return"0".repeat(e-n)+String(t)}function T(t,e){var n=Math.floor(t%1*1e3),a=Math.floor(t%60),i=Math.floor(t%3600/60),s=Math.floor(t/3600);return"minute"===e?"".concat(k(i),":").concat(k(a)):"minute+ms"===e?"".concat(k(i),":").concat(k(a),".").concat(k(n,3)):"complete"===e?"".concat(k(s),":").concat(k(i),":").concat(k(a),",").concat(k(n,3)):""}function N(t){return 60*Number(t.slice(0,2))*60+60*Number(t.slice(3,5))+Number(t.slice(6,8))+Number(t.slice(9))/1e3}var w=n(20);function R(t,e){return t.start>e.start?1:e.start>t.start?-1:0}n(54);var S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={subtitleUrl:"",videoUrl:"",canPass:!1},a.handler=a.handler.bind(Object(m.a)(a)),a.loadCaptions=a.loadCaptions.bind(Object(m.a)(a)),a.checkValidation=a.checkValidation.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"loadCaptions",value:function(){var t=Object(f.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.subtitleUrl){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,fetch(this.state.subtitleUrl);case 4:return e=t.sent,t.next=7,e.text();case 7:n=t.sent,y.subtitles.setData((a=n,Array.from(a.matchAll(/[0-9]+\n([,0-:]{12}) \x2D\x2D> ([,0-:]{12})\n([\s\S]+?)(?=[0-9]+\n[,0-:]{12}|$)/g)).map((function(t){return{start:N(t[1]),end:N(t[2]),content:t[3].trim(),hash:Object(w.v4)()}}))));case 9:case"end":return t.stop()}var a}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handler",value:function(t,e){var n=URL.createObjectURL(t);"video"===e?(y.videoUrl.setData(n),this.setState({videoUrl:n},this.loadCaptions)):this.setState({subtitleUrl:n},this.loadCaptions)}},{key:"checkValidation",value:function(){this.state.videoUrl?this.setState({canPass:!0}):g({kind:"danger",message:"select a video first",duration:5e3})}},{key:"render",value:function(){var t=this;return this.state.canPass?Object(a.jsx)(p.a,{to:"/studio"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"page-title",children:"Intro"}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"alert alert-secondary",children:["consider\u200c ",Object(a.jsx)(h.b,{to:"/help",children:"\u200chelp page\u200c"})," for learning app features & shortcuts"]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"video file:"}),Object(a.jsx)(O,{onChange:function(e){return t.handler(e,"video")}})]}),Object(a.jsxs)("div",{className:"alert alert-info",children:["you can check supported video formats",Object(a.jsx)("a",{href:"https://en.wikipedia.org/wiki/HTML5_video",target:"blank",children:" here "})]}),Object(a.jsxs)("div",{className:"mt-3",children:[Object(a.jsx)("span",{children:"subtitle file:"}),Object(a.jsx)(O,{onChange:function(e){return t.handler(e,"subtitle")}})]}),Object(a.jsx)("div",{className:"alert alert-warning",children:"if you don't select a subtitle file, we make new one"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("button",{className:"btn btn-success font-weight-bold",onClick:this.checkValidation,children:"go to studio!"})})]}),Object(a.jsx)("footer",{className:"p-2 w-100 d-flex justify-content-center",children:Object(a.jsxs)("a",{href:"https://github.com/hamidb80/subtitle-edtior/",target:"blank",className:"d-flex align-items-center",children:[Object(a.jsx)("span",{className:"fab fa-github github-logo"}),Object(a.jsx)("span",{className:"pb-1 mx-2",children:" project link on github "})]})})]})}}]),n}(s.a.Component),D=n(13),E=n(23),H=n(43),I=n.n(H),U=n(9),P=function(t,e){return t>e?1:-1},_=(n(65),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).inputRef=void 0,a.state={lastCaption:null,newCaption:null,is_ltr:!0},a.inputRef=s.a.createRef(),a.onCaptionContentChanged=a.onCaptionContentChanged.bind(Object(m.a)(a)),a.onCaptionTimeRangeChanged=a.onCaptionTimeRangeChanged.bind(Object(m.a)(a)),a.handleCaptionChange=a.handleCaptionChange.bind(Object(m.a)(a)),a.isCapInTimeRange=a.isCapInTimeRange.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(U.a)("alt+left",(function(){t.onCaptionTimeRangeChanged(-.5,0)})),Object(U.a)("ctrl+8",(function(e){e.preventDefault(),t.onCaptionTimeRangeChanged(null,0)})),Object(U.a)("ctrl+9",(function(e){e.preventDefault(),t.onCaptionTimeRangeChanged(0,null)})),Object(U.a)("ctrl+0",(function(e){e.preventDefault(),t.setState({is_ltr:!t.state.is_ltr})})),Object(U.a)("alt+right",(function(){t.onCaptionTimeRangeChanged(.5,0)})),Object(U.a)("tab+left",(function(e){e.preventDefault(),t.onCaptionTimeRangeChanged(0,-.5)})),Object(U.a)("tab+right",(function(e){e.preventDefault(),t.onCaptionTimeRangeChanged(0,.5)}))}},{key:"componentDidUpdate",value:function(){var t;if(!this.props.caption&&this.state.lastCaption||this.props.caption&&this.props.caption.hash!==(null===(t=this.state.lastCaption)||void 0===t?void 0:t.hash)){this.handleCaptionChange();var e=null===this.props.caption?null:Object(D.a)({},this.props.caption);this.setState({lastCaption:e?Object(D.a)({},e):null,newCaption:e?Object(D.a)({},e):null})}}},{key:"isCapInTimeRange",value:function(t){return t>=0&&t<=this.props.totalTime}},{key:"onCaptionContentChanged",value:function(t){var e=this.state.newCaption;null!==e&&this.setState({newCaption:Object(D.a)(Object(D.a)({},e),{},{content:t.target.value})})}},{key:"onCaptionTimeRangeChanged",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.state.newCaption;null!==n&&(null===t?n.start=this.props.currentTime:this.isCapInTimeRange(n.start+t)&&(n.start+=t),null===e?n.end=this.props.currentTime:this.isCapInTimeRange(n.end+e)&&(n.end+=e),n.start>n.end&&(0===e?n.end=n.start:n.start=n.end),this.setState({newCaption:n},this.handleCaptionChange))}},{key:"handleCaptionChange",value:function(){var t,e,n=this;if(null!==this.state.lastCaption&&null!==this.state.newCaption&&(t=this.state.lastCaption,e=this.state.newCaption,t.start!==e.start||t.end!==e.end||t.content!==e.content)){var a=this.state.lastCaption,i=Object(D.a)(Object(D.a)({},this.state.newCaption),{},{hash:Object(w.v4)()});this.setState({lastCaption:Object(D.a)({},i),newCaption:Object(D.a)({},i)},(function(){return n.props.onCaptionChanged(a,i)}))}}},{key:"render",value:function(){var t,e,n,i=this,s=this.props.caption;return s?null===(t=this.inputRef.current)||void 0===t||t.focus():null===(e=this.inputRef.current)||void 0===e||e.blur(),Object(a.jsxs)("div",{className:"caption-editor-wrapper",children:[s?Object(a.jsx)(A,{time:s.start,onChange:function(t){i.onCaptionTimeRangeChanged(t,0)}}):Object(a.jsx)(A,{time:0}),Object(a.jsxs)("div",{children:[Object(a.jsx)(v,{disabled:null===s,onClick:function(){return i.setState((function(t){return{is_ltr:!t.is_ltr}}))},iconClassName:"fas fa-align-"+(this.state.is_ltr?"left":"right")}),Object(a.jsx)("input",{type:"text",ref:this.inputRef,disabled:null===s,className:"form-control caption-editor "+(this.state.is_ltr?"ltr":"rtl"),value:(null===(n=this.state.newCaption)||void 0===n?void 0:n.content)||"",onChange:this.onCaptionContentChanged,onBlur:this.handleCaptionChange})]}),s?Object(a.jsx)(A,{time:s.end,onChange:function(t){i.onCaptionTimeRangeChanged(0,t)}}):Object(a.jsx)(A,{time:0})]})}}]),n}(s.a.Component)),V=(n(66),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).getCaptionContent=a.getCaptionContent.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"getCaptionContent",value:function(){var t=this.props.currentTime,e=this.props.captions.find((function(e){return t>=e.start&&t<=e.end}));return e?e.content:""}},{key:"render",value:function(){var t=this.getCaptionContent();return Object(a.jsx)("div",{className:"caption-group",children:""===t?"":Object(a.jsx)("div",{className:"caption",children:t})})}}]),n}(s.a.Component)),M=(n(67),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(t){var e=this.props.onSelectNewTime;if(e){var n=t.currentTarget;e((t.pageX-n.offsetLeft)/n.clientWidth*this.props.totalTime)}}},{key:"render",value:function(){if(void 0===this.props.totalTime)return"";var t=this.props.currentTime/this.props.totalTime*100,e=T(this.props.currentTime,"minute"),n=T(this.props.totalTime,"minute");return Object(a.jsxs)("div",{className:"timeline "+this.props.className,onClick:this.handleClick,children:[Object(a.jsxs)("div",{className:"progress",children:[Object(a.jsx)("div",{className:"progress-bar",style:{width:"".concat(t,"%")}}),Object(a.jsx)("div",{className:"cursor"})]}),Object(a.jsx)("div",{className:"time-text-wrapper",children:Object(a.jsxs)("div",{className:"time-text",children:[Object(a.jsxs)("span",{children:[" ",e," "]}),Object(a.jsx)("span",{children:" - "}),Object(a.jsxs)("span",{children:[" ",n," "]})]})})]})}}]),n}(s.a.Component)),z=(n(68),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).videoElementRef=void 0,a.timer=0,a.state=void 0,a.state={lastStart:0,showVideoControll:!1},a.videoElementRef=s.a.createRef(),a.onTimeUpdate=a.onTimeUpdate.bind(Object(m.a)(a)),a.onMouseMove=a.onMouseMove.bind(Object(m.a)(a)),a.onError=a.onError.bind(Object(m.a)(a)),a.setPlay=a.setPlay.bind(Object(m.a)(a)),a.isPlaying=a.isPlaying.bind(Object(m.a)(a)),a.disableVideoControllers=a.disableVideoControllers.bind(Object(m.a)(a)),a.onDurationChanges=a.onDurationChanges.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"onDurationChanges",value:function(){if(this.props.onDurationChanges){var t,e=(null===(t=this.videoElementRef.current)||void 0===t?void 0:t.duration)||0;this.props.onDurationChanges(e)}}},{key:"onTimeUpdate",value:function(t){if(this.props.onTimeUpdate){var e=t.currentTarget.currentTime;this.props.onTimeUpdate(e)}}},{key:"onMouseMove",value:function(t){this.timer&&clearTimeout(this.timer),this.setState({showVideoControll:!0}),this.timer=+setTimeout(this.disableVideoControllers,2e3)}},{key:"onError",value:function(t){this.props.onError&&this.props.onError(t)}},{key:"disableVideoControllers",value:function(){clearTimeout(this.timer),this.setState({showVideoControll:!1})}},{key:"setTime",value:function(t){var e=this.videoElementRef.current;e&&(e.currentTime=t)}},{key:"shootTime",value:function(t){var e=this.videoElementRef.current;if(e){var n=e.currentTime;this.setTime(n+t)}}},{key:"setPlay",value:function(t){var e,n;this.videoElementRef.current&&(t?null===(e=this.videoElementRef.current)||void 0===e||e.play():null===(n=this.videoElementRef.current)||void 0===n||n.pause())}},{key:"togglePlay",value:function(){this.setPlay(!this.isPlaying())}},{key:"isPlaying",value:function(){return Boolean(this.videoElementRef.current&&!this.videoElementRef.current.paused)}},{key:"render",value:function(){var t=this,e=this.isPlaying();return Object(a.jsx)("div",{className:"video-player "+(this.state.showVideoControll?"show ":""),onMouseMove:this.onMouseMove,onMouseOut:this.disableVideoControllers,children:Object(a.jsxs)("div",{className:"video-screen",onContextMenu:function(t){return t.preventDefault()},children:[Object(a.jsx)("video",{height:this.props.height,onTimeUpdate:this.onTimeUpdate,ref:this.videoElementRef,src:this.props.videoUrl,autoPlay:!1,loop:!1,onDurationChange:this.onDurationChanges,onError:function(e){return t.onError(e)}}),Object(a.jsxs)("div",{className:"video-state-controller",children:[Object(a.jsx)("div",{className:"part"}),Object(a.jsx)("div",{className:"part action-btn-group",children:Object(a.jsx)("div",{className:"action-btn play-pause",onClick:function(){return t.setPlay(!e)},children:Object(a.jsx)("span",{className:"icon fas fa-3x "+(e?"fa-pause":"fa-play")})})}),Object(a.jsx)("div",{className:"part"})]})]})})}}]),n}(s.a.Component)),F=n(17);n(69);function L(t,e){return t>=e[0]&&t<=e[1]}var Z=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).canvasRef=void 0,a.group=void 0,a.renderedRange=void 0,a.state={error:!1,lastScale:0,scale:0},a.canvasRef=s.a.createRef(),a.group=null,a.renderedRange=[-1,-1],a.captionSelectionHandler=a.captionSelectionHandler.bind(Object(m.a)(a)),a.drawTimeRuler=a.drawTimeRuler.bind(Object(m.a)(a)),a.initTimeRuler=a.initTimeRuler.bind(Object(m.a)(a)),a.updateRulerPosition=a.updateRulerPosition.bind(Object(m.a)(a)),a.updateRuler=a.updateRuler.bind(Object(m.a)(a)),a.setTimeFromPixels=a.setTimeFromPixels.bind(Object(m.a)(a)),a.zoom=a.zoom.bind(Object(m.a)(a)),a.zoomIn=a.zoomIn.bind(Object(m.a)(a)),a.zoomOut=a.zoomOut.bind(Object(m.a)(a)),a.isZoomInValid=a.isZoomInValid.bind(Object(m.a)(a)),a.isZoomOutValid=a.isZoomOutValid.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"captionSelectionHandler",value:function(t){this.props.onCaptionSelected(t)}},{key:"zoom",value:function(t){var e=this.state.scale+t;this.isZoomInValid(e)&&this.isZoomOutValid(e)&&this.setState({scale:e})}},{key:"isZoomInValid",value:function(t){return t<=100}},{key:"isZoomOutValid",value:function(t){return t>0}},{key:"zoomIn",value:function(){this.zoom(10)}},{key:"zoomOut",value:function(){this.zoom(-10)}},{key:"setTimeFromPixels",value:function(t){this.props.onSelectNewTime(this.props.currentTime-4+t/this.state.scale)}},{key:"initTimeRuler",value:function(){var t=new F.a.Stage({container:this.canvasRef.current,width:window.innerWidth,height:32}),e=new F.a.Layer;this.group=new F.a.Group,e.add(this.group),t.add(e),this.updateRuler()}},{key:"updateRuler",value:function(){var t=function(t,e,n,a){var i=n/e;return[Math.max(t-1*i,0),Math.min(t+3*i,a)]}(this.props.currentTime,this.state.scale,window.innerWidth,this.props.duration);this.drawTimeRuler([Math.floor(t[0]),Math.ceil(t[1])])}},{key:"drawTimeRuler",value:function(t){var e;null===(e=this.group)||void 0===e||e.destroyChildren();for(var n=t[0];n<=t[1];n++){var a,i,s={text:T(n,"minute"),x:this.state.scale*n-14,y:4,fontSize:13,fontFamily:"tahoma"},c=this.state.scale;if(c<20)n%5===0&&(null===(i=this.group)||void 0===i||i.add(new F.a.Text(s)));else if(c<30){var r;n%3===0&&(null===(r=this.group)||void 0===r||r.add(new F.a.Text(s)))}else if(c<40){var o;n%2===0&&(null===(o=this.group)||void 0===o||o.add(new F.a.Text(s)))}else{var l;null===(l=this.group)||void 0===l||l.add(new F.a.Text(s))}null===(a=this.group)||void 0===a||a.add(new F.a.Rect({x:c*n,y:22,width:2,height:10,fill:"black"}))}this.renderedRange=t}},{key:"updateRulerPosition",value:function(){var t,e=this.props.currentTime,n=this.state.scale,a=window.innerWidth/n;L(Math.max(e-4,0),this.renderedRange)&&L(Math.min(e+a,this.props.duration),this.renderedRange)||this.updateRuler(),null===(t=this.group)||void 0===t||t.x(-(e-4)*n)}},{key:"componentDidMount",value:function(){var t=this;Object(U.a)("ctrl+=",(function(e){e.preventDefault(),t.zoomIn()})),Object(U.a)("ctrl+-",(function(e){e.preventDefault(),t.zoomOut()}))}},{key:"componentDidUpdate",value:function(){if(0!==this.props.duration){if(0===this.state.scale){this.setState({scale:30})}else this.state.lastScale!==this.state.scale&&this.setState({lastScale:this.state.scale},this.updateRuler);null===this.group&&this.initTimeRuler()}}},{key:"render",value:function(){var t=this;if(this.state.error)return Object(a.jsx)("div",{className:"center badge-danger",children:" an error acuured "});var e=this.props.duration,n=-(this.props.currentTime-4)/e*100,i=this.state.scale;return this.updateRulerPosition(),Object(a.jsxs)("div",{className:"advanced-timeline "+this.props.className,children:[Object(a.jsxs)("div",{className:"side-bar",children:[Object(a.jsx)(v,{className:"mb-1",onClick:this.zoomIn,disabled:!this.isZoomInValid(this.state.scale+10),iconClassName:"fas fa-search-plus"}),Object(a.jsx)("div",{className:"center scale-text",children:i}),Object(a.jsx)(v,{className:"mb-1",onClick:this.zoomOut,disabled:!this.isZoomOutValid(this.state.scale-10),iconClassName:"fas fa-search-minus"})]}),Object(a.jsxs)("div",{className:"advanced-timeline-wrapper",children:[Object(a.jsx)("div",{className:"current-time-cursor",style:{marginLeft:"".concat(4*i,"px")}}),Object(a.jsxs)("div",{className:"mover",children:[Object(a.jsxs)("div",{className:"time-ruler-wrapper",children:[Object(a.jsx)("div",{className:"time-ruler-konva",ref:this.canvasRef}),Object(a.jsx)(W,{onTimePick:this.setTimeFromPixels})]}),Object(a.jsx)("div",{className:"captions-side",style:{transform:"translateX(".concat(n,"%)"),width:"".concat(e*i,"px")},children:this.props.captions.map((function(e,n){return function(t,e,n,i,s){var c=t.end-t.start;return Object(a.jsx)("div",{className:"caption-item "+(n===e?"selected":""),onClick:function(t){return i(e)},style:{left:"".concat(t.start*s,"px"),width:"".concat(c*s,"px")},children:Object(a.jsx)("span",{children:t.content})},t.hash)}(e,n,t.props.selectedCaption_i,t.captionSelectionHandler,i)}))})]})]})]})}}]),n}(s.a.Component);var X,W=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={cursorXPos:0},t}return Object(l.a)(n,[{key:"calculateRealOffset",value:function(t){return t.pageX-t.currentTarget.getBoundingClientRect().left}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:"user-time-cursor-wrapper",onMouseMove:function(e){return t.setState({cursorXPos:t.calculateRealOffset(e)})},onMouseLeave:function(){return t.setState({cursorXPos:0})},onClick:function(e){return t.props.onTimePick(t.calculateRealOffset(e))},children:Object(a.jsx)("div",{className:"user-time-cursor",style:{transform:"translateX(".concat(this.state.cursorXPos,"px)")}})})}}]),n}(s.a.Component),A=(n(70),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={isEditing:!1,timeEditing:""},a.changeHandler=a.changeHandler.bind(Object(m.a)(a)),a.changeTimeEditing=a.changeTimeEditing.bind(Object(m.a)(a)),a.textEditorTimeChange=a.textEditorTimeChange.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"changeEditingState",value:function(t){this.props.onChange&&this.setState({isEditing:t,timeEditing:t?T(this.props.time,"complete"):""})}},{key:"textEditorTimeChange",value:function(t){var e,n=t.target.value;try{e=N(n)}catch(i){return}var a=e-this.props.time;this.changeHandler(a),this.changeEditingState(!1)}},{key:"changeTimeEditing",value:function(t){this.setState({timeEditing:t.target.value})}},{key:"changeHandler",value:function(t){this.props.onChange&&this.props.onChange(t)}},{key:"render",value:function(){var t=this,e=void 0===this.props.onChange,n=T(this.props.time,"complete"),i=this.state.isEditing?Object(a.jsx)("div",{className:"time-editor",children:Object(a.jsx)("input",{type:"text",className:"time-text-editor",onChange:this.changeTimeEditing,value:this.state.timeEditing,autoFocus:!0,onBlur:this.textEditorTimeChange})}):Object(a.jsx)("div",{className:"time-text",onDoubleClick:function(){return t.changeEditingState(!0)},children:Object(a.jsxs)("span",{children:[" ",n," "]})});return Object(a.jsxs)("div",{className:"time-control-wrapper",children:[Object(a.jsx)(v,{className:"time-control-btn minus-time",disabled:e,iconClassName:"fas fa-minus",onClick:function(){return t.changeHandler(-.5)}}),Object(a.jsx)(v,{className:"time-control-btn minus-time little",disabled:e,onClick:function(){return t.changeHandler(-.1)},iconClassName:"fas fa-minus"}),i,Object(a.jsx)(v,{className:"time-control-btn add-time little",disabled:e,onClick:function(){return t.changeHandler(.1)},iconClassName:"fas fa-plus"}),Object(a.jsx)(v,{className:"time-control-btn add-time",disabled:e,onClick:function(){return t.changeHandler(.5)},iconClassName:"fas fa-plus"}),Object(a.jsx)(v,{className:"time-control-btn add-time",disabled:e,onClick:function(){return t.changeHandler(null)},iconClassName:"fas fa-angle-double-up"})]})}}]),n}(s.a.Component)),B=(n(71),n(72));!function(t){t[t.Delete=0]="Delete",t[t.Create=1]="Create",t[t.Change=2]="Change"}(X||(X={}));var J=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).VideoPlayerRef=void 0,a.state={videoUrl:y.videoUrl.getData(),videoHeight:400,acc:0,currentTime:0,totalTime:0,captions:[],selected_caption_i:null,historyCursor:-1,capsHistory:[]},a.VideoPlayerRef=s.a.createRef(),a.onTimeUpdate=a.onTimeUpdate.bind(Object(m.a)(a)),a.onVideoError=a.onVideoError.bind(Object(m.a)(a)),a.handleSeparatorDrag=a.handleSeparatorDrag.bind(Object(m.a)(a)),a.handleSeparatorStop=a.handleSeparatorStop.bind(Object(m.a)(a)),a.addCaptionUIHandler=a.addCaptionUIHandler.bind(Object(m.a)(a)),a.addCaptionObject=a.addCaptionObject.bind(Object(m.a)(a)),a.changeCaptionUIHandler=a.changeCaptionUIHandler.bind(Object(m.a)(a)),a.changeCaptionObject=a.changeCaptionObject.bind(Object(m.a)(a)),a.deleteCaptionUIHandler=a.deleteCaptionUIHandler.bind(Object(m.a)(a)),a.deleteCaptionObject=a.deleteCaptionObject.bind(Object(m.a)(a)),a.captionSelectionToggle=a.captionSelectionToggle.bind(Object(m.a)(a)),a.updateHistory=a.updateHistory.bind(Object(m.a)(a)),a.undoRedo=a.undoRedo.bind(Object(m.a)(a)),a.goToLastStart=a.goToLastStart.bind(Object(m.a)(a)),a.goToNextEnd=a.goToNextEnd.bind(Object(m.a)(a)),a.saveFile=a.saveFile.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=y.subtitles.getData();this.setState({captions:e}),U.a.filter=function(){return!0},Object(U.a)("alt+*, tab, shift+tab",(function(t){return t.preventDefault()})),Object(U.a)("ctrl+shift+left",(function(e){var n;null===t.state.selected_caption_i&&(e.preventDefault(),null===(n=t.VideoPlayerRef.current)||void 0===n||n.shootTime(-5))})),Object(U.a)("ctrl+shift+right",(function(e){var n;null===t.state.selected_caption_i&&(e.preventDefault(),null===(n=t.VideoPlayerRef.current)||void 0===n||n.shootTime(5))})),Object(U.a)("ctrl+6",(function(e){e.preventDefault(),t.goToLastStart()})),Object(U.a)("ctrl+7",(function(e){e.preventDefault(),t.goToNextEnd()})),Object(U.a)("ctrl+left",(function(e){var n;e.preventDefault(),null===(n=t.VideoPlayerRef.current)||void 0===n||n.shootTime(-.5)})),Object(U.a)("ctrl+right",(function(e){var n;e.preventDefault(),null===(n=t.VideoPlayerRef.current)||void 0===n||n.shootTime(.5)})),Object(U.a)("ctrl+enter",(function(){return t.addCaptionUIHandler()})),Object(U.a)("ctrl+down",(function(e){e.preventDefault();var n=t.state.currentTime,a=t.state.captions.findIndex((function(t){return n>=t.start&&n<=t.end}));-1!==a&&t.setState({selected_caption_i:a})})),Object(U.a)("escape",(function(e){e.preventDefault(),t.setState({selected_caption_i:null})})),Object(U.a)("space",(function(t){"INPUT"!==t.target.tagName&&t.preventDefault()})),Object(U.a)("ctrl+space",(function(e){var n;null===(n=t.VideoPlayerRef.current)||void 0===n||n.togglePlay()})),Object(U.a)("ctrl+delete",(function(){return t.deleteCaptionUIHandler()})),Object(U.a)("ctrl+z",(function(){return t.undoRedo(!0)})),Object(U.a)("ctrl+y",(function(){return t.undoRedo(!1)})),Object(U.a)("ctrl+s",(function(e){e.preventDefault(),t.saveFile()}))}},{key:"componentWillUnmount",value:function(){U.a.unbind()}},{key:"onTimeUpdate",value:function(t){var e=this.state.selected_caption_i;if(null!==e){var n,a,i,s=this.state.captions[e],c=this.VideoPlayerRef,r=null===(n=c.current)||void 0===n?void 0:n.isPlaying();if(t>=s.end){if(r)null===(a=c.current)||void 0===a||a.setPlay(!1),null===(i=c.current)||void 0===i||i.setTime(s.start)}else if(t<s.start){var o;r&&(null===(o=c.current)||void 0===o||o.setTime(s.start))}}this.setState({currentTime:t})}},{key:"onVideoError",value:function(t){g({kind:"danger",message:"error happend while loading video",duration:5e3})}},{key:"addCaptionObject",value:function(t){return{captions:[].concat(Object(E.a)(this.state.captions),[t])}}},{key:"addCaptionUIHandler",value:function(){var t=this,e=this.state.currentTime,n=this.state.captions.find((function(t){return e>=t.start&&e<=t.end})),a=n&&n.end-e<.6?n.end+.001:e,i={start:a,end:a+1,content:"New Caption",hash:Object(w.v4)()},s={type:X.Create,changes:[i]};this.setState(Object(D.a)(Object(D.a)({},this.addCaptionObject(i)),{},{selected_caption_i:this.state.captions.length}),(function(){return t.updateHistory(s)}))}},{key:"changeCaptionObject",value:function(t,e){return{captions:this.state.captions.map((function(n){return n.hash===t.hash?e:n}))}}},{key:"changeCaptionUIHandler",value:function(t,e){var n=this;if(-1!==this.state.captions.findIndex((function(e){return e.hash===t.hash}))){var a={type:X.Change,changes:[t,e]};this.setState(this.changeCaptionObject(t,e),(function(){return n.updateHistory(a)}))}}},{key:"deleteCaptionObject",value:function(t){return{captions:this.state.captions.filter((function(e,n){return n!==t}))}}},{key:"deleteCaptionUIHandler",value:function(){var t=this,e=this.state;if(null!==e.selected_caption_i){var n={type:X.Delete,changes:[e.captions[e.selected_caption_i]]};this.setState(Object(D.a)({selected_caption_i:null},this.deleteCaptionObject(e.selected_caption_i)),(function(){return t.updateHistory(n)}))}}},{key:"updateHistory",value:function(t){var e=this.state.historyCursor,n=this.state.capsHistory;e!==n.length-1?n=n.slice(0,e+1):n.length>=300&&(n=n.slice(1)),this.setState({capsHistory:[].concat(Object(E.a)(n),[t]),historyCursor:n.length})}},{key:"undoRedo",value:function(t){var e,n=this.state.historyCursor,a=!t,i=this.state.capsHistory;if(t&&n>=0||a&&n+1<i.length){var s=this.state.captions,c=i[n+(t?0:1)];e=t&&c.type===X.Create||a&&c.type===X.Delete?this.deleteCaptionObject(s.findIndex((function(t){return t.hash===c.changes[0].hash}))):t&&c.type===X.Delete||a&&c.type===X.Create?this.addCaptionObject(c.changes[0]):t?this.changeCaptionObject(c.changes[1],c.changes[0]):this.changeCaptionObject(c.changes[0],c.changes[1]),this.setState(Object(D.a)(Object(D.a)({},e),{},{selected_caption_i:null,historyCursor:n+(t?-1:1)}))}}},{key:"captionSelectionToggle",value:function(t){this.setState({selected_caption_i:this.state.selected_caption_i===t?null:t})}},{key:"goToNextEnd",value:function(){var t,e=this.state,n=e.captions.filter((function(t){return e.currentTime<t.end})).map((function(t){return t.end})).sort(P);n.length&&(null===(t=this.VideoPlayerRef.current)||void 0===t||t.setTime(n[0]))}},{key:"goToLastStart",value:function(){var t,e=this.state,n=e.captions.filter((function(t){return e.currentTime>t.start})).map((function(t){return t.start})).sort(P);n.length&&(null===(t=this.VideoPlayerRef.current)||void 0===t||t.setTime(n[n.length-1]))}},{key:"saveFile",value:function(){this.state.captions.sort(R),B(this.state.captions.map((function(t,e){return"".concat(e+1,"\n").concat(T(t.start,"complete")," --\x3e ").concat(T(t.end,"complete"),"\n").concat(t.content)})).join("\n\n"),"subtitle.srt")}},{key:"handleSeparatorStop",value:function(t,e){this.setState({videoHeight:this.state.videoHeight+this.state.acc,acc:0})}},{key:"handleSeparatorDrag",value:function(t,e){this.setState({acc:this.state.acc+e.deltaY})}},{key:"render",value:function(){var t=this,e=this.state.captions,n=this.state.selected_caption_i;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"page-title",children:"Studio"}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("div",{className:"video-wrapper",children:Object(a.jsx)(z,{ref:this.VideoPlayerRef,videoUrl:this.state.videoUrl,onTimeUpdate:this.onTimeUpdate,onError:this.onVideoError,height:this.state.videoHeight,onDurationChanges:function(e){return t.setState({totalTime:e})}})}),Object(a.jsx)(I.a,{axis:"y",position:{x:0,y:0},onDrag:this.handleSeparatorDrag,onStop:this.handleSeparatorStop,children:Object(a.jsx)("div",{className:"separator mt-3"})}),Object(a.jsx)(V,{currentTime:this.state.currentTime,captions:e}),Object(a.jsx)(M,{className:"my-2",currentTime:this.state.currentTime,totalTime:this.state.totalTime,onSelectNewTime:function(e){var n;return null===(n=t.VideoPlayerRef.current)||void 0===n?void 0:n.setTime(e)}}),Object(a.jsxs)("div",{className:"d-flex justify-content-center action-button-group my-2",children:[Object(a.jsx)(v,{iconClassName:"fas fa-plus",text:"add caption",onClick:this.addCaptionUIHandler}),Object(a.jsx)(v,{iconClassName:"fas fa-undo",disabled:-1===this.state.historyCursor,text:"undo "+(this.state.historyCursor+1),onClick:function(){return t.undoRedo(!0)}}),Object(a.jsx)(v,{iconClassName:"fas fa-redo",text:"redo "+(this.state.capsHistory.length-1-this.state.historyCursor),disabled:this.state.historyCursor>=this.state.capsHistory.length-1,onClick:function(){return t.undoRedo(!1)}}),Object(a.jsx)(v,{iconClassName:"fas fa-times",disabled:null===this.state.selected_caption_i,text:"unselect",onClick:function(){return t.setState({selected_caption_i:null})}}),Object(a.jsx)(v,{iconClassName:"fas fa-trash",disabled:null===this.state.selected_caption_i,text:"delete",onClick:this.deleteCaptionUIHandler}),Object(a.jsx)(v,{iconClassName:"fas fa-chevron-left",disabled:0===e.length,text:"last start",onClick:this.goToLastStart}),Object(a.jsx)(v,{iconClassName:"fas fa-chevron-right",disabled:0===e.length,text:"next end ",onClick:this.goToNextEnd})]}),Object(a.jsx)(Z,{className:"my-1",duration:this.state.totalTime,currentTime:this.state.currentTime,onSelectNewTime:function(e){var n;return null===(n=t.VideoPlayerRef.current)||void 0===n?void 0:n.setTime(e)},captions:e,onCaptionSelected:this.captionSelectionToggle,selectedCaption_i:n}),Object(a.jsx)(_,{currentTime:this.state.currentTime,totalTime:this.state.totalTime,caption:null===n?null:e[n],onCaptionChanged:this.changeCaptionUIHandler})]}),Object(a.jsx)("div",{className:"d-flex justify-content-center my-2",children:Object(a.jsx)("button",{className:"btn btn-danger",onClick:this.saveFile,children:Object(a.jsxs)("strong",{children:[" save as a file ",Object(a.jsx)("span",{className:"fas fa-file"}),"  "]})})})]})}}]),n}(s.a.Component),G=(n(73),n.p+"static/media/TimeControll.ba1b4269.jpg"),Y=n.p+"static/media/stickTime.ee5d02c9.png",$=n.p+"static/media/textAlign.5bd9ab79.png",q=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={shortcuts:[{keys:["ctrl","space"],clue:"play/pause video player"},{keys:["ctrl","right/left"],clue:"go forward/backward in timeline [small step]"},{keys:["ctrl","shift","right/left"],clue:"go forward/backward in timeline [big step]"},{keys:["ctrl","+/-"],clue:"zoom in/out in timeline"},{keys:["ctrl","shift","+/-"],clue:"zoom in/out web page"},{keys:["ctrl","6/7"],clue:"go to [start of last caption]/[end of next caption]"},{keys:["ctrl","down"],clue:"select current caption"},{keys:["escape"],clue:"unselect selected caption"},{keys:["tab","left/right"],clue:"shoot end of selected caption forward/backward"},{keys:["alt","left/right"],clue:"shoot start of selected caption forward/backward"},{keys:["ctrl","8/9"],clue:"shoot start/end of selected caption to the current time"},{keys:["ctrl","enter"],clue:"create new caption"},{keys:["ctrl","delete"],clue:"delete selected caption"},{keys:["ctrl","0"],clue:"toggle text direction in caption editor input [left to right]/[right to left]"},{keys:["ctrl","z/y"],clue:"undo/redo"},{keys:["ctrl","s"],clue:"save subtitle"}],features:[{imageSrc:G,details:"you can change timestamp manually by double clicking on it\n        changes will be applied after clicking out of the timestamp"},{imageSrc:Y,details:"use stick time button to stick start/end of selected caption to the timeline cursor"},{imageSrc:$,details:"you can change text align according to the language you write in"}]},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"page-title",children:"Help"}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("h3",{children:[" ",Object(a.jsx)("a",{href:"#features",children:"#features"})," "]}),Object(a.jsx)("ul",{id:"features",children:this.state.features.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:t.imageSrc,className:"d-block",alt:""}),Object(a.jsxs)("span",{children:[" ",t.details," "]})]})}))}),Object(a.jsxs)("h3",{children:[" ",Object(a.jsx)("a",{href:"#shortcuts",children:"#shortcuts"})," "]}),Object(a.jsx)("ul",{id:"shortcuts",children:this.state.shortcuts.map((function(t){return Object(a.jsxs)("li",{className:"shortcut d-flex justify-content-between",children:[Object(a.jsx)("span",{className:"keys",children:t.keys.map((function(t,e){return Object(a.jsxs)(a.Fragment,{children:[0!==e?Object(a.jsx)("span",{className:"plus",children:"+"}):"",Object(a.jsx)("code",{className:"key",children:t})]})}))}),Object(a.jsxs)("span",{className:"clue",children:[" ",t.clue," "]})]})}))})]})]})}}]),n}(s.a.Component),K=(n(74),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(h.a,{basename:"/subtitle-edtior",children:[Object(a.jsx)(p.b,{exact:!0,path:"/",component:S}),Object(a.jsx)(p.b,{exact:!0,path:"/studio",component:J}),Object(a.jsx)(p.b,{exact:!0,path:"/help",component:q})]}),Object(a.jsx)(C,{})]})}}]),n}(s.a.Component));r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.c56a3705.chunk.js.map