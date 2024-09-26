(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{2458:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guider/writing/components/fields",function(){return l(9456)}])},9456:function(e,s,l){"use strict";l.r(s);var n=l(7458),i=l(8838);function r(e){let s={code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",p:"p",pre:"pre",span:"span",...(0,i.ah)(),...e.components},{Field:l}=s;return l||t("Field",!0),l.Properties||t("Field.Properties",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(s.p,{children:"Fields are great for when you have to display any type structure.\r\nThey can work for API reference, API fields, query paramaters, component props, and much more."}),"\n",(0,n.jsx)(s.h2,{id:"general-usage",children:"General usage"}),"\n",(0,n.jsxs)(s.p,{children:["Make a field by just making a ",(0,n.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,n.jsx)(s.code,{"data-language":"tsx","data-theme":"github-dark-dimmed",children:(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:" />"})]})})})," component. You will need to specify its type and it's name, and optionally also if it's a required field."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also use the ",(0,n.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,n.jsx)(s.code,{"data-language":"tsx","data-theme":"github-dark-dimmed",children:(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:" />"})]})})})," component to group properties on a nested field. See the example below:"]}),"\n",(0,n.jsx)(s.figure,{"data-rehype-pretty-code-figure":"",children:(0,n.jsx)(s.pre,{tabIndex:"0","data-language":"tsx","data-theme":"github-dark-dimmed",children:(0,n.jsxs)(s.code,{"data-language":"tsx","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" title"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"example.field"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" type"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"string"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" required"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  This is an example field."})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" title"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"example.nestedField"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" type"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"object"'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  This is an example field with nested properties"})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" title"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"example.nestedField.field"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" type"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"string"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" required"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      This is an example nested field."})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    </"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" title"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"example.nestedField.second"'}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" type"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"number"'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"      This is a second example nested field."})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"    </"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  </"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]})]})})}),"\n",(0,n.jsx)(l,{title:"example.field",type:"string",required:!0,children:(0,n.jsx)(s.p,{children:"This is an example field."})}),"\n",(0,n.jsxs)(l,{title:"example.nestedField",type:"object",children:[(0,n.jsx)(s.p,{children:"This is an example field with nested properties"}),(0,n.jsxs)(l.Properties,{children:[(0,n.jsx)(l,{title:"example.nestedField.field",type:"string",required:!0,children:(0,n.jsx)(s.p,{children:"This is an example nested field."})}),(0,n.jsx)(l,{title:"example.nestedField.second",type:"number",children:(0,n.jsx)(s.p,{children:"This is a second example nested field."})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"component-api-field",children:["Component API - ",(0,n.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,n.jsx)(s.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{children:"<Field />"})})})})]}),"\n",(0,n.jsx)(s.p,{children:"A field with a type display, great for documenting types or structures."}),"\n",(0,n.jsx)(l,{title:"title",type:"string",children:(0,n.jsx)(s.p,{children:"The title of the field."})}),"\n",(0,n.jsx)(l,{title:"type",type:"string",children:(0,n.jsx)(s.p,{children:"The type of the field."})}),"\n",(0,n.jsx)(l,{title:"required",type:"boolean",children:(0,n.jsx)(s.p,{children:"Mark this field as required."})}),"\n",(0,n.jsx)(l,{title:"children",type:"any",children:(0,n.jsx)(s.p,{children:"The description of the field, you can use markdown freely in here."})}),"\n",(0,n.jsxs)(s.h2,{id:"component-api-field-properties",children:["Component API - ",(0,n.jsx)(s.span,{"data-rehype-pretty-code-figure":"",children:(0,n.jsx)(s.code,{"data-language":"txt","data-theme":"github-dark-dimmed",children:(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{children:"<Field.Properties />"})})})})]}),"\n",(0,n.jsx)(s.p,{children:"A collapsable group of fields, good for showcasing nested objects."}),"\n",(0,n.jsx)(l,{title:"children",type:"any",children:(0,n.jsx)(s.p,{children:"The contents of the collapsable section, it's recommended to only put field components in here."})}),"\n",(0,n.jsx)(l,{title:"defaultOpen",type:"boolean",children:(0,n.jsx)(s.p,{children:"Boolean indicating if it should be opened by default."})}),"\n",(0,n.jsxs)(l,{title:"text",type:"string | { show: string, hide: string }",children:[(0,n.jsx)(s.p,{children:"The text that shows when you need to show or hide the contents of the collapsable section."}),(0,n.jsxs)(s.figure,{"data-rehype-pretty-code-figure":"",children:[(0,n.jsx)(s.figcaption,{"data-rehype-pretty-code-title":"","data-language":"tsx","data-theme":"github-dark-dimmed",children:"example"}),(0,n.jsx)(s.pre,{tabIndex:"0","data-language":"tsx","data-theme":"github-dark-dimmed",children:(0,n.jsxs)(s.code,{"data-language":"tsx","data-theme":"github-dark-dimmed",style:{display:"grid"},children:[(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"#768390"},children:'/* will show up with "Toggle properties" for both when it needs to be hidden or when it needs to be shown */'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" text"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"Toggle properties"'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  Contents"})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:" "}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"#768390"},children:'/* will show up with "Show object" for when it needs to be shown, and "Hide object" when it needs to be hidden */'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#6CB6FF"},children:" text"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"={"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"{ show: "}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"Show object"'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:", hide: "}),(0,n.jsx)(s.span,{style:{color:"#96D0FF"},children:'"Hide object"'}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:" }"}),(0,n.jsx)(s.span,{style:{color:"#F47067"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]}),"\n",(0,n.jsx)(s.span,{"data-line":"",children:(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"  Contents"})}),"\n",(0,n.jsxs)(s.span,{"data-line":"",children:[(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#8DDB8C"},children:"Field.Properties"}),(0,n.jsx)(s.span,{style:{color:"#ADBAC7"},children:">"})]})]})})]})]})]})}function t(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=(0,i.wm)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}={...(0,i.ah)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)},pageOpts:{meta:{},headings:[{depth:1,value:"Fields",data:{hProperties:{id:"fields"},id:"fields"}},{depth:2,value:"General usage",data:{hProperties:{id:"general-usage"},id:"general-usage"}},{depth:2,value:"Component API - <Field />",data:{hProperties:{id:"component-api-field"},id:"component-api-field"}},{depth:2,value:"Component API - <Field.Properties />",data:{hProperties:{id:"component-api-field-properties"},id:"component-api-field-properties"}}],excerpt:"Fields are great for when you have to display any type structure.\r\nThey can work for API reference, API fields, query paramaters, component..."}})}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=2458)}),_N_E=e.O()}]);