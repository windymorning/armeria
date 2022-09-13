"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[3612],{7843:function(e,t,a){a.r(t),a.d(t,{pageTitle:function(){return s},_frontmatter:function(){return p},default:function(){return g}});var n,l=a(63366),o=(a(67294),a(64983)),r=a(89791),i=["components"],s="Implementing UPDATE operation",p={},c=(n="TutorialSteps",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={pageTitle:s,_frontmatter:p},d=r.Z;function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implementing-update-operation",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h1",href:"#implementing-update-operation","aria-label":"implementing update operation permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implementing UPDATE operation"),(0,o.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-you-need"},"What you need")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-implement-server-side"},"1. Implement server-side")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-implement-client-side"},"2. Implement client-side")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-test-run"},"3. Test run")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-test-error-case"},"4. Test error case")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#whats-next"},"What's next"))),(0,o.kt)("p",null,"Previously, we created and read blog posts. Now, let's implement and make a call to update a blog post. Here, we'll throw a custom exception and add a GrpcExceptionHandler for handling."),(0,o.kt)(c,{current:5,mdxType:"TutorialSteps"}),(0,o.kt)("h2",{id:"what-you-need",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),(0,o.kt)("p",null,"You need to have the files obtained from previous steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/grpc/blog/define-service#compile-proto-file"},"Java code generated")),(0,o.kt)("li",{parentName:"ul"},"Main.java"),(0,o.kt)("li",{parentName:"ul"},"BlogService.java"),(0,o.kt)("li",{parentName:"ul"},"BlogClient.java")),(0,o.kt)("h2",{id:"1-implement-server-side",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#1-implement-server-side","aria-label":"1 implement server side permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Implement server-side"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogService.java")," we've been working on, add a service method for updating a blog post. Leave the exception throwing part empty for now."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},"import example.armeria.blog.grpc.Blog.UpdateBlogPostRequest;\n\npublic class BlogService extends BlogServiceGrpc.BlogServiceImplBase {\n  @Override\n  public void updateBlogPost(UpdateBlogPostRequest request, StreamObserver<BlogPost> responseObserver) {\n    final BlogPost oldBlogPost = blogPosts.get(request.getId());\n    if (oldBlogPost == null) {\n      // Throw an exception\n    } else {\n        final BlogPost newBlogPost = oldBlogPost.toBuilder()\n                                                .setTitle(request.getTitle())\n                                                .setContent(request.getContent())\n                                                .setModifiedAt(Instant.now().toEpochMilli())\n                                                .build();\n        blogPosts.put(request.getId(), newBlogPost);\n        responseObserver.onNext(newBlogPost);\n        responseObserver.onCompleted();\n    }\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a class for the exception to be thrown when a specified blog post ID doesn't exist."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogNotFoundException.java",filename:"BlogNotFoundException.java"},"package example.armeria.blog.grpc;\n\nfinal class BlogNotFoundException extends IllegalStateException {\n  BlogNotFoundException(String s) {\n      super(s);\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Throw the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogNotFoundException")," in the part we left empty."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},' public void updateBlogPost(UpdateBlogPostRequest request, StreamObserver<BlogPost> responseObserver) {\n   ...\n   if (oldBlogPost == null) {\n     throw new BlogNotFoundException("The blog post does not exist. ID: " + request.getId());\n   } else {\n     ...\n   }\n }\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add an exception handler class for the blog service."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=GrpcExceptionHandler.java",filename:"GrpcExceptionHandler.java"},"import com.linecorp.armeria.common.RequestContext;\nimport com.linecorp.armeria.common.annotation.Nullable;\nimport com.linecorp.armeria.common.grpc.GrpcStatusFunction;\n\nimport io.grpc.Metadata;\nimport io.grpc.Status;\n\npublic class GrpcExceptionHandler implements GrpcStatusFunction {\n\n  @Nullable\n  @Override\n  public Status apply(RequestContext ctx, Throwable cause, Metadata metadata) {\n    if (cause instanceof IllegalArgumentException) {\n        return Status.INVALID_ARGUMENT.withCause(cause);\n    }\n    if (cause instanceof BlogNotFoundException) {\n        return Status.NOT_FOUND.withCause(cause).withDescription(cause.getMessage());\n    }\n\n    // The default mapping function will be applied.\n    return null;\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bind the ",(0,o.kt)("inlineCode",{parentName:"p"},"GrpcExceptionHandler")," to our service."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"private static Server newServer(int port) throws Exception {\n  final GrpcService grpcService = \n     GrpcService.builder()\n                .addService(new BlogService())\n                .exceptionMapping(new GrpcExceptionHandler()) // add this\n                .build();\n")))),(0,o.kt)("h2",{id:"2-implement-client-side",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#2-implement-client-side","aria-label":"2 implement client side permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Implement client-side"),(0,o.kt)("p",null,"Add a method ",(0,o.kt)("inlineCode",{parentName:"p"},"updateBlogPost()")," to send a request to update a blog post."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogClient.java",filename:"BlogClient.java"},"import example.armeria.blog.grpc.Blog.UpdateBlogPostRequest;\n\nclass BlogClient {\n  static void updateBlogPost(Integer id, String newTitle, String newContent){\n    final UpdateBlogPostRequest request = UpdateBlogPostRequest.newBuilder()\n                                                               .setId(id)\n                                                               .setTitle(newTitle)\n                                                               .setContent(newContent)\n                                                               .build();\n    final BlogPost updated = client.updateBlogPost(request);\n  }\n}\n")),(0,o.kt)("h2",{id:"3-test-run",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#3-test-run","aria-label":"3 test run permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Test run"),(0,o.kt)("p",null,"Let's test updating a blog post. Since we know we are giving an incremental index to blog posts, we'll update the post at index 1."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a method to test run the update method we just implemented. ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogClient.java",filename:"BlogClient.java"},'static void testRun() {\n  // This guarantees a blog post with ID equal to 1\n  createBlogPost("Another blog post", "Creating a post via createBlogPost().");\n  // Check the existing title and content\n  getBlogPost(1);\n  // Update the blog with the ID, 1\n  updateBlogPost(1, "New title", "New content.");\n  // Check the updated blog detail\n  getBlogPost(1);\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/grpc/blog/run-service#3-serve-the-service"},"Re-run the server"),", since we've modified the server-side in ",(0,o.kt)("a",{parentName:"li",href:"#1-implement-server-side"},"1. Implement service"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the client and check the blog information before updating. Confirm that the ID of the post to update is indeed ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[main] INFO  e.a.client.blog.grpc.BlogClient - [Create response] Title: Another blog post Content: Creating a post via createBlogPost().\n{id: 1\ntitle: "Another blog"\ncontent: "Creating a post via createBlogPost()."\ncreatedAt: 1649120472799\nmodifiedAt: 1649120472799\n}\n...\nDEBUG c.l.a.client.logging.LoggingClient - [...][http://127.0.0.1:8080/example.armeria.blog.grpc.BlogService/GetBlogPost#POST] \nResponse: {startTime=..., content=CompletableRpcResponse{id: 1\ntitle: "Another blog"\ncontent: "Creating a post via createBlogPost()."\ncreatedAt: 1649723835871\nmodifiedAt: 1649723835871\n}, trailers=[EOS, grpc-status=0]}\n'))),(0,o.kt)("li",{parentName:"ol"},"Check that you see log for the update request followed by the response.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\nRequest: {startTime= ... method=UpdateBlogPost, params=[id: 1\ntitle: "New title"\ncontent: "New content"\n]}}\n...\nResponse: {startTime=2022 ... content=CompletableRpcResponse{id: 1\ntitle: "New title"\ncontent: "New content"\ncreatedAt: 1649120472799\nmodifiedAt: 1649120472848\n}, trailers=[EOS, grpc-status=0]}\n'))),(0,o.kt)("li",{parentName:"ol"},"Double-check that the updated information is stored properly by checking\nthe response to the ",(0,o.kt)("inlineCode",{parentName:"li"},"getBlogPost()"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'...\nRequest: {startTime= ... method=GetBlogPost, params=[id: 1\n]}}\n...\nResponse: {startTime= ... content=CompletableRpcResponse{id: 1\ntitle: "New title"\ncontent: "New content"\ncreatedAt: 1649120472799\nmodifiedAt: 1649120472848\n}, trailers=[EOS, grpc-status=0]}\n')))),(0,o.kt)("h2",{id:"4-test-error-case",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#4-test-error-case","aria-label":"4 test error case permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Test error case"),(0,o.kt)("p",null,"To check that our exception handler is working, let's try updating a post we know for sure does not exist."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a method to test run the update method we just implemented.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogClient.java",filename:"BlogClient.java"},'static void testRun() {\n  createBlogPost("Another blog post", "Creating a post via createBlogPost().");\n  updateBlogPost(10000, "New title", "New content."); // add this\n}\n'))),(0,o.kt)("li",{parentName:"ol"},"While the server is running, run the client and see the message that you get. We threw the ",(0,o.kt)("inlineCode",{parentName:"li"},"BlogNotFoundException")," and the exception handler returned the ",(0,o.kt)("inlineCode",{parentName:"li"},"NOT_FOUND")," runtime exception for us.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Exception in thread "main" io.grpc.StatusRuntimeException: NOT_FOUND: The blog post does not exist. ID: 10000\n  at io.grpc.stub.ClientCalls.toStatusRuntimeException(ClientCalls.java:262)\n  at io.grpc.stub.ClientCalls.getUnchecked(ClientCalls.java:243)\n  at io.grpc.stub.ClientCalls.blockingUnaryCall(ClientCalls.java:156)\n  at example.armeria.blog.grpc.BlogServiceGrpc$BlogServiceBlockingStub.updateBlogPost(BlogServiceGrpc.java:390)\n  at example.armeria.client.blog.grpc.BlogClient.updateBlogPost(BlogClient.java:110)\n  at example.armeria.client.blog.grpc.BlogClient.testRun(BlogClient.java:53)\n  at example.armeria.client.blog.grpc.BlogClient.main(BlogClient.java:46)\n')))),(0,o.kt)("h2",{id:"whats-next",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next"),(0,o.kt)("p",null,"Here, we've implemented a service method and client method for updating a\nblog post. We've also added exception handling. Next, we'll implement a method for ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/grpc/blog/implement-delete"},"deleting a blog post"),"."),(0,o.kt)(c,{current:5,mdxType:"TutorialSteps"}))}g.isMDXComponent=!0},89791:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(25444),l=a(67294),o=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":["grpc/blog","grpc/blog/define-service","grpc/blog/run-service","grpc/blog/implement-create","grpc/blog/implement-read","grpc/blog/implement-update","grpc/blog/implement-delete","grpc/blog/add-docservice"],"Thrift service":{"Coming soon":null}}'),r=a(46731),i=function(e){var t=(0,n.useStaticQuery)("3172452987").allMdx.nodes;return l.createElement(r.Z,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-grpc-blog-implement-update-mdx-51389ec473f839e26b0d.js.map