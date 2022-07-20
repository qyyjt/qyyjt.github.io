(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(t,v,e){"use strict";e.r(v);var _=e(65),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"开发升级流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发升级流程"}},[t._v("#")]),t._v(" 开发升级流程")]),t._v(" "),e("p",[t._v("一般需求开发时会有如下流程：")]),t._v(" "),e("ol",[e("li",[t._v("在本地开发，并更新到 dev 环境自测、测试、UI 样式校对问题修改")]),t._v(" "),e("li",[t._v("发布上线时，提交到 test 环境")]),t._v(" "),e("li",[t._v("中台人员用 test 环境的代码，发布 uat")]),t._v(" "),e("li",[t._v("uat 无问题，发布外网")])]),t._v(" "),e("p",[t._v("所以升级的时候，我们的工作并不多，只需要把打包后的代码搞到 test 环境的服务器上就好了。")]),t._v(" "),e("h2",{attrs:{id:"git-开发流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-开发流程"}},[t._v("#")]),t._v(" git 开发流程")]),t._v(" "),e("p",[t._v("我们在项目开发中，会用到如下几个不同分支。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("分支")]),t._v(" "),e("th",[t._v("介绍")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dev")]),t._v(" "),e("td",[t._v("开发环境，升级时合并到 master")])]),t._v(" "),e("tr",[e("td",[t._v("master")]),t._v(" "),e("td",[t._v("代码会自动编译到 test 环境")])]),t._v(" "),e("tr",[e("td",[t._v("story#*")]),t._v(" "),e("td",[t._v("功能分支")])]),t._v(" "),e("tr",[e("td",[t._v("bug#*")]),t._v(" "),e("td",[t._v("bug 分支，用于修复外网 bug")])])])]),t._v(" "),e("p",[t._v("开发中，常见的有主要有如下几个场景")]),t._v(" "),e("ul",[e("li",[t._v("内网开发新功能")]),t._v(" "),e("li",[t._v("修复已发布到外网的 bug")])]),t._v(" "),e("p",[t._v("假如，我们有一个需求号为 1650，这时候需要创建一个功能分支 "),e("code",[t._v("story#1650")]),t._v("。或者禅道的 bug 号是 123，则创建"),e("code",[t._v("bug#123")]),t._v("分支。")]),t._v(" "),e("p",[t._v("我们可以直接从 "),e("code",[t._v("master")]),t._v("分支去创建功能分支。")]),t._v(" "),e("p",[t._v("在开发过程中，若你需要在 dev 环境查看效果，可以先把你的分支合并到 dev 分支，再使用 "),e("RouterLink",{attrs:{to:"/project/gulpConfig.html"}},[t._v("gulp")]),t._v(" 把打包后的文件更新到 dev 服务器，或者手动更新。")],1),t._v(" "),e("p",[t._v("先合并到 dev 分支再进行 gulp 是为了防止两个人开发相同项目时，gulp 的时候互相覆盖掉对方的代码")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("请避免在 dev 分支直接开发新功能。")])]),t._v(" "),e("ul",[e("li",[t._v("第一种情况，还没有 commit")])]),t._v(" "),e("p",[t._v("可以先执行git stash，将代码先暂存起来，然后切换到功能分支，执行git stash pop将暂存的代码释放出来。然后在功能分支开发即可。")]),t._v(" "),e("ul",[e("li",[t._v("第二种情况，已经在 dev 分支上 commit 过")])]),t._v(" "),e("p",[t._v("首先，把 dev 分支上该需求的提交过滤出来，复制所有关于该需求提交的 hash 值，注意多个哈希值是按时间的正序排列，即最早提交的 hash 在前，后提交的 hash 在后。如果你用的是 Webstorm，它会自动帮你排好哈希顺序。")]),t._v(" "),e("p",[t._v("紧接着，切换到功能分支，执行 cherry-pick，将刚才选中的提交 hash 全部 cherry-pick 到功能分支上。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout feature/xxx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick -x hash1 hash2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("如果出现冲突，请解决冲突，解决完执行 git cherry-pick --continue 继续，直到结束。")]),t._v(" "),e("p",[t._v("之后，在功能分支上开发即可。")]),t._v(" "),e("h2",{attrs:{id:"项目升级流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目升级流程"}},[t._v("#")]),t._v(" 项目升级流程")]),t._v(" "),e("p",[t._v("升级时，以"),e("a",{attrs:{href:"http://project.finchina.com/AppProject/",target:"_blank",rel:"noopener noreferrer"}},[t._v("禅道看板"),e("OutboundLink")],1),t._v("中的升级单为准，若你的需求或 bug 在此次升级范围内，可使用 "),e("a",{attrs:{href:"https://git.finchina.com/groups/hf-develop/web/app/-/merge_requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("merge request"),e("OutboundLink")],1),t._v(" 的方式把功能分支合并到 master 。等待编译完成时，即可在 test 环境自测；同时也要合并到 dev 分支。")]),t._v(" "),e("p",[t._v("若代码在 svn 上，或者再 git 上提交后没有效果，可以使用手动提交的方式。")])])}),[],!1,null,null,null);v.default=s.exports}}]);