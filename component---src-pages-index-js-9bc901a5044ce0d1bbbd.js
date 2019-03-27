(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,a){"use strict";a.r(t);var n=a(173),r=a(0),i=a.n(r),l=a(147),s=a(158),o=a(160);a(174);t.default=function(){return i.a.createElement(l.StaticQuery,{query:"345384306",render:function(e){return i.a.createElement(s.a,null,i.a.createElement("div",null,i.a.createElement("div",{className:"intro page"},i.a.createElement("img",{alt:"København konferanse logo",src:"./static/kobenhavn.png"}),i.a.createElement("h1",null,e.site.siteMetadata.data.title),i.a.createElement("div",null,i.a.createElement("p",{className:"white"},"Tid: ",e.site.siteMetadata.data.event.date),i.a.createElement("p",{className:"white"},"Sted: ",e.site.siteMetadata.data.event.city,","," ",e.site.siteMetadata.data.event.country)),i.a.createElement("div",{className:"button-group"},i.a.createElement(l.Link,{className:"button white hidden",to:"/speakers/"},"Talere"),i.a.createElement(l.Link,{className:"button white",to:"/schedule/"},"Skjema")),i.a.createElement("a",{href:"#info",className:"arrow"},i.a.createElement(o.a,null))),i.a.createElement("div",{id:"info",className:"info"},i.a.createElement("h2",null,"Informasjon"),i.a.createElement("p",null,"Knowit Stavanger arrangerer fagseminar årlig. Det er de ansatte selv som lager programmet. Høsten 2019 vil den bli avholdt 4. april - 7. april 2019 i Købenavn i Danmark."),i.a.createElement("p",null,"Tidligere har vi besøkt bl.a. Berlin, Lofoten, Praha, Kiel og Madrid."))))},data:n})}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(146),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(148),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{title:"Fagseminar høst 2018",keywords:["knowit","fagseminar","stavanger","madrid","2018"]}}}}}},150:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(52),o=a(1),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{event:{city:"Copenhagen",address:"Bryggernes Plads",hotel:"Hotel Ottilia",gmapsUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.2700000940886!2d12.530804516569166!3d55.6669048805304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539a71c6bdb1%3A0x469556aeafdd4bc2!2sHotel+Ottilia!5e0!3m2!1sen!2sno!4v1553703436805"}}}}}}},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(159),c=a.n(o),d=a(147),u=(a(151),a(155)),m=(a(156),function(){return i.a.createElement(d.StaticQuery,{query:"816841966",render:function(e){return i.a.createElement("div",{className:"google-maps-wrapper"},i.a.createElement("div",{className:"google-maps-blocker"}),i.a.createElement("div",{className:"google-maps-content"},i.a.createElement("h1",null,"Lokasjon"),i.a.createElement("h3",null,e.site.siteMetadata.data.event.hotel),i.a.createElement("h3",null,e.site.siteMetadata.data.event.address),i.a.createElement("h3",null,e.site.siteMetadata.data.event.city)),i.a.createElement("iframe",{title:"Map",className:"google-maps",src:e.site.siteMetadata.data.event.gmapsUrl,frameBorder:"0"}))},data:u})}),p=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"3533691344",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.data.title},{name:"keywords",content:e.site.siteMetadata.data.keywords.join(",")}]},i.a.createElement("html",{lang:"no"}),i.a.createElement("link",{"data-react-helmet":"true",href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"})),i.a.createElement("div",null,t,i.a.createElement(m,null)))},data:n})};p.propTypes={children:s.a.node.isRequired};t.a=p},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 125"},r.a.createElement("path",{d:"M17.5,63.1L50,95.5L82.5,63l-32.9,0l-0.1-0.1L49.4,63l-14.5,0L34.9,63l-0.1,0.1L17.5,63.1z M48.1,66.9\nl12.6,12.6L56,84.1L38.8,66.9L48.1,66.9z M53.5,66.9l9.3,0l5.2,5.2l-4.6,4.6L53.5,66.9z M73.2,66.9l-2.5,2.5l-2.5-2.5L73.2,66.9z M26.8,66.9l6.6,0l19.9,19.9L50,90.1L26.8,66.9z"}))}},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Knowit Stavanger Fagseminar",data:{title:"Fagseminar høst 2018",event:{date:"4. april - 7. april 2019",city:"Copenhagen",country:"Denmark"}}}}}}},174:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-9bc901a5044ce0d1bbbd.js.map