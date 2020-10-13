(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2759:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),r=t(13),s=t(15),i=t(14),m=t(16),c=t(0),o=t.n(c),d=t(1),u=t(6),h=t(75),p=t(3),f=t(5),b=t.n(f),g=t(26),v=t(8),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,m=new Array(r),c=0;c<r;c++)m[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(m)))).state={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1},t.handleChange=function(e){t.setState(v.a.set(Object(n.a)({},t.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"canBeSubmitted",value:function(){var e=this.state,a=e.email,t=e.password,n=e.passwordConfirm,l=e.acceptTermsConditions;return a.length>0&&t.length>0&&t.length>3&&t===n&&l}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.name,n=a.email,l=a.password,r=a.passwordConfirm,s=a.acceptTermsConditions;return o.a.createElement("div",{className:b()(e.root,"flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")},o.a.createElement("div",{className:"flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left"},o.a.createElement(p.d,{animation:"transition.expandIn"},o.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(p.d,{animation:"transition.slideUpIn",delay:300},o.a.createElement(d.vb,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),o.a.createElement(p.d,{delay:400},o.a.createElement(d.vb,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),o.a.createElement(p.d,{animation:{translateX:[0,"100%"]}},o.a.createElement(d.d,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},o.a.createElement(d.f,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},o.a.createElement(d.vb,{variant:"h6",className:"md:w-full mb-32"},"CREATE AN ACCOUNT"),o.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full"},o.a.createElement(d.sb,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Email",type:"email",name:"email",value:n,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Password",type:"password",name:"password",value:l,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.sb,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:r,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(d.x,{className:"items-center"},o.a.createElement(d.y,{control:o.a.createElement(d.h,{name:"acceptTermsConditions",checked:s,onChange:this.handleChange}),label:"I read and accept terms and conditions"})),o.a.createElement(d.c,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"Register",disabled:!this.canBeSubmitted()},"CREATE AN ACCOUNT")),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement("span",{className:"font-medium"},"Already have an account?"),o.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/login-2"},"Login"))))))}}]),a}(c.Component);a.default=Object(u.withStyles)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+Object(h.darken)(e.palette.primary.dark,.5)+" 100%)",color:e.palette.primary.contrastText}}},{withTheme:!0})(w)}}]);