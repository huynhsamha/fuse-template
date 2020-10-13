(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2863:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(13),o=a(15),l=a(14),c=a(16),i=a(0),s=a.n(i),d=a(3),u=a(8),m=a(21),p=a(17),f=a(214),h=a(254),b=a(1),g=a(6),E=a(122),O=a.n(E),y=a(352),v=a.n(y),T=a(5),D=a.n(T),j=a(11),N=a(56),x=a.n(N),P="[TODO APP] GET FILTERS";var C="[TODO APP] GET FOLDERS";var A="[TODO APP] GET LABELS";var S="[TODO APP] GET TODOS",k="[TODO APP] UPDATE TODOS",w="[TODO APP] TOGGLE STARRED",L="[TODO APP] TOGGLE COMPLETED",G="[TODO APP] TOGGLE IMPORTANT",I="[TODO APP] UPDATE TODO",M="[TODO APP] ADD TODO",B="[TODO APP] REMOVE TODO",R="[TODO APP] SET SEARCH TEXT",_="[TODO APP] OPEN NEW TODO DIALOG",H="[TODO APP] CLOSE NEW TODO DIALOG",U="[TODO APP] OPEN EDIT TODO DIALOG",W="[TODO APP] CLOSE EDIT TODO DIALOG",F="[TODO APP] TOGGLE ORDER DESCENDING",q="[TODO APP] CHANGE ORDER";function Q(e){return function(t){Promise.all([t(function(){var e=x.a.get("/api/todo-app/filters");return function(t){return e.then(function(e){return t({type:P,payload:e.data})})}}()),t(function(){var e=x.a.get("/api/todo-app/folders");return function(t){return e.then(function(e){return t({type:C,payload:e.data})})}}()),t(function(){var e=x.a.get("/api/todo-app/labels");return function(t){return e.then(function(e){return t({type:A,payload:e.data})})}}())]).then(function(){return t(z(e))})}}function z(e){var t=x.a.get("/api/todo-app/todos",{params:e.params});return function(a){return t.then(function(t){return a({type:S,routeParams:e.params,payload:t.data})})}}function J(){return function(e,t){var a=t().todoApp.todos.routeParams;return x.a.get("/api/todo-app/todos",{params:a}).then(function(t){return e({type:k,payload:t.data})})}}function Y(e){var t=Object(j.a)({},e,{completed:!e.completed});return function(e){return Promise.all([e({type:L})]).then(function(){return e(X(t))})}}function K(e){var t=Object(j.a)({},e,{starred:!e.starred});return function(e){return Promise.all([e({type:w})]).then(function(){return e(X(t))})}}function V(e){var t=Object(j.a)({},e,{important:!e.important});return function(e){return Promise.all([e({type:G})]).then(function(){return e(X(t))})}}function X(e){var t=x.a.post("/api/todo-app/update-todo",e);return function(e){return t.then(function(t){Promise.all([e({type:I,payload:t.data})]).then(function(){return e(J())})})}}function Z(){return{type:_}}function $(){return{type:H}}function ee(e){return{type:U,data:e}}function te(){return{type:W}}function ae(e){var t=x.a.post("/api/todo-app/new-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:M})]).then(function(){return e(J())})})}}function ne(e){var t=x.a.post("/api/todo-app/remove-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:B})]).then(function(){return e(J())})})}}function re(e){return{type:R,searchText:e.target.value.toLowerCase()}}function oe(){return{type:F}}function le(e){return{type:q,orderBy:e}}var ce=Object(g.withStyles)(function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.title,n=e.color,r=e.className;return s.a.createElement("div",{className:D()(t.root,r)},s.a.createElement("div",{className:t.color,style:{backgroundColor:n}}),s.a.createElement("div",null,a))});var ie=Object(g.withStyles)(function(e){return{todoItem:{"&.completed":{background:"rgba(0,0,0,0.03)","& .todo-title, & .todo-notes":{textDecoration:"line-through"}}}}},{withTheme:!0})(Object(f.g)(Object(m.b)(function(e){return{labels:e.todoApp.labels}},function(e){return Object(p.c)({toggleCompleted:Y,toggleImportant:V,toggleStarred:K,openEditTodoDialog:ee},e)})(function(e){var t=e.todo,a=e.labels,n=e.classes,r=e.openEditTodoDialog,o=e.toggleImportant,l=e.toggleStarred,c=e.toggleCompleted;return s.a.createElement(b.N,{onClick:function(e){e.preventDefault(),r(t)},dense:!0,button:!0,className:D()(n.todoItem,{completed:t.completed},"border-solid border-b-1 py-16  px-0 sm:px-8")},s.a.createElement(b.h,{tabIndex:-1,disableRipple:!0,checked:t.completed,onChange:function(){return c(t)},onClick:function(e){return e.stopPropagation()}}),s.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden pl-8"},s.a.createElement(b.vb,{variant:"subtitle1",className:"todo-title truncate",color:t.completed?"textSecondary":"default"},t.title),s.a.createElement(b.vb,{color:"textSecondary",className:"todo-notes truncate"},u.a.truncate(t.notes.replace(/<(?:.|\n)*?>/gm,""),{length:180})),s.a.createElement("div",{className:D()(n.labels,"flex mt-8")},t.labels.map(function(e){return s.a.createElement(ce,{className:"mr-4",title:u.a.find(a,{id:e}).title,color:u.a.find(a,{id:e}).color,key:e})}))),s.a.createElement("div",{className:"px-8"},s.a.createElement(b.H,{onClick:function(e){e.preventDefault(),e.stopPropagation(),o(t)}},t.important?s.a.createElement(b.G,{style:{color:O.a[500]}},"error"):s.a.createElement(b.G,null,"error_outline")),s.a.createElement(b.H,{onClick:function(e){e.preventDefault(),e.stopPropagation(),l(t)}},t.starred?s.a.createElement(b.G,{style:{color:v.a[500]}},"star"):s.a.createElement(b.G,null,"star_outline"))))})));var se=Object(f.g)(Object(m.b)(function(e){var t=e.todoApp;return{todos:t.todos.entities,searchText:t.todos.searchText,orderBy:t.todos.orderBy,orderDescending:t.todos.orderDescending}})(function(e){var t=e.todos,a=e.searchText,n=e.orderBy,r=e.orderDescending,o=u.a.orderBy(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:d.A.filterArrayByString(a,t)}(t,a),[n],[r?"desc":"asc"]);return 0===o.length?s.a.createElement(d.d,{delay:100},s.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},s.a.createElement(b.vb,{color:"textSecondary",variant:"h5"},"There are no todos!"))):s.a.createElement(b.M,{className:"p-0"},s.a.createElement(d.e,{enter:{animation:"transition.slideUpBigIn"}},o.map(function(e){return s.a.createElement(ie,{todo:e,key:e.id})})))})),de=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleOrderChange=function(e){a.props.changeOrder(e.target.value)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.orderBy,a=e.orderDescending,n=e.toggleOrderDescending;return s.a.createElement("div",{className:"flex justify-between w-full"},s.a.createElement("div",{className:"flex"}),s.a.createElement("div",{className:"flex items-center"},s.a.createElement(b.x,{className:""},s.a.createElement(b.bb,{value:t,onChange:this.handleOrderChange,displayEmpty:!0,name:"filter",className:""},s.a.createElement(b.T,{value:""},s.a.createElement("em",null,"Order by")),s.a.createElement(b.T,{value:"startDate"},"Start Date"),s.a.createElement(b.T,{value:"dueDate"},"Due Date"),s.a.createElement(b.T,{value:"title"},"Title"))),s.a.createElement(b.H,{onClick:n},s.a.createElement(b.G,{style:{transform:a?"scaleY(-1)":"scaleY(1)"}},"sort"))))}}]),t}(i.Component);var ue=Object(f.g)(Object(m.b)(function(e){var t=e.todoApp;return{orderBy:t.todos.orderBy,orderDescending:t.todos.orderDescending}},function(e){return Object(p.c)({changeOrder:le,toggleOrderDescending:oe},e)})(de));var me=Object(m.b)(function(e){var t=e.todoApp,a=e.fuse;return{searchText:t.todos.searchText,mainTheme:a.settings.mainTheme}},function(e){return Object(p.c)({setSearchText:re},e)})(function(e){var t=e.setSearchText,a=e.searchText,n=e.pageLayout,r=e.mainTheme;return s.a.createElement(g.MuiThemeProvider,{theme:r},s.a.createElement("div",{className:"flex flex-1"},s.a.createElement(b.W,{className:"flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 ",elevation:1},s.a.createElement(b.F,{lgUp:!0},s.a.createElement(b.H,{onClick:function(e){return n().toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(b.G,null,"menu"))),s.a.createElement(b.G,{color:"action"},"search"),s.a.createElement(b.I,{placeholder:"Search",className:"pl-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:t}))))}),pe=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={selectedAccount:"creapond"},a.onAccountChange=function(e){a.setState({selectedAccount:e.target.value})},a.accounts={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},s.a.createElement("div",{className:"flex items-center flex-1"},s.a.createElement(d.d,{animation:"transition.expandIn",delay:300},s.a.createElement(b.G,{className:"text-32 mr-16"},"check_box")),s.a.createElement(d.d,{animation:"transition.slideLeftIn",delay:300},s.a.createElement("span",{className:"text-24"},"To-Do"))),s.a.createElement(d.d,{animation:"transition.slideUpIn",delay:300},s.a.createElement(b.sb,{id:"account-selection",select:!0,label:this.state.selectedAccount,value:this.state.selectedAccount,onChange:this.onAccountChange,placeholder:"Select Account",margin:"normal"},Object.keys(this.accounts).map(function(t,a){return s.a.createElement(b.T,{key:t,value:t},e.accounts[t])}))))}}]),t}(i.Component),fe=a(26);var he=Object(g.withStyles)(function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16}}}},{withTheme:!0})(Object(f.g)(Object(m.b)(function(e){var t=e.todoApp;return{folders:t.folders,labels:t.labels,filters:t.filters}},function(e){return Object(p.c)({openNewTodoDialog:Z},e)})(function(e){var t=e.classes,a=e.folders,n=e.filters,r=e.labels,o=e.openNewTodoDialog;return s.a.createElement(d.d,{animation:"transition.slideUpIn",delay:400},s.a.createElement("div",{className:"flex-auto border-l-1 border-solid"},s.a.createElement("div",{className:"p-24"},s.a.createElement(b.c,{onClick:function(){o()},variant:"contained",color:"primary",className:"w-full"},"ADD TASK")),s.a.createElement("div",{className:t.listWrapper},s.a.createElement(b.M,null,a.length>0&&a.map(function(e){return s.a.createElement(b.N,{button:!0,component:fe.b,to:"/apps/todo/"+e.handle,key:e.id,activeClassName:"active",className:t.listItem},s.a.createElement(b.G,{className:"list-item-icon",color:"action"},e.icon),s.a.createElement(b.Q,{primary:e.title,disableTypography:!0}))})),s.a.createElement(b.M,null,s.a.createElement(b.R,{className:t.listSubheader,disableSticky:!0},"FILTERS"),n.length>0&&n.map(function(e){return s.a.createElement(b.N,{button:!0,component:fe.b,to:"/apps/todo/filter/"+e.handle,activeClassName:"active",className:t.listItem,key:e.id},s.a.createElement(b.G,{className:"list-item-icon",color:"action"},e.icon),s.a.createElement(b.Q,{primary:e.title,disableTypography:!0}))})),s.a.createElement(b.M,null,s.a.createElement(b.R,{className:"pr-24 pl-24",disableSticky:!0},"LABELS"),r.length>0&&r.map(function(e){return s.a.createElement(b.N,{button:!0,component:fe.b,to:"/apps/todo/label/"+e.handle,key:e.id,className:t.listItem},s.a.createElement(b.G,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),s.a.createElement(b.Q,{primary:e.title,disableTypography:!0}))})))))}))),be=a(19),ge=a(87),Ee=a.n(ge),Oe={id:"",title:"",notes:"",startDate:new Date,dueDate:new Date,completed:!1,starred:!1,important:!1,deleted:!1,labels:[]},ye=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={form:Object(j.a)({},Oe),labelMenuEl:null},a.handleChange=function(e){var t=u.a.set(Object(j.a)({},a.state.form),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value);a.setState({form:t})},a.closeTodoDialog=function(){"edit"===a.props.todoDialog.type?a.props.closeEditTodoDialog():a.props.closeNewTodoDialog()},a.handleLabelMenuOpen=function(e){a.setState({labelMenuEl:e.currentTarget})},a.handleLabelMenuClose=function(e){a.setState({labelMenuEl:null})},a.handleToggleImportant=function(){a.setState({form:Object(j.a)({},a.state.form,{important:!a.state.form.important})})},a.handleToggleStarred=function(){a.setState({form:Object(j.a)({},a.state.form,{starred:!a.state.form.starred})})},a.handleToggleLabel=function(e,t){e.stopPropagation(),a.setState({form:u.a.set(Object(j.a)({},a.state.form,{labels:a.state.form.labels.includes(t)?a.state.form.labels.filter(function(e){return e!==t}):Object(be.a)(a.state.form.labels).concat([t])}))})},a.toggleCompleted=function(){a.setState({form:Object(j.a)({},a.state.form,{completed:!a.state.form.completed})})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.todoDialog.props.open&&this.props.todoDialog.props.open&&("edit"===this.props.todoDialog.type&&this.props.todoDialog.data&&!u.a.isEqual(this.props.todoDialog.data,t)&&this.setState({form:Object(j.a)({},this.props.todoDialog.data)}),"new"!==this.props.todoDialog.type||u.a.isEqual(Oe,t)||this.setState({form:Object(j.a)({},Oe,{id:d.A.generateGUID()})}))}},{key:"canBeSubmitted",value:function(){return this.state.form.title.length>0}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.todoDialog,o=n.addTodo,l=n.updateTodo,c=n.removeTodo,i=n.labels,d=this.state,m=d.form,p=d.labelMenuEl;return m&&(e=Ee()(m.startDate).format(Ee.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),t=Ee()(m.dueDate).format(Ee.a.HTML5_FMT.DATETIME_LOCAL_SECONDS)),s.a.createElement(b.l,Object.assign({},r.props,{onClose:this.closeTodoDialog,fullWidth:!0,maxWidth:"sm"}),s.a.createElement(b.a,{position:"static",elevation:1},s.a.createElement(b.tb,{className:"flex w-full"},s.a.createElement(b.vb,{variant:"subtitle1",color:"inherit"},"new"===r.type?"New Todo":"Edit Todo"))),s.a.createElement(b.n,{classes:{root:"p-0"}},s.a.createElement("div",{className:"mb-16"},s.a.createElement("div",{className:"flex items-center justify-between p-12"},s.a.createElement("div",{className:"flex"},s.a.createElement(b.h,{tabIndex:-1,checked:m.completed,onChange:this.toggleCompleted,onClick:function(e){return e.stopPropagation()}})),s.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},s.a.createElement(b.H,{onClick:this.handleToggleImportant},m.important?s.a.createElement(b.G,{style:{color:O.a[500]}},"error"):s.a.createElement(b.G,null,"error_outline")),s.a.createElement(b.H,{onClick:this.handleToggleStarred},m.starred?s.a.createElement(b.G,{style:{color:v.a[500]}},"star"):s.a.createElement(b.G,null,"star_outline")),s.a.createElement("div",null,s.a.createElement(b.H,{"aria-owns":p?"label-menu":null,"aria-haspopup":"true",onClick:this.handleLabelMenuOpen},s.a.createElement(b.G,null,"label")),s.a.createElement(b.S,{id:"label-menu",anchorEl:p,open:Boolean(p),onClose:this.handleLabelMenuClose},i.length>0&&i.map(function(e){return s.a.createElement(b.T,{onClick:function(t){return a.handleToggleLabel(t,e.id)},key:e.id},s.a.createElement(b.O,null,s.a.createElement(b.G,{className:"mr-0",color:"action"},m.labels.includes(e.id)?"check_box":"check_box_outline_blank")),s.a.createElement(b.Q,{primary:e.title,disableTypography:!0}),s.a.createElement(b.O,null,s.a.createElement(b.G,{className:"mr-0",style:{color:e.color},color:"action"},"label")))}))))),s.a.createElement(b.q,{className:"mx-24"})),m.labels.length>0&&s.a.createElement("div",{className:"flex flex-wrap  px-16 sm:px-24 mb-16"},m.labels.map(function(e){return s.a.createElement(b.i,{avatar:s.a.createElement(b.b,{classes:{colorDefault:"bg-transparent"}},s.a.createElement(b.G,{className:"text-20",style:{color:u.a.find(i,{id:e}).color}},"label")),label:u.a.find(i,{id:e}).title,onDelete:function(t){return a.handleToggleLabel(t,e)},className:"mr-8 my-8",classes:{label:"pl-4"},key:e})})),s.a.createElement("div",{className:"px-16 sm:px-24"},s.a.createElement(b.x,{className:"mt-8 mb-16",required:!0,fullWidth:!0},s.a.createElement(b.sb,{label:"Title",autoFocus:!0,name:"title",value:m.title,onChange:this.handleChange,required:!0,variant:"outlined"})),s.a.createElement(b.x,{className:"mt-8 mb-16",required:!0,fullWidth:!0},s.a.createElement(b.sb,{label:"Notes",name:"notes",multiline:!0,rows:"6",value:m.notes,onChange:this.handleChange,variant:"outlined"})),s.a.createElement("div",{className:"flex"},s.a.createElement(b.sb,{name:"startDate",label:"Start Date",type:"datetime-local",className:"mt-8 mb-16 mr-8",InputLabelProps:{shrink:!0},inputProps:{max:t},value:e,onChange:this.handleChange,variant:"outlined"}),s.a.createElement(b.sb,{name:"dueDate",label:"Due Date",type:"datetime-local",className:"mt-8 mb-16 ml-8",InputLabelProps:{shrink:!0},inputProps:{min:e},value:t,onChange:this.handleChange,variant:"outlined"})))),"new"===r.type?s.a.createElement(b.m,{className:"justify-between pl-8 sm:pl-16"},s.a.createElement(b.c,{variant:"contained",color:"primary",onClick:function(){o(a.state.form),a.closeTodoDialog()},disabled:!this.canBeSubmitted()},"Add")):s.a.createElement(b.m,{className:"justify-between pl-8 sm:pl-16"},s.a.createElement(b.c,{variant:"contained",color:"primary",onClick:function(){l(a.state.form),a.closeTodoDialog()},disabled:!this.canBeSubmitted()},"Save"),s.a.createElement(b.H,{className:"min-w-auto",onClick:function(){c(a.state.form.id),a.closeTodoDialog()}},s.a.createElement(b.G,null,"delete"))))}}]),t}(i.Component);var ve=Object(m.b)(function(e){var t=e.todoApp;return{todoDialog:t.todos.todoDialog,labels:t.labels}},function(e){return Object(p.c)({closeEditTodoDialog:te,closeNewTodoDialog:$,addTodo:ae,updateTodo:X,removeTodo:ne},e)})(ye),Te=a(36),De={entities:[],searchText:"",orderBy:"",orderDescending:!1,routeParams:{},todoDialog:{type:"new",props:{open:!1},data:null}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(j.a)({},e,{entities:u.a.keyBy(t.payload,"id"),searchText:"",routeParams:t.routeParams});case k:return Object(j.a)({},e,{entities:u.a.keyBy(t.payload,"id")});case _:return Object(j.a)({},e,{todoDialog:{type:"new",props:{open:!0},data:null}});case H:return Object(j.a)({},e,{todoDialog:{type:"new",props:{open:!1},data:null}});case U:return Object(j.a)({},e,{todoDialog:{type:"edit",props:{open:!0},data:t.data}});case W:return Object(j.a)({},e,{todoDialog:{type:"edit",props:{open:!1},data:null}});case I:var a=t.payload;return Object(j.a)({},e,{entities:Object(j.a)({},e.entities,Object(Te.a)({},a.id,Object(j.a)({},a)))});case R:return Object(j.a)({},e,{searchText:t.searchText});case F:return Object(j.a)({},e,{orderDescending:!e.orderDescending});case q:return Object(j.a)({},e,{orderBy:t.orderBy});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(be.a)(t.payload);default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(be.a)(t.payload);default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(be.a)(t.payload);default:return e}},Ce=Object(p.d)({todos:je,folders:Ne,labels:xe,filters:Pe}),Ae=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.match)}},{key:"componentDidUpdate",value:function(e,t){u.a.isEqual(this.props.location,e.location)||this.props.getTodos(this.props.match)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.r,{classes:{root:"w-full",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:s.a.createElement(me,{pageLayout:function(){return e.pageLayout}}),contentToolbar:s.a.createElement(ue,null),content:s.a.createElement(se,null),leftSidebarHeader:s.a.createElement(pe,null),leftSidebarContent:s.a.createElement(he,null),onRef:function(t){e.pageLayout=t},innerScroll:!0}),s.a.createElement(ve,null))}}]),t}(i.Component);t.default=Object(h.a)("todoApp",Ce)(Object(f.g)(Object(m.b)(function(e){return e.todoApp,{}},function(e){return Object(p.c)({getData:Q,getTodos:z},e)})(Ae)))}}]);