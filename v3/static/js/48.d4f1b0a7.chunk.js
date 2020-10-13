(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1070:function(e,t,n){"use strict";var a=n(4),o=n.n(a),c=n(2),r=n.n(c),l=n(0),i=n.n(l),m=(n(1),n(3)),s=n(7),d=n(37),h=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=i.a.forwardRef(function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,s=e.classes,d=e.className,h=e.component,u=void 0===h?"div":h,p=e.container,b=void 0!==p&&p,f=e.direction,g=void 0===f?"row":f,k=e.item,w=void 0!==k&&k,v=e.justify,C=void 0===v?"flex-start":v,x=e.lg,E=void 0!==x&&x,S=e.md,y=void 0!==S&&S,F=e.sm,j=void 0!==F&&F,B=e.spacing,L=void 0===B?0:B,A=e.wrap,N=void 0===A?"wrap":A,G=e.xl,O=void 0!==G&&G,$=e.xs,P=void 0!==$&&$,R=e.zeroMinWidth,I=void 0!==R&&R,D=o()(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),W=Object(m.a)(s.root,d,b&&[s.container,0!==L&&s["spacing-xs-".concat(String(L))]],w&&s.item,I&&s.zeroMinWidth,"row"!==g&&s["direction-xs-".concat(String(g))],"wrap"!==N&&s["wrap-xs-".concat(String(N))],"stretch"!==l&&s["align-items-xs-".concat(String(l))],"stretch"!==a&&s["align-content-xs-".concat(String(a))],"flex-start"!==C&&s["justify-xs-".concat(String(C))],!1!==P&&s["grid-xs-".concat(String(P))],!1!==j&&s["grid-sm-".concat(String(j))],!1!==y&&s["grid-md-".concat(String(y))],!1!==E&&s["grid-lg-".concat(String(E))],!1!==O&&s["grid-xl-".concat(String(O))]);return i.a.createElement(u,r()({className:W,ref:t},D))});var b=Object(s.a)(function(e){return r()({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return h.forEach(function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:-o/2,width:"calc(100% + ".concat(o,"px)"),"& > $item":{padding:o/2}})}),n}(e,"xs"),d.b.reduce(function(t,n){return function(e,t,n){var a={};u.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?Object.assign(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))},{name:"MuiGrid"})(p);t.a=b},1257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};t.default=a},1862:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(8),c=n(15),r=n(0),l=n.n(r),i=n(1e3);t.default=function(){var e=l.a.useState({checkedA:!0,checkedB:!0}),t=Object(c.a)(e,2),n=t[0],r=t[1],m=function(e){return function(t){r(Object(o.a)({},n,Object(a.a)({},e,t.target.checked)))}};return l.a.createElement("div",null,l.a.createElement(i.a,{checked:n.checkedA,onChange:m("checkedA"),value:"checkedA"}),l.a.createElement(i.a,{checked:n.checkedB,onChange:m("checkedB"),value:"checkedB",color:"primary"}),l.a.createElement(i.a,{value:"checkedC"}),l.a.createElement(i.a,{disabled:!0,value:"checkedD"}),l.a.createElement(i.a,{disabled:!0,checked:!0,value:"checkedE"}),l.a.createElement(i.a,{defaultChecked:!0,value:"checkedF",color:"default"}))}},1863:function(e,t){e.exports='import React from \'react\';\nimport Switch from \'@material-ui/core/Switch\';\n\nfunction Switches() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <div>\n      <Switch checked={state.checkedA} onChange={handleChange(\'checkedA\')} value="checkedA" />\n      <Switch\n        checked={state.checkedB}\n        onChange={handleChange(\'checkedB\')}\n        value="checkedB"\n        color="primary"\n      />\n      <Switch value="checkedC" />\n      <Switch disabled value="checkedD" />\n      <Switch disabled checked value="checkedE" />\n      <Switch defaultChecked value="checkedF" color="default" />\n    </div>\n  );\n}\n\nexport default Switches;\n'},1864:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(8),c=n(15),r=n(0),l=n.n(r),i=n(520),m=n(999),s=n(1e3);t.default=function(){var e=l.a.useState({checkedA:!0,checkedB:!0}),t=Object(c.a)(e,2),n=t[0],r=t[1],d=function(e){return function(t){r(Object(o.a)({},n,Object(a.a)({},e,t.target.checked)))}};return l.a.createElement(i.a,{row:!0},l.a.createElement(m.a,{control:l.a.createElement(s.a,{checked:n.checkedA,onChange:d("checkedA"),value:"checkedA"}),label:"Secondary"}),l.a.createElement(m.a,{control:l.a.createElement(s.a,{checked:n.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),l.a.createElement(m.a,{control:l.a.createElement(s.a,{value:"checkedC"}),label:"Uncontrolled"}),l.a.createElement(m.a,{disabled:!0,control:l.a.createElement(s.a,{value:"checkedD"}),label:"Disabled"}),l.a.createElement(m.a,{disabled:!0,control:l.a.createElement(s.a,{checked:!0,value:"checkedE"}),label:"Disabled"}))}},1865:function(e,t){e.exports='import React from \'react\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Switch from \'@material-ui/core/Switch\';\n\nfunction SwitchLabels() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        control={\n          <Switch checked={state.checkedA} onChange={handleChange(\'checkedA\')} value="checkedA" />\n        }\n        label="Secondary"\n      />\n      <FormControlLabel\n        control={\n          <Switch\n            checked={state.checkedB}\n            onChange={handleChange(\'checkedB\')}\n            value="checkedB"\n            color="primary"\n          />\n        }\n        label="Primary"\n      />\n      <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />\n      <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />\n      <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />\n    </FormGroup>\n  );\n}\n\nexport default SwitchLabels;\n'},1866:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(8),c=n(15),r=n(0),l=n.n(r),i=n(519),m=n(509),s=n(520),d=n(999),h=n(516),u=n(1e3);t.default=function(){var e=l.a.useState({gilad:!0,jason:!1,antoine:!0}),t=Object(c.a)(e,2),n=t[0],r=t[1],p=function(e){return function(t){r(Object(o.a)({},n,Object(a.a)({},e,t.target.checked)))}};return l.a.createElement(m.a,{component:"fieldset"},l.a.createElement(i.a,{component:"legend"},"Assign responsibility"),l.a.createElement(s.a,null,l.a.createElement(d.a,{control:l.a.createElement(u.a,{checked:n.gilad,onChange:p("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(d.a,{control:l.a.createElement(u.a,{checked:n.jason,onChange:p("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(d.a,{control:l.a.createElement(u.a,{checked:n.antoine,onChange:p("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(h.a,null,"Be careful"))}},1867:function(e,t){e.exports="import React from 'react';\nimport FormLabel from '@material-ui/core/FormLabel';\nimport FormControl from '@material-ui/core/FormControl';\nimport FormGroup from '@material-ui/core/FormGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport FormHelperText from '@material-ui/core/FormHelperText';\nimport Switch from '@material-ui/core/Switch';\n\nfunction SwitchesGroup() {\n  const [state, setState] = React.useState({\n    gilad: true,\n    jason: false,\n    antoine: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <FormControl component=\"fieldset\">\n      <FormLabel component=\"legend\">Assign responsibility</FormLabel>\n      <FormGroup>\n        <FormControlLabel\n          control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value=\"gilad\" />}\n          label=\"Gilad Gray\"\n        />\n        <FormControlLabel\n          control={<Switch checked={state.jason} onChange={handleChange('jason')} value=\"jason\" />}\n          label=\"Jason Killian\"\n        />\n        <FormControlLabel\n          control={\n            <Switch checked={state.antoine} onChange={handleChange('antoine')} value=\"antoine\" />\n          }\n          label=\"Antoine Llorca\"\n        />\n      </FormGroup>\n      <FormHelperText>Be careful</FormHelperText>\n    </FormControl>\n  );\n}\n\nexport default SwitchesGroup;\n"},1868:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(8),c=n(15),r=n(186),l=n(0),i=n.n(l),m=n(7),s=n(1257),d=n.n(s),h=n(520),u=n(999),p=n(1e3),b=n(1070),f=n(124),g=Object(m.a)({switchBase:{color:d.a[300],"&$checked":{color:d.a[500]},"&$checked + $track":{backgroundColor:d.a[500]}},checked:{},track:{}})(p.a),k=Object(m.a)(function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}})(function(e){var t=e.classes,n=Object(r.a)(e,["classes"]);return i.a.createElement(p.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},n))}),w=Object(m.a)(function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}})(p.a);t.default=function(){var e=i.a.useState({checkedA:!0,checkedB:!0,checkedC:!0}),t=Object(c.a)(e,2),n=t[0],r=t[1],l=function(e){return function(t){r(Object(o.a)({},n,Object(a.a)({},e,t.target.checked)))}};return i.a.createElement(h.a,null,i.a.createElement(u.a,{control:i.a.createElement(g,{checked:n.checkedA,onChange:l("checkedA"),value:"checkedA"}),label:"Custom color"}),i.a.createElement(u.a,{control:i.a.createElement(k,{checked:n.checkedB,onChange:l("checkedB"),value:"checkedB"}),label:"iOS style"}),i.a.createElement(f.a,{component:"div"},i.a.createElement(b.a,{component:"label",container:!0,alignItems:"center",spacing:1},i.a.createElement(b.a,{item:!0},"Off"),i.a.createElement(b.a,{item:!0},i.a.createElement(w,{checked:n.checkedC,onChange:l("checkedC"),value:"checkedC"})),i.a.createElement(b.a,{item:!0},"On"))))}},1869:function(e,t){e.exports="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport purple from '@material-ui/core/colors/purple';\nimport FormGroup from '@material-ui/core/FormGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport Switch from '@material-ui/core/Switch';\nimport Grid from '@material-ui/core/Grid';\nimport Typography from '@material-ui/core/Typography';\n\nconst PurpleSwitch = withStyles({\n  switchBase: {\n    color: purple[300],\n    '&$checked': {\n      color: purple[500],\n    },\n    '&$checked + $track': {\n      backgroundColor: purple[500],\n    },\n  },\n  checked: {},\n  track: {},\n})(Switch);\n\nconst IOSSwitch = withStyles(theme => ({\n  root: {\n    width: 42,\n    height: 26,\n    padding: 0,\n    margin: theme.spacing(1),\n  },\n  switchBase: {\n    padding: 1,\n    '&$checked': {\n      transform: 'translateX(16px)',\n      color: theme.palette.common.white,\n      '& + $track': {\n        backgroundColor: '#52d869',\n        opacity: 1,\n        border: 'none',\n      },\n    },\n    '&$focusVisible $thumb': {\n      color: '#52d869',\n      border: '6px solid #fff',\n    },\n  },\n  thumb: {\n    width: 24,\n    height: 24,\n  },\n  track: {\n    borderRadius: 26 / 2,\n    border: `1px solid ${theme.palette.grey[400]}`,\n    backgroundColor: theme.palette.grey[50],\n    opacity: 1,\n    transition: theme.transitions.create(['background-color', 'border']),\n  },\n  checked: {},\n  focusVisible: {},\n}))(({ classes, ...props }) => {\n  return (\n    <Switch\n      focusVisibleClassName={classes.focusVisible}\n      disableRipple\n      classes={{\n        root: classes.root,\n        switchBase: classes.switchBase,\n        thumb: classes.thumb,\n        track: classes.track,\n        checked: classes.checked,\n      }}\n      {...props}\n    />\n  );\n});\n\nconst AntSwitch = withStyles(theme => ({\n  root: {\n    width: 28,\n    height: 16,\n    padding: 0,\n    display: 'flex',\n  },\n  switchBase: {\n    padding: 2,\n    color: theme.palette.grey[500],\n    '&$checked': {\n      transform: 'translateX(12px)',\n      color: theme.palette.common.white,\n      '& + $track': {\n        opacity: 1,\n        backgroundColor: theme.palette.primary.main,\n        borderColor: theme.palette.primary.main,\n      },\n    },\n  },\n  thumb: {\n    width: 12,\n    height: 12,\n    boxShadow: 'none',\n  },\n  track: {\n    border: `1px solid ${theme.palette.grey[500]}`,\n    borderRadius: 16 / 2,\n    opacity: 1,\n    backgroundColor: theme.palette.common.white,\n  },\n  checked: {},\n}))(Switch);\n\nfunction CustomizedSwitches() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n    checkedC: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup>\n      <FormControlLabel\n        control={\n          <PurpleSwitch\n            checked={state.checkedA}\n            onChange={handleChange('checkedA')}\n            value=\"checkedA\"\n          />\n        }\n        label=\"Custom color\"\n      />\n      <FormControlLabel\n        control={\n          <IOSSwitch\n            checked={state.checkedB}\n            onChange={handleChange('checkedB')}\n            value=\"checkedB\"\n          />\n        }\n        label=\"iOS style\"\n      />\n      <Typography component=\"div\">\n        <Grid component=\"label\" container alignItems=\"center\" spacing={1}>\n          <Grid item>Off</Grid>\n          <Grid item>\n            <AntSwitch\n              checked={state.checkedC}\n              onChange={handleChange('checkedC')}\n              value=\"checkedC\"\n            />\n          </Grid>\n          <Grid item>On</Grid>\n        </Grid>\n      </Typography>\n    </FormGroup>\n  );\n}\n\nexport default CustomizedSwitches;\n"},1870:function(e,t,n){"use strict";n.r(t);var a=n(15),o=n(0),c=n.n(o),r=n(1e3),l=n(520),i=n(999),m=n(509),s=n(519);t.default=function(){var e=c.a.useState("female"),t=Object(a.a)(e,2),n=t[0],o=t[1];return c.a.createElement(m.a,{component:"fieldset"},c.a.createElement(s.a,{component:"legend"},"labelPlacement"),c.a.createElement(l.a,{"aria-label":"position",name:"position",value:n,onChange:function(e){o(e.target.value)},row:!0},c.a.createElement(i.a,{value:"top",control:c.a.createElement(r.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),c.a.createElement(i.a,{value:"start",control:c.a.createElement(r.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),c.a.createElement(i.a,{value:"bottom",control:c.a.createElement(r.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),c.a.createElement(i.a,{value:"end",control:c.a.createElement(r.a,{color:"primary"}),label:"End",labelPlacement:"end"})))}},1871:function(e,t){e.exports='import React from \'react\';\nimport Switch from \'@material-ui/core/Switch\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nfunction FormControlLabelPosition() {\n  const [value, setValue] = React.useState(\'female\');\n\n  function handleChange(event) {\n    setValue(event.target.value);\n  }\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">labelPlacement</FormLabel>\n      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>\n        <FormControlLabel\n          value="top"\n          control={<Switch color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Switch color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Switch color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Switch color="primary" />}\n          label="End"\n          labelPlacement="end"\n        />\n      </FormGroup>\n    </FormControl>\n  );\n}\n\nexport default FormControlLabelPosition;\n'},2187:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(12),r=n(992),l=n(124),i=n(1010),m=n(1030),s=Object(m.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=s();return o.a.createElement(c.s,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(r.a,{className:"text-18",color:"action"},"home"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Documentation"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(l.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(l.a,{variant:"h6"},"Switches")),o.a.createElement(i.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/switches",target:"_blank"},o.a.createElement(r.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(l.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Switches"),o.a.createElement(l.a,{className:"description"},"Switches toggle the state of a single setting on or off."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/selection-controls.html#switches"},"Switches")," are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it\u2019s in, should be made clear from the corresponding inline label."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1862).default,raw:n(1863)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Switches with FormControlLabel"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"Switch")," can also be used with a label description thanks to the ",o.a.createElement("code",null,"FormControlLabel")," component."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1864).default,raw:n(1865)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Switches with FormGroup"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"FormGroup")," is a helpful wrapper used to group selection controls components that provides an easier API. However, we encourage you to use a ",o.a.createElement("a",{href:"#checkboxes"},"Checkbox")," instead."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1866).default,raw:n(1867)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized switches"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"Here are some examples of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1868).default,raw:n(1869)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Label placement"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"You can change the placement of the label:"),o.a.createElement(l.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1870).default,raw:n(1871)})),o.a.createElement(l.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(l.a,{className:"mb-16",component:"div"},"All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",o.a.createElement("code",null,"&lt;label&gt;")," element (",o.a.createElement("a",{href:"/api/form-control-label/"},"FormControlLabel"),")."),o.a.createElement(l.a,{className:"mb-16",component:"div"},"When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",o.a.createElement("code",null,"aria-label"),", ",o.a.createElement("code",null,"aria-labelledby"),", ",o.a.createElement("code",null,"title"),") via the ",o.a.createElement("code",null,"inputProps")," property."),o.a.createElement(c.k,{component:"pre",className:"language-jsx"}," \n<Switch\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Switch A' } }\n/>\n"))})}}}]);