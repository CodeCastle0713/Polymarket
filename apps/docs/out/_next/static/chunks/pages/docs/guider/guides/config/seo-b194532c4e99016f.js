(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9726],{390:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guider/guides/config/seo",function(){return n(7076)}])},7076:function(e,s,n){"use strict";n.r(s);var l=n(7458),a=n(8838);function t(e){let s={a:"a",code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,a.ah)(),...e.components},{Tip:n,Warning:t}=s;return n||r("Tip",!0),t||r("Warning",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"seo-meta-tags",children:"SEO & Meta tags"}),"\n",(0,l.jsxs)(s.p,{children:["SEO is important to make your docs discoverable by search engine. By default, Guider does not provide much metadata. However it does make it very easy to add them through ",(0,l.jsx)(s.a,{href:"https://github.com/garmeeh/next-seo",children:"Next SEO"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"the-basics",children:"The basics"}),"\n",(0,l.jsxs)(s.p,{children:["Page titles and descriptions can be set by creating a ",(0,l.jsx)(s.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"frontmatter"})," section at the top of your MDX file."]}),"\n",(0,l.jsxs)(s.figure,{"data-rehype-pretty-code-figure":"",children:[(0,l.jsx)(s.figcaption,{"data-rehype-pretty-code-title":"","data-language":"mdx","data-theme":"github-dark-dimmed",children:"page.mdx"}),(0,l.jsx)(s.pre,{tabIndex:"0","data-language":"mdx","data-theme":"github-dark-dimmed",children:(0,l.jsxs)(s.code,{"data-language":"mdx","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#6CB6FF",fontWeight:"bold"},children:"---"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:'title: "My title"'})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:'description: "My page description"'})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#6CB6FF",fontWeight:"bold"},children:"---"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#6CB6FF",fontWeight:"bold"},children:"# A title"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"Some text"})})]})})]}),"\n",(0,l.jsx)(n,{children:(0,l.jsx)(s.p,{children:"Both title and description are optional. If there are not specified, the title will be the first heading on the page and the description will be the first paragraph on the page."})}),"\n",(0,l.jsx)(s.h2,{id:"adding-custom-meta-tags",children:"Adding custom meta tags"}),"\n",(0,l.jsxs)(s.p,{children:["If you want to add more meta tags, you can do so by passing an object to the site options. You can check all the different options on the ",(0,l.jsx)(s.a,{href:"https://github.com/garmeeh/next-seo?tab=readme-ov-file#nextseo-options",children:"Next SEO Options"})," page."]}),"\n",(0,l.jsx)(s.figure,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(s.pre,{tabIndex:"0","data-language":"ts","data-theme":"github-dark-dimmed",children:(0,l.jsxs)(s.code,{"data-language":"ts","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#DCBDFB"},children:"site"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'my-site'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:", {"})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  meta: {"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    titleTemplate: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:'"%s - Guider"'}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    openGraph: {"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      type: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'website'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      url: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'https://www.example.com/page'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      title: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'My site'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      description: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'My description'"})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    }"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"})"})})]})})}),"\n",(0,l.jsxs)(s.p,{children:["In the case that you need more flexibility in meta tags or need to add ",(0,l.jsx)(s.a,{href:"https://github.com/garmeeh/next-seo?tab=readme-ov-file#json-ld",children:"JSON-LD"}),", you can provide a function that returns a component, which can make use of the ",(0,l.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(s.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{children:"useGuiderPage()"})})})})," hook.\r\nYou will need to install ",(0,l.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(s.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{children:"next-seo"})})})})," into your project to use this method."]}),"\n",(0,l.jsx)(s.p,{children:"As the only parameter, default meta tags are passed into your function."}),"\n",(0,l.jsx)(s.figure,{"data-rehype-pretty-code-figure":"",children:(0,l.jsx)(s.pre,{tabIndex:"0","data-language":"tsx","data-theme":"github-dark-dimmed",children:(0,l.jsxs)(s.code,{"data-language":"tsx","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:" { BreadcrumbJsonLd, NextSeo } "}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:" 'next-seo'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:" { useGuiderPage } "}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:" '@neato/guider/client'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:";"})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:" "}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#DCBDFB"},children:"site"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'my-site'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:", {"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#DCBDFB"},children:"  meta"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#F69D50"},children:"pageMeta"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"    const"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#6CB6FF"},children:"site"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,l.jsx)(s.span,{style:{color:"#DCBDFB"},children:" useGuiderPage"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"();"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"    return"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:" ("})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      <>"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"        <"}),(0,l.jsx)(s.span,{style:{color:"#8DDB8C"},children:"NextSeo"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"          {..."}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"pageMeta"}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#768390"},children:" // Add default guider meta tags"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#6CB6FF"},children:"          titleTemplate"}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"={"}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"`%s - ${"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"site"}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"id"}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"}`"}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"}"})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"        />"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"        <"}),(0,l.jsx)(s.span,{style:{color:"#8DDB8C"},children:"BreadcrumbJsonLd"})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#6CB6FF"},children:"          itemListElements"}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"={"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"["})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"            {"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"              position: "}),(0,l.jsx)(s.span,{style:{color:"#6CB6FF"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"              name: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'Docs'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"              item: "}),(0,l.jsx)(s.span,{style:{color:"#96D0FF"},children:"'https://example.com/docs'"}),(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:","})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"            }"})}),"\n",(0,l.jsxs)(s.span,{"data-line":"",children:[(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"          ]"}),(0,l.jsx)(s.span,{style:{color:"#F47067"},children:"}"})]}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"        />"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      </>"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    );"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  }"})}),"\n",(0,l.jsx)(s.span,{"data-line":"",children:(0,l.jsx)(s.span,{style:{color:"#ADBAC7"},children:"});"})})]})})}),"\n",(0,l.jsx)(t,{children:(0,l.jsx)(s.p,{children:"When you're using a function to render the meta tags, the default meta tags aren't added. You will need to add them yourself as shown in the example."})})]})}function r(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=(0,a.wm)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}={...(0,a.ah)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{meta:{},headings:[{depth:1,value:"SEO & Meta tags",data:{hProperties:{id:"seo-meta-tags"},id:"seo-meta-tags"}},{depth:2,value:"The basics",data:{hProperties:{id:"the-basics"},id:"the-basics"}},{depth:2,value:"Adding custom meta tags",data:{hProperties:{id:"adding-custom-meta-tags"},id:"adding-custom-meta-tags"}}],excerpt:"SEO is important to make your docs discoverable by search engine. By default, Guider does not provide much metadata. However it does make..."}})}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=390)}),_N_E=e.O()}]);