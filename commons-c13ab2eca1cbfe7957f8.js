(self.webpackChunkmmv=self.webpackChunkmmv||[]).push([[351],{6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},838:function(e,t,n){"use strict";var r=n(1253),a=n(2122),i=n(7294),o=n(5505),c=n(4621),s=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,d=void 0===s?"stretch":s,u=e.classes,f=e.className,l=e.component,g=void 0===l?"div":l,p=e.container,m=void 0!==p&&p,h=e.direction,v=void 0===h?"row":h,b=e.item,x=void 0!==b&&b,y=e.justify,w=void 0===y?"flex-start":y,Z=e.lg,k=void 0!==Z&&Z,A=e.md,M=void 0!==A&&A,W=e.sm,S=void 0!==W&&W,O=e.spacing,j=void 0===O?0:O,E=e.wrap,R=void 0===E?"wrap":E,T=e.xl,C=void 0!==T&&T,z=e.xs,L=void 0!==z&&z,I=e.zeroMinWidth,B=void 0!==I&&I,N=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,o.Z)(u.root,f,m&&[u.container,0!==j&&u["spacing-xs-".concat(String(j))]],x&&u.item,B&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==R&&u["wrap-xs-".concat(String(R))],"stretch"!==d&&u["align-items-xs-".concat(String(d))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==L&&u["grid-xs-".concat(String(L))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==M&&u["grid-md-".concat(String(M))],!1!==k&&u["grid-lg-".concat(String(k))],!1!==C&&u["grid-xl-".concat(String(C))]);return i.createElement(g,(0,a.Z)({className:F,ref:t},N))})),l=(0,c.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f);t.Z=l},8477:function(e,t,n){"use strict";n.d(t,{Z:function(){return ae}});var r=n(1253),a=n(7643),i=n(2122),o=["xs","sm","md","lg","xl"];function c(e){var t=e.values,n=void 0===t?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,a=e.unit,c=void 0===a?"px":a,s=e.step,d=void 0===s?5:s,u=(0,r.Z)(e,["values","unit","step"]);function f(e){var t="number"==typeof n[e]?n[e]:e;return"@media (min-width:".concat(t).concat(c,")")}function l(e,t){var r=o.indexOf(t);return r===o.length-1?f(e):"@media (min-width:".concat("number"==typeof n[e]?n[e]:e).concat(c,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[o[r+1]]?n[o[r+1]]:t)-d/100).concat(c,")")}return(0,i.Z)({keys:o,values:n,up:f,down:function(e){var t=o.indexOf(e)+1,r=n[o[t]];return t===o.length?f("xs"):"@media (max-width:".concat(("number"==typeof r&&t>0?r:e)-d/100).concat(c,")")},between:l,only:function(e){return l(e,e)},width:function(e){return n[e]}},u)}var s=n(6156);function d(e,t,n){var r;return(0,i.Z)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)({paddingLeft:t(2),paddingRight:t(2)},n,(0,s.Z)({},e.up("sm"),(0,i.Z)({paddingLeft:t(3),paddingRight:t(3)},n[e.up("sm")])))},toolbar:(r={minHeight:56},(0,s.Z)(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),(0,s.Z)(r,e.up("sm"),{minHeight:64}),r)},n)}var u=n(2192),f={black:"#000",white:"#fff"},l={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},g={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},p={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},m={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},h={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},v={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},b={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function y(e){if(e.type)return e;if("#"===e.charAt(0))return y(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error((0,u.Z)(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function w(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function Z(e){var t="hsl"===(e=y(e)).type?y(function(e){var t=(e=y(e)).values,n=t[0],r=t[1]/100,a=t[2]/100,i=r*Math.min(a,1-a),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return a-i*Math.max(Math.min(t-3,9-t,1),-1)},c="rgb",s=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(c+="a",s.push(t[3])),w({type:c,values:s})}(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function k(e,t){if(e=y(e),t=x(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return w(e)}function A(e,t){if(e=y(e),t=x(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return w(e)}var M={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:f.white,default:l[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},W={text:{primary:f.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:l[800],default:"#303030"},action:{active:f.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function S(e,t,n,r){var a=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=A(e.main,a):"dark"===t&&(e.dark=k(e.main,i)))}function O(e){var t=e.primary,n=void 0===t?{light:g[300],main:g[500],dark:g[700]}:t,o=e.secondary,c=void 0===o?{light:p.A200,main:p.A400,dark:p.A700}:o,s=e.error,d=void 0===s?{light:m[300],main:m[500],dark:m[700]}:s,x=e.warning,y=void 0===x?{light:h[300],main:h[500],dark:h[700]}:x,w=e.info,k=void 0===w?{light:v[300],main:v[500],dark:v[700]}:w,A=e.success,O=void 0===A?{light:b[300],main:b[500],dark:b[700]}:A,j=e.type,E=void 0===j?"light":j,R=e.contrastThreshold,T=void 0===R?3:R,C=e.tonalOffset,z=void 0===C?.2:C,L=(0,r.Z)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function I(e){return function(e,t){var n=Z(e),r=Z(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,W.text.primary)>=T?W.text.primary:M.text.primary}var B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=(0,i.Z)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error((0,u.Z)(4,t));if("string"!=typeof e.main)throw new Error((0,u.Z)(5,JSON.stringify(e.main)));return S(e,"light",n,z),S(e,"dark",r,z),e.contrastText||(e.contrastText=I(e.main)),e},N={dark:W,light:M};return(0,a.Z)((0,i.Z)({common:f,type:E,primary:B(n),secondary:B(c,"A400","A200","A700"),error:B(d),warning:B(y),info:B(k),success:B(O),grey:l,contrastThreshold:T,getContrastText:I,augmentColor:B,tonalOffset:z},N[E]),L)}function j(e){return Math.round(1e5*e)/1e5}var E={textTransform:"uppercase"},R='"Roboto", "Helvetica", "Arial", sans-serif';function T(e,t){var n="function"==typeof t?t(e):t,o=n.fontFamily,c=void 0===o?R:o,s=n.fontSize,d=void 0===s?14:s,u=n.fontWeightLight,f=void 0===u?300:u,l=n.fontWeightRegular,g=void 0===l?400:l,p=n.fontWeightMedium,m=void 0===p?500:p,h=n.fontWeightBold,v=void 0===h?700:h,b=n.htmlFontSize,x=void 0===b?16:b,y=n.allVariants,w=n.pxToRem,Z=(0,r.Z)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var k=d/14,A=w||function(e){return"".concat(e/x*k,"rem")},M=function(e,t,n,r,a){return(0,i.Z)({fontFamily:c,fontWeight:e,fontSize:A(t),lineHeight:n},c===R?{letterSpacing:"".concat(j(r/t),"em")}:{},a,y)},W={h1:M(f,96,1.167,-1.5),h2:M(f,60,1.2,-.5),h3:M(g,48,1.167,0),h4:M(g,34,1.235,.25),h5:M(g,24,1.334,0),h6:M(m,20,1.6,.15),subtitle1:M(g,16,1.75,.15),subtitle2:M(m,14,1.57,.1),body1:M(g,16,1.5,.15),body2:M(g,14,1.43,.15),button:M(m,14,1.75,.4,E),caption:M(g,12,1.66,.4),overline:M(g,12,2.66,1,E)};return(0,a.Z)((0,i.Z)({htmlFontSize:x,pxToRem:A,round:j,fontFamily:c,fontSize:d,fontWeightLight:f,fontWeightRegular:g,fontWeightMedium:m,fontWeightBold:v},W),Z,{clone:!1})}function C(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var z=["none",C(0,2,1,-1,0,1,1,0,0,1,3,0),C(0,3,1,-2,0,2,2,0,0,1,5,0),C(0,3,3,-2,0,3,4,0,0,1,8,0),C(0,2,4,-1,0,4,5,0,0,1,10,0),C(0,3,5,-1,0,5,8,0,0,1,14,0),C(0,3,5,-1,0,6,10,0,0,1,18,0),C(0,4,5,-2,0,7,10,1,0,2,16,1),C(0,5,5,-3,0,8,10,1,0,3,14,2),C(0,5,6,-3,0,9,12,1,0,3,16,2),C(0,6,6,-3,0,10,14,1,0,4,18,3),C(0,6,7,-4,0,11,15,1,0,4,20,3),C(0,7,8,-4,0,12,17,2,0,5,22,4),C(0,7,8,-4,0,13,19,2,0,5,24,4),C(0,7,9,-4,0,14,21,2,0,5,26,4),C(0,8,9,-5,0,15,22,2,0,6,28,5),C(0,8,10,-5,0,16,24,2,0,6,30,5),C(0,8,11,-5,0,17,26,2,0,6,32,5),C(0,9,11,-5,0,18,28,2,0,7,34,6),C(0,9,12,-6,0,19,29,2,0,7,36,6),C(0,10,13,-6,0,20,31,3,0,8,38,7),C(0,10,13,-6,0,21,33,3,0,8,40,7),C(0,10,14,-6,0,22,35,3,0,8,42,7),C(0,11,14,-7,0,23,36,3,0,9,44,8),C(0,11,15,-7,0,24,38,3,0,9,46,8)],L={borderRadius:4};var I=n(2961);function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||(0,I.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=n(484),F=(n(5697),{xs:0,sm:600,md:960,lg:1280,xl:1920}),D={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(F[e],"px)")}};var G=function(e,t){return t?(0,a.Z)(e,t,{clone:!1}):e};var P,H,X={m:"margin",p:"padding"},U={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Y={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},V=(P=function(e){if(e.length>2){if(!Y[e])return[e];e=Y[e]}var t=B(e.split(""),2),n=t[0],r=t[1],a=X[n],i=U[r]||"";return Array.isArray(i)?i.map((function(e){return a+e})):[a+i]},H={},function(e){return void 0===H[e]&&(H[e]=P(e)),H[e]}),J=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function q(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}function $(e,t){return function(n){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t||null==t)return t;var n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-".concat(n)}(t,n),e}),{})}}function _(e){var t=q(e.theme);return Object.keys(e).map((function(n){if(-1===J.indexOf(n))return null;var r=$(V(n),t),a=e[n];return function(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||D;return t.reduce((function(e,a,i){return e[r.up(r.keys[i])]=n(t[i]),e}),{})}if("object"===(0,N.Z)(t)){var a=e.theme.breakpoints||D;return Object.keys(t).reduce((function(e,r){return e[a.up(r)]=n(t[r]),e}),{})}return n(t)}(e,a,r)})).reduce(G,{})}_.propTypes={},_.filterProps=J;function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var t=q({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 0===n.length?t(1):1===n.length?t(n[0]):n.map((function(e){if("string"==typeof e)return e;var n=t(e);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var Q={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ee={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function te(e){return"".concat(Math.round(e),"ms")}var ne={easing:Q,duration:ee,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,a=void 0===n?ee.standard:n,i=t.easing,o=void 0===i?Q.easeInOut:i,c=t.delay,s=void 0===c?0:c;(0,r.Z)(t,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"==typeof a?a:te(a)," ").concat(o," ").concat("string"==typeof s?s:te(s))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}},re={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var ae=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.breakpoints,n=void 0===t?{}:t,i=e.mixins,o=void 0===i?{}:i,s=e.palette,u=void 0===s?{}:s,f=e.spacing,l=e.typography,g=void 0===l?{}:l,p=(0,r.Z)(e,["breakpoints","mixins","palette","spacing","typography"]),m=O(u),h=c(n),v=K(f),b=(0,a.Z)({breakpoints:h,direction:"ltr",mixins:d(h,v,o),overrides:{},palette:m,props:{},shadows:z,typography:T(m,g),spacing:v,shape:L,transitions:ne,zIndex:re},p),x=arguments.length,y=new Array(x>1?x-1:0),w=1;w<x;w++)y[w-1]=arguments[w];return b=y.reduce((function(e,t){return(0,a.Z)(e,t)}),b)}()},920:function(e,t,n){"use strict";var r=n(2122),a=n(7627),i=n(8477);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)(e,(0,r.Z)({defaultTheme:i.Z},t))}},4621:function(e,t,n){"use strict";var r=n(2122),a=n(1566),i=n(8477);t.Z=function(e,t){return(0,a.Z)(e,(0,r.Z)({defaultTheme:i.Z},t))}},1664:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2192);function a(e){if("string"!=typeof e)throw new Error((0,r.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},2192:function(e,t,n){"use strict";function r(e){for(var t="https://material-ui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}n.d(t,{Z:function(){return r}})},1920:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(7294),a=n(5444);var i=n(838),o=[{href:"/about-me/",label:"About Me"},{href:"/services-and-pricing/",label:"Services & Pricing"},{href:"/areas-covered/",label:"Areas Covered"},{href:"/contact-me/",label:"Contact Me"}];function c(e){var t=e.currentPath;return r.createElement("header",null,r.createElement(i.Z,{container:!0,spacing:3,alignItems:"center"},r.createElement(i.Z,{item:!0,xs:12,sm:4,md:4},r.createElement(a.rU,{className:"navigation-module--headerText--3M-Jp",to:"/"},r.createElement("h1",null,"Matty's Mobile Valeting & Detailing"))),o.map((function(e){return r.createElement(i.Z,{item:!0,xs:6,sm:2,md:2,key:e.href},r.createElement(a.rU,{to:e.href,className:(n=e.href,((0,a.dq)(n)===t?"navigation-module--selected--2PbB6":"")+" navigation-module--navLink--1T4mL")},e.label));var n}))))}var s=(0,n(920).Z)((function(e){var t,n;return{footer:{width:"100vw",left:"50%",right:"50%",marginLeft:"-50vw",marginRight:"-50vw",position:"absolute",bottom:0,height:"2.5rem",marginBottom:"-3rem",borderTop:"1px lightgrey solid"},left:(t={},t[e.breakpoints.up("md")]={float:"left"},t[e.breakpoints.down("md")]={textAlign:"center"},t.paddingLeft="1.5rem",t),right:(n={},n[e.breakpoints.up("md")]={float:"right"},n[e.breakpoints.down("md")]={textAlign:"center"},n.paddingRight="1.5rem",n),link:{color:"darkred"}}}));function d(){var e=s(),t=(new Date).getFullYear();return r.createElement("footer",{className:e.footer},r.createElement("p",{className:e.left},"© "+t+" - Matty's Mobile Valeting & Detailing, Scarborough, est. 2004"),r.createElement("p",{className:e.right},"Developed & Designed by ",r.createElement("a",{href:"https://www.adrian-thomas.com",target:"_blank",rel:"noreferrer",className:e.link},"Adrian L Thomas")))}var u=n(2122),f=n(1253),l=n(6156),g=n(5505),p=n(4621),m=n(1664),h=r.forwardRef((function(e,t){var n=e.classes,a=e.className,i=e.component,o=void 0===i?"div":i,c=e.disableGutters,s=void 0!==c&&c,d=e.fixed,l=void 0!==d&&d,p=e.maxWidth,h=void 0===p?"lg":p,v=(0,f.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(o,(0,u.Z)({className:(0,g.Z)(n.root,a,l&&n.fixed,s&&n.disableGutters,!1!==h&&n["maxWidth".concat((0,m.Z)(String(h)))]),ref:t},v))})),v=(0,p.Z)((function(e){return{root:(0,l.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:(0,l.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,l.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,l.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,l.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,l.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(h);function b(e){var t=e.children,n=e.currentPath;return r.createElement(r.Fragment,null,r.createElement(v,{className:"layout-module--container--3nGj0"},r.createElement(c,{currentPath:n}),t,r.createElement(d,null)))}}}]);
//# sourceMappingURL=commons-c13ab2eca1cbfe7957f8.js.map