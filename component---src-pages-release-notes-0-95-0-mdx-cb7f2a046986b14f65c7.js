"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[9279],{4303:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return c}});var n,r=t(63366),i=(t(67294),t(64983)),s=t(20370),l=["components"],o={},m=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={_frontmatter:o},h=s.Z;function c(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)(h,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"26th October 2019"),(0,i.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🥳 New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can now bind multiple paths to an annotated service easily using ",(0,i.kt)("inlineCode",{parentName:"li"},"@Path"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1822"},"#1822")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1870"},"#1870"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Get\n@Post\n@Path("/a")\n@Path("/b")\npublic String myAwesomeServcie(...) {...}\n'))),(0,i.kt)("li",{parentName:"ul"},"You can now make an annotated service run from ",(0,i.kt)("inlineCode",{parentName:"li"},"blockingTaskExecutor")," by attaching ",(0,i.kt)("inlineCode",{parentName:"li"},"@Blocking"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2078"},"#2078"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2187"},"#2187"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Get("/myHeavyTask")\n@Blocking\npublic HttpResponse reallyHeavyComputation(...) {...}\n'))),(0,i.kt)("li",{parentName:"ul"},"Armeria server now adds ",(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7231#section-7.4.2"},(0,i.kt)("inlineCode",{parentName:"a"},"Server"))," and\n",(0,i.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.2"},(0,i.kt)("inlineCode",{parentName:"a"},"Date"))," headers to responses by default.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2137"},"#2137"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2188"},"#2188"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you do not want that behavior, you should call:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Server.builder()\n      .service(...)\n      .disableServerHeader()\n      .disableDateHeader()\n      .build();\n"))))),(0,i.kt)("li",{parentName:"ul"},"You can now configure a Caffeine cache spec for ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpFileService"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/916"},"#916"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2142"},"#2142"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'HttpFileServiceBuilder.forClassPath("/")\n                      .entryCacheSpec("maximumSize=512")\n                      .build()\n')),"Or, using JVM option:\n",(0,i.kt)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.fileServiceCache=maximumSize=1024,expireAfterAccess=600s")),(0,i.kt)("li",{parentName:"ul"},"You can now see the Armeria version in the metric. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2179"},"#2179"))),(0,i.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"💪 Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Armeria server startup time is reduced to 80 percent when TLS is not used. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1645"},"#1645"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2184"},"#2184")),(0,i.kt)("li",{parentName:"ul"},"The performance of getting HTTP timestamps is improved by caching the values every second. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2196"},"#2196"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpTimestampSupplier.currentTime()")," to take advantage of it."))),(0,i.kt)("li",{parentName:"ul"},"The performance of finding service is improved by not making an unused ",(0,i.kt)("inlineCode",{parentName:"li"},"Map")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"RouteResult"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2153"},"#2153")),(0,i.kt)("li",{parentName:"ul"},"The performance of gRPC call is improved by using the singleton HTTP headers when a service does not create a new HTTP headers. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2152"},"#2152")),(0,i.kt)("li",{parentName:"ul"},"The performance of making metric ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag"),"s is improved by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag"),"s in ascending order. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2150"},"#2150"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2163"},"#2163")),(0,i.kt)("li",{parentName:"ul"},"We now have favicon in our ",(0,i.kt)("inlineCode",{parentName:"li"},"DocService"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2186"},"#2186"))),(0,i.kt)("h2",{id:"-bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-bug-fixes","aria-label":" bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"👻 Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServerHttpRequest.getRemoteAddress()")," now returns proper address. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2208"},"#2208")),(0,i.kt)("li",{parentName:"ul"},"You can now see descriptive error messages when ",(0,i.kt)("inlineCode",{parentName:"li"},"sslContext")," is not configured properly. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1844"},"#1844"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2124"},"#2124")),(0,i.kt)("li",{parentName:"ul"},"You can now build ",(0,i.kt)("inlineCode",{parentName:"li"},"(Request|Response)Headers")," multiple times using builders. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2190"},"#2190"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2193"},"#2193"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Previously, it raised ",(0,i.kt)("inlineCode",{parentName:"li"},"ClassCastException")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"build()")," is called twice."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NoRequestContextException")," is not raised anymore if you configure the name of the non-request thread.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'RequestContextCurrentTraceContext.builder()\n                                 .nonRequestThread("RMI TCP Connection")\n                                 .build()\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NullPointerException")," is not raised anymore in ",(0,i.kt)("inlineCode",{parentName:"li"},"Http1ClientCodec")," when the server sends multiple responses for one request. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2210"},"#2210")),(0,i.kt)("li",{parentName:"ul"},"You can now see the access logs when the method of a request is not allowed and there are no services that match the path. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2159"},"#2159"))),(0,i.kt)("h2",{id:"-breaking-changes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-breaking-changes","aria-label":" breaking changes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🚫 Breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All annotated services are run from ",(0,i.kt)("inlineCode",{parentName:"li"},"EventLoop")," by default. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2187"},"#2187"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Previously, if the return type is neither ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpResponse")," nor ",(0,i.kt)("inlineCode",{parentName:"li"},"CompletableFuture"),", annotated services are run from ",(0,i.kt)("inlineCode",{parentName:"li"},"blockingTaskExecutor"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServerBuilder.tls()")," now throws a checked ",(0,i.kt)("inlineCode",{parentName:"li"},"SSLException"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2124"},"#2124")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServerBuilder.sslContext()")," methods are completely removed. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2124"},"#2124"))),(0,i.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brave 5.7.0 -> 5.8.0"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard 4.1.0 -> 4.1.1"),(0,i.kt)("li",{parentName:"ul"},"gRPC 1.24.0 -> 1.24.1"),(0,i.kt)("li",{parentName:"ul"},"Netty 4.1.42 -> 4.1.43"),(0,i.kt)("li",{parentName:"ul"},"org.bouncycastle 1.63 -> 1.64"),(0,i.kt)("li",{parentName:"ul"},"Prometheus 0.7.0 -> 0.8.0"),(0,i.kt)("li",{parentName:"ul"},"RxJava2 2.2.12 -> 2.2.13"),(0,i.kt)("li",{parentName:"ul"},"Spring Boot 2.1.8 -> 2.1.9"),(0,i.kt)("li",{parentName:"ul"},"Tomcat",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"9.0.26 -> 9.0.27"),(0,i.kt)("li",{parentName:"ul"},"8.5.43 -> 8.5.47"))),(0,i.kt)("li",{parentName:"ul"},"ZooKeeper 3.5.5 -> 3.5.6")),(0,i.kt)("h2",{id:"️-thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-thank-you","aria-label":"️ thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇‍♂️ Thank you"),(0,i.kt)(m,{usernames:["anuraaga","codefromthecrypt","eunchan-kim","heowc","hirakida","ikhoon","imasahiro","jyblue","kojilin","matsumana","minwoox","mumgmangmange","rcsalome","taejs","trustin"],mdxType:"ThankYou"}))}c.isMDXComponent=!0},20370:function(e,a,t){t(88025);var n=t(1923),r=t(25444),i=t(67294),s=t(55746),l=t(8284),o=t(96759),m=t(46731),p=t(9396),h=n.Z.Title,c=Object.keys(l)[0],u=d(c);function d(e){return e.substring(e.lastIndexOf("/")+1)}a.Z=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var k=(0,p.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),i.createElement(m.Z,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==u?i.createElement(o.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(r.Link,{to:c},"the latest release note"),"."):"",N?i.createElement(h,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1","/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-95-0-mdx-cb7f2a046986b14f65c7.js.map