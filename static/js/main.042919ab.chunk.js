(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports=a(186)},174:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);a(138),a(163);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),i=a(24),l=a(86),s=a(17),u=a(13),p=a(6),d=a(39),m=a(26),h=a.n(m),v=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}};CanvasRenderingContext2D.prototype.roundRect=function(e,t,a,n,o){return a<2*o&&(o=a/2),n<2*o&&(o=n/2),this.beginPath(),this.moveTo(e+o,t),this.arcTo(e+a,t,e+a,t+n,o),this.arcTo(e+a,t+n,e,t+n,o),this.arcTo(e,t+n,e,t,o),this.arcTo(e,t,e+a,t,o),this.closePath(),this};var b=function(e,t){return t.access_token=be.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,h.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.response}).catch(function(e){return e})},f=function(e){var t=be.getState().router.activePanel,a=be.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},y={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},O={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},E={forms:[]},g=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&h.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],v=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();v=(m=[b])[m.length-1]}else if(i.length>1){var f=i.shift();s=(i=[f])[i.length-1],v=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:v,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var O=e.activeView,E=e.activePanel,g=e.activeStory,j=e.popouts;if(j[O])return j[O]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:j})});var w=e.modalHistory[O];if(void 0!==w&&0!==w.length){var k=w[w.length-2]||null;return null===k?w=[]:-1!==w.indexOf(k)?w=w.splice(0,w.indexOf(k)+1):w.push(k),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},O,k)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},O,w))})}var S=e.panelsHistory[O]||[],T=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(S.length>1)S.pop(),E=S[S.length-1];else if(T.length>1){T.pop(),O=T[T.length-1];var C=e.panelsHistory[O];E=C[C.length-1]}else if(_.length>1){_.pop(),g=_[_.length-1],O=e.viewsHistory[g][e.viewsHistory[g].length-1];var A=e.panelsHistory[O];E=A.length>1?A[A.length-1]:A[0]}else h.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===S.length&&h.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:O,activePanel:E,activeStory:g,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,T)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var P=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===P?H=[]:-1!==H.indexOf(P)?H=H.splice(0,H.indexOf(P)+1):H.push(P),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,P)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var V=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,x=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===V?x=[]:-1!==x.indexOf(V)?x=x.splice(0,x.indexOf(V)+1):x.push(V),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,V)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,x))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),j=a(88),w=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},k=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},S=function(){return{type:"GO_BACK"}},T=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},C=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},A=function(){return{type:"CLOSE_MODAL"}},P=(a(173),a(174),a(14)),H=a(15),V=a(18),x=a(16),D=a(19),I=a(2),M=a(99),B=a.n(M),L=a(100),G=a.n(L),N=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(V.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(I.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage,r=t.withoutEpic;return o.a.createElement(I.w,{id:a},o.a.createElement(I.x,null,"Examples"),o.a.createElement(I.m,null,o.a.createElement(I.h,null,o.a.createElement(I.c,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return n("home","groups")}},"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0433\u0440\u0443\u043f\u043f")),o.a.createElement(I.h,null,o.a.createElement(I.c,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return function(){var e;e=window.screen.width;var t=document.createElement("canvas"),a=t.getContext("2d");t.width=e;var n="\u0422\u044b \u0442\u0430\u043a\u0430\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430\u044f \u0438 \u043d\u0435\u0442\u0438\u043f\u0438\u0447\u043d\u0430\u044f \u0434\u0435\u0432\u0443\u0448\u043a\u0430)\u043d\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043b \u0435\u0449\u0435 \u0442\u0430\u043a\u0438\u0445)\u0447\u0442\u043e \u0442\u0435\u0431\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u0440\u0435\u043b\u044c\u043d\u043e\u0435 \u0438\u043b\u0438 \u0445\u043e\u043b\u043e\u0434\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435?";a.font="18px Tahoma";a.measureText(n).width;var o=parseInt(a.font);return a.roundRect(0,0,e,5*(o+10),20),a.fillStyle="rgba(0, 0, 0, 1)",a.fill(),a.fillStyle="rgba(255, 255, 255, 1)",function(e,t,a,n,o,r){for(var c=t.split(" "),i=c.length,l="",s=0;s<i;s++){var u=l+c[s]+" ";if(e.measureText(u).width>o-70){var p=e.measureText(l).width;e.fillText(l,o/2-p/2,n),l=c[s]+" ",n+=r}else l=u}p=e.measureText(l).width,e.fillText(l,o/2-p/2,n)}(a,n,0,30,e,24),h.a.send("VKWebAppShowStoryBox",{background_type:"none",locked:1,stickers:[{sticker_type:"renderable",sticker:{can_delete:0,content_type:"image",blob:t.toDataURL(),transform:{relation_width:1,gravity:"center_top"}}}]}).then(function(e){return e.response}).catch(function(e){return e})}()}},"\u0421\u0442\u043e\u0440\u0438\u0441")),o.a.createElement(I.h,null,o.a.createElement(I.c,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")),r&&o.a.createElement(I.h,null,o.a.createElement(I.c,{mode:"secondary",size:"l",stretched:!0,onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e")),this.state.showImg&&o.a.createElement(I.h,{className:"div-center"},o.a.createElement("img",{src:"https://vk.com/sticker/1-12676-256",alt:"\u0421\u0442\u0438\u043a\u0435\u0440 VK"})),o.a.createElement(I.h,null,"\u0428\u0438\u0440\u0438\u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0430 ",window.innerWidth,"\u0428\u0438\u0440\u0438\u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0430 ",document.documentElement.clientWidth,"\u0428\u0438\u0440\u0438\u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0430 ",window.screen.width,"\u0428 ",window.screen.availWidth)))}}]),t}(o.a.Component),z={setPage:k,goBack:S,openPopout:T,closePopout:_,openModal:C},W=Object(s.b)(null,z)(N),F=a(61),R=a.n(F),K=a(101),U=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(I.d,{description:r,before:o.a.createElement(I.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),Y=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(U,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},J=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(V.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){h.a.send("VKWebAppGetAuthToken",{app_id:7346020,scope:e.join(",")}).then(function(e){t(v(e.access_token))}).catch(function(){t(v(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(K.a)(R.a.mark(function e(){var t,a,n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,b("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=Y(this.state.groups.admined),c=Y(this.state.groups.other);return o.a.createElement(I.w,{id:a},o.a.createElement(I.x,{left:o.a.createElement(I.y,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(I.A,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(I.m,null,o.a.createElement(I.h,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(I.h,null,o.a.createElement(I.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(I.m,{header:o.a.createElement(I.n,{mode:"secondary"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435")},o.a.createElement(I.s,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(I.m,{header:o.a.createElement(I.n,{mode:"secondary"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435")},o.a.createElement(I.s,null,c)))}}]),t}(o.a.Component);var q=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:S,openPopout:T,closePopout:_,openModal:C},e))})(J),X=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(x.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=be.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(I.w,{id:a},o.a.createElement(I.x,{noShadow:!0},"Examples 2"),o.a.createElement(I.j,{vertical:"top"},o.a.createElement(I.E,{theme:"header",mode:"default"},o.a.createElement(I.o,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(I.F,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(I.F,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(I.F,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 2"),o.a.createElement(I.F,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 3")))),o.a.createElement(I.m,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(I.e,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&o.a.createElement(I.h,null,this.state.activeTab)))}}]),t}(o.a.Component),Q={setPage:k,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},Z=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},Q)(X),$=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(V.a)(this,Object(x.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(I.w,{id:t},o.a.createElement(I.x,{left:o.a.createElement(I.y,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(I.m,null,o.a.createElement(I.k,null,o.a.createElement(I.l,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(I.r,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(I.r,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(I.l,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(I.f,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(I.f,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(I.h,{className:"buttons-group"},o.a.createElement(I.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(I.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ee={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},te=Object(s.b)(function(e){return{inputData:e.formData.forms}},ee)($),ae=a(47),ne=a.n(ae),oe=a(37),re=a.n(oe),ce=a(46),ie=a.n(ce),le=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Realm of War",avatar:"https://sun9-72.userapi.com/c853520/v853520591/1f167d/avj_z9yFtQA.jpg?ava=1",desc:"\u041d\u0435\u043d\u0430\u0432\u0438\u0436\u0443 \u0441\u043f\u043e\u0439\u043b\u0435\u0440\u044b."}],se=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal,r=e.platform;return o.a.createElement(I.t,{id:t,header:o.a.createElement(I.u,{left:r!==I.p&&o.a.createElement(I.z,{onClick:a},o.a.createElement(re.a,null)),right:r===I.p&&o.a.createElement(I.z,{onClick:a},o.a.createElement(ne.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(I.s,null,le.map(function(e,t){return o.a.createElement(I.d,{key:t,description:e.desc,before:o.a.createElement(I.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(ie.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),ue={openModal:C},pe=Object(I.H)(Object(s.b)(null,ue)(se)),de=function(e){function t(){return Object(P.a)(this,t),Object(V.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.platform;return o.a.createElement(I.t,{id:t,header:o.a.createElement(I.u,{left:n!==I.p&&o.a.createElement(I.z,{onClick:a},o.a.createElement(re.a,null)),right:n===I.p&&o.a.createElement(I.z,{onClick:a},o.a.createElement(ne.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(I.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(I.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(I.s,null,o.a.createElement(I.d,null,o.a.createElement(I.q,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(I.d,null,o.a.createElement(I.q,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(I.d,null,o.a.createElement(I.q,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),me=Object(I.H)(Object(s.b)()(de)),he=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(V.a)(this,Object(x.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(D.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){return h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),h.a.send("VKWebAppInit",{}).then(function(e){return e}).catch(function(e){return e})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activeModals,s=e.panelsHistory,u=e.colorScheme,p=void 0===s[c]?[c]:s[c],d=void 0===r[c]?null:r[c],m=void 0===l[c]?null:l[c],h=o.a.createElement(I.v,{activeModal:m},o.a.createElement(pe,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(me,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(I.g,{isWebView:!0,scheme:u},o.a.createElement(I.i,{activeStory:i,tabbar:o.a.createElement(I.C,null,o.a.createElement(I.D,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(B.a,null)),o.a.createElement(I.D,{onClick:function(){return a("more","callmodal")},selected:"more"===i},o.a.createElement(G.a,null)))},o.a.createElement(I.B,{id:"home",activeView:c,popout:d},o.a.createElement(I.G,{id:"home",modal:h,activePanel:f("home"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(W,{id:"base",withoutEpic:!1}),o.a.createElement(q,{id:"groups"}))),o.a.createElement(I.B,{id:"more",activeView:c,popout:d},o.a.createElement(I.G,{id:"more",modal:h,activePanel:f("more"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(Z,{id:"callmodal"})),o.a.createElement(I.G,{id:"modal",modal:h,activePanel:f("modal"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(te,{id:"filters"})))))}}]),t}(o.a.Component);var ve=Object(s.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:w,goBack:S,closeModal:A},e))})(he);a.d(t,"store",function(){return be});var be=Object(i.createStore)(g,Object(j.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));be.dispatch(w("home","base")),c.a.render(o.a.createElement(s.a,{store:be},o.a.createElement(ve,null)),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.042919ab.chunk.js.map