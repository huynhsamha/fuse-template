(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2864:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),c=a(15),l=a(14),s=a(16),o=a(36),i=a(0),u=a.n(i),m=a(1),d=a(6),p=a(75),h=a(5),b=a.n(h),f=a(17),g=a(27),v=a(254),E=a(563),x=a(56),C=a.n(x),y="[CHAT APP] GET CONTACTS",w="[CHAT APP] SET SELECTED CONTACT ID",O="[CHAT APP] REMOVE SELECTED CONTACT ID";function N(){var e=C.a.get("/api/chat/contacts");return function(t){return e.then(function(e){return t({type:y,payload:e.data})})}}var S="[CHAT APP] GET USER DATA",j="[CHAT APP] UPDATE USER DATA";function k(){var e=C.a.get("/api/chat/user");return function(t){return e.then(function(e){return t({type:S,payload:e.data})})}}function T(e){var t=C.a.post("/api/chat/user/data",e);return function(e){return t.then(function(t){return e({type:j,payload:t.data})})}}var M="[CHAT APP] GET CHAT",A="[CHAT APP] REMOVE CHAT",I="[CHAT APP] SEND MESSAGE";function D(e){return function(t,a){var n=a().chatPanel.user.id;return C.a.get("/api/chat/get-chat",{contactId:e,userId:n}).then(function(a){return t(function(e){return{type:w,payload:e}}(e)),t(Object(E.h)()),t({type:M,chat:a.data.chat,userChatData:a.data.userChatData})})}}function P(e,t,a){var n={who:a,message:e,time:new Date},r=C.a.post("/api/chat/send-message",{chatId:t,message:n});return function(e){return r.then(function(t){return e({type:I,message:t.data.message,userChatData:t.data.userChatData})})}}var R=a(3),L=a(87),B=a.n(L),U=a(21),G=a(8),H=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={messageText:""},a.shouldShowContactAvatar=function(e,t){return e.who===a.props.selectedContactId&&(a.props.chat.dialog[t+1]&&a.props.chat.dialog[t+1].who!==a.props.selectedContactId||!a.props.chat.dialog[t+1])},a.isFirstMessageOfGroup=function(e,t){return 0===t||a.props.chat.dialog[t-1]&&a.props.chat.dialog[t-1].who!==e.who},a.isLastMessageOfGroup=function(e,t){return t===a.props.chat.dialog.length-1||a.props.chat.dialog[t+1]&&a.props.chat.dialog[t+1].who!==e.who},a.onInputChange=function(e){a.setState({messageText:e.target.value})},a.onMessageSubmit=function(e){e.preventDefault(),""!==a.state.messageText&&a.props.sendMessage(a.state.messageText,a.props.chat.id,a.props.user.id).then(function(){a.setState({messageText:""}),a.scrollToBottom()})},a.scrollToBottom=function(){a.chatScroll.scrollTop=a.chatScroll.scrollHeight},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(e){this.props.chat&&this.scrollToBottom()}},{key:"componentDidUpdate",value:function(e){this.props.chat&&!G.a.isEqual(e.chat,this.props.chat)&&this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.chat,r=t.contacts,c=t.user,l=t.className,s=this.state.messageText;return u.a.createElement("div",{className:b()("flex flex-col relative",l)},u.a.createElement(R.t,{containerRef:function(t){e.chatScroll=t},className:"flex flex-1 flex-col overflow-y-auto"},n&&n.dialog.length>0?u.a.createElement("div",{className:"flex flex-col pt-16 pl-56 pr-16 pb-40"},n.dialog.map(function(t,l){var s=t.who===c.id?c:r.find(function(e){return e.id===t.who});return u.a.createElement("div",{key:t.time,className:b()(a.messageRow,"flex flex-col flex-no-grow flex-no-shrink items-start justify-end relative pr-16 pb-4 pl-16",{me:t.who===c.id},{contact:t.who!==c.id},{"first-of-group":e.isFirstMessageOfGroup(t,l)},{"last-of-group":e.isLastMessageOfGroup(t,l)},l+1===n.dialog.length&&"pb-96")},e.shouldShowContactAvatar(t,l)&&u.a.createElement(m.b,{className:"avatar absolute pin-l m-0 -ml-32",src:s.avatar}),u.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full"},u.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},t.message),u.a.createElement(m.vb,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 pin-l pin-b whitespace-no-wrap",color:"textSecondary"},B()(t.time).format("MMMM Do YYYY, h:mm:ss a"))))})):u.a.createElement("div",{className:"flex flex-col flex-1"},u.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},u.a.createElement(m.G,{className:"text-128",color:"disabled"},"chat")),u.a.createElement(m.vb,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),n&&u.a.createElement("form",{onSubmit:this.onMessageSubmit,className:"absolute pin-b pin-r pin-l py-16 px-8"},u.a.createElement(m.W,{className:"flex items-center relative rounded-24",elevation:1},u.a.createElement(m.sb,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-no-shrink ml-16 mr-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:a.bootstrapFormLabel},onChange:this.onInputChange,value:s}),u.a.createElement(m.H,{className:"absolute pin-r pin-t",type:"submit"},u.a.createElement(m.G,{className:"text-24",color:"action"},"send")))))}}]),t}(i.Component);var z=Object(d.withStyles)(function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}})(Object(U.b)(function(e){var t=e.chatApp;return{contacts:t.contacts.entities,selectedContactId:t.contacts.selectedContactId,chat:t.chat,user:t.user}},function(e){return Object(f.c)({sendMessage:P},e)})(H)),F=a(19),W=a(11),_=function(e){switch(e.status){case"online":return u.a.createElement(m.G,{className:"block text-16 text-green bg-white rounded-full"},"check_circle");case"away":return u.a.createElement(m.G,{className:"block text-16 text-white bg-yellow-dark rounded-full"},"access_time");case"do-not-disturb":return u.a.createElement(m.G,{className:"block text-16 text-red bg-white rounded-full"},"remove_circle_outline");case"offline":return u.a.createElement(m.G,{className:"block text-16 text-grey-dark bg-white rounded-full"},"not_interested");default:return null}},q=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}],Y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={statusSwitchEl:null,chatsMoreMenuEl:null,searchText:""},a.handleContactClick=function(e){a.props.getChat(e)},a.chatsMoreMenuClick=function(e){a.setState({chatsMoreMenuEl:e.currentTarget})},a.chatsMoreMenuClose=function(e){a.setState({chatsMoreMenuEl:null})},a.statusSwitchClick=function(e){e.preventDefault(),e.stopPropagation(),a.setState({statusSwitchEl:e.currentTarget})},a.statusSwitchClose=function(e){e.preventDefault(),e.stopPropagation(),a.setState({statusSwitchEl:null})},a.getFilteredArray=function(e,t){return 0===t.length?e:R.A.filterArrayByString(e,t)},a.setSearchText=function(e){a.setState({searchText:e.target.value})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.contacts,r=t.user,c=t.selectedContactId,l=t.openUserSidebar,s=this.state,o=s.statusSwitchEl,i=s.chatsMoreMenuEl,d=s.searchText,p=r&&r.chatList?r.chatList.map(function(e){return Object(W.a)({},e,n.find(function(t){return t.id===e.contactId}))}):[],h=this.getFilteredArray(Object(F.a)(p),d),f=this.getFilteredArray(Object(F.a)(n),d),g=function(t){var n=t.contact;return u.a.createElement(m.N,{button:!0,className:b()(a.contactListItem,"px-16 py-12 min-h-92",{active:c===n.id}),onClick:function(){return e.handleContactClick(n.id)}},u.a.createElement("div",{className:"relative"},u.a.createElement("div",{className:"absolute pin-r pin-b -m-4 z-10"},u.a.createElement(_,{status:n.status})),u.a.createElement(m.b,{src:n.avatar,alt:n.name},n.avatar&&""!==n.avatar?"":n.name[0])),u.a.createElement(m.Q,{classes:{root:"min-w-px",secondary:"truncate"},primary:n.name,secondary:n.mood}),n.chatId&&u.a.createElement("div",{className:"flex flex-col justify-center items-end"},n.lastMessageTime&&u.a.createElement(m.vb,{className:"whitespace-no-wrap mb-8"},B()(n.lastMessageTime).format("ll")),n.unread&&u.a.createElement("div",{className:b()(a.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center")},n.unread)))};return u.a.createElement("div",{className:"flex flex-col flex-auto h-full"},u.a.createElement(m.a,{className:a.contentToolbar,position:"static",color:"default",elevation:1},u.a.createElement(m.tb,{className:"flex justify-between items-center px-16 pr-4"},r&&u.a.createElement("div",{className:"relative w-40 h-40 p-0 cursor-pointer",onClick:l},u.a.createElement(m.b,{src:r.avatar,alt:r.name,className:"w-40 h-40"},r.avatar&&""!==r.avatar?"":r.name[0]),u.a.createElement("div",{className:"absolute pin-r pin-b -m-4 z-10 cursor-pointer","aria-owns":o?"switch-menu":null,"aria-haspopup":"true",onClick:this.statusSwitchClick},u.a.createElement(_,{status:r.status})),u.a.createElement(m.S,{id:"status-switch",anchorEl:o,open:Boolean(o),onClose:this.statusSwitchClose},q.map(function(t){return u.a.createElement(m.T,{onClick:e.statusSwitchClose,key:t.value},u.a.createElement(m.O,null,u.a.createElement(_,{status:t.value})),u.a.createElement(m.Q,{primary:t.title}))}))),u.a.createElement("div",null,u.a.createElement(m.H,{"aria-owns":i?"chats-more-menu":null,"aria-haspopup":"true",onClick:this.chatsMoreMenuClick},u.a.createElement(m.G,null,"more_vert")),u.a.createElement(m.S,{id:"chats-more-menu",anchorEl:i,open:Boolean(i),onClose:this.chatsMoreMenuClose},u.a.createElement(m.T,{onClick:this.chatsMoreMenuClose},"Profile"),u.a.createElement(m.T,{onClick:this.chatsMoreMenuClose},"Logout")))),u.a.createElement(m.tb,{className:"px-16"},u.a.createElement(m.W,{className:"flex p-4 items-center w-full px-8 py-4 rounded-8",elevation:1},u.a.createElement(m.G,{className:"mr-8",color:"action"},"search"),u.a.createElement(m.I,{placeholder:"Search or start new chat",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:d,inputProps:{"aria-label":"Search"},onChange:this.setSearchText})))),u.a.createElement(R.t,{className:"overflow-y-auto flex-1"},u.a.createElement(m.M,{className:"w-full"},n.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(R.e,{enter:{animation:"transition.expandIn"},className:"flex flex-col flex-no-shrink"},h.length>0&&u.a.createElement(m.vb,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Chats"),h.map(function(e){return u.a.createElement(g,{key:e.id,contact:e})}),f.length>0&&u.a.createElement(m.vb,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Contacts"),f.map(function(e){return u.a.createElement(g,{key:e.id,contact:e})}))))))}}]),t}(i.Component);var J=Object(d.withStyles)(function(e){return{contactListItem:{borderBottom:"1px solid "+e.palette.divider,"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}},{withTheme:!0})(Object(U.b)(function(e){var t=e.chatApp;return{contacts:t.contacts.entities,selectedContactId:t.contacts.selectedContactId,user:t.user}},function(e){return Object(f.c)({getChat:D,openUserSidebar:E.l},e)})(Y));var Q=Object(g.a)(function(e){var t=e.chatApp;return{contacts:t.contacts.entities,selectedContactId:t.contacts.selectedContactId}},function(e){return Object(f.c)({closeContactSidebar:E.g},e)})(function(e){var t=e.contacts,a=e.closeContactSidebar,n=e.selectedContactId,r=t.find(function(e){return e.id===n});return r?u.a.createElement("div",{className:"flex flex-col flex-auto h-full"},u.a.createElement(m.a,{position:"static",color:"primary",elevation:1},u.a.createElement(m.tb,{className:"flex justify-between items-center px-16 pr-4"},u.a.createElement(m.vb,{color:"inherit",variant:"subtitle1"},"Contact Info"),u.a.createElement(m.H,{onClick:a,color:"inherit"},u.a.createElement(m.G,null,"close"))),u.a.createElement(m.tb,{className:"flex flex-col justify-center items-center p-24"},u.a.createElement(m.b,{src:r.avatar,alt:r.name,className:"w-96 h-96"},r.avatar&&""!==r.avatar?"":r.name[0]),u.a.createElement(m.vb,{color:"inherit",className:"mt-16",variant:"h6"},r.name))),u.a.createElement(R.t,{className:"overflow-y-auto flex-1 p-24"},u.a.createElement(m.sb,{label:"Mood",className:"w-full",value:r.mood,margin:"normal",disabled:!0,multiline:!0}))):""}),V=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}],Z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).updateUserData=G.a.debounce(function(){a.props.updateUserData(a.state)},500),a.handleChange=function(e){a.setState(G.a.set(Object(W.a)({},a.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},a.state=a.props.user?Object(W.a)({},a.props.user):null,a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!this.props.user||G.a.isEqual(e.user,this.props.user)||G.a.isEqual(this.state,this.props.user)||this.setState(Object(W.a)({},this.props.user)),!this.state||G.a.isEqual(this.state,t)||G.a.isEqual(this.state,this.props.user)||this.updateUserData()}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.closeUserSidebar;return this.state?u.a.createElement("div",{className:"flex flex-col flex-auto h-full"},u.a.createElement(m.a,{position:"static",color:"primary",elevation:1},u.a.createElement(m.tb,{className:"flex justify-between items-center px-16 pr-4"},u.a.createElement(m.vb,{color:"inherit",variant:"subtitle1"},"User Info"),u.a.createElement(m.H,{onClick:a,color:"inherit"},u.a.createElement(m.G,null,"close"))),u.a.createElement(m.tb,{className:"flex flex-col justify-center items-center p-24"},u.a.createElement(m.b,{src:t.avatar,alt:t.name,className:"w-96 h-96"},t.avatar&&""!==t.avatar?"":t.name[0]),u.a.createElement(m.vb,{color:"inherit",className:"mt-16",variant:"h6"},t.name))),u.a.createElement(R.t,{className:"overflow-y-auto flex-1 p-24"},u.a.createElement("form",null,u.a.createElement(m.x,{component:"fieldset",className:"w-full mb-16"},u.a.createElement(m.sb,{label:"Mood",name:"mood",className:"w-full",value:this.state.mood,margin:"normal",multiline:!0,onChange:this.handleChange})),u.a.createElement(m.x,{component:"fieldset",className:"w-full mb-16"},u.a.createElement(m.A,{component:"legend"},"Status"),u.a.createElement(m.ab,{"aria-label":"Status",name:"status",className:"",value:this.state.status,onChange:this.handleChange},V.map(function(e){return u.a.createElement(m.y,{key:e.value,value:e.value,control:u.a.createElement(m.Z,null),label:u.a.createElement("div",{className:"flex items-center"},u.a.createElement(_,{status:e.value}),u.a.createElement("span",{className:"ml-8"},e.title))})})))))):""}}]),t}(i.Component);var K=Object(g.a)(function(e){return{user:e.chatApp.user}},function(e){return Object(f.c)({closeUserSidebar:E.i,updateUserData:T},e)})(Z),X={mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;switch((arguments.length>1?arguments[1]:void 0).type){case E.e:return Object(W.a)({},e,{mobileChatsSidebarOpen:!0});case E.b:return Object(W.a)({},e,{mobileChatsSidebarOpen:!1});case E.f:return Object(W.a)({},e,{userSidebarOpen:!0});case E.c:return Object(W.a)({},e,{userSidebarOpen:!1});case E.d:return Object(W.a)({},e,{contactSidebarOpen:!0});case E.a:return Object(W.a)({},e,{contactSidebarOpen:!1});default:return e}},ee=a(545),te=a.n(ee);function ae(e,t){var a=te.a.merge({},e),n=a.chatList.find(function(e){return e.contactId===t.userChatData.contactId});return a.chatList=n?a.chatList.map(function(e){return e.contactId===t.userChatData.contactId?t.userChatData:e}):[t.userChatData].concat(Object(F.a)(a.chatList)),a}var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case j:return Object(W.a)({},t.payload);case M:case I:return ae(e,t);default:return e}},re={entities:[],selectedContactId:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(W.a)({},e,{entities:Object(F.a)(t.payload)});case w:return Object(W.a)({},e,{selectedContactId:t.payload});case O:return Object(W.a)({},e,{selectedContactId:null});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(W.a)({},t.chat);case A:return null;case I:return Object(W.a)({},e,{dialog:Object(F.a)(e.dialog).concat([t.message])});default:return e}},se=Object(f.d)({sidebars:$,user:ne,contacts:ce,chat:le}),oe=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData(),this.props.getContacts()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.chat,n=e.selectedContactId,r=e.contacts,c=e.mobileChatsSidebarOpen,l=e.openMobileChatsSidebar,s=e.closeMobileChatsSidebar,o=e.userSidebarOpen,i=e.closeUserSidebar,d=e.contactSidebarOpen,p=e.openContactSidebar,h=e.closeContactSidebar,f=r.find(function(e){return e.id===n});return u.a.createElement("div",{className:b()(t.root)},u.a.createElement("div",{className:t.topBg}),u.a.createElement("div",{className:b()(t.contentCardWrapper,"container")},u.a.createElement("div",{className:t.contentCard},u.a.createElement(m.F,{mdUp:!0},u.a.createElement(m.r,{className:"h-full absolute z-20",variant:"temporary",anchor:"left",open:c,onClose:s,classes:{paper:b()(t.drawerPaper,"absolute pin-l")},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},u.a.createElement(J,null))),u.a.createElement(m.F,{smDown:!0},u.a.createElement(m.r,{className:"h-full z-20",variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},u.a.createElement(J,null))),u.a.createElement(m.r,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:o,onClose:i,classes:{paper:b()(t.drawerPaper,"absolute pin-l")},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},u.a.createElement(K,null)),u.a.createElement("main",{className:b()(t.contentWrapper,"z-10")},a?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{className:"w-full",position:"static",elevation:1},u.a.createElement(m.tb,{className:"px-16"},u.a.createElement(m.H,{color:"inherit","aria-label":"Open drawer",onClick:l,className:"flex md:hidden"},u.a.createElement(m.G,null,"chat")),u.a.createElement("div",{className:"flex items-center cursor-pointer",onClick:p},u.a.createElement("div",{className:"relative ml-8 mr-12"},u.a.createElement("div",{className:"absolute pin-r pin-b -m-4 z-10"},u.a.createElement(_,{status:f.status})),u.a.createElement(m.b,{src:f.avatar,alt:f.name},f.avatar&&""!==f.avatar?"":f.name[0])),u.a.createElement(m.vb,{color:"inherit",className:"text-18 font-600"},f.name)))),u.a.createElement("div",{className:t.content},u.a.createElement(z,{className:"flex flex-1 z-10"}))):u.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center p-24"},u.a.createElement(m.W,{className:"rounded-full p-48"},u.a.createElement(m.G,{className:"block text-64",color:"secondary"},"chat")),u.a.createElement(m.vb,{variant:"h6",className:"my-24"},"Chat App"),u.a.createElement(m.vb,{className:"hidden md:flex px-16 pb-24 mt-24 text-center",color:"textSecondary"},"Select a contact to start a conversation!.."),u.a.createElement(m.c,{variant:"outlined",color:"primary",className:"flex md:hidden normal-case",onClick:l},"Select a contact to start a conversation!.."))),u.a.createElement(m.r,{className:"h-full absolute z-30",variant:"temporary",anchor:"right",open:d,onClose:h,classes:{paper:b()(t.drawerPaper,"absolute pin-r")},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},u.a.createElement(Q,null)))))}}]),t}(u.a.Component);t.default=Object(v.a)("chatApp",se)(Object(d.withStyles)(function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(o.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(o.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,minHeight:0,overflow:"hidden"},drawerPaper:Object(o.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(p.fade)(e.palette.background.paper,.8)," 0,").concat(Object(p.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(p.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}},{withTheme:!0})(Object(g.a)(function(e){var t=e.chatApp;return{chat:t.chat,contacts:t.contacts.entities,selectedContactId:t.contacts.selectedContactId,mobileChatsSidebarOpen:t.sidebars.mobileChatsSidebarOpen,userSidebarOpen:t.sidebars.userSidebarOpen,contactSidebarOpen:t.sidebars.contactSidebarOpen}},function(e){return Object(f.c)({getUserData:k,getContacts:N,openMobileChatsSidebar:E.k,closeMobileChatsSidebar:E.h,openUserSidebar:E.l,closeUserSidebar:E.i,openContactSidebar:E.j,closeContactSidebar:E.g},e)})(oe)))}}]);