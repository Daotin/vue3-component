import{_ as o,f as c,g as l,r as d,o as r,c as i,b as p,a as m,e as t}from"./app.1f1be3f3.js";const h=t('<h1 id="input-\u8F93\u5165\u6846" tabindex="-1"><a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a> Input \u8F93\u5165\u6846</h1><p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Input \u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u5B83 <strong>\u603B\u4F1A\u663E\u793A Vue \u7ED1\u5B9A\u503C</strong>\u3002</p><p>\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C<code>input</code> \u7684\u8F93\u5165\u4E8B\u4EF6\u5E94\u8BE5\u88AB\u6B63\u5E38\u54CD\u5E94\u3002 \u5B83\u7684\u5904\u7406\u7A0B\u5E8F\u5E94\u8BE5\u66F4\u65B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A\u503C (\u6216\u4F7F\u7528 <code>v-model</code>)\u3002 \u5426\u5219\uFF0C\u8F93\u5165\u6846\u7684\u503C\u5C06\u4E0D\u4F1A\u6539\u53D8\u3002</p><p>\u4E0D\u652F\u6301 <code>v-model</code> \u4FEE\u9970\u7B26\u3002</p></div><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><p>\u57FA\u7840\u7684\u6309\u94AE\u7528\u6CD5\u3002</p>',5),v=t(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Please input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u683C\u5F0F\u5316</h2><p>\u4F7F\u7528<code>clearable</code>\u5C5E\u6027\u5373\u53EF\u5F97\u5230\u4E00\u4E2A\u53EF\u4E00\u952E\u6E05\u7A7A\u7684\u8F93\u5165\u6846\u3002</p><p>\u5728 <code>formatter</code>\u7684\u60C5\u51B5\u4E0B\u663E\u793A\u503C\uFF0C\u6211\u4EEC\u901A\u5E38\u540C\u65F6\u4F7F\u7528 <code>parser</code></p>`,4),F=t(`<details class="custom-container details"><summary>\u70B9\u51FB\u67E5\u770B\u4EE3\u7801</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Please input<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:formatter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value) =&gt; \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, <span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:parser</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value) =&gt; value.replace(/\\$\\s?|(,*)/g, <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">clearable</span>
  <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u5355\u5143\u683C</td><td>\u5355\u5143\u683C</td></tr><tr><td>\u5355\u5143\u683C</td><td>\u5355\u5143\u683C</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u5355\u5143\u683C</td><td>\u5355\u5143\u683C</td></tr><tr><td>\u5355\u5143\u683C</td><td>\u5355\u5143\u683C</td></tr></tbody></table>`,5),E=c({__name:"input.html",setup(k){const n=l(""),e=l("");return(C,a)=>{const s=d("el-input");return r(),i("div",null,[h,p(s,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),placeholder:"Please input"},null,8,["modelValue"]),v,m("p",null,[p(s,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=u=>e.value=u),placeholder:"Please input",formatter:u=>`$ ${u}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:u=>u.replace(/\$\s?|(,*)/g,""),clearable:""},null,8,["modelValue","formatter","parser"])]),F])}}});var B=o(E,[["__file","input.html.vue"]]);export{B as default};
