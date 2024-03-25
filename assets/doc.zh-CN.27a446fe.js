import{d as s,c as u,a,o as d}from"./vue.64c78799.js";const e={class:"markdown-body"},c=a(`<h1>Watermark \u6C34\u5370</h1><h3>\u4ECB\u7ECD</h3><p>\u6C34\u5370\u2014\u2014\u5728\u9875\u9762\u4E0A\u6DFB\u52A0\u6587\u5B57\u6216\u56FE\u6848\uFF08\u9002\u7528\u4E8E\u9632\u6B62\u4FE1\u606F\u76D7\u7528\u573A\u666F\uFF09\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/watermark&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-watermark</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;quark-design&quot;</span> /&gt;</span>
</code></pre><h3>\u56FE\u7247\u6C34\u5370</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-watermark</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;36&quot;</span>
  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;-12&quot;</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80&quot;</span>
/&gt;</span>
</code></pre><h3>\u8C03\u6574\u6C34\u5370\u95F4\u8DDD</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-watermark</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;quark-design&quot;</span> <span class="hljs-attr">gapy</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">gapx</span>=<span class="hljs-string">&quot;48&quot;</span> /&gt;</span>
</code></pre><h3>\u591A\u884C\u6587\u5B57\u6C34\u5370</h3><pre><code class="language-js"><span class="hljs-built_in">this</span>.$refs.watermark.setText([<span class="hljs-string">&quot;quark-design&quot;</span>, <span class="hljs-string">&quot;A component library&quot;</span>]);
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u5355\u884C\u6C34\u5370\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">-</code></td></tr><tr><td>image</td><td>\u6C34\u5370\u56FE\u7247\u6E90\uFF0C\u82E5\u540C\u65F6\u4F20\u5165 text \u548C image\uFF0C\u4F18\u5148\u4F7F\u7528\u56FE\u7247\u6E32\u67D3\u6C34\u5370</td><td><code class="">string</code></td><td><code class="">-</code></td></tr><tr><td>width</td><td>\u6C34\u5370\u5BBD\u5EA6</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">120</code></td></tr><tr><td>height</td><td>\u6C34\u5370\u9AD8\u5EA6</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">64</code></td></tr><tr><td>rotate</td><td>\u6C34\u5370\u7ED8\u5236\u65F6\uFF0C\u65CB\u8F6C\u7684\u89D2\u5EA6\uFF0C\u5355\u4F4D \xB0</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">-22</code></td></tr><tr><td>fontsize</td><td>\u6587\u5B57\u5927\u5C0F</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">14</code></td></tr><tr><td>fontcolor</td><td>\u6587\u5B57\u989C\u8272</td><td><code class="">string</code></td><td><code class="">rgba(0, 0, 0, .15)</code></td></tr><tr><td>gapx</td><td>\u6C34\u5370\u4E4B\u95F4\u7684\u6C34\u5E73\u95F4\u8DDD</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">24</code></td></tr><tr><td>gapy</td><td>\u6C34\u5370\u4E4B\u95F4\u7684\u5782\u76F4\u95F4\u8DDD</td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">48</code></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setText</td><td>\u8BBE\u7F6E\u6C34\u5370\u6587\u5B57\uFF0C\u591A\u884C\u6587\u5B57\u9700\u901A\u8FC7\u6570\u7EC4\u4F20\u5165</td><td><code class="">string</code> or <code class="">string[]</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--z-index</code></td><td>\u6C34\u5370\u7684 z-index</td><td><code class="">2000</code></td></tr></tbody></table>`,21),o=[c],p={},F="",i=s({__name:"doc.zh-CN",setup(r,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,l)=>(d(),u("div",e,o))}});export{i as default,F as excerpt,p as frontmatter};
