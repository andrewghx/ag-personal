(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3CBD":function(t,n,i){"use strict";var e=i("q1tI"),l=i.n(e),c=i("vOnD"),o=i("3gsm"),r=l.a.createElement,a=c.c.div.withConfig({displayName:"footer__FooterContainer",componentId:"xruijk-0"})(["text-align:center;padding:2rem 0rem;margin:0px 0.5rem;font-size:0.8rem;align-items:center;justify-content:space-between;@media (min-width:","){display:",";padding-bottom:",";}span{display:inline-block;max-width:100px;}"],(function(t){return t.theme.breakpoints.mdMin}),(function(t){return t.central?"block":"flex"}),(function(t){return t.central?"2rem":"0rem"}));n.a=function(t){var n=t.central;return r(a,{central:n},r("p",null,"\xa9 2020 Andrew Griffiths"),r("span",null,r(o.a,null)))}},"3gsm":function(t,n,i){"use strict";var e=i("q1tI"),l=i.n(e),c=i("vOnD"),o=i("IP2g"),r=i("N19N"),a=l.a.createElement,d=c.c.span.withConfig({displayName:"socialIcons__IconsContainer",componentId:"sc-1yo8gi0-0"})(["display:flex;width:100%;justify-content:space-between;color:",";font-size:",";svg{cursor:pointer;padding:0px 0.3em;}i{cursor:pointer;padding:0px 0.3em;}a{color:",";}"],(function(t){return t.iconColor?t.iconColor:"inherit"}),(function(t){return t.fontSize?t.fontSize:"inherit"}),(function(t){return t.iconColor?t.iconColor:"inherit"}));n.a=function(t){var n=t.exclusions,i=void 0===n?[]:n,e=t.fontSize,l=t.iconColor;return a(d,{fontSize:e,iconColor:l},r.a.socialMedia.map((function(t,n){return-1!==i.indexOf(t.name.toLowerCase())?null:a("a",{href:t.href,key:n},a(o.a,{icon:t.img}))})))}},L7d9:function(t,n,i){"use strict";var e=i("wx14"),l=i("q1tI"),c=i.n(l),o=i("vOnD"),r=i("kefH"),a=i("dXnM");function d(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function s(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function h(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){d(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var y=function(t,n){for(var i={},e=0,l=["xs","sm","md","lg","xl","default","smaller"];e<l.length;e++){var c=l[e];i[c]=n(h({},t,{screenSize:c}))}return i.default=n(h({},t,{screenSize:"xl"})),i},p=function(t){return Object.assign({},{unit:"px"},t)},f={smaller:150,default:350,xs:250,sm:300,md:350,lg:350,xl:350},u={smaller:60,default:60,xs:25,sm:30,md:40,lg:50,xl:60},m={default:10,xs:2,sm:5,md:10,lg:10,xl:10},w=function(t){var n=t.height;return.014*(void 0===n?{}:n)[t.screenSize]},g=function(t){var n=t.characterWidth,i=void 0===n?{}:n,e=t.characterFromLeft,l=void 0===e?{}:e,c=t.screenSize;return i[c]+5*l[c]},x=function(t){var n=t.height,i=void 0===n?{}:n,e=t.titleTextSize,l=void 0===e?{}:e,c=t.screenSize;return i[c]/2.1-.35*l[c]},k=function(t){var n=t.height;return 1.6*(void 0===n?{}:n)[t.screenSize]},b=function(t){var n=t.height;return.042*(void 0===n?{}:n)[t.screenSize]},v=function(t){var n=t.titleTextSize,i=void 0===n?{}:n,e=t.titleTextFromTop,l=void 0===e?{}:e,c=t.screenSize;return.75*i[c]+l[c]},z=function(t){var n=t.titleTextSize;return(void 0===n?{}:n)[t.screenSize]/20},T=y({height:f},(function(t){var n=t.height;return(void 0===n?{}:n)[t.screenSize]/2.25})),O=y({height:f},w),j=y({characterWidth:T,characterFromLeft:m},g),C=y({height:f,titleTextSize:u},x),S=y({height:f},k),_=y({height:f},b),I=y({titleTextSize:u,titleTextFromTop:C},v),M=y({titleTextSize:u},z),F={height:p(f),titleTextSize:p(u),bgTextSize:p({smaller:210,default:370,xs:280,sm:370,md:370,lg:370,xl:370}),laptopFromRight:p({smaller:20,default:20,xs:20,sm:20,md:20,lg:20,xl:20}),characterWidth:p(T),characterFromLeft:p(m),characterFromTop:p(O),titleTextFromLeft:p(j),titleTextFromTop:p(C),laptopWidth:p(S),laptopFromTop:p(_),lineFromTop:p(I),lineHeight:p(M)},L=F.height,N=F.titleTextSize,D=F.bgTextSize,P=F.laptopFromRight,E=F.characterFromLeft,H=F.characterWidth,W=F.characterFromTop,q=F.titleTextFromLeft,B=F.titleTextFromTop,R=F.laptopWidth,G=F.laptopFromTop,J=F.lineFromTop,Q=F.lineHeight,X=o.c.header.withConfig({displayName:"styled-title-elements__TitleContainer",componentId:"sc-1ppjg1g-0"})(["position:relative;background:",";color:",";height:",";overflow:hidden;@media (min-width:","){height:",";}"],(function(t){return t.theme.colors.primary}),(function(t){return t.theme.colors.light}),(function(t){return t.smaller?"".concat(L.smaller).concat(L.unit):"".concat(L.xs).concat(L.unit)}),(function(t){return t.theme.breakpoints.smMin}),(function(t){return t.smaller?"".concat(1.1*(L.smaller||0)).concat(L.unit):"".concat(L.default).concat(L.unit)})),A=Object(o.c)(r.a).withConfig({displayName:"styled-title-elements__TitleLaptop",componentId:"sc-1ppjg1g-1"})(["width:",";display:inline-block;position:absolute;left:",";top:",";@media (min-width:","){left:",";width:",";top:",";}@media (min-width:","){left:",";width:",";top:",";}"],(function(t){return t.smaller?"".concat(R.smaller).concat(R.unit):"".concat(.5*(R.xs||0)).concat(R.unit)}),(function(t){return t.smaller?"calc(50% - ".concat((R.smaller||0)/2).concat(G.unit,")"):"35%"}),(function(t){return t.smaller?"".concat(G.smaller).concat(G.unit):"".concat(4.5*(G.default||0)).concat(G.unit)}),(function(t){return t.theme.breakpoints.smMin}),(function(t){return t.smaller?"calc(100% - ".concat((R.smaller||0)+(P.smaller||0)).concat(P.unit,")"):"25%"}),(function(t){return t.smaller?"".concat(R.smaller).concat(R.unit):"".concat(.9*(R.sm||0)).concat(R.unit)}),(function(t){return t.smaller?"".concat(G.default).concat(G.unit):"".concat(4.5*(G.sm||0)).concat(G.unit)}),(function(t){return t.theme.breakpoints.mdMin}),(function(t){return t.smaller?"calc(100% - ".concat((R.smaller||0)+(P.smaller||0)).concat(P.unit,")"):"calc(100% - ".concat((R.default||0)+(P.default||0)).concat(P.unit,")")}),(function(t){return t.smaller?"".concat(R.smaller).concat(R.unit):"".concat(R.default).concat(R.unit)}),"".concat(G.default).concat(G.unit)),V=Object(o.c)(a.a).withConfig({displayName:"styled-title-elements__TitleMe",componentId:"sc-1ppjg1g-2"})(["width:",";display:",";position:absolute;top:",";left:",";@media (min-width:","){width:",";left:",";}@media (min-width:","){left:",";}"],"".concat(H.xs).concat(H.unit),(function(t){return t.smaller?"none":"inline-block"}),"".concat(W.default).concat(W.unit),"".concat(E.xs).concat(E.unit),(function(t){return t.theme.breakpoints.smMin}),"".concat(H.default).concat(H.unit),"".concat(E.sm).concat(E.unit),(function(t){return t.theme.breakpoints.mdMin}),"".concat(E.default).concat(E.unit)),Z=o.c.h1.withConfig({displayName:"styled-title-elements__TitleText",componentId:"sc-1ppjg1g-3"})(["width:",";text-align:",";font-weight:bolder;margin:0px;padding:0px;color:",";position:absolute;font-size:",";top:",";left:",";text-shadow:1px 2px 4px ",";@media (min-width:","){font-size:",";top:",";left:",";}@media (min-width:","){font-size:",";top:",";left:",";}@media (min-width:","){font-size:",";top:",";left:",";}@media (min-width:","){font-size:",";top:",";left:",";}"],(function(t){return t.smaller?"100%":"initial"}),(function(t){return t.smaller?"center":"initial"}),(function(t){return t.theme.colors.light}),"".concat(N.xs).concat(N.unit),(function(t){return t.smaller?"".concat((L.smaller||0)/2).concat(B.unit):"".concat(B.xs).concat(B.unit)}),(function(t){return t.smaller?"0px":"".concat(1.05*(q.xs||0)).concat(q.unit)}),(function(t){return t.theme.boxShadowColor}),(function(t){return t.theme.breakpoints.smMin}),"".concat(N.sm).concat(N.unit),(function(t){return t.smaller?"".concat(1.1*(L.smaller||0)/2-.75*(N.sm||0)/2).concat(B.unit):"".concat(1.2*(B.sm||0)).concat(B.unit)}),(function(t){return t.smaller?"0px":"".concat(1.2*(q.sm||0)).concat(q.unit)}),(function(t){return t.theme.breakpoints.mdMin}),"".concat(N.md).concat(N.unit),(function(t){return t.smaller?"".concat(1.1*(L.smaller||0)/2-.75*(N.md||0)/2).concat(B.unit):"".concat(B.md).concat(B.unit)}),(function(t){return t.smaller?"0px":"".concat(q.md).concat(q.unit)}),(function(t){return t.theme.breakpoints.lgMin}),"".concat(N.lg).concat(N.unit),(function(t){return t.smaller?"".concat(1.1*(L.smaller||0)/2-.75*(N.lg||0)/2).concat(B.unit):"".concat(B.lg).concat(B.unit)}),(function(t){return t.smaller?"0px":"".concat(1.1*(q.lg||0)).concat(q.unit)}),(function(t){return t.theme.breakpoints.xlMin}),"".concat(N.xl).concat(N.unit),(function(t){return t.smaller?"".concat(1.1*(L.smaller||0)/2-.75*(N.xl||0)/2).concat(B.unit):"".concat(B.xl).concat(B.unit)}),(function(t){return t.smaller?"0px":"".concat(1.2*(q.xl||0)).concat(q.unit)})),K=(o.c.hr.withConfig({displayName:"styled-title-elements__Line",componentId:"sc-1ppjg1g-4"})(["display:none;width:",";background:",";height:",";border:none;position:absolute;top:",";left:",";box-shadow:1px 2px 4px ",";@media (min-width:","){top:",";left:",";}@media (min-width:","){display:block;top:",";left:",";}@media (min-width:","){top:",";left:",";}@media (min-width:","){top:",";left:",";}"],"calc(100% - ".concat(q.default).concat(q.unit,")"),(function(t){return t.theme.colors.light}),"".concat(Q.default).concat(Q.unit),"".concat(J.xs).concat(J.unit),"".concat(q.xs).concat(q.unit),(function(t){return t.theme.boxShadowColor}),(function(t){return t.theme.breakpoints.smMin}),"".concat(J.sm).concat(J.unit),"".concat(q.sm).concat(q.unit),(function(t){return t.theme.breakpoints.mdMin}),"".concat(J.md).concat(J.unit),"".concat(q.md).concat(q.unit),(function(t){return t.theme.breakpoints.lgMin}),"".concat(J.lg).concat(J.unit),"".concat(1.1*(q.lg||0)).concat(q.unit),(function(t){return t.theme.breakpoints.xlMin}),"".concat(J.xl).concat(J.unit),"".concat(1.2*(q.xl||0)).concat(q.unit)),o.c.span.withConfig({displayName:"styled-title-elements__BackgroundText",componentId:"sc-1ppjg1g-5"})(["font-family:'Menlo';font-size:",";margin:0px;padding:0px;color:",";position:absolute;right:",";top:",";opacity:0.1;@media (min-width:","){font-size:",";font-size:",";}"],(function(t){return t.smaller?"".concat(D.smaller).concat(D.unit):"".concat(D.xs).concat(D.unit)}),(function(t){return t.theme.colors.light}),"-".concat(.189*(D.default||0),"px"),"".concat((L.default||0)/2-(D.default||0)/1.8,"px"),(function(t){return t.theme.breakpoints.smMin}),"".concat(D.default).concat(D.unit),(function(t){return t.smaller?"".concat(1.1*(D.smaller||0)).concat(D.unit):"".concat(D.default).concat(D.unit)}))),U=Object.assign({},{backgroundText:"_dev.andrew()"},F),Y=c.a.createElement;n.a=function(t){var n=t.titleText,i=void 0===n?"":n;return Y(X,t,Y(K,t,U.backgroundText),Y(A,Object(e.a)({staticImg:!0},t)),Y(V,Object(e.a)({staticImg:!0},t)),Y(Z,t,i))}},N19N:function(t,n,i){"use strict";var e=i("8tEE"),l={socialMedia:[{img:e.b,name:"Github",href:"https://www.github.com/andrewghx"},{img:e.c,name:"LinkedIn",href:"http://linkedin.com/in/andrew-griffiths-a3a98b1a6"},{img:e.d,name:"Twitter",href:"https://twitter.com/andrewg010"},{img:e.a,name:"Facebook",href:"https://www.facebook.com/griffithsa.development/"}]};n.a=l},dVb6:function(t,n,i){"use strict";var e=i("vOnD").c.div.withConfig({displayName:"container__Container",componentId:"sc-11s7hzv-0"})(["display:block;margin:0px 2%;@media (min-width:","){margin:0px 4%;}@media (min-width:","){margin:0px 7%;}@media (min-width:","){margin:0px 10%;}"],(function(t){return t.theme.breakpoints.mdMin}),(function(t){return t.theme.breakpoints.lgMin}),(function(t){return t.theme.breakpoints.xlMin}));n.a=e},dXnM:function(t,n,i){"use strict";var e=i("wx14"),l=i("q1tI"),c=i.n(l),o=i("vOnD"),r=i("gQLT"),a=i("BZ/I"),d=i("CO5z"),s=c.a.createElement,h=o.c.div.withConfig({displayName:"me__MeDiv",componentId:"lhaysn-0"})(["display:",";width:100%;"],(function(t){return t.inline?"inline":"block"}));n.a=function(t){if(t.staticImg)return s(h,t,s(r.a,{alt:"Cartoon of me",fillContainer:!0,src:"".concat("/ag-personal","img/svg/andrew.svg")}));var n=d.a.replace(/{COLOR}/g,t.color||a.a.colors.primary);return s(h,Object(e.a)({},t,{dangerouslySetInnerHTML:{__html:n}}))}},izRz:function(t,n,i){"use strict";var e=i("vOnD").c.h1.withConfig({displayName:"heading__Heading",componentId:"sc-1y6l3mo-0"})(["color:",";padding-top:1rem;padding-bottom:0.5rem;margin:0;"],(function(t){return t.theme.colors.primary}));n.a=e},kefH:function(t,n,i){"use strict";var e=i("wx14"),l=i("q1tI"),c=i.n(l),o=i("vOnD"),r=i("gQLT"),a=c.a.createElement,d=o.c.div.withConfig({displayName:"laptop__LaptopDiv",componentId:"sc-7bt5wo-0"})(["display:",";width:100%;"],(function(t){return t.inline?"inline":"block"}));n.a=function(t){return t.staticImg?a(d,t,a(r.a,{alt:"Cartoon laptop",fillContainer:!0,src:"".concat("/ag-personal","/img/svg/laptop.svg")})):a(d,Object(e.a)({},t,{dangerouslySetInnerHTML:{__html:'<svg\n  viewBox="0 0 547.49158 317.14124">\n  <g\n    transform="translate(109.70412,36.106331)"\n    id="layer1">\n    <g\n      style="display:inline"\n      transform="matrix(2.3459899,0,0,2.3459899,-1569.6717,-376.93214)"\n      id="g2622">\n      <path\n        id="path2320"\n        d="m 643.29402,272.69486 -0.63357,-119.95744 c 0,0 0.52797,-7.49735 6.44138,-7.28615 5.91338,0.21119 179.51377,0 179.51377,0 0,0 6.33578,-0.3168 6.96937,5.38541 0.63356,5.7022 0.52796,122.17498 0.52796,122.17498 z"\n        style="display:inline;fill:#656565;fill-opacity:1;stroke:#b6b8bb;stroke-width:0.333541px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0.592157" />\n      <path\n        id="path2314"\n        d="m 644.45557,152.10384 c 0,0 0,-6.01899 6.01902,-5.49102 6.01898,0.52798 178.2466,0.21119 178.2466,0.21119 0,0 4.54067,-0.21119 4.75184,5.70221 0.21119,5.91339 0.84478,120.48544 0.84478,120.48544 l -190.07344,-0.21121 z"\n        style="display:inline;fill:#000000;stroke:#000000;stroke-width:0.333541px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />\n      <ellipse\n        ry="0.82134682"\n        rx="0.97068256"\n        cy="149.77065"\n        cx="738.98383"\n        id="path2318"\n        style="display:inline;fill:#6c5353;fill-opacity:1;stroke:#000000;stroke-width:0.333541;stroke-opacity:1" />\n      <path\n        style="fill:#666666;fill-opacity:1;stroke:#000000;stroke-width:0.333541px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n        d="m 622.49152,274.06761 v 3.27347 c 0,0 5.38543,2.32315 9.29249,2.74551 l 213.62143,0.2112 c 0,0 9.29248,-0.95036 9.82046,-2.95668 0.25154,-0.95589 0.31135,-1.91177 0.305,-2.65068 0.0132,-1.26786 -0.62747,-1.43666 -1.81983,-1.43666 l -228.79077,0.0746 c -0.6974,-0.0695 -2.42875,0.10653 -2.42875,0.7392 z"\n        id="path2067"/>\n      <path\n        style="fill:none;stroke:#000000;stroke-width:0.333541px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n        d="m 622.91392,277.34108 231.99518,0.21121"\n        id="path2069"/>\n      <path\n        style="fill:none;stroke:#000000;stroke-width:0.333541px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"\n        d="m 718.58422,273.43402 c 0,0 1.90073,2.42871 4.43503,2.53431 2.53431,0.10564 32.41809,-0.10564 32.41809,-0.10564 0,0 3.69585,-0.5279 4.22385,-2.6399"\n        id="path2071"/>\n      <rect\n        style="opacity:1;fill:#161c28;fill-opacity:1;stroke-width:0.438658"\n        id="rect2096"\n        width="178.67055"\n        height="3.1830668"\n        x="650.60205"\n        y="152.70343" />\n      <ellipse\n        style="opacity:1;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"\n        id="path2106"\n        cx="654.07837"\n        cy="154.33685"\n        rx="0.87953162"\n        ry="0.79576671" />\n      <rect\n        style="opacity:1;fill:#1b1e2b;fill-opacity:1;stroke-width:0.582411"\n        id="rect2115"\n        width="178.58679"\n        height="3.1830668"\n        x="650.60205"\n        y="155.80275" />\n      <ellipse\n        style="opacity:1;fill:#72bd47;fill-opacity:1;stroke-width:0.313069"\n        id="path2132"\n        cx="657.42255"\n        cy="157.44662"\n        rx="0.81670791"\n        ry="0.86906093" />\n      <ellipse\n        ry="0.86906093"\n        rx="0.81670791"\n        cy="157.44662"\n        cx="654.94983"\n        id="ellipse2134"\n        style="opacity:1;fill:#e0c04b;fill-opacity:1;stroke-width:0.313069" />\n      <ellipse\n        style="opacity:1;fill:#ec6559;fill-opacity:1;stroke-width:0.313069"\n        id="ellipse2136"\n        cx="652.48279"\n        cy="157.42569"\n        rx="0.81670791"\n        ry="0.86906093" />\n      <rect\n        style="opacity:1;fill:#1b1e2b;fill-opacity:1;stroke-width:0.264583"\n        id="rect2138"\n        width="35.064598"\n        height="106.85226"\n        x="650.35352"\n        y="158.73837" />\n      <rect\n        style="opacity:1;fill:#292d3e;fill-opacity:1;stroke-width:0.752604"\n        id="rect2140"\n        width="143.71657"\n        height="106.68893"\n        x="685.03998"\n        y="158.91606" />\n      <rect\n        style="opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.264583"\n        id="rect2142"\n        width="10.779994"\n        height="1.5399991"\n        x="663.38422"\n        y="167.62299" />\n      <rect\n        y="170.76222"\n        x="663.38422"\n        height="1.5399991"\n        width="4.7384577"\n        id="rect2142-0"\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.175417" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.124039"\n        id="rect2142-0-3"\n        width="2.3692281"\n        height="1.5399991"\n        x="663.38422"\n        y="173.6053" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.179749"\n        id="rect2142-0-8"\n        width="4.9753804"\n        height="1.5399991"\n        x="664.45044"\n        y="176.44838" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.200006"\n        id="rect2142-0-4"\n        width="6.1599956"\n        height="1.5399991"\n        x="664.45044"\n        y="179.76529" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.190148"\n        id="rect2142-0-9"\n        width="5.567688"\n        height="1.5399991"\n        x="664.45044"\n        y="182.72682" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.175417"\n        id="rect2142-0-35"\n        width="4.7384577"\n        height="1.5399991"\n        x="664.45044"\n        y="185.80684" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.216624"\n        id="rect2142-0-0"\n        width="7.2261486"\n        height="1.5399991"\n        x="664.45044"\n        y="188.76836" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.207556"\n        id="rect2142-0-90"\n        width="6.6338415"\n        height="1.5399991"\n        x="664.45044"\n        y="191.7299" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.175417"\n        id="rect2142-0-02"\n        width="4.7384577"\n        height="1.5399991"\n        x="664.45044"\n        y="194.69144" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.200006"\n        id="rect2142-0-49"\n        width="6.1599956"\n        height="1.5399991"\n        x="664.45044"\n        y="197.88991" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.268909"\n        id="rect2142-0-82"\n        width="11.135378"\n        height="1.5399991"\n        x="664.45044"\n        y="200.85144" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.207556"\n        id="rect2142-0-48"\n        width="6.6338415"\n        height="1.5399991"\n        x="663.38422"\n        y="203.93144" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.286902"\n        id="rect2142-0-022"\n        width="12.675377"\n        height="1.5399991"\n        x="663.38422"\n        y="206.89297" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.241796"\n        id="rect2142-0-36"\n        width="9.0030708"\n        height="1.5399991"\n        x="663.38422"\n        y="209.97298" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.238593"\n        id="rect2142-0-363"\n        width="8.7661476"\n        height="1.5399991"\n        x="663.38422"\n        y="212.93451" />\n      <rect\n        style="opacity:1;fill:#3c4052;fill-opacity:1;stroke-width:0.264583"\n        id="rect2252"\n        width="3.3169215"\n        height="4.0276899"\n        x="652.06775"\n        y="160.39685" />\n      <rect\n        y="167.29074"\n        x="652.06775"\n        height="4.0276899"\n        width="3.3169215"\n        id="rect2252-4"\n        style="display:inline;opacity:1;fill:#3c4052;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="display:inline;opacity:1;fill:#3c4052;fill-opacity:1;stroke-width:0.264583"\n        id="rect2269"\n        width="3.3169215"\n        height="4.0276899"\n        x="652.06775"\n        y="174.16151" />\n      <rect\n        y="181.50612"\n        x="652.06775"\n        height="4.0276899"\n        width="3.3169215"\n        id="rect2271"\n        style="display:inline;opacity:1;fill:#3c4052;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#b3b3b3;fill-opacity:1;stroke-width:0.264583"\n        id="rect2273"\n        width="0.35538444"\n        height="7.1076884"\n        x="650.47198"\n        y="158.97531" />\n      <rect\n        y="164.48376"\n        x="659.06049"\n        height="1.5399991"\n        width="12.083069"\n        id="rect2142-1"\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.280118" />\n      <rect\n        style="opacity:1;fill:#65744b;fill-opacity:1;stroke-width:0.264583"\n        id="rect2290"\n        width="2.0941229"\n        height="1.4240035"\n        x="660.82135"\n        y="167.61359" />\n      <rect\n        y="176.57643"\n        x="661.7428"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2292"\n        style="opacity:1;fill:#336fa4;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#336fa4;fill-opacity:1;stroke-width:0.264583"\n        id="rect2294"\n        width="2.0941229"\n        height="1.4240035"\n        x="661.7428"\n        y="179.59196" />\n      <rect\n        y="170.71289"\n        x="660.82135"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2296"\n        style="opacity:1;fill:#336fa4;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        y="182.69127"\n        x="661.7428"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2298"\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583"\n        id="rect2300"\n        width="2.0941229"\n        height="1.4240035"\n        x="661.7428"\n        y="194.75342" />\n      <rect\n        y="197.85272"\n        x="661.7428"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2302"\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583"\n        id="rect2304"\n        width="2.0941229"\n        height="1.4240035"\n        x="661.7428"\n        y="200.7845" />\n      <rect\n        y="191.65413"\n        x="661.7428"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2306"\n        style="opacity:1;fill:#65744b;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#65744b;fill-opacity:1;stroke-width:0.264583"\n        id="rect2308"\n        width="2.0941229"\n        height="1.4240035"\n        x="661.7428"\n        y="188.6386" />\n      <rect\n        y="185.79059"\n        x="661.7428"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2310"\n        style="opacity:1;fill:#943820;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#943820;fill-opacity:1;stroke-width:0.264583"\n        id="rect2312"\n        width="2.0941229"\n        height="1.4240035"\n        x="660.73767"\n        y="203.96758" />\n      <rect\n        y="206.89934"\n        x="660.73767"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2314"\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        y="209.83112"\n        x="660.73767"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2316"\n        style="opacity:1;fill:#65744b;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        y="213.01416"\n        x="660.73767"\n        height="1.4240035"\n        width="2.0941229"\n        id="rect2318"\n        style="opacity:1;fill:#336fa4;fill-opacity:1;stroke-width:0.264583" />\n      <rect\n        style="opacity:1;fill:#336fa4;fill-opacity:1;stroke-width:0.264583"\n        id="rect2392"\n        width="2.0941229"\n        height="1.4240035"\n        x="660.82135"\n        y="173.72842" />\n      <rect\n        style="display:inline;opacity:1;fill:#676c83;fill-opacity:1;stroke-width:0.24338"\n        id="rect2142-1-2"\n        width="9.1215305"\n        height="1.5399991"\n        x="689.80115"\n        y="160.81146" />\n      <rect\n        style="opacity:1;fill:#967954;fill-opacity:1;stroke-width:0.264583"\n        id="rect2409"\n        width="2.0941229"\n        height="1.4240035"\n        x="686.73816"\n        y="160.92746" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.203815"\n        id="rect2142-1-23"\n        width="6.3969169"\n        height="1.5399991"\n        x="694.77655"\n        y="167.4453" />\n      <rect\n        y="170.62025"\n        x="694.77655"\n        height="1.5399991"\n        width="6.3969169"\n        id="rect2426"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.203815" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.203815"\n        id="rect2428"\n        width="6.3969169"\n        height="1.5399991"\n        x="694.77655"\n        y="173.79521" />\n      <rect\n        y="176.97017"\n        x="694.77655"\n        height="1.5399991"\n        width="6.3969169"\n        id="rect2430"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.203815" />\n      <rect\n        y="167.4453"\n        x="702.71417"\n        height="1.5399991"\n        width="6.3969169"\n        id="rect2432"\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.203815" />\n      <rect\n        y="167.4453"\n        x="710.65179"\n        height="1.5399991"\n        width="5.0938406"\n        id="rect2434"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875" />\n      <rect\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.181875"\n        id="rect2436"\n        width="5.0938406"\n        height="1.5399991"\n        x="717.53107"\n        y="167.4453" />\n      <rect\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.240198"\n        id="rect2438"\n        width="8.8846083"\n        height="1.5399991"\n        x="702.71417"\n        y="170.62025" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875"\n        id="rect2440"\n        width="5.0938406"\n        height="1.5399991"\n        x="713.82684"\n        y="170.62025" />\n      <rect\n        y="170.62025"\n        x="721.23529"\n        height="1.5399991"\n        width="9.9507608"\n        id="rect2442"\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.254202" />\n      <rect\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.254202"\n        id="rect2446"\n        width="9.9507608"\n        height="1.5399991"\n        x="702.71417"\n        y="173.26605" />\n      <rect\n        y="176.97017"\n        x="710.12262"\n        height="1.5399991"\n        width="5.0938406"\n        id="rect2448"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875" />\n      <rect\n        y="176.97017"\n        x="702.71417"\n        height="1.5399991"\n        width="5.4492254"\n        id="rect2450"\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.188112" />\n      <rect\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.223612"\n        id="rect2452"\n        width="7.6999927"\n        height="1.5399991"\n        x="717.00189"\n        y="176.97017" />\n      <rect\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.293526"\n        id="rect2454"\n        width="13.267683"\n        height="1.5399991"\n        x="694.89569"\n        y="181.7326" />\n      <rect\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.505368"\n        id="rect2456"\n        width="39.329208"\n        height="1.5399991"\n        x="709.17493"\n        y="181.7326" />\n      <rect\n        y="184.90756"\n        x="697.00391"\n        height="1.5399991"\n        width="16.939989"\n        id="rect2458"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.33167" />\n      <rect\n        y="242.49504"\n        x="697.11072"\n        height="1.5399991"\n        width="7.2261477"\n        id="rect2460"\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.216623" />\n      <rect\n        y="190.72832"\n        x="710.60498"\n        height="1.5399991"\n        width="14.096912"\n        id="rect2462"\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.30256" />\n      <rect\n        y="193.4603"\n        x="703.25183"\n        height="1.5399991"\n        width="39.329208"\n        id="rect2464"\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.505368" />\n      <rect\n        y="245.72466"\n        x="716.11163"\n        height="1.5399991"\n        width="53.07074"\n        id="rect2466"\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.587052" />\n      <rect\n        y="196.27939"\n        x="719.84497"\n        height="1.5399991"\n        width="7.6999927"\n        id="rect2468"\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.223612" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.630642"\n        id="rect2470"\n        width="61.244579"\n        height="1.5399991"\n        x="728.75159"\n        y="196.39833" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875"\n        id="rect2472"\n        width="5.0938406"\n        height="1.5399991"\n        x="704.91034"\n        y="199.35939" />\n      <rect\n        y="199.35939"\n        x="704.91034"\n        height="1.5399991"\n        width="5.0938406"\n        id="rect2474"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.181875"\n        id="rect2476"\n        width="5.0938406"\n        height="1.5399991"\n        x="704.91034"\n        y="204.92708" />\n      <rect\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.293526"\n        id="rect2478"\n        width="13.267683"\n        height="1.5399991"\n        x="707.33417"\n        y="201.98952" />\n      <rect\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.477181"\n        id="rect2480"\n        width="35.064594"\n        height="1.5399991"\n        x="721.90491"\n        y="201.96555" />\n      <rect\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.216623"\n        id="rect2482"\n        width="7.2261477"\n        height="1.5399991"\n        x="704.14697"\n        y="207.98389" />\n      <rect\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.505368"\n        id="rect2484"\n        width="39.329208"\n        height="1.5399991"\n        x="707.27252"\n        y="210.71587" />\n      <rect\n        y="213.56387"\n        x="707.44006"\n        height="1.5399991"\n        width="21.738577"\n        id="rect2486"\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.375721" />\n      <rect\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.420794"\n        id="rect2488"\n        width="27.267061"\n        height="1.5399991"\n        x="707.44006"\n        y="216.57941" />\n      <rect\n        y="219.59494"\n        x="707.44006"\n        height="1.5399991"\n        width="82.923035"\n        id="rect2490"\n        style="display:inline;opacity:1;fill:#685583;fill-opacity:1;stroke-width:0.733817" />\n      <rect\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.138085"\n        id="rect2492"\n        width="2.9362779"\n        height="1.5399991"\n        x="704.55701"\n        y="222.20322" />\n      <rect\n        y="224.91713"\n        x="706.82721"\n        height="1.5399991"\n        width="16.971373"\n        id="rect2494"\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.331976" />\n      <rect\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.493039"\n        id="rect2496"\n        width="37.433826"\n        height="1.5399991"\n        x="730.35168"\n        y="213.55893" />\n      <rect\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.216623"\n        id="rect2498"\n        width="7.2261477"\n        height="1.5399991"\n        x="704.98462"\n        y="227.91994" />\n      <rect\n        y="230.60042"\n        x="702.97424"\n        height="1.5399991"\n        width="15.937698"\n        id="rect2500"\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.32171" />\n      <rect\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.151629"\n        id="rect2502"\n        width="3.5404911"\n        height="1.5399991"\n        x="700.79633"\n        y="233.61595" />\n      <rect\n        y="201.96555"\n        x="721.90491"\n        height="1.5399991"\n        width="54.966122"\n        id="rect2504"\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.597443" />\n      <rect\n        style="display:inline;opacity:1;fill:#595e75;fill-opacity:1;stroke-width:0.477181"\n        id="rect2506"\n        width="35.064594"\n        height="1.5399991"\n        x="696.94293"\n        y="239.32469" />\n      <rect\n        style="display:inline;opacity:1;fill:#6b7d5f;fill-opacity:1;stroke-width:0.223612"\n        id="rect2508"\n        width="7.6999927"\n        height="1.5399991"\n        x="733.5824"\n        y="239.33455" />\n      <rect\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.33167"\n        id="rect2510"\n        width="16.939989"\n        height="1.5399991"\n        x="697.00391"\n        y="184.90756" />\n      <rect\n        y="245.72089"\n        x="697.17145"\n        height="1.5399991"\n        width="16.939989"\n        id="rect2512"\n        style="display:inline;opacity:1;fill:#4c6e85;fill-opacity:1;stroke-width:0.33167" />\n      <rect\n        y="201.98952"\n        x="707.33417"\n        height="1.5399991"\n        width="13.267683"\n        id="rect2514"\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.293526" />\n      <rect\n        style="display:inline;opacity:1;fill:#7c6a4f;fill-opacity:1;stroke-width:0.293526"\n        id="rect2516"\n        width="13.267683"\n        height="1.5399991"\n        x="705.55725"\n        y="196.30336" />\n      <rect\n        style="display:inline;opacity:1;fill:#784754;fill-opacity:1;stroke-width:0.32171"\n        id="rect2518"\n        width="15.937698"\n        height="1.5399991"\n        x="702.97424"\n        y="230.60042" />\n    </g>\n  </g>\n</svg>\n'}}))}}}]);