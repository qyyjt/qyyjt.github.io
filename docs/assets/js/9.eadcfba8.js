(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{431:function(t,a,s){"use strict";s.r(a);var n=s(65),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"架构文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构文档"}},[t._v("#")]),t._v(" 架构文档")]),t._v(" "),s("h2",{attrs:{id:"一、pc终端项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、pc终端项目"}},[t._v("#")]),t._v(" 一、PC终端项目")]),t._v(" "),s("h3",{attrs:{id:"_1-require-mvc项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-require-mvc项目"}},[t._v("#")]),t._v(" 1.Require+mvc项目")]),t._v(" "),s("p",[t._v("Requirejs 文档： https://requirejs.org/")]),t._v(" "),s("ol",[s("li",[t._v("基础文件")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbEGIx.jpg",alt:"img"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("项目结构及介绍")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbVynJ.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("项目以src.js为入口， 注意views中的js要写入src.js的依赖中。")]),t._v(" "),s("p",[t._v("View层对模板进行简单的事件绑定：")]),t._v(" "),s("p",[t._v("this.root.on('click', '[data-bind$=Click]', this.handleEvent.bind(this));\nthis.root.on('change', '[data-bind$=Change]', this.handleEvent.bind(this));")]),t._v(" "),s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"zjtype"}},[t._v("增减类型:")]),t._v(" "),s("select",{attrs:{name:"",id:"zjtype","data-bind":"onRangeChange"}},[s("option",{attrs:{value:"0",selected:""}},[t._v("全部")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("增持")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("减持")])])]),s("div",{staticClass:"form-group floatRight"},[s("input",{attrs:{id:"searchTxt",type:"search",placeholder:"请输入证券代码或简称"}}),s("i",{staticClass:"fa fa-search"}),t._v(" "),s("button",{staticClass:"btn btn-gray",attrs:{"data-bind":"onNewestSearchClick"}},[t._v("查 询")])]),t._v(" "),s("p",[t._v("调用view下的函数处理")]),t._v(" "),s("p",[t._v("View层与controller层通信：")]),t._v(" "),s("p",[t._v("View -> controler： this.emit(事件名,  参数)")]),t._v(" "),s("p",[t._v("Controller-> view:  this.view.方法名")]),t._v(" "),s("h3",{attrs:{id:"_3-webpack项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack项目"}},[t._v("#")]),t._v(" 3.Webpack项目")]),t._v(" "),s("p",[t._v("结构： vue2 + vue-router +vuex")]),t._v(" "),s("p",[t._v("常见的vue格式")]),t._v(" "),s("p",[t._v("参考项目： https://192.168.100.188/svn/FaTeam/Demo/trunk/httproot/platform/investment_portfolio")]),t._v(" "),s("h3",{attrs:{id:"_3-dojo项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-dojo项目"}},[t._v("#")]),t._v(" 3. Dojo项目")]),t._v(" "),s("p",[t._v("今后项目不以dojo开发，现有dojo项目只进行维护。")]),t._v(" "),s("p",[t._v("SVN: https://192.168.100.188/svn/HTML5/trunk")]),t._v(" "),s("p",[t._v("代表项目： 研究报告  公司新闻")]),t._v(" "),s("p",[t._v("主要工作： 代码维护，包括后台接口更换等")]),t._v(" "),s("p",[t._v("代码打包方式： 手动")]),t._v(" "),s("p",[t._v("打开cmd->cd切换目录到util/buildScripts/文件夹下，\n运行：build.bat --profile ./profiles/standard.profile.js")]),t._v(" "),s("p",[t._v("注意： html中注释不要误删（删除后打包失败）")]),t._v(" "),s("h3",{attrs:{id:"_4-终端应用所提供的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-终端应用所提供的方法"}},[t._v("#")]),t._v(" 4. 终端应用所提供的方法")]),t._v(" "),s("p",[t._v("A. 文件另存为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("docHtml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xls_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xls"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("B. 唤起终端下载器：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dzh://FILEMGR?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nurl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LINK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("down_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OPEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHOWUI")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("saveas")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("format\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("download")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("C. 获取用户信息：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("external"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDZHProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("D. 获取当前客户端信息")]),t._v(" "),s("p",[s("strong",[t._v("external")]),t._v(".prod")]),t._v(" "),s("p",[s("strong",[t._v("external")]),t._v(".env")]),t._v(" "),s("p",[t._v("e. 特殊页面跳转（唤起终端原生页面等）")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{k.债券代码}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dzh://VIEWSTOCK?DATATYPE=DAY&LAYOUT=Level2默认&PAGE=分时走势&LABEL={{k.新债券代码}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("k.债券代码"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"dzh://marketgroup?债券&NAVBARID=30102010106"}},[s("b",[t._v("交易所行情")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"dzh://CHROME?URL='root://news/zongheping/news_list.html?multi_list=false&forward=true&menuid=000001000'&NAVBARID=30102010301"}},[s("b",[t._v("新闻公告")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"dzh://REPORT?ReportModule.dll&MODULE='407'&MODULEREPLACED='ssddvsd'&PARAM='loadStat 4321 4321'&NAVBARID=30102011001"}},[s("b",[t._v("指数")])])]),t._v(" "),s("h2",{attrs:{id:"二、企业预警通app项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、企业预警通app项目"}},[t._v("#")]),t._v(" 二、企业预警通APP项目")]),t._v(" "),s("p",[t._v("页面以750px进行缩放，基本所用页面会添加水印。")]),t._v(" "),s("h3",{attrs:{id:"_1-非数据驱动页面-新闻与活动页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-非数据驱动页面-新闻与活动页"}},[t._v("#")]),t._v(" 1.非数据驱动页面（新闻与活动页）")]),t._v(" "),s("p",[t._v("SVN： "),s("a",{attrs:{href:"https://192.168.100.188/svn/jso/finchinaAPP_HTML5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://192.168.100.188/svn/jso/finchinaAPP_HTML5\n"),s("OutboundLink")],1),t._v("webpack-zepto")]),t._v(" "),s("h3",{attrs:{id:"_2-数据驱动页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据驱动页面"}},[t._v("#")]),t._v(" 2. 数据驱动页面")]),t._v(" "),s("p",[t._v("Webpack-zepto + vue2")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbueiR.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("Build： webpack 配置")]),t._v(" "),s("p",[t._v("Dll: 第三方js静态缓存(webpack用)")]),t._v(" "),s("p",[t._v("Src： 源码")]),t._v(" "),s("p",[t._v("Assets： 图片、字体及音频文件")]),t._v(" "),s("p",[t._v("Components: 公共组件（详见： https://192.168.100.188/svn/FC_APP/开发相关/前端页面/app页面组件、插件与指令说明.xlsx）")]),t._v(" "),s("p",[t._v("注意： ui打头的公共组件，如果单个项目中需要修改的话。请复制一份修改文件名。")]),t._v(" "),s("p",[t._v("Page： 项目页面\nstyles:  公共css(normalize引用，取消按钮链接上的文字选中等)及方法（最细边框线等）")]),t._v(" "),s("p",[t._v("Utils")]),t._v(" "),s("p",[t._v("http: 对ajax进行的封装(提供msgbox及alert)")]),t._v(" "),s("p",[t._v("appAssist.js:  与原生的交互方法")]),t._v(" "),s("p",[t._v("Dom.js：页面尺寸初始化及水印等公共方法")]),t._v(" "),s("p",[t._v("Url.js url处理")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("p",[t._v("Gulpfile.js: gulp命令配置")]),t._v(" "),s("p",[t._v("Build: 项目打包\ncheckout:  更新内网服务器svn代码")]),t._v(" "),s("p",[t._v("Checkin:  提交到内网服务器svn")]),t._v(" "),s("p",[t._v("Upload： 上传文件到内网http服务器")]),t._v(" "),s("p",[t._v("... (其它babel、eslint、prettier配置文件等)")]),t._v(" "),s("p",[t._v("注： 内网服务器整点更新，http服务器上的内容会被覆盖。")]),t._v(" "),s("p",[t._v("项目使用gulp进行自动打包，上传等操作。")]),t._v(" "),s("h3",{attrs:{id:"_3-jenkins服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-jenkins服务器"}},[t._v("#")]),t._v(" 3. jenkins服务器：")]),t._v(" "),s("p",[t._v("自动打包发布服务器：\n地址： "),s("a",{attrs:{href:"http://10.15.97.192:8090/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://10.15.97.192:8090"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("新项目可以按jenkins服务器上的原有任务进行配置进行修改。 如果复制项目配置， 请修改项目名称及svn路径")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbuAZ4.jpg",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbuFLF.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("![img](file:///C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\ksohtml14544\\wps6.jpg)")]),t._v(" "),s("p",[t._v("构建命令请调用具体gulp构建命令\n"),s("img",{attrs:{src:"https://s1.ax1x.com/2020/09/21/wbuVo9.jpg",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_4-api接口页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-api接口页面"}},[t._v("#")]),t._v(" 4. api接口页面")]),t._v(" "),s("p",[t._v("http://10.15.97.42:8800/finchinaAPP/doc/index.html")]),t._v(" "),s("h3",{attrs:{id:"_5-项目开发注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目开发注意事项"}},[t._v("#")]),t._v(" 5. 项目开发注意事项：")]),t._v(" "),s("p",[t._v("a. 项目开发中，发现问题请及时反馈")]),t._v(" "),s("p",[t._v("b. 与原生交互处理：\n原生方法放在try...catch 中\n老版本app请做兼容处理（咨询需求，老版本如何处理）")]),t._v(" "),s("p",[t._v("c. 项目中索引页index.html中添加 项目包含页面列表，所需参数意义， 项目信息等")]),t._v(" "),s("p",[t._v("d. 源码请及时上传，特别是多人合作开发项目")]),t._v(" "),s("p",[t._v("e. 页面所用图片请进行压缩，在ui认可的情况下尽可能压缩")]),t._v(" "),s("p",[t._v("f. 使用第三方库时，请注意移除无用的语言包")]),t._v(" "),s("p",[t._v("g. 部分android 自适应后 7.5rem不代表100% 宽度可以用百分比")]),t._v(" "),s("p",[t._v("h. app请不要使用post，app会拦截请求并丢弃formdata")]),t._v(" "),s("p",[t._v("i. 附件下载时，android需要添加参数 Enclosure2018=true 作为附件依据")]),t._v(" "),s("p",[t._v("j. zepto的on委托事件不要放在body上")]),t._v(" "),s("p",[t._v("k. iphonex需要对安全区域做处理")]),t._v(" "),s("p",[t._v("l. 请及时处理禅道上的bug")]),t._v(" "),s("p",[t._v("m. 项目完成请及时在IMS上备注。需求在IMS上所提的变更，完成后也需要备注")]),t._v(" "),s("h3",{attrs:{id:"_6-北京银行项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-北京银行项目"}},[t._v("#")]),t._v(" 6. 北京银行项目")]),t._v(" "),s("p",[t._v("同企业预警通项目")]),t._v(" "),s("p",[t._v("源码svn：")]),t._v(" "),s("p",[t._v("https://192.168.100.188/svn/FaTeam/Demo/branches/mobile_bj")]),t._v(" "),s("p",[t._v("打包svn：")]),t._v(" "),s("p",[t._v("https://192.168.100.188/svn/jso/bjbank/finchinaAPP/WebContent/")])])}),[],!1,null,null,null);a.default=e.exports}}]);