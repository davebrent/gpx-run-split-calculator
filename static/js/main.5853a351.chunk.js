(this["webpackJsonpgpx-run-split-calculator"]=this["webpackJsonpgpx-run-split-calculator"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),i=a.n(l),s=(a(20),a(21),a(9)),o=a.n(s),c=a(14),u=a(12),p=a(4),m=a(5),h=a(6),v=a(8),f=a(7),d=function(){this.xmlSource="",this.metadata={},this.waypoints=[],this.tracks=[],this.routes=[]};d.prototype.parse=function(e){var t=new window.DOMParser;this.xmlSource=t.parseFromString(e,"text/xml");var a=this.xmlSource.querySelector("metadata");if(null!=a){this.metadata.name=this.getElementValue(a,"name"),this.metadata.desc=this.getElementValue(a,"desc"),this.metadata.time=this.getElementValue(a,"time");var r={},n=a.querySelector("author");if(null!=n){r.name=this.getElementValue(n,"name"),r.email={};var l=n.querySelector("email");null!=l&&(r.email.id=l.getAttribute("id"),r.email.domain=l.getAttribute("domain"));var i={},s=n.querySelector("link");null!=s&&(i.href=s.getAttribute("href"),i.text=this.getElementValue(s,"text"),i.type=this.getElementValue(s,"type")),r.link=i}this.metadata.author=r;var o={},c=this.queryDirectSelector(a,"link");null!=c&&(o.href=c.getAttribute("href"),o.text=this.getElementValue(c,"text"),o.type=this.getElementValue(c,"type"),this.metadata.link=o)}var u=[].slice.call(this.xmlSource.querySelectorAll("wpt"));for(var p in u){var m=u[p],h={};h.name=this.getElementValue(m,"name"),h.lat=parseFloat(m.getAttribute("lat")),h.lon=parseFloat(m.getAttribute("lon")),h.ele=parseFloat(this.getElementValue(m,"ele"))||null,h.cmt=this.getElementValue(m,"cmt"),h.desc=this.getElementValue(m,"desc"),this.waypoints.push(h)}var v=[].slice.call(this.xmlSource.querySelectorAll("rte"));for(var f in v){var d=v[f],y={};y.name=this.getElementValue(d,"name"),y.cmt=this.getElementValue(d,"cmt"),y.desc=this.getElementValue(d,"desc"),y.src=this.getElementValue(d,"src"),y.number=this.getElementValue(d,"number");var g=this.queryDirectSelector(d,"type");y.type=null!=g?g.innerHTML:null;var E={},b=d.querySelector("link");null!=b&&(E.href=b.getAttribute("href"),E.text=this.getElementValue(b,"text"),E.type=this.getElementValue(b,"type")),y.link=E;var k=[],S=[].slice.call(d.querySelectorAll("rtept"));for(var F in S){var V=S[F],D={};D.lat=parseFloat(V.getAttribute("lat")),D.lon=parseFloat(V.getAttribute("lon")),D.ele=parseFloat(this.getElementValue(V,"ele")),D.time=parseFloat(V.getAttribute("time")),k.push(D)}y.distance=this.calculDistance(k),y.elevation=this.calcElevation(k),y.points=k,this.routes.push(y)}var x=[].slice.call(this.xmlSource.querySelectorAll("trk"));for(var A in x){var M=x[A],_={};_.name=this.getElementValue(M,"name"),_.cmt=this.getElementValue(M,"cmt"),_.desc=this.getElementValue(M,"desc"),_.src=this.getElementValue(M,"src"),_.number=this.getElementValue(M,"number");var q=this.queryDirectSelector(M,"type");_.type=null!=q?q.innerHTML:null;var O={},w=M.querySelector("link");null!=w&&(O.href=w.getAttribute("href"),O.text=this.getElementValue(w,"text"),O.type=this.getElementValue(w,"type")),_.link=O;var N=[],j=[].slice.call(M.querySelectorAll("trkpt"));for(var C in j){var L=j[C],T={};T.lat=parseFloat(L.getAttribute("lat")),T.lon=parseFloat(L.getAttribute("lon")),T.ele=parseFloat(this.getElementValue(L,"ele"))||null,T.time=this.getElementValue(L,"time")||null,N.push(T)}_.distance=this.calculDistance(N),_.elevation=this.calcElevation(N),_.points=N,this.tracks.push(_)}},d.prototype.getElementValue=function(e,t){var a=e.querySelector(t);return null!=a?void 0!==a.innerHTML?a.innerHTML:a.childNodes[0].data:a},d.prototype.queryDirectSelector=function(e,t){var a=e.querySelectorAll(t),r=a[0];if(a.length>1){var n=e.childNodes;for(var l in n){var i=n[l];i.tagName===t&&(r=i)}}return r},d.prototype.calculDistance=function(e){for(var t={},a=0,r=[],n=0;n<e.length-1;n++)a+=this.calcDistanceBetween(e[n],e[n+1]),r[n]=a;return r[e.length-1]=a,t.total=a,t.cumul=r,t},d.prototype.calcDistanceBetween=function(e,t){var a={};a.lat=e.lat,a.lon=e.lon;var r={};r.lat=t.lat,r.lon=t.lon;var n=Math.PI/180,l=a.lat*n,i=r.lat*n,s=Math.sin((r.lat-a.lat)*n/2),o=Math.sin((r.lon-a.lon)*n/2),c=s*s+Math.cos(l)*Math.cos(i)*o*o;return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},d.prototype.calcElevation=function(e){for(var t=0,a=0,r={},n=0;n<e.length-1;n++){var l=parseFloat(e[n+1].ele)-parseFloat(e[n].ele);l<0?a+=l:l>0&&(t+=l)}for(var i=[],s=0,o=0,c=e.length;o<c;o++){var u=parseFloat(e[o].ele);i.push(u),s+=u}return r.max=Math.max.apply(null,i)||null,r.min=Math.min.apply(null,i)||null,r.pos=Math.abs(t)||null,r.neg=Math.abs(a)||null,r.avg=s/i.length||null,r},d.prototype.toGeoJSON=function(){var e={type:"FeatureCollection",features:[],properties:{name:this.metadata.name,desc:this.metadata.desc,time:this.metadata.time,author:this.metadata.author,link:this.metadata.link}};for(var t in this.tracks){var a=this.tracks[t],r={type:"Feature",geometry:{type:"LineString",coordinates:[]},properties:{}};for(t in r.properties.name=a.name,r.properties.cmt=a.cmt,r.properties.desc=a.desc,r.properties.src=a.src,r.properties.number=a.number,r.properties.link=a.link,r.properties.type=a.type,a.points){var n=a.points[t],l=[];l.push(n.lon),l.push(n.lat),l.push(n.ele),r.geometry.coordinates.push(l)}e.features.push(r)}for(t in this.routes){var i=this.routes[t];for(t in(r={type:"Feature",geometry:{type:"LineString",coordinates:[]},properties:{}}).properties.name=i.name,r.properties.cmt=i.cmt,r.properties.desc=i.desc,r.properties.src=i.src,r.properties.number=i.number,r.properties.link=i.link,r.properties.type=i.type,i.points){var s=i.points[t];(l=[]).push(s.lon),l.push(s.lat),l.push(s.ele),r.geometry.coordinates.push(l)}e.features.push(r)}for(t in this.waypoints){var o=this.waypoints[t];(r={type:"Feature",geometry:{type:"Point",coordinates:[]},properties:{}}).properties.name=o.name,r.properties.cmt=o.cmt,r.properties.desc=o.desc,r.geometry.coordinates=[o.lon,o.lat,o.ele],e.features.push(r)}return e};var y=d,g=a(13),E=a.n(g),b=a(2),k=D(3.1),S=D(6.2),F=D(13.1),V=D(26.2);function D(e){return 1.60934*e}var x=function(e){var t,a=Date.parse(e[0].time),r=(e=e.map((function(e){var t=e.lon,r=e.lat,n=e.ele,l=e.time;return{point:Object(b.point)([t,r]),time:Date.parse(l)-a,elevation:n}})))[0],n=0,l=k,i=0,s=[],o=S,c=0,u=[],m=F,h=0,v=[],f=V,d=0,y=[],g=Object(p.a)(e);try{for(g.s();!(t=g.n()).done;){var D=t.value,x=D.time;if((n+=E()(r.point,D.point,{units:"kilometers"}))>=l){var A=n/l,M=D.time-r.time,_=r.time+M*A-i;s.push(_),l+=k,i=x}if(n>=o){var q=n/o,O=D.time-r.time,w=r.time+O*q-c;u.push(w),o+=S,c=x}if(n>=m){var N=n/m,j=D.time-r.time,C=r.time+j*N-h;v.push(C),m+=F,h=x}if(n>=f){var L=n/f,T=D.time-r.time,H=r.time+T*L-d;y.push(H),f+=V,d=x}r=D}}catch(K){g.e(K)}finally{g.f()}return{fiveKs:s,tenKs:u,halfMarathons:v,marathons:y}},A=(a(24),a(25),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"handleDrop",value:function(e){e.preventDefault(),this.props.onFilesDrop(e.dataTransfer.files)}},{key:"handleDragOver",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"filedropper",onDrop:function(t){return e.handleDrop(t)},onDragOver:function(t){return e.handleDragOver(t)}},n.a.createElement("div",{className:"filedropper__text"},this.props.children))}}]),a}(n.a.Component));var M=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={active:null,files:[]},e}return Object(h.a)(a,[{key:"handleFiles",value:function(e){var t,a=this,r=this.state.files.length,n=Object(p.a)(e);try{var l=function(){var e=t.value;(i=new FileReader).readAsText(e,"utf-8"),i.onload=function(){var t=Object(u.a)(o.a.mark((function t(n){var l,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(l=new y).parse(n.target.result),(i=x(l.tracks[0].points)).name=e.name,a.setState((function(e){return Object.assign({},e,{files:[].concat(Object(c.a)(e.files),[i]),active:r})}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};for(n.s();!(t=n.n()).done;){var i;l()}}catch(s){n.e(s)}finally{n.f()}}},{key:"handleFileClick",value:function(e){this.setState((function(t){return{active:e}}))}},{key:"renderFile",value:function(e,t){var a=this,r=this.state.active;return n.a.createElement("button",{className:"".concat("app__sidebar__file"," ").concat(t===r?"app__sidebar__file--active":""),key:e.name,onClick:function(e){return a.handleFileClick(t)}},e.name)}},{key:"renderSplitsForDistance",value:function(e,t){if(0!==t.length)return n.a.createElement("div",{className:"distance"},n.a.createElement("h3",{className:"distance__header"},e),n.a.createElement("table",{className:"distance__table"},n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,t),n.a.createElement("td",null,function(e){var t=(e=(e-e%1e3)/1e3)%60,a=(e=(e-t)/60)%60,r=(e-a)/60;return(r=r.toString().padStart(2,"0"))+":"+(a=a.toString().padStart(2,"0"))+":"+(t=t.toString().padStart(2,"0"))}(e)))})))))}},{key:"renderActiveFile",value:function(e){return n.a.createElement("div",{className:"file"},n.a.createElement("h2",{className:"file__name"},e.name),n.a.createElement("div",{className:"file__distances"},this.renderSplitsForDistance("5k",e.fiveKs),this.renderSplitsForDistance("10k",e.tenKs),this.renderSplitsForDistance("Half Marathon",e.halfMarathons),this.renderSplitsForDistance("Marathon",e.marathons)))}},{key:"render",value:function(){var e=this,t=this.state,a=t.files,r=a[t.active];return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"app__sidebar"},n.a.createElement(A,{onFilesDrop:function(t){return e.handleFiles(t)}},"Drop GPX files here"),a.map((function(t,a){return e.renderFile(t,a)}))),n.a.createElement("div",{className:"app__content"},r?this.renderActiveFile(r):null))}}]),a}(n.a.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5853a351.chunk.js.map