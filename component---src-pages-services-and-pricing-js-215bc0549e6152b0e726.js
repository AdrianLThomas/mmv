(self.webpackChunkmmv=self.webpackChunkmmv||[]).push([[194],{1804:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(7294),r=a(2122),l=a(1253),o=a(5505),i=a(4621),c=n.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,m=e.square,d=void 0!==m&&m,u=e.elevation,p=void 0===u?1:u,h=e.variant,g=void 0===h?"elevation":h,f=(0,l.Z)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(s,(0,r.Z)({className:(0,o.Z)(a.root,i,"outlined"===g?a.outlined:a["elevation".concat(p)],!d&&a.rounded),ref:t},f))})),s=(0,i.Z)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),(0,r.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c),m=n.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.raised,m=void 0!==c&&c,d=(0,l.Z)(e,["classes","className","raised"]);return n.createElement(s,(0,r.Z)({className:(0,o.Z)(a.root,i),elevation:m?8:1,ref:t},d))})),d=(0,i.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(m),u=n.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,m=(0,l.Z)(e,["classes","className","component"]);return n.createElement(s,(0,r.Z)({className:(0,o.Z)(a.root,i),ref:t},m))})),p=(0,i.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u),h=a(1664),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},f=n.forwardRef((function(e,t){var a=e.align,i=void 0===a?"inherit":a,c=e.classes,s=e.className,m=e.color,d=void 0===m?"initial":m,u=e.component,p=e.display,f=void 0===p?"initial":p,y=e.gutterBottom,v=void 0!==y&&y,E=e.noWrap,b=void 0!==E&&E,x=e.paragraph,Z=void 0!==x&&x,w=e.variant,N=void 0===w?"body1":w,k=e.variantMapping,S=void 0===k?g:k,B=(0,l.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),C=u||(Z?"p":S[N]||g[N])||"span";return n.createElement(C,(0,r.Z)({className:(0,o.Z)(c.root,s,"inherit"!==N&&c[N],"initial"!==d&&c["color".concat((0,h.Z)(d))],b&&c.noWrap,v&&c.gutterBottom,Z&&c.paragraph,"inherit"!==i&&c["align".concat((0,h.Z)(i))],"initial"!==f&&c["display".concat((0,h.Z)(f))]),ref:t},B))})),y=(0,i.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(f),v=n.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,c=e.classes,s=e.className,m=(0,l.Z)(e,["disableSpacing","classes","className"]);return n.createElement("div",(0,r.Z)({className:(0,o.Z)(c.root,s,!i&&c.spacing),ref:t},m))})),E=(0,i.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(v),b=a(838),x=a(920),Z=a(5444),w=a(8528),N=(0,x.Z)({root:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",boxShadow:"0 5px 8px 0 rgba(0, 0, 0, 0.3)",backgroundColor:"#fafafa"},cardHeader:{textAlign:"center",letterSpacing:"0.1rem",fontWeight:600},button:w.Z});function k(e){var t=e.className,a=e.cards,r=N(),l=r.root,o=r.cardHeader,i=r.button;return n.createElement(b.Z,{container:!0,spacing:1,alignItems:"stretch",className:t},a.map((function(e){return n.createElement(b.Z,Object.assign({item:!0,key:e.title},e.size),n.createElement(d,{className:l},n.createElement(p,null,e.icon,n.createElement(y,{gutterBottom:!0,variant:"h5",component:"h2",className:o},e.title),n.createElement(y,{variant:"body2",component:"p"},e.description)),n.createElement(E,null,n.createElement(Z.rU,{to:e.button.href,className:i},e.button.text))))})))}},8528:function(e,t){"use strict";t.Z={textAlign:"center",fontSize:"1rem",padding:"10px",width:"100%",fontWeight:"bold",transition:"transform 500ms",willChange:"transform",border:"1px solid black","&:hover":{transform:"translateY(3px)"}}},5628:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(7294),r=a(920),l=a(7810),o=a(3087),i=a(1804);function c(e){var t=e.className,a=[{title:"Mini Valet",button:{text:"Book a mini valet",href:"/contact-me/"},size:{xs:12,sm:6,md:4,lg:4},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Starting from £45"),n.createElement("ul",null,n.createElement("li",null,"Wash & Wax then hand dried"),n.createElement("li",null,"Alloys"),n.createElement("li",null,"Tyres shined & protected"),n.createElement("li",null,"Inside door shuts cleaned & dried"),n.createElement("li",null,"Windows polished inside & out"),n.createElement("li",null,"Inside hoovered"),n.createElement("li",null,"Plastic & vinyl's cleaned and dressed"),n.createElement("li",null,"Pockets & ash trays"),n.createElement("li",null,"Air freshener")),n.createElement("span",null,"4x4 and 7 seaters start from £55."))},{title:"Full Valet",button:{text:"Book a full valet",href:"/contact-me/"},size:{xs:12,sm:6,md:4,lg:4},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Starting from £70"),n.createElement("p",null,n.createElement("strong",null,"Includes Mini Valet"),", plus:"),n.createElement("ul",null,n.createElement("li",null,"Glove compartment"),n.createElement("li",null,"Carpets, door cards & rooflining all shampooed and dried"),n.createElement("li",null,"Seats shampooed and dried, or if leather interior, then a luxorious leather treatment is applied"),n.createElement("li",null,"Full car deodorising system"),n.createElement("li",null,"Outside polished/waxed")),n.createElement("span",null,"4x4 and 7 seaters start from £90."))},{title:"Hand Polishing & Waxing",button:{text:"Book a hand polish & wax",href:"/contact-me/"},size:{xs:12,sm:6,md:4,lg:4},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Waxing starts from £40"),n.createElement("h4",null,"Polishing starts from £40"),n.createElement("p",null,"Waxing and polishing are for an already prepared car, ready to be protected."))},{title:"Machine Polish",button:{text:"Book a machine polish",href:"/contact-me/"},size:{xs:12,sm:6,md:4,lg:3},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Starting from £120"),n.createElement("ul",null,n.createElement("li",null,"Paint Correction"),n.createElement("li",null,"Swirl Mark Removal"),n.createElement("li",null,"Light Scratch Removal")))},{title:"Ultimate Paint and Fabric Protection",size:{xs:12,sm:6,md:4,lg:3},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Please contact me for prices"),n.createElement("p",null,"Paint and fabric protection from premium valeting product manufacturers"),n.createElement("ul",null,n.createElement("li",null,"Lifeshine by Autoglym"),n.createElement("li",null,"DiamondBrite Jewelultra"),n.createElement("li",null,"Supagard"),n.createElement("li",null,"GEN-3 Glasscoat"),n.createElement("li",null,"Gtechniq Hybrid Coating"))),button:{text:"Book paint & fabric protection",href:"/contact-me/"}},{title:"Engine Bay Steam Clean & Detail",button:{text:"Book an engine bay steam clean",href:"/contact-me/"},size:{xs:12,sm:6,md:4,lg:3},description:n.createElement(n.Fragment,null,n.createElement("h4",null,"Starting from £40"),n.createElement("p",null,"The engine bay is steam cleaned and dressed to a high standard. Whilst the upmost care is taken to ensure electrical components are protected, it is the customers risk to undertake this procedure."))},{title:"Other",button:{text:"Contact me",href:"/contact-me/"},size:{xs:12,sm:12,md:6,lg:3},description:n.createElement("p",null,"Can't find what you're looking for? I offer a variety of valeting and detailing services, so don't hestiate to contact me for further details.")}];return n.createElement("div",{className:t},n.createElement(i.Z,{cards:a}))}var s=(0,r.Z)((function(){return{heroTitle:{color:"white",fontSize:"32px"},hero:{height:"100px",position:"relative"},service:{paddingTop:"20px"}}}));function m(e){var t=e.location,a=s();return n.createElement(o.Z,{currentPath:t.pathname,description:"I offer a variety of services for your vehicle, such as: mini valet, full valet, hand polishing and waxing, machine polish, ceramic coating and engine bay/steam cleaning."},n.createElement(l.Z,{type:"beading",classOverride:a.hero},n.createElement("h2",{className:a.heroTitle},"Services & Pricing")),n.createElement(c,{className:a.service}))}}}]);
//# sourceMappingURL=component---src-pages-services-and-pricing-js-215bc0549e6152b0e726.js.map