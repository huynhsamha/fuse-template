(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1031:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1032:function(e,a,n){"use strict";var t=n(1031);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var n=c.default.memo(c.default.forwardRef(function(a,n){return c.default.createElement(l.default,(0,o.default)({ref:n},a),e)}));0;return n.muiName=l.default.muiName,n};var o=t(n(1034)),c=t(n(0)),l=t(n(967))},1034:function(e,a){function n(){return e.exports=n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n.apply(this,arguments)}e.exports=n},1035:function(e,a,n){"use strict";var t=n(2),o=n.n(t),c=n(1030),l=n(183);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)(e,o()({defaultTheme:l.a},a))}},1061:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};a.default=t},1102:function(e,a,n){"use strict";var t=n(1031);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),c=(0,t(n(1032)).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=c},1545:function(e,a,n){"use strict";n.r(a);var t=n(27),o=n(8),c=n(15),l=n(0),r=n.n(l),m=n(1016);a.default=function(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedF:!0}),a=Object(c.a)(e,2),n=a[0],l=a[1],i=function(e){return function(a){l(Object(o.a)({},n,Object(t.a)({},e,a.target.checked)))}};return r.a.createElement("div",null,r.a.createElement(m.a,{checked:n.checkedA,onChange:i("checkedA"),value:"checkedA"}),r.a.createElement(m.a,{checked:n.checkedB,onChange:i("checkedB"),value:"checkedB",color:"primary"}),r.a.createElement(m.a,{value:"checkedC"}),r.a.createElement(m.a,{disabled:!0,value:"checkedD"}),r.a.createElement(m.a,{disabled:!0,checked:!0,value:"checkedE"}),r.a.createElement(m.a,{checked:n.checkedF,onChange:i("checkedF"),value:"checkedF",indeterminate:!0}),r.a.createElement(m.a,{defaultChecked:!0,color:"default",value:"checkedG"}))}},1546:function(e,a){e.exports='import React from \'react\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\n\nfunction Checkboxes() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n    checkedF: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <div>\n      <Checkbox checked={state.checkedA} onChange={handleChange(\'checkedA\')} value="checkedA" />\n      <Checkbox\n        checked={state.checkedB}\n        onChange={handleChange(\'checkedB\')}\n        value="checkedB"\n        color="primary"\n      />\n      <Checkbox value="checkedC" />\n      <Checkbox disabled value="checkedD" />\n      <Checkbox disabled checked value="checkedE" />\n      <Checkbox\n        checked={state.checkedF}\n        onChange={handleChange(\'checkedF\')}\n        value="checkedF"\n        indeterminate\n      />\n      <Checkbox defaultChecked color="default" value="checkedG" />\n    </div>\n  );\n}\n\nexport default Checkboxes;\n'},1547:function(e,a,n){"use strict";n.r(a);var t=n(27),o=n(8),c=n(15),l=n(0),r=n.n(l),m=n(7),i=n(1061),s=n.n(i),d=n(520),u=n(999),h=n(1016),b=n(1549),k=n.n(b),f=n(1550),p=n.n(f),C=n(1102),v=n.n(C),E=n(1548),g=n.n(E),x=Object(m.a)({root:{color:s.a[400],"&$checked":{color:s.a[600]}},checked:{}})(function(e){return r.a.createElement(h.a,Object.assign({color:"default"},e))});a.default=function(){var e=r.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=Object(c.a)(e,2),n=a[0],l=a[1],m=function(e){return function(a){l(Object(o.a)({},n,Object(t.a)({},e,a.target.checked)))}};return r.a.createElement(d.a,{row:!0},r.a.createElement(u.a,{control:r.a.createElement(h.a,{checked:n.checkedA,onChange:m("checkedA"),value:"checkedA"}),label:"Secondary"}),r.a.createElement(u.a,{control:r.a.createElement(h.a,{checked:n.checkedB,onChange:m("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),r.a.createElement(u.a,{control:r.a.createElement(h.a,{value:"checkedC"}),label:"Uncontrolled"}),r.a.createElement(u.a,{disabled:!0,control:r.a.createElement(h.a,{value:"checkedD"}),label:"Disabled"}),r.a.createElement(u.a,{disabled:!0,control:r.a.createElement(h.a,{checked:!0,value:"checkedE"}),label:"Disabled"}),r.a.createElement(u.a,{control:r.a.createElement(h.a,{checked:n.checkedF,onChange:m("checkedF"),value:"checkedF",indeterminate:!0}),label:"Indeterminate"}),r.a.createElement(u.a,{control:r.a.createElement(x,{checked:n.checkedG,onChange:m("checkedG"),value:"checkedG"}),label:"Custom color"}),r.a.createElement(u.a,{control:r.a.createElement(h.a,{icon:r.a.createElement(g.a,null),checkedIcon:r.a.createElement(v.a,null),value:"checkedH"}),label:"Custom icon"}),r.a.createElement(u.a,{control:r.a.createElement(h.a,{icon:r.a.createElement(k.a,{fontSize:"small"}),checkedIcon:r.a.createElement(p.a,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"}))}},1548:function(e,a,n){"use strict";var t=n(1031);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),c=(0,t(n(1032)).default)(o.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");a.default=c},1549:function(e,a,n){"use strict";var t=n(1031);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),c=(0,t(n(1032)).default)(o.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");a.default=c},1550:function(e,a,n){"use strict";var t=n(1031);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),c=(0,t(n(1032)).default)(o.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");a.default=c},1551:function(e,a){e.exports='import React from \'react\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport green from \'@material-ui/core/colors/green\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport CheckBoxOutlineBlankIcon from \'@material-ui/icons/CheckBoxOutlineBlank\';\nimport CheckBoxIcon from \'@material-ui/icons/CheckBox\';\nimport Favorite from \'@material-ui/icons/Favorite\';\nimport FavoriteBorder from \'@material-ui/icons/FavoriteBorder\';\n\nconst GreenCheckbox = withStyles({\n  root: {\n    color: green[400],\n    \'&$checked\': {\n      color: green[600],\n    },\n  },\n  checked: {},\n})(props => <Checkbox color="default" {...props} />);\n\nfunction CheckboxLabels() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n    checkedF: true,\n    checkedG: true,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        control={\n          <Checkbox checked={state.checkedA} onChange={handleChange(\'checkedA\')} value="checkedA" />\n        }\n        label="Secondary"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedB}\n            onChange={handleChange(\'checkedB\')}\n            value="checkedB"\n            color="primary"\n          />\n        }\n        label="Primary"\n      />\n      <FormControlLabel control={<Checkbox value="checkedC" />} label="Uncontrolled" />\n      <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />\n      <FormControlLabel disabled control={<Checkbox checked value="checkedE" />} label="Disabled" />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedF}\n            onChange={handleChange(\'checkedF\')}\n            value="checkedF"\n            indeterminate\n          />\n        }\n        label="Indeterminate"\n      />\n      <FormControlLabel\n        control={\n          <GreenCheckbox\n            checked={state.checkedG}\n            onChange={handleChange(\'checkedG\')}\n            value="checkedG"\n          />\n        }\n        label="Custom color"\n      />\n      <FormControlLabel\n        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}\n        label="Custom icon"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}\n            checkedIcon={<CheckBoxIcon fontSize="small" />}\n            value="checkedI"\n          />\n        }\n        label="Custom size"\n      />\n    </FormGroup>\n  );\n}\n\nexport default CheckboxLabels;\n'},1552:function(e,a,n){"use strict";n.r(a);var t=n(27),o=n(8),c=n(15),l=n(0),r=n.n(l),m=n(1035),i=n(519),s=n(509),d=n(520),u=n(999),h=n(516),b=n(1016),k=Object(m.a)(function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}});a.default=function(){var e=k(),a=r.a.useState({gilad:!0,jason:!1,antoine:!1}),n=Object(c.a)(a,2),l=n[0],m=n[1],f=function(e){return function(a){m(Object(o.a)({},l,Object(t.a)({},e,a.target.checked)))}},p=l.gilad,C=l.jason,v=l.antoine,E=2!==[p,C,v].filter(function(e){return e}).length;return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{component:"fieldset",className:e.formControl},r.a.createElement(i.a,{component:"legend"},"Assign responsibility"),r.a.createElement(d.a,null,r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:p,onChange:f("gilad"),value:"gilad"}),label:"Gilad Gray"}),r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:C,onChange:f("jason"),value:"jason"}),label:"Jason Killian"}),r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:v,onChange:f("antoine"),value:"antoine"}),label:"Antoine Llorca"})),r.a.createElement(h.a,null,"Be careful")),r.a.createElement(s.a,{required:!0,error:E,component:"fieldset",className:e.formControl},r.a.createElement(i.a,{component:"legend"},"Pick two"),r.a.createElement(d.a,null,r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:p,onChange:f("gilad"),value:"gilad"}),label:"Gilad Gray"}),r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:C,onChange:f("jason"),value:"jason"}),label:"Jason Killian"}),r.a.createElement(u.a,{control:r.a.createElement(b.a,{checked:v,onChange:f("antoine"),value:"antoine"}),label:"Antoine Llorca"})),r.a.createElement(h.a,null,"You can display an error")))}},1553:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormHelperText from \'@material-ui/core/FormHelperText\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: \'flex\',\n  },\n  formControl: {\n    margin: theme.spacing(3),\n  },\n}));\n\nfunction CheckboxesGroup() {\n  const classes = useStyles();\n  const [state, setState] = React.useState({\n    gilad: true,\n    jason: false,\n    antoine: false,\n  });\n\n  const handleChange = name => event => {\n    setState({ ...state, [name]: event.target.checked });\n  };\n\n  const { gilad, jason, antoine } = state;\n  const error = [gilad, jason, antoine].filter(v => v).length !== 2;\n\n  return (\n    <div className={classes.root}>\n      <FormControl component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Assign responsibility</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange(\'gilad\')} value="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange(\'jason\')} value="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={\n              <Checkbox checked={antoine} onChange={handleChange(\'antoine\')} value="antoine" />\n            }\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>Be careful</FormHelperText>\n      </FormControl>\n      <FormControl required error={error} component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Pick two</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange(\'gilad\')} value="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange(\'jason\')} value="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={\n              <Checkbox checked={antoine} onChange={handleChange(\'antoine\')} value="antoine" />\n            }\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>You can display an error</FormHelperText>\n      </FormControl>\n    </div>\n  );\n}\n\nexport default CheckboxesGroup;\n'},1554:function(e,a,n){"use strict";n.r(a);var t=n(15),o=n(0),c=n.n(o),l=n(1016),r=n(520),m=n(999),i=n(509),s=n(519);a.default=function(){var e=c.a.useState("female"),a=Object(t.a)(e,2),n=a[0],o=a[1];return c.a.createElement(i.a,{component:"fieldset"},c.a.createElement(s.a,{component:"legend"},"labelPlacement"),c.a.createElement(r.a,{"aria-label":"position",name:"position",value:n,onChange:function(e){o(e.target.value)},row:!0},c.a.createElement(m.a,{value:"top",control:c.a.createElement(l.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),c.a.createElement(m.a,{value:"start",control:c.a.createElement(l.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),c.a.createElement(m.a,{value:"bottom",control:c.a.createElement(l.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),c.a.createElement(m.a,{value:"end",control:c.a.createElement(l.a,{color:"primary"}),label:"End",labelPlacement:"end"})))}},1555:function(e,a){e.exports='import React from \'react\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nfunction FormControlLabelPosition() {\n  const [value, setValue] = React.useState(\'female\');\n\n  function handleChange(event) {\n    setValue(event.target.value);\n  }\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">labelPlacement</FormLabel>\n      <FormGroup aria-label="position" name="position" value={value} onChange={handleChange} row>\n        <FormControlLabel\n          value="top"\n          control={<Checkbox color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Checkbox color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Checkbox color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Checkbox color="primary" />}\n          label="End"\n          labelPlacement="end"\n        />\n      </FormGroup>\n    </FormControl>\n  );\n}\n\nexport default FormControlLabelPosition;\n'},2160:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),c=n(12),l=n(992),r=n(124),m=n(1010),i=n(1030),s=Object(i.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=s();return o.a.createElement(c.s,{classes:{root:a.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(l.a,{className:"text-18",color:"action"},"home"),o.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(r.a,{color:"textSecondary"},"Documentation"),o.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(r.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(r.a,{variant:"h6"},"Checkboxes")),o.a.createElement(m.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/checkboxes",target:"_blank"},o.a.createElement(l.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(r.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Checkboxes"),o.a.createElement(r.a,{className:"description"},"Checkboxes allow the user to select one or more items from a set."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/selection-controls.html#checkboxes"},"Checkboxes")," can be used to turn an option on or off."),o.a.createElement(r.a,{className:"mb-16",component:"div"},"If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1545).default,raw:n(1546)})),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"Checkbox")," can also be used with a label description thanks to the ",o.a.createElement("code",null,"FormControlLabel")," component."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1547).default,raw:n(1551)})),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Checkboxes with FormGroup"),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"FormGroup")," is a helpful wrapper used to group selection controls components that provides an easier API."),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1552).default,raw:n(1553)})),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Label placement"),o.a.createElement(r.a,{className:"mb-16",component:"div"},"You can change the placement of the label:"),o.a.createElement(r.a,{className:"mb-16",component:"div"},o.a.createElement(c.j,{className:"my-24",iframe:!1,component:n(1554).default,raw:n(1555)})),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(r.a,{className:"mb-16",component:"div"},"All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",o.a.createElement("code",null,"&lt;label&gt;")," element (",o.a.createElement("a",{href:"/api/form-control-label/"},"FormControlLabel"),")."),o.a.createElement(r.a,{className:"mb-16",component:"div"},"When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",o.a.createElement("code",null,"aria-label"),", ",o.a.createElement("code",null,"aria-labelledby"),", ",o.a.createElement("code",null,"title"),") via the ",o.a.createElement("code",null,"inputProps")," property."),o.a.createElement(c.k,{component:"pre",className:"language-jsx"}," \n<Checkbox\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Checkbox A' } }\n/>\n"),o.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Guidance"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/"},"Checkboxes vs. Radio Buttons"))))})}},967:function(e,a,n){"use strict";n.r(a);var t=n(329);n.d(a,"default",function(){return t.a})}}]);