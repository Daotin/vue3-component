(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{462:function(s,t,a){"use strict";a.r(t);var n=a(67),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"markdown-语法扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-语法扩展"}},[s._v("#")]),s._v(" Markdown 语法扩展")]),s._v(" "),a("h2",{attrs:{id:"markdown标准语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown标准语法"}},[s._v("#")]),s._v(" markdown标准语法")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://markdown.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown 官方教程"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.markdown.xyz/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown 基本语法"),a("OutboundLink")],1)])]),s._v(" "),a("br"),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("下面的内容是vuepress对markdown语法进行的扩展语法，仅在vuepress中生效。")])]),s._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),a("h3",{attrs:{id:"内部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[s._v("#")]),s._v(" 内部链接")]),s._v(" "),a("p",[s._v("以如下的文件结构为例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("假设你现在在 "),a("code",[s._v("foo/one.md")]),s._v(" 中：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("Home")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("/")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("foo")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("/foo/")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("foo heading")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("./#heading")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("bar - three")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("../bar/three.md")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("bar - four")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("../bar/four.html")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 也可以用 .html --\x3e")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"外部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部链接"}},[s._v("#")]),s._v(" 外部链接")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("天喻信息")]),s._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("http://www.whty.com.cn/")]),s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("显示如下：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.whty.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("天喻信息"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"github-风格的表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格"}},[s._v("#")]),s._v(" GitHub 风格的表格")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Tables")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Are")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("Cool")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("col 3 is")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("right-aligned")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$1600")])]),s._v(" "),a("tr",[a("td",[s._v("col 2 is")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("centered")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$12")])]),s._v(" "),a("tr",[a("td",[s._v("zebra stripes")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("are neat")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$1")])])])]),s._v(" "),a("h2",{attrs:{id:"emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[s._v("#")]),s._v(" Emoji")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(":tada: :100:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("p",[s._v("🎉 💯")]),s._v(" "),a("p",[s._v("你可以在"),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个列表"),a("OutboundLink")],1),s._v("找到所有可用的 Emoji。")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[[toc]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#markdown标准语法"}},[s._v("markdown标准语法")])]),a("li",[a("a",{attrs:{href:"#链接"}},[s._v("链接")]),a("ul",[a("li",[a("a",{attrs:{href:"#内部链接"}},[s._v("内部链接")])]),a("li",[a("a",{attrs:{href:"#外部链接"}},[s._v("外部链接")])])])]),a("li",[a("a",{attrs:{href:"#github-风格的表格"}},[s._v("GitHub 风格的表格")])]),a("li",[a("a",{attrs:{href:"#emoji"}},[s._v("Emoji")])]),a("li",[a("a",{attrs:{href:"#目录"}},[s._v("目录")])]),a("li",[a("a",{attrs:{href:"#自定义容器-badge-text-默认主题"}},[s._v("自定义容器 "),a("Badge",{attrs:{text:"默认主题"}})],1)]),a("li",[a("a",{attrs:{href:"#代码块中的语法高亮"}},[s._v("代码块中的语法高亮")])]),a("li",[a("a",{attrs:{href:"#代码块中的行高亮"}},[s._v("代码块中的行高亮")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"自定义容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[s._v("#")]),s._v(" 自定义容器 "),a("Badge",{attrs:{text:"默认主题"}})],1),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这是一个提示")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("这是一个警告")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("DANGER")]),s._v(" "),a("p",[s._v("这是一个危险警告")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("p",[s._v("这是一个详情块，在 IE / Edge 中不生效")])]),s._v(" "),a("p",[s._v("你也可以自定义块中的标题：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("::: danger STOP\n危险区域，禁止通行\n:::\n\n::: details 点击查看代码\n"),a("span",{pre:!0,attrs:{class:"token code"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("```")]),a("span",{pre:!0,attrs:{class:"token code-language"}},[s._v("js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token code-block language-js language-js"}},[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你好，VuePress！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("```")])]),s._v("\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("STOP")]),s._v(" "),a("p",[s._v("危险区域，禁止通行")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你好，VuePress！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"代码块中的语法高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的语法高亮"}},[s._v("#")]),s._v(" 代码块中的语法高亮")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("todo in todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("todo.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    {{ todo.text }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"代码块中的行高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮"}},[s._v("#")]),s._v(" 代码块中的行高亮")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` js {4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Highlighted!'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("除了单行以外，你也可指定多行，行数区间，或是两者都指定。")]),s._v(" "),a("ul",[a("li",[s._v("行数区间: 例如 "),a("code",[s._v("{5-8}")]),s._v(", "),a("code",[s._v("{3-10}")]),s._v(", "),a("code",[s._v("{10-17}")])]),s._v(" "),a("li",[s._v("多个单行: 例如 "),a("code",[s._v("{4,7,9}")])]),s._v(" "),a("li",[s._v("行数区间与多个单行: 例如 "),a("code",[s._v("{4,7-13,16,23-27,40}")])])]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` js{1,4,6-7}\nexport default { // Highlighted\n  data () {\n    return {\n      msg: `Highlighted!\n      This line isn't highlighted,\n      but this and the next 2 are.`,\n      motd: 'VuePress is awesome',\n      lorem: 'ipsum',\n    }\n  }\n}\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Highlighted")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("Highlighted!\n      This line isn't highlighted,\n      but this and the next 2 are.")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("motd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VuePress is awesome'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("lorem")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ipsum'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);