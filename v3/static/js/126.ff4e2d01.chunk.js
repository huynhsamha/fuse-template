(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{2091:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(1001),m=t(1013),s=t(124),c=t(1006),o=t(509),i=t(999),u=t(1016),d=t(1010),f=t(997),p=t(130),b=t(1030),w=t(12),E=t(129),N=t(3),g=t(29),x=Object(b.a)(function(e){return{root:{background:"radial-gradient("+Object(p.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)",color:e.palette.primary.contrastText}}});a.default=function(){var e=x(),a=Object(E.b)({email:"",password:"",remember:!0}),t=a.form,l=a.handleChange,p=a.resetForm;return n.a.createElement("div",{className:Object(N.a)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},n.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},n.a.createElement(w.d,{animation:"transition.expandIn"},n.a.createElement(r.a,{className:"w-full max-w-384"},n.a.createElement(m.a,{className:"flex flex-col items-center justify-center p-32"},n.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),n.a.createElement(s.a,{variant:"h6",className:"mt-16 mb-32"},"LOGIN TO YOUR ACCOUNT"),n.a.createElement("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),p()}},n.a.createElement(c.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t.email,onChange:l,variant:"outlined",required:!0,fullWidth:!0}),n.a.createElement(c.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:l,variant:"outlined",required:!0,fullWidth:!0}),n.a.createElement("div",{className:"flex items-center justify-between"},n.a.createElement(o.a,null,n.a.createElement(i.a,{control:n.a.createElement(u.a,{name:"remember",checked:t.remember,onChange:l}),label:"Remember Me"})),n.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/forgot-password"},"Forgot Password?")),n.a.createElement(d.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"LOG IN",disabled:!(t.email.length>0&&t.password.length>0),type:"submit"},"LOGIN")),n.a.createElement("div",{className:"my-24 flex items-center justify-center"},n.a.createElement(f.a,{className:"w-32"}),n.a.createElement("span",{className:"mx-8 font-bold"},"OR"),n.a.createElement(f.a,{className:"w-32"})),n.a.createElement(d.a,{variant:"contained",color:"secondary",size:"small",className:"normal-case w-192 mb-8"},"Log in with Google"),n.a.createElement(d.a,{variant:"contained",color:"primary",size:"small",className:"normal-case w-192"},"Log in with Facebook"),n.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},n.a.createElement("span",{className:"font-medium"},"Don't have an account?"),n.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/register"},"Create an account")))))))}}}]);