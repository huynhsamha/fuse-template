(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1031:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1032:function(e,t,a){"use strict";var i=a(1031);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef(function(t,a){return r.default.createElement(o.default,(0,n.default)({ref:a},t),e)}));0;return a.muiName=o.default.muiName,a};var n=i(a(1034)),r=i(a(0)),o=i(a(967))},1034:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},a.apply(this,arguments)}e.exports=a},1035:function(e,t,a){"use strict";var i=a(2),n=a.n(i),r=a(1030),o=a(183);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,n()({defaultTheme:o.a},t))}},1142:function(e,t,a){"use strict";var i=a(2),n=a.n(i),r=a(4),o=a.n(r),l=a(0),s=a.n(l),c=(a(1),a(3)),m=(a(31),a(7)),d=s.a.forwardRef(function(e,t){var a=e.cellHeight,i=void 0===a?180:a,r=e.children,l=e.classes,m=e.className,d=e.cols,u=void 0===d?2:d,p=e.component,f=void 0===p?"ul":p,g=e.spacing,h=void 0===g?4:g,v=e.style,b=o()(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return s.a.createElement(f,n()({className:Object(c.a)(l.root,m),ref:t,style:n()({margin:-h/2},v)},b),s.a.Children.map(r,function(e){if(!s.a.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return s.a.cloneElement(e,{style:Object.assign({width:"".concat(100/u*t,"%"),height:"auto"===i?"auto":i*a+h,padding:h/2},e.props.style)})}))});t.a=Object(m.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(d)},1143:function(e,t,a){"use strict";var i=a(2),n=a.n(i),r=a(4),o=a.n(r),l=a(185),s=a.n(l),c=a(0),m=a.n(c),d=(a(1),a(3)),u=a(68),p=a.n(u),f=a(7),g=a(20),h=function(e,t){var a,i,n,r;e&&e.complete&&(e.width/e.height>e.parentNode.offsetWidth/e.parentNode.offsetHeight?((a=e.classList).remove.apply(a,s()(t.imgFullWidth.split(" "))),(i=e.classList).add.apply(i,s()(t.imgFullHeight.split(" ")))):((n=e.classList).remove.apply(n,s()(t.imgFullHeight.split(" "))),(r=e.classList).add.apply(r,s()(t.imgFullWidth.split(" ")))))};var v=m.a.forwardRef(function(e,t){var a=e.children,i=e.classes,r=e.className,l=(e.cols,e.component),s=void 0===l?"li":l,c=(e.rows,o()(e,["children","classes","className","cols","component","rows"])),u=m.a.useRef(null);return m.a.useEffect(function(){!function(e,t){e&&(e.complete?h(e,t):e.addEventListener("load",function(){h(e,t)}))}(u.current,i)}),m.a.useEffect(function(){var e=p()(function(){h(u.current,i)},166);return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}},[i]),m.a.createElement(s,n()({className:Object(d.a)(i.root,r),ref:t},c),m.a.createElement("div",{className:i.tile},m.a.Children.map(a,function(e){return m.a.isValidElement(e)?"img"===e.type||Object(g.a)(e,["Image"])?m.a.cloneElement(e,{ref:u}):e:null})))});t.a=Object(f.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(v)},1144:function(e,t,a){"use strict";var i=a(2),n=a.n(i),r=a(4),o=a.n(r),l=a(0),s=a.n(l),c=(a(1),a(3)),m=a(7),d=s.a.forwardRef(function(e,t){var a=e.actionIcon,i=e.actionPosition,r=void 0===i?"right":i,l=e.classes,m=e.className,d=e.subtitle,u=e.title,p=e.titlePosition,f=void 0===p?"bottom":p,g=o()(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),h=a&&r,v=Object(c.a)(l.root,"bottom"===f&&l.titlePositionBottom,"top"===f&&l.titlePositionTop,d&&l.rootSubtitle,m),b=Object(c.a)(l.titleWrap,"left"===h&&l.titleWrapActionPosLeft,"right"===h&&l.titleWrapActionPosRight);return s.a.createElement("div",n()({className:v,ref:t},g),s.a.createElement("div",{className:b},s.a.createElement("div",{className:l.title},u),d?s.a.createElement("div",{className:l.subtitle},d):null),a?s.a.createElement("div",{className:Object(c.a)(l.actionIcon,"left"===h&&l.actionIconActionPosLeft)},a):null)});t.a=Object(m.a)(function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}},{name:"MuiGridListTileBar"})(d)},1219:function(e,t,a){"use strict";t.a=[{img:"/static/images/grid-list/breakfast.jpg",title:"Breakfast",author:"jill111",cols:2,featured:!0},{img:"/static/images/grid-list/burgers.jpg",title:"Tasty burger",author:"director90"},{img:"/static/images/grid-list/camera.jpg",title:"Camera",author:"Danson67"},{img:"/static/images/grid-list/morning.jpg",title:"Morning",author:"fancycrave1",featured:!0},{img:"/static/images/grid-list/hats.jpg",title:"Hats",author:"Hans"},{img:"/static/images/grid-list/honey.jpg",title:"Honey",author:"fancycravel"},{img:"/static/images/grid-list/vegetables.jpg",title:"Vegetables",author:"jill111",cols:2},{img:"/static/images/grid-list/plant.jpg",title:"Water plant",author:"BkrmadtyaKarki"},{img:"/static/images/grid-list/mushroom.jpg",title:"Mushrooms",author:"PublicDomainPictures"},{img:"/static/images/grid-list/olive.jpg",title:"Olive oil",author:"congerdesign"},{img:"/static/images/grid-list/star.jpg",title:"Sea star",cols:2,author:"821292"},{img:"/static/images/grid-list/bike.jpg",title:"Bike",author:"danfador"}]},1220:function(e,t,a){"use strict";var i=a(1031);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=(0,i(a(1032)).default)(n.default.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.default=r},1264:function(e,t,a){"use strict";var i=a(1031);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),r=(0,i(a(1032)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=r},1649:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(1035),o=a(1142),l=a(1143),s=a(1219),c=Object(r.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450}}});t.default=function(){var e=c();return n.a.createElement("div",{className:e.root},n.a.createElement(o.a,{cellHeight:160,className:e.gridList,cols:3},s.a.map(function(e){return n.a.createElement(l.a,{key:e.img,cols:e.cols||1},n.a.createElement("img",{src:e.img,alt:e.title}))})))}},1650:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport tileData from './tileData';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  gridList: {\n    width: 500,\n    height: 450,\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     cols: 2,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction ImageGridList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <GridList cellHeight={160} className={classes.gridList} cols={3}>\n        {tileData.map(tile => (\n          <GridListTile key={tile.img} cols={tile.cols || 1}>\n            <img src={tile.img} alt={tile.title} />\n          </GridListTile>\n        ))}\n      </GridList>\n    </div>\n  );\n}\n\nexport default ImageGridList;\n"},1651:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(1035),o=a(1142),l=a(1143),s=a(1144),c=a(996),m=a(510),d=a(1264),u=a.n(d),p=a(1219),f=Object(r.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});t.default=function(){var e=f();return n.a.createElement("div",{className:e.root},n.a.createElement(o.a,{cellHeight:180,className:e.gridList},n.a.createElement(l.a,{key:"Subheader",cols:2,style:{height:"auto"}},n.a.createElement(c.a,{component:"div"},"December")),p.a.map(function(t){return n.a.createElement(l.a,{key:t.img},n.a.createElement("img",{src:t.img,alt:t.title}),n.a.createElement(s.a,{title:t.title,subtitle:n.a.createElement("span",null,"by: ",t.author),actionIcon:n.a.createElement(m.a,{className:e.icon},n.a.createElement(u.a,null))}))})))}},1652:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport ListSubheader from '@material-ui/core/ListSubheader';\nimport IconButton from '@material-ui/core/IconButton';\nimport InfoIcon from '@material-ui/icons/Info';\nimport tileData from './tileData';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  gridList: {\n    width: 500,\n    height: 450,\n  },\n  icon: {\n    color: 'rgba(255, 255, 255, 0.54)',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction TitlebarGridList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <GridList cellHeight={180} className={classes.gridList}>\n        <GridListTile key=\"Subheader\" cols={2} style={{ height: 'auto' }}>\n          <ListSubheader component=\"div\">December</ListSubheader>\n        </GridListTile>\n        {tileData.map(tile => (\n          <GridListTile key={tile.img}>\n            <img src={tile.img} alt={tile.title} />\n            <GridListTileBar\n              title={tile.title}\n              subtitle={<span>by: {tile.author}</span>}\n              actionIcon={\n                <IconButton className={classes.icon}>\n                  <InfoIcon />\n                </IconButton>\n              }\n            />\n          </GridListTile>\n        ))}\n      </GridList>\n    </div>\n  );\n}\n\nexport default TitlebarGridList;\n"},1653:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(1035),o=a(1142),l=a(1143),s=a(1144),c=a(510),m=a(1220),d=a.n(m),u=a(1219),p=Object(r.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}});t.default=function(){var e=p();return n.a.createElement("div",{className:e.root},n.a.createElement(o.a,{className:e.gridList,cols:2.5},u.a.map(function(t){return n.a.createElement(l.a,{key:t.img},n.a.createElement("img",{src:t.img,alt:t.title}),n.a.createElement(s.a,{title:t.title,classes:{root:e.titleBar,title:e.title},actionIcon:n.a.createElement(c.a,null,n.a.createElement(d.a,{className:e.title}))}))})))}},1654:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport tileData from './tileData';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  gridList: {\n    flexWrap: 'nowrap',\n    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.\n    transform: 'translateZ(0)',\n  },\n  title: {\n    color: theme.palette.primary.light,\n  },\n  titleBar: {\n    background:\n      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction SingleLineGridList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <GridList className={classes.gridList} cols={2.5}>\n        {tileData.map(tile => (\n          <GridListTile key={tile.img}>\n            <img src={tile.img} alt={tile.title} />\n            <GridListTileBar\n              title={tile.title}\n              classes={{\n                root: classes.titleBar,\n                title: classes.title,\n              }}\n              actionIcon={\n                <IconButton>\n                  <StarBorderIcon className={classes.title} />\n                </IconButton>\n              }\n            />\n          </GridListTile>\n        ))}\n      </GridList>\n    </div>\n  );\n}\n\nexport default SingleLineGridList;\n"},1655:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(1035),o=a(1142),l=a(1143),s=a(1144),c=a(510),m=a(1220),d=a.n(m),u=a(1219),p=Object(r.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}});t.default=function(){var e=p();return n.a.createElement("div",{className:e.root},n.a.createElement(o.a,{cellHeight:200,spacing:1,className:e.gridList},u.a.map(function(t){return n.a.createElement(l.a,{key:t.img,cols:t.featured?2:1,rows:t.featured?2:1},n.a.createElement("img",{src:t.img,alt:t.title}),n.a.createElement(s.a,{title:t.title,titlePosition:"top",actionIcon:n.a.createElement(c.a,{className:e.icon},n.a.createElement(d.a,null)),actionPosition:"left",className:e.titleBar}))})))}},1656:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport tileData from './tileData';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexWrap: 'wrap',\n    justifyContent: 'space-around',\n    overflow: 'hidden',\n    backgroundColor: theme.palette.background.paper,\n  },\n  gridList: {\n    width: 500,\n    height: 450,\n    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.\n    transform: 'translateZ(0)',\n  },\n  titleBar: {\n    background:\n      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +\n      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',\n  },\n  icon: {\n    color: 'white',\n  },\n}));\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     featured: true,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction AdvancedGridList() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <GridList cellHeight={200} spacing={1} className={classes.gridList}>\n        {tileData.map(tile => (\n          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>\n            <img src={tile.img} alt={tile.title} />\n            <GridListTileBar\n              title={tile.title}\n              titlePosition=\"top\"\n              actionIcon={\n                <IconButton className={classes.icon}>\n                  <StarBorderIcon />\n                </IconButton>\n              }\n              actionPosition=\"left\"\n              className={classes.titleBar}\n            />\n          </GridListTile>\n        ))}\n      </GridList>\n    </div>\n  );\n}\n\nexport default AdvancedGridList;\n"},2170:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(12),o=a(992),l=a(124),s=a(1010),c=a(1030),m=Object(c.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=m();return n.a.createElement(r.s,{classes:{root:t.layoutRoot},header:n.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("div",{className:"flex items-center mb-16"},n.a.createElement(o.a,{className:"text-18",color:"action"},"home"),n.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),n.a.createElement(l.a,{color:"textSecondary"},"Documentation"),n.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),n.a.createElement(l.a,{color:"textSecondary"},"Material UI Components")),n.a.createElement(l.a,{variant:"h6"},"Grid List")),n.a.createElement(s.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/grid-list",target:"_blank"},n.a.createElement(o.a,{className:"mr-4"},"link"),"Reference")),content:n.a.createElement("div",{className:"p-24 max-w-2xl"},n.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Grid List"),n.a.createElement(l.a,{className:"description"},"Grid lists display a collection of images in an organized grid."),n.a.createElement(l.a,{className:"mb-16",component:"div"},n.a.createElement("a",{href:"https://material.io/design/components/image-lists.html"},"Grid lists")," represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold."),n.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Image-only Grid list"),n.a.createElement(l.a,{className:"mb-16",component:"div"},"A simple example of a scrollable image ",n.a.createElement("code",null,"GridList"),"."),n.a.createElement(l.a,{className:"mb-16",component:"div"},n.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(1649).default,raw:a(1650)})),n.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Grid list with titlebars"),n.a.createElement(l.a,{className:"mb-16",component:"div"},"This example demonstrates the use of the ",n.a.createElement("code",null,"GridListTileBar")," to add an overlay to each ",n.a.createElement("code",null,"GridListTile"),". The overlay can accommodate a ",n.a.createElement("code",null,"title"),", ",n.a.createElement("code",null,"subtitle")," and secondary action - in this example an ",n.a.createElement("code",null,"IconButton"),"."),n.a.createElement(l.a,{className:"mb-16",component:"div"},n.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(1651).default,raw:a(1652)})),n.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Single line Grid list"),n.a.createElement(l.a,{className:"mb-16",component:"div"},"This example demonstrates a horizontal scrollable single-line grid list of images. Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery."),n.a.createElement(l.a,{className:"mb-16",component:"div"},n.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(1653).default,raw:a(1654)})),n.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Advanced Grid list"),n.a.createElement(l.a,{className:"mb-16",component:"div"},'This example demonstrates "featured" tiles, using the ',n.a.createElement("code",null,"rows")," and ",n.a.createElement("code",null,"cols")," props to adjust the size of the tile, and the ",n.a.createElement("code",null,"padding")," prop to adjust the spacing. The tiles have a customized titlebar, positioned at the top and with a custom gradient ",n.a.createElement("code",null,"titleBackground"),". The secondary action ",n.a.createElement("code",null,"IconButton")," is positioned on the left."),n.a.createElement(l.a,{className:"mb-16",component:"div"},n.a.createElement(r.j,{className:"my-24",iframe:!1,component:a(1655).default,raw:a(1656)})))})}},967:function(e,t,a){"use strict";a.r(t);var i=a(329);a.d(t,"default",function(){return i.a})}}]);