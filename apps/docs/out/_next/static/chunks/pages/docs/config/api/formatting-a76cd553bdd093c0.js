(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8405],{3931:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/config/api/formatting",function(){return a(5845)}])},5845:function(e,n,a){"use strict";a.r(n);var s=a(7458),t=a(8838);function r(e){let n={code:"code",figure:"figure",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,t.ah)(),...e.components},{CodeGroup:a,Note:r}=n;return a||i("CodeGroup",!0),a.Code||i("CodeGroup.Code",!0),r||i("Note",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"formatting",children:"Formatting"}),"\n",(0,s.jsx)(n.p,{children:"Discover the ways to make your configuration exactly how you want to!"}),"\n",(0,s.jsx)(n.h2,{id:"set-naming-convention-convention",children:(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:".setNamingConvention(convention)"})})})})}),"\n",(0,s.jsxs)(n.p,{children:["With this formatting option, you can setup a naming convention for all of your configuration items. By default ",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"camelCase"})})})})," is used."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"convention"})})})})," parameter can be either one of our presets (see code snippet below), or a function (",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"(segment: string) => string"})})})}),") that defines your own naming convention.\r\nKeys are passed in as ",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"SCREAMING_SNAKE_CASE"})})})})," with double underscores to indicate a nested level (",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"FOO__BAR__BAZ"})})})}),")."]}),"\n",(0,s.jsx)(r,{children:(0,s.jsx)(n.p,{children:"Configured naming conventions get overwritten if you use a schema."})}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)(a.Code,{title:"config.ts",children:(0,s.jsx)(n.figure,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.pre,{tabIndex:"0","data-language":"ts","data-theme":"github-dark-dimmed",children:(0,s.jsxs)(n.code,{"data-language":"ts","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"import"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:" { createConfigLoader, pascalCaseNaming, camelCaseNaming, screamingSnakeCaseNaming, snakeCaseNaming } "}),(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"from"}),(0,s.jsx)(n.span,{style:{color:"#96D0FF"},children:" 'neat-config'"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:";"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"import"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:" { z } "}),(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"from"}),(0,s.jsx)(n.span,{style:{color:"#96D0FF"},children:" 'zod'"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:";"})]}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:" "}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"process.env "}),(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"="}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:" {"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"  FOO_BAR___BAR__BAZ: "}),(0,s.jsx)(n.span,{style:{color:"#96D0FF"},children:'"hello world"'})]}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"}"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:" "}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#768390"},children:"// presets:"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#768390"},children:"//  - camelCaseNaming (default)"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#768390"},children:"//  - pascalCaseNaming"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#768390"},children:"//  - screamingSnakeCaseNaming"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#768390"},children:"//  - snakeCaseNaming"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:" "}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F47067"},children:"export"}),(0,s.jsx)(n.span,{style:{color:"#F47067"},children:" const"}),(0,s.jsx)(n.span,{style:{color:"#6CB6FF"},children:" config"}),(0,s.jsx)(n.span,{style:{color:"#F47067"},children:" ="}),(0,s.jsx)(n.span,{style:{color:"#DCBDFB"},children:" createConfigLoader"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"()"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"  ."}),(0,s.jsx)(n.span,{style:{color:"#DCBDFB"},children:"addFromEnvironment"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"()"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"  ."}),(0,s.jsx)(n.span,{style:{color:"#DCBDFB"},children:"setNamingConvention"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"(pascalCaseNaming)"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"  ."}),(0,s.jsx)(n.span,{style:{color:"#DCBDFB"},children:"load"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"();"})]})]})})})}),(0,s.jsx)(a.Code,{title:"result",children:(0,s.jsx)(n.figure,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.pre,{tabIndex:"0","data-language":"js","data-theme":"github-dark-dimmed",children:(0,s.jsxs)(n.code,{"data-language":"js","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"{"})}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F69D50"},children:"  FooBar"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:": {"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F69D50"},children:"    Bar"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:": {"})]}),"\n",(0,s.jsxs)(n.span,{"data-line":"",children:[(0,s.jsx)(n.span,{style:{color:"#F69D50"},children:"      Baz"}),(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:": "}),(0,s.jsx)(n.span,{style:{color:"#96D0FF"},children:'"hello"'})]}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"    }"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"  }"})}),"\n",(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{style:{color:"#ADBAC7"},children:"}"})})]})})})})]}),"\n",(0,s.jsx)(n.h2,{id:"unfreeze",children:(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:".unfreeze()"})})})})}),"\n",(0,s.jsxs)(n.p,{children:["by default, Your configuration is deep frozen using recursive ",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"Object.freeze()"})})})}),".\r\nThis means that you will get runtime errors when you try to assign anything, in typescript you will get a readonly type so you get compiler errors when trying to assign."]}),"\n",(0,s.jsxs)(n.p,{children:["If you use the ",(0,s.jsx)(n.span,{"data-rehype-pretty-code-figure":"",children:(0,s.jsx)(n.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,s.jsx)(n.span,{"data-line":"",children:(0,s.jsx)(n.span,{children:"unfreeze()"})})})})," option, your output configuration will not be frozen as described above."]})]})}function i(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=(0,t.wm)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)},pageOpts:{meta:{},headings:[{depth:1,value:"Formatting",data:{hProperties:{id:"formatting"},id:"formatting"}},{depth:2,value:".setNamingConvention(convention)",data:{hProperties:{id:"set-naming-convention-convention"},id:"set-naming-convention-convention"}},{depth:2,value:".unfreeze()",data:{hProperties:{id:"unfreeze"},id:"unfreeze"}}],excerpt:"Discover the ways to make your configuration exactly how you want to!"}})}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=3931)}),_N_E=e.O()}]);