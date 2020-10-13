(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{2845:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(1),r=t(3),s=t(26);a.default=function(){return c.a.createElement(r.s,{header:c.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement("div",{className:"flex items-center mb-16"},c.a.createElement(o.G,{className:"text-18",color:"action"},"home"),c.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),c.a.createElement(o.vb,{color:"textSecondary"},"Documentation"),c.a.createElement(o.G,{className:"text-16",color:"action"},"chevron_right"),c.a.createElement(o.vb,{color:"textSecondary"},"Authentication")),c.a.createElement(o.vb,{variant:"h6"},"Firebase Authentication"))),content:c.a.createElement("div",{className:"p-24 max-w-2xl"},c.a.createElement(o.vb,{className:"mb-16",component:"p"},"With Firebase Authentication in Fuse React."),c.a.createElement("ul",null,c.a.createElement("li",{className:"mb-12"},"You can ",c.a.createElement(s.a,{to:"/register"},"register"),"."),c.a.createElement("li",{className:"mb-12"},"You can ",c.a.createElement(s.a,{to:"/login"},"login"),"."),c.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) to FirebaseDb.")),c.a.createElement(o.vb,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",c.a.createElement("code",null,"/src/firebaseService")),c.a.createElement(o.vb,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in ",c.a.createElement("code",null,"src/app/App.js"),"."),c.a.createElement(o.vb,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),c.a.createElement(o.vb,{className:"mb-16",component:"p"},"You need to paste the configuration of your Firebase Project into ",c.a.createElement("code",null,"src/app/services/firebaseService/firebaseServiceConfig.js")),c.a.createElement(r.k,{component:"pre",className:"language-jsx my-16"},'\n                                const prodConfig = {\n                                    apiKey           : "YOUR_API_KEY",\n                                    authDomain       : "your-app.firebaseapp.com",\n                                    databaseURL      : "https://your-app.firebaseio.com",\n                                    projectId        : "your-app",\n                                    storageBucket    : "your-app.appspot.com",\n                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"\n                                };\n\n                                const devConfig = {\n                                    apiKey           : "YOUR_API_KEY",\n                                    authDomain       : "your-app.firebaseapp.com",\n                                    databaseURL      : "https://your-app.firebaseio.com",\n                                    projectId        : "your-app",\n                                    storageBucket    : "your-app.appspot.com",\n                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"\n                                };\n                            '))})}}}]);