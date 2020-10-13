(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1846:function(t,e,n){"use strict";var r=n(56),a=n.n(r),i=n(3),c=n(262),u=n(8),o=n(51),d=n(179),s=function(t,e,n){var r=Array.from(t),a=r.splice(e,1),i=Object(d.a)(a,1)[0];return r.splice(n,0,i),r},l=s,p=function(t,e,n){var r=u.a.find(t,{id:e.droppableId}),a=u.a.find(t,{id:n.droppableId}),i=r.idCards[e.index];if(e.droppableId===n.droppableId){var c=s(r.idCards,e.index,n.index);return t.map(function(t){return t.id===e.droppableId&&(t.idCards=c),t})}return r.idCards.splice(e.index,1),a.idCards.splice(n.index,0,i),t.map(function(t){return t.id===e.droppableId?r:t.id===n.droppableId?a:t})},f=n(12),b=function t(e){Object(f.a)(this,t);var n=e||{};this.id=n.id||i.A.generateGUID(),this.name=n.name||"",this.idCards=[]},m=function t(e){Object(f.a)(this,t);var n=e||{};this.id=n.id||i.A.generateGUID(),this.name=n.name||"",this.description=n.description||"",this.idAttachmentCover=n.idAttachmentCover||"",this.idMembers=n.idMembers||[],this.idLabels=n.idLabels||[],this.attachments=n.attachments||[],this.subscribed=n.subscribed||!0,this.checklists=n.checklists||[],this.checkItems=n.checkItems||0,this.checkItemsChecked=n.checkItemsChecked||0,this.comments=n.comments||[],this.activities=n.activities||[],this.due=n.due||""},h="[SCRUMBOARD APP] GET BOARD",A="[SCRUMBOARD APP] DELETE BOARD",R="[SCRUMBOARD APP] COPY BOARD",O="[SCRUMBOARD APP] RENAME BOARD",C="[SCRUMBOARD APP] CHANGE BOARD SETTINGS",D="[SCRUMBOARD APP] RESET BOARD",v="[SCRUMBOARD APP] ORDER LIST",y="[SCRUMBOARD APP] ORDER CARD",I="[SCRUMBOARD APP] ADD CARD",P="[SCRUMBOARD APP] ADD LIST",g="[SCRUMBOARD APP] ADD LABEL",E="[SCRUMBOARD APP] RENAME LIST",j="[SCRUMBOARD APP] REMOVE LIST";function B(t){var e=a.a.get("/api/scrumboard-app/board",{boardId:t});return function(t){return e.then(function(e){return t({type:h,payload:e.data})},function(e){t(Object(o.C)({message:e.response.data,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),c.a.push({pathname:"/apps/scrumboard/boards"})})}}function S(){return{type:D}}function M(t){return function(e,n){var r=n().scrumboardApp.board,i=r.lists,c=l(i,t.source.index,t.destination.index);return a.a.post("/api/scrumboard-app/list/order",{boardId:r.id,lists:c}).then(function(t){e(Object(o.C)({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))}),e({type:v,payload:c})}}function x(t){return function(e,n){var r=n().scrumboardApp.board,i=r.lists,c=p(i,t.source,t.destination);return a.a.post("/api/scrumboard-app/card/order",{boardId:r.id,lists:c}).then(function(t){e(Object(o.C)({message:"Card Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}}))}),e({type:y,payload:c})}}function w(t,e,n){var r=new m({name:n}),i=a.a.post("/api/scrumboard-app/card/new",{boardId:t,listId:e,data:r});return function(t){return new Promise(function(e,n){i.then(function(n){return e(n.data),t({type:I,payload:n.data})})})}}function U(t,e){var n=new b({name:e}),r=a.a.post("/api/scrumboard-app/list/new",{boardId:t,data:n});return function(t){return r.then(function(e){return t({type:P,payload:e.data})})}}function T(t,e,n){var r=a.a.post("/api/scrumboard-app/list/rename",{boardId:t,listId:e,listTitle:n});return function(t){return r.then(function(r){return t({type:E,listId:e,listTitle:n})})}}function k(t,e){var n=a.a.post("/api/scrumboard-app/list/remove",{boardId:t,listId:e});return function(t){return n.then(function(n){return t({type:j,listId:e})})}}function L(t){return function(e){return e({type:g,payload:t})}}function N(t){return function(e,n){var r=n().scrumboardApp.board,i=u.a.merge(r.settings,t);return a.a.post("/api/scrumboard-app/board/settings/update",{boardId:r.id,settings:i}).then(function(t){return e({type:C,payload:t.data})})}}function G(t){var e=a.a.post("/api/scrumboard-app/board/delete",{boardId:t});return function(t){return e.then(function(e){return c.a.push({pathname:"/apps/scrumboard/boards"}),t({type:A})})}}function H(t){var e=u.a.merge(t,{id:i.A.generateGUID(),name:t.name+" (Copied)",uri:t.uri+"-copied"});return function(t){return t(X(e)),{type:R}}}function V(t,e){var n=a.a.post("/api/scrumboard-app/board/rename",{boardId:t,boardTitle:e});return function(t){return n.then(function(n){return t({type:O,boardTitle:e})})}}var z=[{id:"26022e4129ad3a5sc28b36cd",name:"High Priority",class:"bg-red text-white"},{id:"56027e4119ad3a5dc28b36cd",name:"Design",class:"bg-orange text-white"},{id:"5640635e19ad3a5dc21416b2",name:"App",class:"bg-blue text-white"},{id:"6540635g19ad3s5dc31412b2",name:"Feature",class:"bg-green text-white"}],F=[{id:"56027c1930450d8bf7b10758",name:"Alice Freeman",avatar:"assets/images/avatars/alice.jpg"},{id:"26027s1930450d8bf7b10828",name:"Danielle Obrien",avatar:"assets/images/avatars/danielle.jpg"},{id:"76027g1930450d8bf7b10958",name:"James Lewis",avatar:"assets/images/avatars/james.jpg"},{id:"36027j1930450d8bf7b10158",name:"John Doe",avatar:"assets/images/avatars/Velazquez.jpg"}],J=function t(e){Object(f.a)(this,t);var n=e||{};this.name=n.name||"Untitled Board",this.uri=n.uri||"untitled-board",this.id=n.id||i.A.generateGUID(),this.settings=n.settings||{color:"",subscribed:!0,cardCoverImages:!0},this.lists=[],this.cards=[],this.members=n.members||F,this.labels=n.labels||z},K="[SCRUMBOARD APP] GET BOARDS",W="[SCRUMBOARD APP] RESET BOARDS",q="[SCRUMBOARD APP] NEW BOARD";function Y(){var t=a.a.get("/api/scrumboard-app/boards");return function(e){return t.then(function(t){return e({type:K,payload:t.data})})}}function Q(){return{type:W}}function X(t){var e=a.a.post("/api/scrumboard-app/board/new",{board:t||new J});return function(t){return e.then(function(e){var n=e.data;return c.a.push({pathname:"/apps/scrumboard/boards/"+n.id+"/"+n.handle}),t({type:q,board:n})})}}var Z="[SCRUMBOARD APP] OPEN CARD DIALOG",_="[SCRUMBOARD APP] CLOSE CARD DIALOG",$="[SCRUMBOARD APP] UPDATE CARD",tt="[SCRUMBOARD APP] CHANGE CARD",et="[SCRUMBOARD APP] REMOVE CARD",nt="[SCRUMBOARD APP] CHIP CHANGED CARD",rt="[SCRUMBOARD APP] NEW CHIP CARD",at="[SCRUMBOARD APP] MAKE COVER CARD",it="[SCRUMBOARD APP] REMOVE COVER CARD",ct="[SCRUMBOARD APP] REMOVE ATTACHMENT CARD",ut="[SCRUMBOARD APP] REMOVE DUE CARD",ot="[SCRUMBOARD APP] TOGGLE LABEL CARD",dt="[SCRUMBOARD APP] TOGGLE MEMBER CARD",st="[SCRUMBOARD APP] ADD CHECKLIST CARD",lt="[SCRUMBOARD APP] CHECKLIST CHANGE CARD",pt="[SCRUMBOARD APP] CHECKLIST REMOVE CARD",ft="[SCRUMBOARD APP] COMMENT ADD CARD";function bt(t){return{type:Z,payload:t}}function mt(){return{type:_}}function ht(t,e){return function(n){return a.a.post("/api/scrumboard-app/card/update",{boardId:t,card:e}).then(function(t){return n(Object(o.C)({message:"Card Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),n({type:$,payload:e})})}}function At(t,e){return function(n){return a.a.post("/api/scrumboard-app/card/remove",{boardId:t,cardId:e}).then(function(r){return n({type:et,boardId:t,cardId:e})})}}function Rt(t){return{type:tt,target:t.target}}function Ot(t,e){return{type:nt,name:t,value:e}}function Ct(t,e){return{type:rt,name:t,value:e}}function Dt(t){return{type:at,attachmentId:t}}function vt(){return{type:it}}function yt(t){return{type:ct,attachmentId:t}}function It(){return{type:ut}}function Pt(t){return{type:ot,labelId:t}}function gt(t){return{type:dt,memberId:t}}function Et(t){return{type:st,newList:t}}function jt(t){return{type:lt,item:t}}function Bt(t){return{type:pt,id:t}}function St(t){return{type:ft,comment:t}}n.d(e,"m",function(){return h}),n.d(e,"l",function(){return A}),n.d(e,"z",function(){return O}),n.d(e,"e",function(){return C}),n.d(e,"B",function(){return D}),n.d(e,"t",function(){return v}),n.d(e,"s",function(){return y}),n.d(e,"a",function(){return I}),n.d(e,"d",function(){return P}),n.d(e,"c",function(){return g}),n.d(e,"A",function(){return E}),n.d(e,"y",function(){return j}),n.d(e,"Q",function(){return B}),n.d(e,"ib",function(){return S}),n.d(e,"hb",function(){return M}),n.d(e,"gb",function(){return x}),n.d(e,"V",function(){return w}),n.d(e,"W",function(){return U}),n.d(e,"fb",function(){return T}),n.d(e,"db",function(){return k}),n.d(e,"H",function(){return L}),n.d(e,"J",function(){return N}),n.d(e,"P",function(){return G}),n.d(e,"O",function(){return H}),n.d(e,"eb",function(){return V}),n.d(e,"n",function(){return K}),n.d(e,"C",function(){return W}),n.d(e,"p",function(){return q}),n.d(e,"R",function(){return Y}),n.d(e,"jb",function(){return Q}),n.d(e,"U",function(){return X}),n.d(e,"r",function(){return Z}),n.d(e,"j",function(){return _}),n.d(e,"F",function(){return $}),n.d(e,"f",function(){return tt}),n.d(e,"v",function(){return et}),n.d(e,"i",function(){return nt}),n.d(e,"q",function(){return rt}),n.d(e,"o",function(){return at}),n.d(e,"w",function(){return it}),n.d(e,"u",function(){return ct}),n.d(e,"x",function(){return ut}),n.d(e,"D",function(){return ot}),n.d(e,"E",function(){return dt}),n.d(e,"b",function(){return st}),n.d(e,"g",function(){return lt}),n.d(e,"h",function(){return pt}),n.d(e,"k",function(){return ft}),n.d(e,"X",function(){return bt}),n.d(e,"M",function(){return mt}),n.d(e,"mb",function(){return ht}),n.d(e,"Z",function(){return At}),n.d(e,"S",function(){return Rt}),n.d(e,"L",function(){return Ot}),n.d(e,"I",function(){return Ct}),n.d(e,"T",function(){return Dt}),n.d(e,"bb",function(){return vt}),n.d(e,"Y",function(){return yt}),n.d(e,"cb",function(){return It}),n.d(e,"kb",function(){return Pt}),n.d(e,"lb",function(){return gt}),n.d(e,"G",function(){return Et}),n.d(e,"K",function(){return jt}),n.d(e,"ab",function(){return Bt}),n.d(e,"N",function(){return St})},1947:function(t,e,n){"use strict";var r=n(17),a=n(19),i=n(1846),c=[],u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.n:return Object(a.a)(e.payload);case i.p:return Object(a.a)(t).concat([e.board]);case i.C:return[];default:return t}},o=n(11),d=n(8),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.m:return Object(o.a)({},e.payload);case i.B:return null;case i.t:case i.s:case i.d:return Object(o.a)({},t,{lists:e.payload});case i.a:return Object(o.a)({},e.payload);case i.c:return Object(o.a)({},t,{labels:Object(a.a)(t.labels).concat([e.payload])});case i.F:return Object(o.a)({},t,{cards:t.cards.map(function(t){return t.id===e.payload.id?e.payload:t})});case i.v:return Object(o.a)({},t,{cards:d.a.reject(t.cards,{id:e.cardId}),lists:t.lists.map(function(t){return d.a.set(t,"idCards",d.a.reject(t.idCards,function(t){return t===e.cardId})),t})});case i.A:return Object(o.a)({},t,{lists:t.lists.map(function(t){return t.id===e.listId&&(t.name=e.listTitle),t})});case i.y:return Object(o.a)({},t,{lists:d.a.reject(t.lists,{id:e.listId})});case i.e:return Object(o.a)({},t,{settings:e.payload});case i.l:return null;case i.z:return Object(o.a)({},t,{name:e.boardTitle});default:return t}},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.r:return Object(o.a)({},e.payload);case i.v:case i.j:return null;case i.f:return d.a.setIn(t,e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value);case i.i:return d.a.setIn(t,e.name,e.value.map(function(t){return t.value}));case i.q:return d.a.setIn(t,e.name,Object(a.a)(t[e.name]).concat([e.value]));case i.o:return d.a.setIn(t,"idAttachmentCover",e.attachmentId);case i.w:return d.a.setIn(t,"idAttachmentCover","");case i.u:return Object(o.a)({},t,{attachments:d.a.reject(t.attachments,{id:e.attachmentId}),idAttachmentCover:t.idAttachmentCover===e.attachmentId?"":t.idAttachmentCover});case i.x:return d.a.setIn(t,"due",null);case i.D:return d.a.setIn(t,"idLabels",d.a.xor(t.idLabels,[e.labelId]));case i.E:return d.a.setIn(t,"idMembers",d.a.xor(t.idMembers,[e.memberId]));case i.b:return d.a.setIn(t,"checklists",Object(a.a)(t.checklists).concat([e.newList]));case i.g:var n=t.checklists.findIndex(function(t){return t.id===e.item.id});return d.a.setIn(t,"checklists[".concat(n,"]"),e.item);case i.h:return d.a.setIn(t,"checklists",d.a.reject(t.checklists,{id:e.id}));case i.k:return d.a.setIn(t,"activities",[e.comment].concat(Object(a.a)(t.activities)));default:return t}},p=Object(r.d)({boards:u,board:s,card:l});e.a=p},2749:function(t,e,n){"use strict";n.r(e);var r=n(12),a=n(13),i=n(15),c=n(14),u=n(16),o=n(0),d=n.n(o),s=n(1),l=n(6),p=n(75),f=n(3),b=n(17),m=n(26),h=n(214),A=n(21),R=n(5),O=n.n(R),C=n(254),D=n(1846),v=n(1947),y=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){this.props.getBoards()}},{key:"componentWillUnmount",value:function(){this.props.resetBoards()}},{key:"render",value:function(){var t=this.props,e=t.classes,n=t.boards,r=t.newBoard;return d.a.createElement("div",{className:O()(e.root,"flex flex-grow flex-no-shrink flex-col items-center")},d.a.createElement("div",{className:"flex flex-grow flex-no-shrink flex-col items-center container px-16 md:px-24"},d.a.createElement(f.d,null,d.a.createElement(s.vb,{className:"mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300",color:"inherit"},"Scrumboard App")),d.a.createElement("div",null,d.a.createElement(f.e,{className:"flex flex-wrap w-full justify-center py-32 px-16",enter:{animation:"transition.slideUpBigIn",duration:300}},n.map(function(t){return d.a.createElement("div",{className:"w-224 h-224 p-16",key:t.id},d.a.createElement(m.a,{to:"/apps/scrumboard/boards/"+t.id+"/"+t.uri,className:O()(e.board,"flex flex-col items-center justify-center w-full h-full rounded py-24"),role:"button"},d.a.createElement(s.G,{className:"text-56"},"assessment"),d.a.createElement(s.vb,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},t.name)))}),d.a.createElement("div",{className:"w-224 h-224 p-16"},d.a.createElement("div",{className:O()(e.board,e.newBoard,"flex flex-col items-center justify-center w-full h-full rounded py-24"),onClick:function(){return r()}},d.a.createElement(s.G,{className:"text-56"},"add_circle"),d.a.createElement(s.vb,{className:"text-16 font-300 text-center pt-16 px-32",color:"inherit"},"Add new board")))))))}}]),e}(o.Component);e.default=Object(C.a)("scrumboardApp",v.a)(Object(l.withStyles)(function(t){return{root:{background:t.palette.primary.main,color:t.palette.getContrastText(t.palette.primary.main)},board:{cursor:"pointer",boxShadow:t.shadows[0],transitionProperty:"box-shadow border-color",transitionDuration:t.transitions.duration.short,transitionTimingFunction:t.transitions.easing.easeInOut,background:t.palette.primary.dark,color:t.palette.getContrastText(t.palette.primary.dark),"&:hover":{boxShadow:t.shadows[6]}},newBoard:{borderWidth:2,borderStyle:"dashed",borderColor:Object(p.fade)(t.palette.getContrastText(t.palette.primary.main),.6),"&:hover":{borderColor:Object(p.fade)(t.palette.getContrastText(t.palette.primary.main),.8)}}}},{withTheme:!0})(Object(h.g)(Object(A.b)(function(t){return{boards:t.scrumboardApp.boards}},function(t){return Object(b.c)({getBoards:D.R,resetBoards:D.jb,newBoard:D.U},t)})(y))))}}]);