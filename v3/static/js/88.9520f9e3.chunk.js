(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1062:function(t,e,r){"use strict";var a=r(36),n=r.n(a),i=r(12),o=r(191),d=r(6),c=r(34),s=r(15),u=function(t,e,r){var a=Array.from(t),n=a.splice(e,1),i=Object(s.a)(n,1)[0];return a.splice(r,0,i),a},p=u,l=function(t,e,r){var a=d.a.find(t,{id:e.droppableId}),n=d.a.find(t,{id:r.droppableId}),i=a.idCards[e.index];if(e.droppableId===r.droppableId){var o=u(a.idCards,e.index,r.index);return t.map(function(t){return t.id===e.droppableId&&(t.idCards=o),t})}return a.idCards.splice(e.index,1),n.idCards.splice(r.index,0,i),t.map(function(t){return t.id===e.droppableId?a:t.id===r.droppableId?n:t})},f=r(43),b=function t(e){Object(f.a)(this,t);var r=e||{};this.id=r.id||i.B.generateGUID(),this.name=r.name||"",this.idCards=[]},m=function t(e){Object(f.a)(this,t);var r=e||{};this.id=r.id||i.B.generateGUID(),this.name=r.name||"",this.description=r.description||"",this.idAttachmentCover=r.idAttachmentCover||"",this.idMembers=r.idMembers||[],this.idLabels=r.idLabels||[],this.attachments=r.attachments||[],this.subscribed=r.subscribed||!0,this.checklists=r.checklists||[],this.checkItems=r.checkItems||0,this.checkItemsChecked=r.checkItemsChecked||0,this.comments=r.comments||[],this.activities=r.activities||[],this.due=r.due||""},h="[SCRUMBOARD APP] GET BOARD",O="[SCRUMBOARD APP] DELETE BOARD",A="[SCRUMBOARD APP] COPY BOARD",g="[SCRUMBOARD APP] RENAME BOARD",v="[SCRUMBOARD APP] CHANGE BOARD SETTINGS",R="[SCRUMBOARD APP] RESET BOARD",y="[SCRUMBOARD APP] ORDER LIST",D="[SCRUMBOARD APP] ORDER CARD",C="[SCRUMBOARD APP] ADD CARD",I="[SCRUMBOARD APP] ADD LIST",j="[SCRUMBOARD APP] ADD LABEL",x="[SCRUMBOARD APP] RENAME LIST",P="[SCRUMBOARD APP] REMOVE LIST";function E(t){var e=n.a.get("/api/scrumboard-app/board",{params:t});return function(t){return e.then(function(e){return t({type:h,payload:e.data})},function(e){t(Object(c.H)({message:e.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),o.a.push({pathname:"/apps/scrumboard/boards"})})}}function B(){return{type:R}}function w(t){return function(e,r){var a=r().scrumboardApp.board,i=a.lists,o=p(i,t.source.index,t.destination.index);return n.a.post("/api/scrumboard-app/list/order",{boardId:a.id,lists:o}).then(function(t){e(Object(c.H)({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))}),e({type:y,payload:o})}}function S(t){return function(e,r){var a=r().scrumboardApp.board,i=a.lists,o=l(i,t.source,t.destination);return n.a.post("/api/scrumboard-app/card/order",{boardId:a.id,lists:o}).then(function(t){e(Object(c.H)({message:"Card Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))}),e({type:D,payload:o})}}function M(t,e,r){var a=new m({name:r}),i=n.a.post("/api/scrumboard-app/card/new",{boardId:t,listId:e,data:a});return function(t){return new Promise(function(e,r){i.then(function(r){return e(r.data),t({type:C,payload:r.data})})})}}function U(t,e){var r=new b({name:e}),a=n.a.post("/api/scrumboard-app/list/new",{boardId:t,data:r});return function(t){return a.then(function(e){return t({type:I,payload:e.data})})}}function T(t,e,r){var a=n.a.post("/api/scrumboard-app/list/rename",{boardId:t,listId:e,listTitle:r});return function(t){return a.then(function(a){return t({type:x,listId:e,listTitle:r})})}}function k(t,e){var r=n.a.post("/api/scrumboard-app/list/remove",{boardId:t,listId:e});return function(t){return r.then(function(r){return t({type:P,listId:e})})}}function N(t){return function(e){return e({type:j,payload:t})}}function L(t){return function(e,r){var a=r().scrumboardApp.board,i=d.a.merge(a.settings,t);return n.a.post("/api/scrumboard-app/board/settings/update",{boardId:a.id,settings:i}).then(function(t){return e({type:v,payload:t.data})})}}function G(t){var e=n.a.post("/api/scrumboard-app/board/delete",{boardId:t});return function(t){return e.then(function(e){return o.a.push({pathname:"/apps/scrumboard/boards"}),t({type:O})})}}function H(t){var e=d.a.merge(t,{id:i.B.generateGUID(),name:t.name+" (Copied)",uri:t.uri+"-copied"});return function(t){return t(Q(e)),{type:A}}}function z(t,e){var r=n.a.post("/api/scrumboard-app/board/rename",{boardId:t,boardTitle:e});return function(t){return r.then(function(r){return t({type:g,boardTitle:e})})}}var J=[{id:"26022e4129ad3a5sc28b36cd",name:"High Priority",class:"bg-red text-white"},{id:"56027e4119ad3a5dc28b36cd",name:"Design",class:"bg-orange text-white"},{id:"5640635e19ad3a5dc21416b2",name:"App",class:"bg-blue text-white"},{id:"6540635g19ad3s5dc31412b2",name:"Feature",class:"bg-green text-white"}],F=[{id:"56027c1930450d8bf7b10758",name:"Alice Freeman",avatar:"assets/images/avatars/alice.jpg"},{id:"26027s1930450d8bf7b10828",name:"Danielle Obrien",avatar:"assets/images/avatars/danielle.jpg"},{id:"76027g1930450d8bf7b10958",name:"James Lewis",avatar:"assets/images/avatars/james.jpg"},{id:"36027j1930450d8bf7b10158",name:"John Doe",avatar:"assets/images/avatars/Velazquez.jpg"}],q=function t(e){Object(f.a)(this,t);var r=e||{};this.name=r.name||"Untitled Board",this.uri=r.uri||"untitled-board",this.id=r.id||i.B.generateGUID(),this.settings=r.settings||{color:"",subscribed:!0,cardCoverImages:!0},this.lists=[],this.cards=[],this.members=r.members||F,this.labels=r.labels||J},V="[SCRUMBOARD APP] GET BOARDS",W="[SCRUMBOARD APP] RESET BOARDS",K="[SCRUMBOARD APP] NEW BOARD";function Y(){var t=n.a.get("/api/scrumboard-app/boards");return function(e){return t.then(function(t){return e({type:V,payload:t.data})})}}function _(){return{type:W}}function Q(t){var e=n.a.post("/api/scrumboard-app/board/new",{board:t||new q});return function(t){return e.then(function(e){var r=e.data;return o.a.push({pathname:"/apps/scrumboard/boards/"+r.id+"/"+r.handle}),t({type:K,board:r})})}}var X="[SCRUMBOARD APP] OPEN CARD DIALOG",Z="[SCRUMBOARD APP] CLOSE CARD DIALOG",$="[SCRUMBOARD APP] UPDATE CARD",tt="[SCRUMBOARD APP] REMOVE CARD";function et(t){return{type:X,payload:t}}function rt(){return{type:Z}}function at(t,e){return function(r){return n.a.post("/api/scrumboard-app/card/update",{boardId:t,card:e}).then(function(t){return r(Object(c.H)({message:"Card Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),r({type:$,payload:e})})}}function nt(t,e){return function(r){return n.a.post("/api/scrumboard-app/card/remove",{boardId:t,cardId:e}).then(function(a){return r({type:tt,boardId:t,cardId:e})})}}r.d(e,"g",function(){return h}),r.d(e,"f",function(){return O}),r.d(e,"o",function(){return g}),r.d(e,"d",function(){return v}),r.d(e,"q",function(){return R}),r.d(e,"l",function(){return y}),r.d(e,"k",function(){return D}),r.d(e,"a",function(){return C}),r.d(e,"c",function(){return I}),r.d(e,"b",function(){return j}),r.d(e,"p",function(){return x}),r.d(e,"n",function(){return P}),r.d(e,"y",function(){return E}),r.d(e,"K",function(){return B}),r.d(e,"J",function(){return w}),r.d(e,"I",function(){return S}),r.d(e,"B",function(){return M}),r.d(e,"C",function(){return U}),r.d(e,"H",function(){return T}),r.d(e,"F",function(){return k}),r.d(e,"t",function(){return N}),r.d(e,"u",function(){return L}),r.d(e,"x",function(){return G}),r.d(e,"w",function(){return H}),r.d(e,"G",function(){return z}),r.d(e,"h",function(){return V}),r.d(e,"r",function(){return W}),r.d(e,"i",function(){return K}),r.d(e,"z",function(){return Y}),r.d(e,"L",function(){return _}),r.d(e,"A",function(){return Q}),r.d(e,"j",function(){return X}),r.d(e,"e",function(){return Z}),r.d(e,"s",function(){return $}),r.d(e,"m",function(){return tt}),r.d(e,"D",function(){return et}),r.d(e,"v",function(){return rt}),r.d(e,"M",function(){return at}),r.d(e,"E",function(){return nt})},1282:function(t,e,r){"use strict";var a=r(47),n=r(9),i=r(1062),o=[],d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.h:return Object(n.a)(e.payload);case i.i:return[].concat(Object(n.a)(t),[e.board]);case i.r:return[];default:return t}},c=r(8),s=r(6),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.g:return Object(c.a)({},e.payload);case i.q:return null;case i.l:case i.k:case i.c:return Object(c.a)({},t,{lists:e.payload});case i.a:return Object(c.a)({},e.payload);case i.b:return Object(c.a)({},t,{labels:[].concat(Object(n.a)(t.labels),[e.payload])});case i.s:return Object(c.a)({},t,{cards:t.cards.map(function(t){return t.id===e.payload.id?e.payload:t})});case i.m:return Object(c.a)({},t,{cards:s.a.reject(t.cards,{id:e.cardId}),lists:t.lists.map(function(t){return s.a.set(t,"idCards",s.a.reject(t.idCards,function(t){return t===e.cardId})),t})});case i.p:return Object(c.a)({},t,{lists:t.lists.map(function(t){return t.id===e.listId&&(t.name=e.listTitle),t})});case i.n:return Object(c.a)({},t,{lists:s.a.reject(t.lists,{id:e.listId})});case i.d:return Object(c.a)({},t,{settings:e.payload});case i.f:return null;case i.o:return Object(c.a)({},t,{name:e.boardTitle});default:return t}},p={dialogOpen:!1,data:null},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.j:return{dialogOpen:!0,data:e.payload};case i.s:return Object(c.a)({},t,{data:e.payload});case i.m:case i.e:return p;default:return t}},f=Object(a.d)({boards:d,board:u,card:l});e.a=f},2085:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),i=r(124),o=r(992),d=r(130),c=r(12),s=r(29),u=r(5),p=r(3),l=r(184),f=r(1062),b=r(1282),m=r(1030),h=Object(m.a)(function(t){return{root:{background:t.palette.primary.main,color:t.palette.getContrastText(t.palette.primary.main)},board:{cursor:"pointer",boxShadow:t.shadows[0],transitionProperty:"box-shadow border-color",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut,background:t.palette.primary.dark,color:t.palette.getContrastText(t.palette.primary.dark),"&:hover":{boxShadow:t.shadows[6]}},newBoard:{borderWidth:2,borderStyle:"dashed",borderColor:Object(d.fade)(t.palette.getContrastText(t.palette.primary.main),.6),"&:hover":{borderColor:Object(d.fade)(t.palette.getContrastText(t.palette.primary.main),.8)}}}});e.default=Object(l.a)("scrumboardApp",b.a)(function(t){var e=Object(u.b)(),r=Object(u.c)(function(t){return t.scrumboardApp.boards}),d=h(t);return Object(a.useEffect)(function(){return e(f.z()),function(){e(f.L())}},[e]),n.a.createElement("div",{className:Object(p.a)(d.root,"flex flex-grow flex-shrink-0 flex-col items-center")},n.a.createElement("div",{className:"flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24"},n.a.createElement(c.d,null,n.a.createElement(i.a,{className:"mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300",color:"inherit"},"Scrumboard App")),n.a.createElement("div",null,n.a.createElement(c.e,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},r.map(function(t){return n.a.createElement("div",{className:"w-224 h-224 p-16",key:t.id},n.a.createElement(s.a,{to:"/apps/scrumboard/boards/"+t.id+"/"+t.uri,className:Object(p.a)(d.board,"flex flex-col items-center justify-center w-full h-full rounded py-24"),role:"button"},n.a.createElement(o.a,{className:"text-56"},"assessment"),n.a.createElement(i.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},t.name)))}),n.a.createElement("div",{className:"w-224 h-224 p-16"},n.a.createElement("div",{className:Object(p.a)(d.board,d.newBoard,"flex flex-col items-center justify-center w-full h-full rounded py-24"),onClick:function(){return e(f.A())}},n.a.createElement(o.a,{className:"text-56"},"add_circle"),n.a.createElement(i.a,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"Add new board")))))))})}}]);