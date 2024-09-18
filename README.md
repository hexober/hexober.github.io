# hexober.github.io
A material design theme for Hexo based on soberJS

```bash
npm install hexo-prism-plugin --save
```

```yml
logo: '/assets/logo.svg'

syntax_highlighter: prismjs

prism_plugin:
  mode: 'preprocess'  # 可以是 'preprocess' 或 'render'，推荐使用 'preprocess'
  theme: 'default'     # 使用 GitHub 风格的代码高亮主题
  line_number: false  # 是否显示行号
  custom_css: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css'
```