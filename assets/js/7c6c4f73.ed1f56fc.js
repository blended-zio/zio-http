"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[313],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8270:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Streaming File",l={unversionedId:"v1.x/examples/advanced-examples/stream-file",id:"v1.x/examples/advanced-examples/stream-file",isDocsHomePage:!1,title:"Streaming File",description:"",source:"@site/docs/v1.x/examples/advanced-examples/stream-file.md",sourceDirName:"v1.x/examples/advanced-examples",slug:"/v1.x/examples/advanced-examples/stream-file",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/stream-file",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSRF",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/middleware_csrf"},next:{title:"Streaming Response",permalink:"/zio-http/docs/v1.x/examples/advanced-examples/stream-response"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"streaming-file"},"Streaming File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\nimport zhttp.service.Server\nimport zio.stream.ZStream\nimport zio._\n\nimport java.io.File\nimport java.nio.file.Paths\n\nobject FileStreaming extends App {\n\n  // Create HTTP route\n  val app = Http.collectHttp[Request] {\n    case Method.GET -> !! / "health" => Http.ok\n\n    // Read the file as ZStream\n    // Uses the blocking version of ZStream.fromFile\n    case Method.GET -> !! / "blocking" => Http.fromStream(ZStream.fromFile(Paths.get("README.md")))\n\n    // Uses netty\'s capability to write file content to the Channel\n    // Content-type response headers are automatically identified and added\n    // Does not use Chunked transfer encoding\n    case Method.GET -> !! / "video" => Http.fromFile(new File("src/main/resources/TestVideoFile.mp4"))\n    case Method.GET -> !! / "text"  => Http.fromFile(new File("src/main/resources/TestFile.txt"))\n  }\n\n  // Run it like any simple app\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app.silent).exitCode\n}\n\n')))}u.isMDXComponent=!0}}]);