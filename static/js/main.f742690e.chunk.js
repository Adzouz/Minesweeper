(window.webpackJsonpdemineur=window.webpackJsonpdemineur||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),s=n(10),l=n(8),c=n(12);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h={matrix:[],gameOver:!1},p=Object(l.c)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MATRIX":return u({},e,{matrix:t.payload});case"UPDATE_GAME_STATUS":return u({},e,{gameOver:t.payload});default:return e}}}),d=Object(l.e)(p,{},Object(l.d)(l.a.apply(void 0,[]),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()||l.d)),b=(n(28),n(2)),g=n(3),f=n(5),y=n(4),v=n(1),w=n(6),x=function(e){return{type:"UPDATE_MATRIX",payload:e}},E=function(e){return{type:"UPDATE_GAME_STATUS",payload:e}},O=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(f.a)(this,Object(y.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(w.a)(t,e),Object(g.a)(t,[{key:"handleChange",value:function(e){this.props.handleChange(e)}},{key:"getFormStyle",value:function(){return{display:this.props.showSettings?"block":"none",position:"fixed",fontSize:"1.6rem"}}},{key:"render",value:function(){return o.a.createElement("div",{className:"form",style:this.getFormStyle()},o.a.createElement("span",{style:M}),o.a.createElement("div",{style:C},o.a.createElement("label",{style:j},o.a.createElement("span",{style:T},"Rows:"),o.a.createElement("input",{type:"number",pattern:"\\d*",name:"nbRows",value:this.props.nbRows,onChange:this.handleChange,style:k})),o.a.createElement("label",{style:j},o.a.createElement("span",{style:T},"Columns:"),o.a.createElement("input",{type:"number",pattern:"\\d*",name:"nbColumns",value:this.props.nbColumns,onChange:this.handleChange,style:k})),o.a.createElement("label",{style:j},o.a.createElement("span",{style:T},"Bombs:"),o.a.createElement("input",{type:"number",pattern:"\\d*",min:"1",max:Math.round(this.props.nbRows*this.props.nbColumns-this.props.nbRows*this.props.nbColumns/100*50),name:"nbBombs",value:this.props.nbBombs,onChange:this.handleChange,style:k})),o.a.createElement("button",{style:S,onClick:this.props.closeModal},"DONE!")))}}]),t}(a.Component),k={width:"50px",padding:"5px 0",border:"0",appearance:"none",margin:"5px",textAlign:"center",fontSize:"1.6rem",backgroundColor:"#ecf0f1",marginLeft:"auto"},C={position:"fixed",top:"50%",left:"50%",justifyContent:"center",backgroundColor:"#fff",padding:"10px 15px",borderRadius:"5px",transform:"translate(-50%, -50%)",zIndex:"2"},j={display:"flex",alignItems:"center"},T={marginRight:"1rem"},S={appearance:"none",display:"block",width:"100%",border:"0",backgroundColor:"#27ae60",padding:"10px 15px",color:"#fff",marginTop:"1rem",fontSize:"1.4rem"},M={position:"fixed",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:"1"},R=O;var B={position:"fixed",top:"0",left:"0",right:"0",bottom:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",zIndex:"2"},I={backgroundColor:"rgba(255, 255, 255, 0.7)",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",zIndex:"2"},A={width:"100%",backgroundColor:"#0a3d62",color:"#fff",padding:"10px 15px",marginBottom:"20px",position:"relative",zIndex:"3",textAlign:"center",flex:"0"},D={fontSize:"2.2rem",appearance:"none",marginBottom:"40px",padding:"10px 15px",backgroundColor:"#0a3d62",color:"#fff",border:"0",cursor:"pointer",borderRadius:"5px",position:"relative",zIndex:"3"},P={minWidth:"100%",minHeight:"100%",position:"absolute",top:"0",left:"0",zIndex:"0",opacity:"0.5"},N={position:"absolute",bottom:"0",right:"0",zIndex:"2"},z={position:"absolute",bottom:"-20%",left:"0",width:"100%",zIndex:"2"},_={position:"absolute",bottom:"0",left:"0",zIndex:"2"},L={position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)",zIndex:"2",width:"400px"},W={position:"absolute",top:"0",right:"10%",zIndex:"2",maxWidth:"300px"},X={position:"absolute",top:"10%",left:"10%",zIndex:"2",maxWidth:"300px"},U=function(e){var t=e.gameOver,n=e.resetGame;return t?o.a.createElement("div",{className:"game-overlay",style:B},o.a.createElement("span",{style:I}),o.a.createElement("img",{alt:"",src:"https://media0.giphy.com/media/26tPdwMm4jyClgxTq/giphy.gif?cid=790b76113be8a3eda238c4edaa4be3e66abd0b54a5f7de32&rid=giphy.gif",style:P}),o.a.createElement("img",{alt:"",src:"https://i.gifer.com/5GpM.gif",style:z}),o.a.createElement("img",{alt:"",src:"https://i.gifer.com/YGg6.gif",style:L}),o.a.createElement("img",{alt:"",src:"https://media2.giphy.com/media/13zvwxJX6VzHqg/source.gif",style:_}),o.a.createElement("img",{alt:"",src:"https://media2.giphy.com/media/KfMhwrXg5WXjRC7v3M/giphy.gif",style:N}),o.a.createElement("img",{alt:"",src:"https://media3.giphy.com/media/10a1Cwco2kUtlS/giphy.gif",style:W}),o.a.createElement("img",{alt:"",src:"https://media.giphy.com/media/QPoCzipoOdlAODKovi/giphy.gif",style:X}),o.a.createElement("h2",{style:A},o.a.createElement("span",{role:"img","aria-label":"kaboom"},"\ud83d\udca5")," GAME OVER ",o.a.createElement("span",{role:"img","aria-label":"kaboom"},"\ud83d\udca5")),o.a.createElement("button",{style:D,onClick:n},"Reset")):o.a.createElement("div",{className:"game-overlay",style:B},o.a.createElement("img",{alt:"",src:"https://media.giphy.com/media/3rgXBvnbXtxwaWmhr2/source.gif",style:P}),o.a.createElement("img",{alt:"",src:"https://i.imgur.com/fWs529F.gif",style:N}),o.a.createElement("img",{alt:"",src:"https://img1.picmix.com/output/stamp/normal/5/9/6/8/648695_03eca.gif",style:z}),o.a.createElement("img",{alt:"",src:"https://media2.giphy.com/media/3ov9jCNV5rD8mCjsNG/giphy.gif",style:_}),o.a.createElement("img",{alt:"",className:"rotate",src:"https://media2.giphy.com/media/XWR4jehW2X2E0/giphy.gif",style:L}),o.a.createElement("img",{alt:"",src:"https://66.media.tumblr.com/8536b658c824f7f5ee5db70e5af1e11c/tumblr_pfa585inqo1rm7fw6o1_1280.gif",style:W}),o.a.createElement("img",{alt:"",src:"https://media.giphy.com/media/3oKIPvsbX1yYTrvC6s/giphy.gif",style:X}),o.a.createElement("h2",{style:A},o.a.createElement("span",{role:"img","aria-label":"hurray"},"\ud83c\udf89")," YOU WIN ",o.a.createElement("span",{role:"img","aria-label":"hurray"},"\ud83c\udf89")),o.a.createElement("button",{style:D,onClick:n},"Reset"))},G=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(f.a)(this,Object(y.a)(t).call(this,e))).state={animated:!1},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n.handleButtonPress=n.handleButtonPress.bind(Object(v.a)(n)),n.handleButtonRelease=n.handleButtonRelease.bind(Object(v.a)(n)),n}return Object(w.a)(t,e),Object(g.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.coords,a=t.infos;"click"!==e.type||a.marked?"contextmenu"===e.type&&this.toggleMarkTile(n):(this.showTile(n),a.bomb&&(this.displayAll(),this.props.updateGameStatus(!0)))}},{key:"handleButtonPress",value:function(){var e=this,t=this.props.coords;this.buttonPressTimer=setTimeout(function(){return e.toggleMarkTile(t)},600)}},{key:"handleButtonRelease",value:function(){clearTimeout(this.buttonPressTimer)}},{key:"displayAll",value:function(){var e=this.props.matrix.map(function(e){return e.map(function(e){return e.showed=!0,e})});this.props.updateMatrix(e)}},{key:"showTile",value:function(e){var t=this.props.matrix.map(function(t,n){return t.map(function(t,a){return n===e[0]&&a===e[1]&&(t.marked=!1,t.showed=!0),t})});this.props.updateMatrix(t),0!==this.props.nbLeftTiles||this.props.gameOver||this.displayAll(),0!==t[e[0]][e[1]].counter||t[e[0]][e[1]].bomb||(!t[e[0]-1]||!t[e[0]-1][e[1]-1]||0!==t[e[0]-1][e[1]-1].counter&&(0===t[e[0]-1][e[1]-1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]-1][e[1]-1].bomb||t[e[0]-1][e[1]-1].showed||t[e[0]-1][e[1]-1].marked||this.showTile([e[0]-1,e[1]-1]),!t[e[0]-1]||!t[e[0]-1][e[1]]||0!==t[e[0]-1][e[1]].counter&&(0===t[e[0]-1][e[1]].counter||0!==t[e[0]][e[1]].counter)||t[e[0]-1][e[1]].bomb||t[e[0]-1][e[1]].showed||t[e[0]-1][e[1]].marked||this.showTile([e[0]-1,e[1]]),!t[e[0]-1]||!t[e[0]-1][e[1]+1]||0!==t[e[0]-1][e[1]+1].counter&&(0===t[e[0]-1][e[1]+1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]-1][e[1]+1].bomb||t[e[0]-1][e[1]+1].showed||t[e[0]-1][e[1]+1].marked||this.showTile([e[0]-1,e[1]+1]),!t[e[0]]||!t[e[0]][e[1]-1]||0!==t[e[0]][e[1]-1].counter&&(0===t[e[0]][e[1]-1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]][e[1]-1].bomb||t[e[0]][e[1]-1].showed||t[e[0]][e[1]-1].marked||this.showTile([e[0],e[1]-1]),!t[e[0]]||!t[e[0]][e[1]+1]||0!==t[e[0]][e[1]+1].counter&&(0===t[e[0]][e[1]+1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]][e[1]+1].bomb||t[e[0]][e[1]+1].showed||t[e[0]][e[1]+1].marked||this.showTile([e[0],e[1]+1]),!t[e[0]+1]||!t[e[0]+1][e[1]-1]||0!==t[e[0]+1][e[1]-1].counter&&(0===t[e[0]+1][e[1]-1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]+1][e[1]-1].bomb||t[e[0]+1][e[1]-1].showed||t[e[0]+1][e[1]-1].marked||this.showTile([e[0]+1,e[1]-1]),!t[e[0]+1]||!t[e[0]+1][e[1]]||0!==t[e[0]+1][e[1]].counter&&(0===t[e[0]+1][e[1]].counter||0!==t[e[0]][e[1]].counter)||t[e[0]+1][e[1]].bomb||t[e[0]+1][e[1]].showed||t[e[0]+1][e[1]].marked||this.showTile([e[0]+1,e[1]]),!t[e[0]+1]||!t[e[0]+1][e[1]+1]||0!==t[e[0]+1][e[1]+1].counter&&(0===t[e[0]+1][e[1]+1].counter||0!==t[e[0]][e[1]].counter)||t[e[0]+1][e[1]+1].bomb||t[e[0]+1][e[1]+1].showed||t[e[0]+1][e[1]+1].marked||this.showTile([e[0]+1,e[1]+1]))}},{key:"toggleMarkTile",value:function(e){var t=this.props.matrix.map(function(t,n){return t.map(function(t,a){return n===e[0]&&a===e[1]&&(t.marked=!t.marked),t})});this.props.updateMatrix(t)}},{key:"getCellStyle",value:function(){return{fontSize:"3rem",lineHeight:"48px",width:"50px",minWidth:"50px",height:"50px",textAlign:"center",cursor:"pointer",userSelect:"none",border:"2px solid #0a3d62",borderRadius:"8px",backgroundColor:this.props.infos.showed?"#fff":this.props.infos.marked?"#f39c12":"#051e31"}}},{key:"render",value:function(){var e=this.props.infos,t=e.bomb,n=e.counter,a=e.marked,r=e.showed,i=a?"animated ":"",s=e.suggested&&!r?"suggested":"";return o.a.createElement("td",{className:"col",style:this.getCellStyle(),onClick:this.handleClick,onContextMenu:this.handleClick,onTouchStart:this.handleButtonPress,onTouchEnd:this.handleButtonRelease,onMouseDown:this.handleButtonPress,onMouseUp:this.handleButtonRelease,onMouseLeave:this.handleButtonRelease},o.a.createElement("div",{className:i+s},a?o.a.createElement("span",{role:"img","aria-label":"flag"},"\ud83d\udea9"):t&&r?o.a.createElement("span",{role:"img","aria-label":"bomb"},"\ud83d\udca3"):n&&r>0?n:o.a.createElement("span",{role:"img","aria-label":"flag"},"\ud83d\udea9")))}}]),t}(a.Component),V={updateMatrix:x,updateGameStatus:E},q=Object(s.b)(function(e){return{matrix:e.game.matrix,gameOver:e.game.gameOver}},V)(G),F=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props,n=t.row,a=t.columns,r=t.nbLeftTiles,i=0;i<a.length;i++)e.push(o.a.createElement(q,{coords:[n,i],infos:a[i],key:i,nbLeftTiles:r}));return o.a.createElement("tr",{className:"row",style:H},e)}}]),t}(a.Component),H={width:"100%"},J=F,K=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props,n=t.table,a=t.nbLeftTiles,r=0;r<n.length;r++)e.push(o.a.createElement(J,{key:r,row:r,columns:n[r],nbLeftTiles:a}));return o.a.createElement("div",{style:Y},o.a.createElement("div",{className:"remaining",style:Q},"Remaining tiles: ",o.a.createElement("strong",null,a)),o.a.createElement("div",{className:"scrollable-table",style:$},o.a.createElement("table",{style:Z},o.a.createElement("tbody",null,e))))}}]),t}(a.Component),Y={flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",marginBottom:"10px"},Q={color:"#fff"},$={maxWidth:"100%",overflowX:"scroll"},Z={borderCollapse:"collapse"},ee=K,te=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(f.a)(this,Object(y.a)(t).call(this,e))).state={nbRows:10,nbColumns:7,nbBombs:10,showSettings:!1},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.resetBombs=n.resetBombs.bind(Object(v.a)(n)),n.nbLeftTiles=n.nbLeftTiles.bind(Object(v.a)(n)),n.toggleDisplaySettings=n.toggleDisplaySettings.bind(Object(v.a)(n)),n}return Object(w.a)(t,e),Object(g.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,parseInt(e.target.value)>0?parseInt(e.target.value):1),this.resetBombs)}},{key:"reloadApp",value:function(){window.location.reload(!0)}},{key:"toggleDisplaySettings",value:function(){this.setState({showSettings:!this.state.showSettings})}},{key:"nbLeftTiles",value:function(){var e=0;return this.props.matrix.map(function(t){return t.map(function(t){return t.showed||t.bomb||e++,t}),t}),e}},{key:"resetBombs",value:function(){var e=[],t=this.state.nbBombs,n=Math.round(this.state.nbRows*this.state.nbColumns-this.state.nbRows*this.state.nbColumns/100*50);this.state.nbBombs>n&&(this.setState({nbBombs:n}),t=n);for(var a=0;a<t;a++)for(var o=!0,r=[Math.floor(Math.random()*Math.floor(this.state.nbRows)),Math.floor(Math.random()*Math.floor(this.state.nbColumns))];o;)(o=e.filter(function(e){return e[0]===r[0]&&e[1]===r[1]}).length>0)?r=[Math.floor(Math.random()*Math.floor(this.state.nbRows)),Math.floor(Math.random()*Math.floor(this.state.nbColumns))]:e.push([r[0],r[1]]);for(var i=[],s=0;s<this.state.nbRows;s++){for(var l=[],c=0;c<this.state.nbColumns;c++)l.push({showed:!1,bomb:!1,counter:0,marked:!1});i.push(l)}e.map(function(e){return i[e[0]][e[1]].bomb=!0,e});for(var m=[],u=function(t){for(var n=function(n){var a=0;e.map(function(e){return e[0]===t-1&&e[1]===n-1&&a++,e[0]===t-1&&e[1]===n&&a++,e[0]===t-1&&e[1]===n+1&&a++,e[0]===t&&e[1]===n-1&&a++,e[0]===t&&e[1]===n+1&&a++,e[0]===t+1&&e[1]===n-1&&a++,e[0]===t+1&&e[1]===n&&a++,e[0]===t+1&&e[1]===n+1&&a++,e}),i[t][n].counter=a,0===a&&m.push([t,n])},a=0;a<i[t].length;a++)n(a)},h=0;h<i.length;h++)u(h);if(m.length>0){var p=m[Math.floor(Math.random()*Math.floor(m.length))];i[p[0]][p[1]].suggested=!0}this.props.updateGameStatus(!1),this.props.updateMatrix(i)}},{key:"componentDidMount",value:function(){this.resetBombs()}},{key:"render",value:function(){var e=this,t=null;(this.props.gameOver||this.nbLeftTiles()<=0&&!this.props.gameOver)&&(t=o.a.createElement(U,{gameOver:this.props.gameOver,resetGame:this.resetBombs}));var n="SETTINGS";return this.state.showSettings&&(n="CLOSE"),o.a.createElement("div",{className:"App",style:ae},o.a.createElement("button",{style:oe,onClick:this.toggleDisplaySettings},n),o.a.createElement(R,{handleChange:this.handleChange,nbRows:this.state.nbRows,nbColumns:this.state.nbColumns,nbBombs:this.state.nbBombs,showSettings:this.state.showSettings,closeModal:this.toggleDisplaySettings}),t,o.a.createElement(ee,{table:this.props.matrix,nbLeftTiles:this.nbLeftTiles()}),o.a.createElement("div",{id:"notification",onClick:function(){return e.reloadApp()}},"New update available, click on this message to load it."))}}]),t}(a.Component),ne={updateMatrix:x,updateGameStatus:E},ae={height:"100vh",display:"flex",flexDirection:"column",alignItems:"center"},oe={backgroundColor:"#fff",border:"0",appearance:"none",padding:"8px 20px",cursor:"pointer",display:"block",position:"relative",zIndex:"2",marginTop:"30px"},re=Object(s.b)(function(e){return{matrix:e.game.matrix,gameOver:e.game.gameOver}},ne)(te),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){new Promise(function(n,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e),n(!0)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}).then(function(){document.getElementById("notification").className="show"})}!function(e){if("serviceWorker"in navigator){if(new URL("/Minesweeper",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Minesweeper","/service-worker.js");ie?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):se(t,e)})}}(),i.a.render(o.a.createElement(s.a,{store:d},o.a.createElement(re,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f742690e.chunk.js.map