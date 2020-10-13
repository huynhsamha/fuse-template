(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{2089:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1001),s=t(1013),m=t(124),o=t(1006),c=t(509),i=t(999),d=t(1016),u=t(1010),p=t(130),f=t(1030),w=t(12),E=t(129),b=t(3),g=t(29),C=Object(f.a)(function(e){return{root:{background:"radial-gradient("+Object(p.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)",color:e.palette.primary.contrastText}}});a.default=function(){var e=C(),a=Object(E.b)({name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1}),t=a.form,n=a.handleChange,p=a.resetForm;return l.a.createElement("div",{className:Object(b.a)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},l.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},l.a.createElement(w.d,{animation:"transition.expandIn"},l.a.createElement(r.a,{className:"w-full max-w-384"},l.a.createElement(s.a,{className:"flex flex-col items-center justify-center p-32"},l.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),l.a.createElement(m.a,{variant:"h6",className:"mt-16 mb-32"},"CREATE AN ACCOUNT"),l.a.createElement("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),p()}},l.a.createElement(o.a,{className:"mb-16",label:"Name",autoFocus:!0,type:"name",name:"name",value:t.name,onChange:n,variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(o.a,{className:"mb-16",label:"Email",type:"email",name:"email",value:t.email,onChange:n,variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(o.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:n,variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(o.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:n,variant:"outlined",required:!0,fullWidth:!0}),l.a.createElement(c.a,{className:"items-center"},l.a.createElement(i.a,{control:l.a.createElement(d.a,{name:"acceptTermsConditions",checked:t.acceptTermsConditions,onChange:n}),label:"I read and accept terms and conditions"})),l.a.createElement(u.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Register",disabled:!(t.email.length>0&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm&&t.acceptTermsConditions),type:"submit"},"CREATE AN ACCOUNT")),l.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},l.a.createElement("span",{className:"font-medium"},"Already have an account?"),l.a.createElement(g.a,{className:"font-medium",to:"/pages/auth/login"},"Login")))))))}}}]);