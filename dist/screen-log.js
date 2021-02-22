(()=>{"use strict";var t,e,o,n,i={39:(t,e,o)=>{o.d(e,{Z:()=>n});const n="button{position:fixed;top:50%;right:10px;height:30px;width:30px;margin-top:-50%;background-color:#000;color:#fff;font-size:26px;border:none;border-radius:50%;box-sizing:border-box;margin:0;padding:0;text-align:center;opacity:.4;z-index:9999;outline:none}"},535:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});const n='html{box-sizing:border-box;font-size:12px;background:#fff}*,*:before,*:after{box-sizing:inherit}body,ul{margin:0;padding:0;font-weight:normal}header{position:fixed;top:0;width:100%;display:flex;font-size:10px;background:#d3d3d3}header button{border:none;color:#000;padding:3px;flex:auto;text-align:center}ul{list-style:none;margin:0;font-size:10px;color:#3c3c3c;font-family:system-ui,monospace}ul li{border-bottom:1px #f4f4f4 solid;padding:3px;line-height:13px;transition:.2s all}ul li.debug{color:#0014ff}ul li.error{color:#ff1400;background-color:#fcf1f0;border-bottom:1px #f9dedd solid}ul li.warn{color:#272012;background-color:#fefbe7;border-bottom:1px #fdf6cf solid}ul li.copy{background-color:#d5dcff;position:relative}ul li.copy:after{content:"copied";position:absolute;right:3;color:#263066;font-weight:bold}'}},r={};function l(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return i[t](e,e.exports,l),e.exports}l.d=(t,e)=>{for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),l.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=function(){function t(){}return t.prototype.init=function(){this.buildButton()},t.prototype.buildButton=function(){var t=l(39).Z;t=t.replace(/^button\s{/,"").replace(/}$/,""),this.button=document.createElement("button"),this.button.setAttribute("style",t),this.button.innerText="⚒",document.body.appendChild(this.button)},t}(),e=function(){function t(){var t=this;this.followLog=!0,this.continueLogFollowing=function(){t.document.body.scrollHeight==t.window.scrollY+t.document.body.clientHeight&&t.startLogFollowing()}.bind(this),this.stopLogFollowing=function(){t.document.body.scrollHeight!=t.window.scrollY+t.document.body.clientHeight&&(t.followLog=!1,t.window.removeEventListener("wheel",t.stopLogFollowing),t.window.removeEventListener("touchmove",t.stopLogFollowing),t.window.addEventListener("scroll",t.continueLogFollowing))}.bind(this)}return t.prototype.init=function(){this.buildFrame(),this.buildHeader(),this.binding(),this.startLogFollowing()},t.prototype.show=function(t){for(var e=this,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];if(this.logView){var i=document.createElement("li");i.textContent=o.map((function(t){return e.toString(t)})).join(" "),i.className=t,this.logView.appendChild(i),this.followLog&&this.scrollToBottom()}},t.prototype.clear=function(){this.logView.innerText=""},t.prototype.toggle=function(){"none"===this.frame.style.display?(this.frame.style.display="block",this.header.style.display="flex",this.frame.style.pointerEvents="initial",this.scrollToBottom()):this.frame.style.display="none"},t.prototype.scrollToBottom=function(){this.window.scrollTo(0,this.document.body.scrollHeight-this.document.body.clientHeight)},t.prototype.binding=function(){var t=this;this.document.addEventListener("click",(function(e){var o=e.target||e.srcElement;o&&"LI"==o.tagName&&(o.classList.add("copy"),function(t,e){var o=t.createElement("textarea");o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.width="2em",o.style.height="2em",o.style.padding="0",o.style.border="none",o.style.outline="none",o.style.boxShadow="none",o.style.background="transparent",o.value=e,t.body.appendChild(o),o.focus(),o.select();try{t.execCommand("copy")}catch(t){}t.body.removeChild(o)}(t.document,o.innerText),setTimeout((function(t){return o.classList.remove("copy")}),1e3))}))},t.prototype.buildFrame=function(){this.frame=document.createElement("iframe"),this.frame.setAttribute("border","0"),this.frame.setAttribute("frameborder","0"),this.frame.setAttribute("cellspacing","0"),this.frame.setAttribute("style","position: fixed; bottom: 0; left: 0; width: 100%; height: 30%;"),document.body.appendChild(this.frame),this.document=this.frame.contentDocument,this.window=this.frame.contentWindow,this.logView=this.document.createElement("ul"),this.document.body.appendChild(this.logView);var t=l(535),e=this.document.createElement("style");e.textContent=t.default,this.document.head.appendChild(e)},t.prototype.buildHeader=function(){var t=this,e=this.document.createElement("button");e.innerText="fullscreen",e.addEventListener("click",(function(){t.frame.style.height="100%",e.style.display="none",o.style.display="block"}));var o=this.document.createElement("button");o.innerText="unfullscreen",o.style.display="none",o.addEventListener("click",(function(){t.frame.style.height="30%",o.style.display="none",e.style.display="block"}));var n=this.document.createElement("button");n.innerText="top",n.addEventListener("click",(function(){t.frame.style.top="0",t.frame.style.bottom="auto",n.style.display="none",i.style.display="block"}));var i=this.document.createElement("button");i.innerText="bottom",i.style.display="none",i.addEventListener("click",(function(){t.frame.style.top="auto",t.frame.style.bottom="0",i.style.display="none",n.style.display="block"}));var r=this.document.createElement("button");r.innerText="transparent",r.addEventListener("click",(function(){t.frame.style.opacity="0.7",r.style.display="none",l.style.display="block"}));var l=this.document.createElement("button");l.innerText="opaque",l.style.display="none",l.addEventListener("click",(function(){t.frame.style.opacity="1",l.style.display="none",r.style.display="block"}));var s=this.document.createElement("button");s.innerText="bypass",s.addEventListener("click",(function(){t.frame.style.pointerEvents="none",t.frame.style.opacity="0.5",a.style.display="none"}));var a=this.document.createElement("header");a.appendChild(e),a.appendChild(o),a.appendChild(n),a.appendChild(i),a.appendChild(r),a.appendChild(l),a.appendChild(s),this.document.body.prepend(a),this.header=a},t.prototype.startLogFollowing=function(){this.window.removeEventListener("scroll",this.continueLogFollowing),this.followLog=!0,this.window.addEventListener("wheel",this.stopLogFollowing),this.window.addEventListener("touchmove",this.stopLogFollowing)},t.prototype.toString=function(t){switch(console.info(typeof t),typeof t){case"string":case"number":case"number":case"bigint":return""+t;default:return JSON.stringify(t)}},t}(),o=function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<o;e++)for(var r=arguments[e],l=0,s=r.length;l<s;l++,i++)n[i]=r[l];return n},(n=new(function(){function n(){this.initLogs=[],this.realConsole={}}return n.prototype.register=function(){var t=this;this.realConsole.log=console.log,console.log=this.log.bind(this),this.realConsole.warn=console.warn,console.warn=this.warn.bind(this),this.realConsole.error=console.error,console.error=this.error.bind(this),this.realConsole.debug=console.debug,console.debug=this.debug.bind(this),this.realConsole.clear=console.clear,console.clear=this.clear.bind(this),window.addEventListener("error",(function(e){t.error(e.message+" at "+e.filename+" "+e.lineno+":"+e.colno)}))},n.prototype.init=function(){var n=this;this.display=new e,this.display.init(),this.button=new t,this.button.init(),this.initLogs.forEach((function(t){n.showLog.apply(n,o([t.type],t.args))})),delete this.initLogs,this.bindings()},n.prototype.bindings=function(){var t=this;this.button.button.addEventListener("click",(function(){t.display.toggle()}))},n.prototype.log=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.realConsole).log.apply(t,e),this.showLog.apply(this,o(["log"],e))},n.prototype.info=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.realConsole).info.apply(t,e),this.showLog.apply(this,o(["info"],e))},n.prototype.debug=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.realConsole).debug.apply(t,e),this.showLog.apply(this,o(["debug"],e))},n.prototype.error=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.realConsole).error.apply(t,e),this.showLog.apply(this,o(["error"],e))},n.prototype.warn=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(t=this.realConsole).warn.apply(t,e),this.showLog.apply(this,o(["warn"],e))},n.prototype.clear=function(){this.realConsole.clear(),this.display?this.display.clear():this.initLogs=[]},n.prototype.showLog=function(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];this.display?(e=this.display).show.apply(e,o([t],n)):this.initLogs.push({type:t,args:n})},n}())).register(),window.addEventListener("load",(function(){n.init()}))})();