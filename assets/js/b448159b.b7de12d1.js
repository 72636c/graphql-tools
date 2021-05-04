(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(295)),c={id:"documents-loading",title:"Loading GraphQL operation documents from different sources",sidebar_label:"Documents loading"},l={unversionedId:"documents-loading",id:"documents-loading",isDocsHomePage:!1,title:"Loading GraphQL operation documents from different sources",description:"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment).",source:"@site/docs/documents-loading.md",slug:"/documents-loading",permalink:"/docs/documents-loading",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/documents-loading.md",version:"current",sidebar_label:"Documents loading",sidebar:"someSidebar",previous:{title:"Loading GraphQL Schemas from different sources",permalink:"/docs/schema-loading"},next:{title:"Extracting GraphQL definitions from code files",permalink:"/docs/graphql-tag-pluck"}},i=[{value:"Usage",id:"usage",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Similar to schema loading - but meant to use for GraphQL documents (query/mutation/subscription/fragment)."),Object(a.b)("p",null,"Any input provided as a source will be recognized by utils automatically."),Object(a.b)("p",null,"It also extracts usages of ",Object(a.b)("inlineCode",{parentName:"p"},"gql")," from code files using ",Object(a.b)("a",{parentName:"p",href:"/docs/graphql-tag-pluck"},Object(a.b)("inlineCode",{parentName:"a"},"@graphql-tools/graphql-tag-pluck")),"."),Object(a.b)("p",null,"For notes on typescript, refer to ",Object(a.b)("a",{parentName:"p",href:"/docs/loaders"},"loaders")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const { loadDocuments } = require('@graphql-tools/load');\nconst { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');\nconst { CodeFileLoader } = require('@graphql-tools/code-file-loader');\n\nconst document1 = loadDocuments('query { f }'); // load from string\n\nconst document2 = loadDocuments('./users.query.graphql', {  // load from a single file\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document3 = loadDocuments('./src/**/*.graphql', { // load from multiple files using glob\n    loaders: [\n        new GraphQLFileLoader()\n    ]\n});\n\nconst document4 = loadDocuments('./src/my-component.ts', {  // load from code file\n    loaders: [\n        new CodeFileLoader()\n    ]\n});\n\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"loadDocuments")," returns an array of document sources. Each source object has the following structure:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"interface DocumentSource {\n  document: DocumentNode; // Object representation of GraphQL Content\n  rawSDL: string; // SDL in text\n  location: string; // Way to access to that source\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"loadDocuments")," takes in additional configuration via the ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object (the second argument). There are some defaults to be aware of - to learn more, see ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/load/#loaddocuments"},"the full API documentation"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can learn more about ",Object(a.b)("a",{parentName:"p",href:"/docs/loaders"},"loaders")," to load documents from different sources.")))}u.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);