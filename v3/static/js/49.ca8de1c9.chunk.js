(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1138:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(4),r=n.n(o),c=n(0),l=n.n(c),i=(n(1),n(240)),m=n(46),p=n(97),h=n(59),d=n(20),u={entering:{transform:"scale(1)"},entered:{transform:"scale(1)"}},g={enter:m.b.enteringScreen,exit:m.b.leavingScreen},f=l.a.forwardRef(function(e,t){var n=e.children,a=e.in,o=e.onEnter,c=e.onExit,m=e.style,p=e.theme,f=e.timeout,v=void 0===f?g:f,y=r()(e,["children","in","onEnter","onExit","style","theme","timeout"]),E=Object(d.c)(n.ref,t);return l.a.createElement(i.a,s()({appear:!0,in:a,onEnter:function(e){Object(h.b)(e);var t=Object(h.a)({style:m,timeout:v},{mode:"enter"});e.style.webkitTransition=p.transitions.create("transform",t),e.style.transition=p.transitions.create("transform",t),o&&o(e)},onExit:function(e){var t=Object(h.a)({style:m,timeout:v},{mode:"exit"});e.style.webkitTransition=p.transitions.create("transform",t),e.style.transition=p.transitions.create("transform",t),c&&c(e)},timeout:v},y),function(e,t){return l.a.cloneElement(n,s()({style:s()({transform:"scale(0)",visibility:"exited"!==e||a?void 0:"hidden"},u[e],m,n.props.style),ref:E},t))})});t.a=Object(p.a)(f)},2024:function(e,t,n){"use strict";n.r(t);var a=n(43),s=n(44),o=n(73),r=n(72),c=n(74),l=n(0),i=n.n(l),m=n(7),p=n(1e3),h=n(150),d=n(995),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},n.handleChange=function(){n.setState(function(e){return{checked:!e.checked}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.checked;return i.a.createElement("div",{className:e.root},i.a.createElement(p.a,{checked:t,onChange:this.handleChange,"aria-label":"Collapse"}),i.a.createElement("div",{className:e.container},i.a.createElement(d.a,{in:t},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})))),i.a.createElement(d.a,{in:t,collapsedHeight:"40px"},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}}]),t}(i.a.Component);t.default=Object(m.a)(function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})(u)},2025:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Collapse from '@material-ui/core/Collapse';\n\nconst styles = theme => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n});\n\nclass SimpleCollapse extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  handleChange = () => {\n    this.setState(state => ({ checked: !state.checked }));\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { checked } = this.state;\n\n    return (\n      <div className={classes.root}>\n        <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n        <div className={classes.container}>\n          <Collapse in={checked}>\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Collapse>\n          <Collapse in={checked} collapsedHeight=\"40px\">\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Collapse>\n        </div>\n      </div>\n    );\n  }\n}\n\nSimpleCollapse.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleCollapse);\n"},2026:function(e,t,n){"use strict";n.r(t);var a=n(43),s=n(44),o=n(73),r=n(72),c=n(74),l=n(0),i=n.n(l),m=n(7),p=n(1e3),h=n(150),d=n(345),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},n.handleChange=function(){n.setState(function(e){return{checked:!e.checked}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.checked;return i.a.createElement("div",{className:e.root},i.a.createElement(p.a,{checked:t,onChange:this.handleChange,"aria-label":"Collapse"}),i.a.createElement("div",{className:e.container},i.a.createElement(d.a,{in:t},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}}]),t}(i.a.Component);t.default=Object(m.a)(function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})(u)},2027:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Fade from '@material-ui/core/Fade';\n\nconst styles = theme => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n});\n\nclass SimpleFade extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  handleChange = () => {\n    this.setState(state => ({ checked: !state.checked }));\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { checked } = this.state;\n\n    return (\n      <div className={classes.root}>\n        <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n        <div className={classes.container}>\n          <Fade in={checked}>\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Fade>\n        </div>\n      </div>\n    );\n  }\n}\n\nSimpleFade.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleFade);\n"},2028:function(e,t,n){"use strict";n.r(t);var a=n(43),s=n(44),o=n(73),r=n(72),c=n(74),l=n(0),i=n.n(l),m=n(7),p=n(1e3),h=n(150),d=n(248),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},n.handleChange=function(){n.setState(function(e){return{checked:!e.checked}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.checked,n=i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})));return i.a.createElement("div",{className:e.root},i.a.createElement(p.a,{checked:t,onChange:this.handleChange,"aria-label":"Collapse"}),i.a.createElement("div",{className:e.container},i.a.createElement(d.a,{in:t},n),i.a.createElement(d.a,Object.assign({in:t,style:{transformOrigin:"0 0 0"}},t?{timeout:1e3}:{}),n)))}}]),t}(i.a.Component);t.default=Object(m.a)(function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})(u)},2029:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Grow from '@material-ui/core/Grow';\n\nconst styles = theme => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n});\n\nclass SimpleGrow extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  handleChange = () => {\n    this.setState(state => ({ checked: !state.checked }));\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { checked } = this.state;\n\n    const polygon = (\n      <Paper elevation={4} className={classes.paper}>\n        <svg className={classes.svg}>\n          <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n        </svg>\n      </Paper>\n    );\n\n    return (\n      <div className={classes.root}>\n        <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n        <div className={classes.container}>\n          <Grow in={checked}>{polygon}</Grow>\n          {/* Conditionally applies the timeout property to change the entry speed. */}\n          <Grow\n            in={checked}\n            style={{ transformOrigin: '0 0 0' }}\n            {...(checked ? { timeout: 1000 } : {})}\n          >\n            {polygon}\n          </Grow>\n        </div>\n      </div>\n    );\n  }\n}\n\nSimpleGrow.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleGrow);\n"},2030:function(e,t,n){"use strict";n.r(t);var a=n(43),s=n(44),o=n(73),r=n(72),c=n(74),l=n(0),i=n.n(l),m=n(7),p=n(1e3),h=n(150),d=n(496),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},n.handleChange=function(){n.setState(function(e){return{checked:!e.checked}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.checked;return i.a.createElement("div",{className:e.root},i.a.createElement("div",{className:e.wrapper},i.a.createElement(p.a,{checked:t,onChange:this.handleChange,"aria-label":"Collapse"}),i.a.createElement(d.a,{direction:"up",in:t,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}}]),t}(i.a.Component);t.default=Object(m.a)(function(e){return{root:{height:180},wrapper:{width:100+e.spacing(2)},paper:{zIndex:1,position:"relative",margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})(u)},2031:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Slide from '@material-ui/core/Slide';\n\nconst styles = theme => ({\n  root: {\n    height: 180,\n  },\n  wrapper: {\n    width: 100 + theme.spacing(2),\n  },\n  paper: {\n    zIndex: 1,\n    position: 'relative',\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n});\n\nclass SimpleSlide extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  handleChange = () => {\n    this.setState(state => ({ checked: !state.checked }));\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { checked } = this.state;\n\n    return (\n      <div className={classes.root}>\n        <div className={classes.wrapper}>\n          <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n          <Slide direction=\"up\" in={checked} mountOnEnter unmountOnExit>\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Slide>\n        </div>\n      </div>\n    );\n  }\n}\n\nSimpleSlide.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleSlide);\n"},2032:function(e,t,n){"use strict";n.r(t);var a=n(43),s=n(44),o=n(73),r=n(72),c=n(74),l=n(0),i=n.n(l),m=n(7),p=n(1e3),h=n(150),d=n(1138),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},n.handleChange=function(){n.setState(function(e){return{checked:!e.checked}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.checked;return i.a.createElement("div",{className:e.root},i.a.createElement(p.a,{checked:t,onChange:this.handleChange,"aria-label":"Collapse"}),i.a.createElement("div",{className:e.container},i.a.createElement(d.a,{in:t},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon})))),i.a.createElement(d.a,{in:t,style:{transitionDelay:t?"500ms":"0ms"}},i.a.createElement(h.a,{elevation:4,className:e.paper},i.a.createElement("svg",{className:e.svg},i.a.createElement("polygon",{points:"0,100 50,00, 100,100",className:e.polygon}))))))}}]),t}(i.a.Component);t.default=Object(m.a)(function(e){return{root:{height:180},container:{display:"flex"},paper:{margin:e.spacing(1)},svg:{width:100,height:100},polygon:{fill:e.palette.common.white,stroke:e.palette.divider,strokeWidth:1}}})(u)},2033:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Switch from '@material-ui/core/Switch';\nimport Paper from '@material-ui/core/Paper';\nimport Zoom from '@material-ui/core/Zoom';\n\nconst styles = theme => ({\n  root: {\n    height: 180,\n  },\n  container: {\n    display: 'flex',\n  },\n  paper: {\n    margin: theme.spacing(1),\n  },\n  svg: {\n    width: 100,\n    height: 100,\n  },\n  polygon: {\n    fill: theme.palette.common.white,\n    stroke: theme.palette.divider,\n    strokeWidth: 1,\n  },\n});\n\nclass SimpleZoom extends React.Component {\n  state = {\n    checked: false,\n  };\n\n  handleChange = () => {\n    this.setState(state => ({ checked: !state.checked }));\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { checked } = this.state;\n\n    return (\n      <div className={classes.root}>\n        <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n        <div className={classes.container}>\n          <Zoom in={checked}>\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Zoom>\n          <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>\n            <Paper elevation={4} className={classes.paper}>\n              <svg className={classes.svg}>\n                <polygon points=\"0,100 50,00, 100,100\" className={classes.polygon} />\n              </svg>\n            </Paper>\n          </Zoom>\n        </div>\n      </div>\n    );\n  }\n}\n\nSimpleZoom.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(SimpleZoom);\n"},2193:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(12),r=n(992),c=n(124),l=n(1010),i=n(1030),m=Object(i.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=m();return s.a.createElement(o.s,{classes:{root:t.layoutRoot},header:s.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("div",{className:"flex items-center mb-16"},s.a.createElement(r.a,{className:"text-18",color:"action"},"home"),s.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(c.a,{color:"textSecondary"},"Documentation"),s.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),s.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),s.a.createElement(c.a,{variant:"h6"},"Transitions")),s.a.createElement(l.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/transitions",target:"_blank"},s.a.createElement(r.a,{className:"mr-4"},"link"),"Reference")),content:s.a.createElement("div",{className:"p-24 max-w-2xl"},s.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Transitions"),s.a.createElement(c.a,{className:"description"},"Transition helps make a UI expressive and easy to use."),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Material-UI provides a number of transitions that can be used to introduce some basic",s.a.createElement("a",{href:"https://material.io/design/motion/"},"motion"),"to your applications components."),s.a.createElement(c.a,{className:"mb-16",component:"div"},"To better support server rendering Material-UI provides a ",s.a.createElement("code",null,"style")," property to the children of some transition components (Fade, Grow, Zoom, Slide). The ",s.a.createElement("code",null,"style")," property must be applied to the DOM for the animation to work as expected."),s.a.createElement(o.k,{component:"pre",className:"language-jsx"}," \n// The `props` object contains a `style` property.\n// You need to provide it to the `div` element as shown here.\nfunction MyComponent(props) {\n  return (\n    <div {...props}>\n      Fade\n    </div>\n  );\n}\n\nexport default Main() {\n  return (\n    <Fade>\n      <MyComponent />\n    </Fade>\n  );\n}\n"),s.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Collapse"),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand vertically from the top of the child element. The ",s.a.createElement("code",null,"collapsedHeight")," property can be used to set the minimum height when not expanded."),s.a.createElement(c.a,{className:"mb-16",component:"div"},s.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(2024).default,raw:n(2025)})),s.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fade"),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Fade in from transparent to opaque."),s.a.createElement(c.a,{className:"mb-16",component:"div"},s.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(2026).default,raw:n(2027)})),s.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Grow"),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand outwards from the center of the child element, while also fading in from transparent to opaque."),s.a.createElement(c.a,{className:"mb-16",component:"div"},"The second example demonstrates how to change the ",s.a.createElement("code",null,"transform-origin"),", and conditionally applies the ",s.a.createElement("code",null,"timeout")," property to change the entry speed."),s.a.createElement(c.a,{className:"mb-16",component:"div"},s.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(2028).default,raw:n(2029)})),s.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Slide"),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Slide in from the edge of the screen. The ",s.a.createElement("code",null,"direction")," property controls which edge of the screen the transition starts from."),s.a.createElement(c.a,{className:"mb-16",component:"div"},"The Transition component's ",s.a.createElement("code",null,"mountOnEnter")," property prevents the child component from being mounted until ",s.a.createElement("code",null,"in")," is ",s.a.createElement("code",null,"true"),". This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the ",s.a.createElement("code",null,"unmountOnExit")," property removes the component from the DOM after it has been transition off screen."),s.a.createElement(c.a,{className:"mb-16",component:"div"},s.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(2030).default,raw:n(2031)})),s.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Zoom"),s.a.createElement(c.a,{className:"mb-16",component:"div"},"Expand outwards from the center of the child element."),s.a.createElement(c.a,{className:"mb-16",component:"div"},"This example also demonstrates how to delay the enter transition."),s.a.createElement(c.a,{className:"mb-16",component:"div"},s.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(2032).default,raw:n(2033)})))})}}}]);