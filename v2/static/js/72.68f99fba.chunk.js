(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1833:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1834:function(e,a,t){"use strict";var n=t(1833);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=n(t(86)),c=n(t(71));var o=function(e,a){var t=function(a){return r.default.createElement(c.default,a,e)};return t.displayName="".concat(a,"Icon"),(t=(0,s.default)(t)).muiName="SvgIcon",t};a.default=o},1849:function(e,a,t){"use strict";var n=t(4);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var r=n(t(20)),s=n(t(10)),c=n(t(9)),o=n(t(0)),l=(n(t(2)),n(t(5))),i=(t(23),n(t(18))),m=t(255),u=(n(t(1850)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var d=function(e){return(0,c.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return u.forEach(function(e,n){0!==n&&(t["spacing-".concat(a,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),t}(0,"xs"),m.keys.reduce(function(a,t){return function(e,a,t){var n={};f.forEach(function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[a]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===t?(0,c.default)(e,n):e[a.breakpoints.up(t)]=n}(a,e,t),a},{}))};function p(e){var a,t=e.alignContent,n=e.alignItems,i=e.classes,m=e.className,u=e.component,f=e.container,d=e.direction,v=e.item,g=e.justify,x=e.lg,y=e.md,h=e.sm,b=e.spacing,E=e.wrap,A=e.xl,w=e.xs,N=e.zeroMinWidth,j=(0,s.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),I=(0,l.default)((a={},(0,r.default)(a,i.container,f),(0,r.default)(a,i.item,v),(0,r.default)(a,i.zeroMinWidth,N),(0,r.default)(a,i["spacing-xs-".concat(String(b))],f&&0!==b),(0,r.default)(a,i["direction-xs-".concat(String(d))],d!==p.defaultProps.direction),(0,r.default)(a,i["wrap-xs-".concat(String(E))],E!==p.defaultProps.wrap),(0,r.default)(a,i["align-items-xs-".concat(String(n))],n!==p.defaultProps.alignItems),(0,r.default)(a,i["align-content-xs-".concat(String(t))],t!==p.defaultProps.alignContent),(0,r.default)(a,i["justify-xs-".concat(String(g))],g!==p.defaultProps.justify),(0,r.default)(a,i["grid-xs-".concat(String(w))],!1!==w),(0,r.default)(a,i["grid-sm-".concat(String(h))],!1!==h),(0,r.default)(a,i["grid-md-".concat(String(y))],!1!==y),(0,r.default)(a,i["grid-lg-".concat(String(x))],!1!==x),(0,r.default)(a,i["grid-xl-".concat(String(A))],!1!==A),a),m);return o.default.createElement(u,(0,c.default)({className:I},j))}a.styles=d,p.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var v=(0,i.default)(d,{name:"MuiGrid"})(p);a.default=v},1850:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return function(){return null}};a.default=n},1921:function(e,a,t){"use strict";var n=t(1833);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(1834)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Folder");a.default=s},2242:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),c=t(514),o=t.n(c),l=t(816),i=t.n(l);a.default=Object(s.withStyles)({avatar:{margin:10},bigAvatar:{margin:10,width:60,height:60}})(function(e){var a=e.classes;return r.a.createElement(i.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(o.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg",className:a.avatar}),r.a.createElement(o.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg",className:a.bigAvatar}))})},2243:function(e,a){e.exports='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Grid from \'@material-ui/core/Grid\';\n\nconst styles = {\n  avatar: {\n    margin: 10,\n  },\n  bigAvatar: {\n    margin: 10,\n    width: 60,\n    height: 60,\n  },\n};\n\nfunction ImageAvatars(props) {\n  const { classes } = props;\n  return (\n    <Grid container justify="center" alignItems="center">\n      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />\n      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />\n    </Grid>\n  );\n}\n\nImageAvatars.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(ImageAvatars);\n'},2244:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),c=t(514),o=t.n(c),l=t(848),i=t.n(l),m=t(846),u=t.n(m),f=t(816),d=t.n(f),p={avatar:{margin:10},orangeAvatar:{margin:10,color:"#fff",backgroundColor:i.a[500]},purpleAvatar:{margin:10,color:"#fff",backgroundColor:u.a[500]}};a.default=Object(s.withStyles)(p)(function(e){var a=e.classes;return r.a.createElement(d.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(o.a,{className:a.avatar},"H"),r.a.createElement(o.a,{className:a.orangeAvatar},"N"),r.a.createElement(o.a,{className:a.purpleAvatar},"OP"))})},2245:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport deepOrange from '@material-ui/core/colors/deepOrange';\nimport deepPurple from '@material-ui/core/colors/deepPurple';\nimport Grid from '@material-ui/core/Grid';\n\nconst styles = {\n  avatar: {\n    margin: 10,\n  },\n  orangeAvatar: {\n    margin: 10,\n    color: '#fff',\n    backgroundColor: deepOrange[500],\n  },\n  purpleAvatar: {\n    margin: 10,\n    color: '#fff',\n    backgroundColor: deepPurple[500],\n  },\n};\n\nfunction LetterAvatars(props) {\n  const { classes } = props;\n  return (\n    <Grid container justify=\"center\" alignItems=\"center\">\n      <Avatar className={classes.avatar}>H</Avatar>\n      <Avatar className={classes.orangeAvatar}>N</Avatar>\n      <Avatar className={classes.purpleAvatar}>OP</Avatar>\n    </Grid>\n  );\n}\n\nLetterAvatars.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(LetterAvatars);\n"},2246:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),c=t(564),o=t.n(c),l=t(818),i=t.n(l),m=t(514),u=t.n(m),f=t(1921),d=t.n(f),p=t(2247),v=t.n(p),g=t(2248),x=t.n(g),y=t(816),h=t.n(y),b={avatar:{margin:10},pinkAvatar:{margin:10,color:"#fff",backgroundColor:o.a[500]},greenAvatar:{margin:10,color:"#fff",backgroundColor:i.a[500]}};a.default=Object(s.withStyles)(b)(function(e){var a=e.classes;return r.a.createElement(h.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{className:a.avatar},r.a.createElement(d.a,null)),r.a.createElement(u.a,{className:a.pinkAvatar},r.a.createElement(v.a,null)),r.a.createElement(u.a,{className:a.greenAvatar},r.a.createElement(x.a,null)))})},2247:function(e,a,t){"use strict";var n=t(1833);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(1834)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"})),"Pageview");a.default=s},2248:function(e,a,t){"use strict";var n=t(1833);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(1834)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"})),"Assignment");a.default=s},2249:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport pink from '@material-ui/core/colors/pink';\nimport green from '@material-ui/core/colors/green';\nimport Avatar from '@material-ui/core/Avatar';\nimport FolderIcon from '@material-ui/icons/Folder';\nimport PageviewIcon from '@material-ui/icons/Pageview';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\nimport Grid from '@material-ui/core/Grid';\n\nconst styles = {\n  avatar: {\n    margin: 10,\n  },\n  pinkAvatar: {\n    margin: 10,\n    color: '#fff',\n    backgroundColor: pink[500],\n  },\n  greenAvatar: {\n    margin: 10,\n    color: '#fff',\n    backgroundColor: green[500],\n  },\n};\n\nfunction IconAvatars(props) {\n  const { classes } = props;\n  return (\n    <Grid container justify=\"center\" alignItems=\"center\">\n      <Avatar className={classes.avatar}>\n        <FolderIcon />\n      </Avatar>\n      <Avatar className={classes.pinkAvatar}>\n        <PageviewIcon />\n      </Avatar>\n      <Avatar className={classes.greenAvatar}>\n        <AssignmentIcon />\n      </Avatar>\n    </Grid>\n  );\n}\n\nIconAvatars.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(IconAvatars);\n"},2801:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),c=t(1),o=t(6);a.default=Object(o.withStyles)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}},{withTheme:!0})(function(e){var a=e.classes;return r.a.createElement(s.s,{classes:{root:a.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(c.G,{className:"text-18",color:"action"},"home"),r.a.createElement(c.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.vb,{color:"textSecondary"},"Components"),r.a.createElement(c.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.vb,{color:"textSecondary"},"Material UI Elements")),r.a.createElement(c.vb,{variant:"h6"},"Avatars")),r.a.createElement(c.c,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui-next.com/demos/avatars",target:"_blank"},r.a.createElement(c.G,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl mx-auto"},r.a.createElement(c.vb,{className:"text-44 mt-32 mb-8",component:"h1"},"Avatars"),r.a.createElement(c.vb,{className:"description"},"Avatars are found throughout material design with uses in everything from tables to dialog menus."),r.a.createElement(c.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Image avatars"),r.a.createElement(c.vb,{className:"mb-16",component:"div"},"Image avatars can be created by passing standard ",r.a.createElement("code",null,"img")," props ",r.a.createElement("code",null,"src")," or ",r.a.createElement("code",null,"srcSet")," into the component."),r.a.createElement(c.vb,{className:"mb-16",component:"div"},r.a.createElement(s.j,{className:"my-24",iframe:!1,component:t(2242).default,raw:t(2243)})),r.a.createElement(c.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Letter avatars"),r.a.createElement(c.vb,{className:"mb-16",component:"div"},"Avatars containing simple characters can be created by passing your string as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(c.vb,{className:"mb-16",component:"div"},r.a.createElement(s.j,{className:"my-24",iframe:!1,component:t(2244).default,raw:t(2245)})),r.a.createElement(c.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Icon avatars"),r.a.createElement(c.vb,{className:"mb-16",component:"div"},"Icon avatars are created by passing an icon as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(c.vb,{className:"mb-16",component:"div"},r.a.createElement(s.j,{className:"my-24",iframe:!1,component:t(2246).default,raw:t(2249)})))})})},816:function(e,a,t){"use strict";var n=t(4);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return r.default}});var r=n(t(1849))}}]);