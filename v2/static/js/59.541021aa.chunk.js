(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{2788:function(e,a,t){"use strict";t.r(a);var l=t(12),n=t(13),r=t(15),c=t(14),m=t(16),s=t(0),i=t.n(s),o=t(1),u=t(6),b=t(3),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,m=new Array(n),s=0;s<n;s++)m[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(m)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state.value;return i.a.createElement(b.r,{classes:{root:a.layoutRoot,toolbar:"p-0"},header:i.a.createElement("div",{className:"flex flex-col flex-1"},i.a.createElement("div",{className:"flex items-center py-24"},i.a.createElement("div",{className:"flex-1"},i.a.createElement("h4",null,"Header")),i.a.createElement(o.F,{lgUp:!0},i.a.createElement(o.H,{onClick:function(a){return e.pageLayout.toggleRightSidebar()},"aria-label":"open left sidebar"},i.a.createElement(o.G,null,"menu"))))),contentToolbar:i.a.createElement(o.rb,{value:t,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"off",className:"w-full h-64"},i.a.createElement(o.jb,{className:"h-64",label:"Item One"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Two"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Three"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Four"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Five"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Six"}),i.a.createElement(o.jb,{className:"h-64",label:"Item Seven"})),content:i.a.createElement("div",{className:"p-24"},0===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item One"),i.a.createElement(b.b,null)),1===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Two"),i.a.createElement(b.b,null)),2===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Three"),i.a.createElement(b.b,null)),3===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Four"),i.a.createElement(b.b,null)),4===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Five"),i.a.createElement(b.b,null)),5===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Six"),i.a.createElement(b.b,null)),6===t&&i.a.createElement("div",null,i.a.createElement("h3",{className:"mb-16"},"Item Seven"),i.a.createElement(b.b,null))),rightSidebarHeader:i.a.createElement("div",{className:"p-24"},i.a.createElement("h4",null,"Sidebar Header")),rightSidebarContent:i.a.createElement("div",{className:"p-24"},i.a.createElement("h4",null,"Sidebar Content"),i.a.createElement("br",null),i.a.createElement(b.c,null)),onRef:function(a){e.pageLayout=a}})}}]),a}(s.Component);a.default=Object(u.withStyles)(function(e){return{layoutRoot:{}}},{withTheme:!0})(E)}}]);