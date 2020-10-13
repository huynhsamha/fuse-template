(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2836:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(13),l=a(15),s=a(14),i=a(16),o=a(0),r=a.n(o),m=a(1),f=a(6),u=a(3),p=["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"],d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={intervalId:null,selectedEffect:"fade",customAnimation:{translateX:[0,"100%"],opacity:[1,0]}},a.handleChange=function(e){a.setState({selectedEffect:e.target.value})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){return e.setState({customAnimation:null!==e.state.customAnimation?null:{translateX:[0,"100%"],opacity:[1,0]}})},1e3);this.setState({intervalId:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(u.s,{classes:{root:e.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(m.G,{className:"text-18",color:"action"},"home"),r.a.createElement(m.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(m.vb,{color:"textSecondary"},"Components"),r.a.createElement(m.G,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(m.vb,{color:"textSecondary"},"Fuse Components")),r.a.createElement(m.vb,{variant:"h6"},"FuseAnimate"))),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(m.vb,{className:"mb-16",component:"p"},r.a.createElement("code",null,"FuseAnimate")," is a container component which uses ",r.a.createElement("code",null,"VelocityComponent")," of ",r.a.createElement("code",null,"velocity-react")," library."),r.a.createElement(m.vb,{className:"mt-32 mb-8",variant:"h5"},"Predefined Effects Usage"),r.a.createElement(m.vb,{className:"mb-16",component:"p"},"You can use predefined animation effects."),r.a.createElement(u.k,{component:"pre",className:"language-jsx"},'\n                                <FuseAnimate\n                                    animation="transition.'.concat(this.state.selectedEffect,'In"\n                                    duration={400}\n                                    delay={400}\n                                >\n                                     <Card className={classes.box}>\n                                        <Typography>\n                                        {this.state.selectedEffect}\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             ')),r.a.createElement("div",{className:"flex flex-wrap p-48"},r.a.createElement("div",{className:"flex w-full sm:w-1/2 p-24 justify-center"},r.a.createElement(m.x,{className:"w-256"},r.a.createElement(m.K,{htmlFor:"effect-helper"},"Select Effect"),r.a.createElement(m.bb,{value:this.state.selectedEffect,onChange:this.handleChange,input:r.a.createElement(m.I,{name:"effect",id:"effect-helper"})},p.map(function(e){return r.a.createElement(m.T,{key:e,value:e},"transition.",e,"In")})))),r.a.createElement("div",{className:"flex w-full sm:w-1/2 items-center justify-center"},r.a.createElement(u.d,{animation:this.state.selectedEffect&&"transition."+this.state.selectedEffect+"In",duration:400,delay:400},r.a.createElement(m.d,{className:e.box},r.a.createElement(m.vb,null,this.state.selectedEffect))))),r.a.createElement(m.vb,{className:"mt-32 mb-8",variant:"h5"},"Custom Effects Usage"),r.a.createElement(m.vb,{className:"mb-16",component:"p"},"You can create custom effects."),r.a.createElement(u.k,{component:"pre",className:"language-jsx"},"\n                                <FuseAnimate\n                                    animation={{\n                                        translateX: [0, '100%'],\n                                        opacity   : [1, 0]\n                                    }}\n                                    duration={400}\n                                    delay={400}\n                                >\n                                    <Card className={this.props.classes.box}>\n                                        <Typography>\n                                            Slide left and fade in\n                                        </Typography>\n                                    </Card>\n                                </FuseAnimate>\n                             "),r.a.createElement("div",{className:"p-24 flex items-center justify-center"},r.a.createElement(u.d,{animation:this.state.customAnimation,duration:400,delay:400},r.a.createElement(m.d,{className:this.props.classes.box},r.a.createElement(m.vb,null,"Slide left and fade in")))),r.a.createElement(m.vb,{className:"mb-16",component:"p"},"For more information checkout the",r.a.createElement("a",{href:"https://github.com/google-fabric/velocity-react",target:"_blank",rel:"noopener noreferrer",className:"ml-8 font-bold"},"velocity-react"),"."))})}}]),t}(o.Component);t.default=Object(f.withStyles)(function(e){return{layoutRoot:{},box:{width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:16}}},{withTheme:!0})(d)}}]);