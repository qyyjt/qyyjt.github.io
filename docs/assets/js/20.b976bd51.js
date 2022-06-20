(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{444:function(n,s,e){"use strict";e.r(s);var t=e(65),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"app-内的自动化构建工具-gulp-的相关配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-内的自动化构建工具-gulp-的相关配置"}},[n._v("#")]),n._v(" APP 内的自动化构建工具——gulp 的相关配置")]),n._v(" "),e("h5",{attrs:{id:"什么是-gulp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-gulp"}},[n._v("#")]),n._v(" 什么是 gulp?")]),n._v(" "),e("p",[n._v("gulp 是一个自动化构建工具，主要用来设定程序自动处理静态资源的工作。简单的说，gulp 就是用来打包项目的。")]),n._v(" "),e("p",[n._v("官网："),e("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fgulpjs.com%2F",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://gulpjs.com/"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("中文官网："),e("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fwww.gulpjs.com.cn%2Fdocs%2F",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.gulpjs.com.cn/docs/"),e("OutboundLink")],1)]),n._v(" "),e("h5",{attrs:{id:"如何去实现一个简单的-gulp-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何去实现一个简单的-gulp-配置"}},[n._v("#")]),n._v(" 如何去实现一个简单的 gulp 配置？")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("全局安装：安装 gulp 命令行工具")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install -g gulp\n")])])])]),n._v(" "),e("li",[e("p",[n._v("创建项目目录并进入，输入下面的命令")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm init\n")])])])]),n._v(" "),e("li",[e("p",[n._v("配置 package.json 文件（可选，不进行配置的话，可以走默认）")])]),n._v(" "),e("li",[e("p",[n._v("当前项目文件夹下输入命令")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm install gulp --save-dev\n")])])])]),n._v(" "),e("li",[e("p",[n._v("当前项目下创建 gulpfile.js 文件，作为该项目配置文件。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//gulpfile.js\n\nvar gulp = require('gulp');\ngulp.task('default',function(){\n    console.log('hello world');\n});\n")])])]),e("p",[n._v("以上我们就实现了一个简单的 gulp 配置项目了。")])])]),n._v(" "),e("h5",{attrs:{id:"基于企业预警通-app-端的-gulp-配置文件代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于企业预警通-app-端的-gulp-配置文件代码"}},[n._v("#")]),n._v(" 基于企业预警通 APP 端的 gulp 配置文件代码")]),n._v(" "),e("blockquote",[e("p",[n._v("注意：当前的配置文件不可直接使用，需要修改对应的")]),n._v(" "),e("p",[e("code",[n._v('<span style="color: red">')]),n._v("SVN 项目目录：基本地址为"),e("code",[n._v('</span>https://192.168.100.188/svn/FC_APP/HTML/trunk<span style="color: red">')]),n._v("后面记得加上根目录的项目路径"),e("code",[n._v("</span>")])]),n._v(" "),e("p",[e("code",[n._v('<span style="color:red">')]),n._v("内网服务器地址：基础地址为"),e("code",[n._v('</span><span style="color:blue">/home/html</span><span style="color:red">')]),n._v("后面记得加上根目录的项目路径"),e("code",[n._v("</span>")])]),n._v(" "),e("p",[e("code",[n._v('<span style="color:red">')]),n._v("打包目录：项目内 webpack 配置的输出文件夹，一般默认为'./dist'"),e("code",[n._v("</span>")])]),n._v(" "),e("p",[e("code",[n._v('<span style="color:red;">')]),n._v("提交日志：需要符合代码提交规范，【bug#XXXX】 禅道 bug 标题 + 当前功能的描述文字，【story#XXXX】 禅道需求标题 +  当前功能的描述文字"),e("code",[n._v("</span>")])])]),n._v(" "),e("div",{staticClass:"language-angular2 extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const gulp = require('gulp'),\n  minimist = require('minimist'),\n  gulpSSH = require('gulp-ssh'),\n  shell = require('shelljs');\n\n// SVN项目目录\nconst projectSVN = 'https://192.168.100.188/svn/FC_APP/HTML/trunk/hf/companyF9/financialData',\n\n  // 内网服务器目录\n  serverPath = '/home/html/hf/companyF9/financialData',\n  serverPath2 = '/app/OpenResty/nginx/html/appdev_html/hf/companyF9/financialData',\n  // 打包目录，请勿与SVN项目目录重名\n  bundlePath = './dist',\n  // 提交日志\n  commitMsg = '#241 F9下方财务';\n\ngulp.task('build', cb => {\n  shell.exec('yarn build');\n  cb();\n});\n\ngulp.task('checkout', cb => {\n  shell.exec(`svn checkout ${projectSVN}`);\n  cb();\n});\n\ngulp.task('checkIn', cb => {\n  const msgOptions = {\n    string: 'm',\n    default: {\n      m: commitMsg\n    },\n  };\n  const options = minimist(process.argv.slice(2), msgOptions);\n  const svnProjectPath = projectSVN.split('/').pop();\n\n  shell.cd(svnProjectPath);\n  shell.rm('-r', '*');\n  shell.cd('..');\n  shell.cp('-R', bundlePath + '/*', svnProjectPath);\n  shell.cp('-R', './*.png', svnProjectPath);\n  shell.cp('-R', './*.png', bundlePath);\n  shell.cp('-R', './*.svg', svnProjectPath);\n  shell.cp('-R', './*.svg', bundlePath);\n  shell.cd(svnProjectPath);\n  shell.exec('svn add * --force');\n  shell.exec(`svn commit -m \"${options.m}\"`);\n  shell.cd('..');\n  cb();\n});\n\ngulp.task('removeMap', cb => {\n  shell.rm(`${bundlePath}/**/assets/**/*.map`);\n  cb();\n});\n// devwifi\ngulp.task('upload', cb => {\n  const ssh = new gulpSSH({\n    ignoreErrors: false,\n    sshConfig: {\n      host: '10.15.97.42',\n      username: 'root',\n      password: 'jsoproject',\n    },\n  });\n  setTimeout(() => {\n    gulp.src(`${bundlePath}/**`).pipe(ssh.dest(serverPath));\n    cb();\n  }, 1000);\n});\n\n// dev\ngulp.task('upload2', cb => {\n  const ssh = new gulpSSH({\n    ignoreErrors: false,\n    sshConfig: {\n      host: '10.10.17.119',\n      username: 'reader',\n      password: 'tcdept@428#',\n    },\n  });\n  setTimeout(() => {\n    gulp.src(`${bundlePath}/**`).pipe(ssh.dest(serverPath2));\n    cb();\n  }, 1000);\n});\n\ngulp.task('trunk', gulp.series('build', 'removeMap', 'checkout', 'checkIn', 'upload', 'upload2'));\ngulp.task('default', gulp.series('trunk'));\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);