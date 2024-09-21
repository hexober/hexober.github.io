---
title: Hello Hexober
date: 2024-09-22
tags:
    - Hexober
    - Hexo
---

**Hexober** is a material design theme for [Hexo](https://hexo.io/) based on [soberJS](https://soberjs.com/).

<!-- more -->

## Configuration

### Theme specify configurations
```yml
theme: hexober
hexober:
  nav:
    author:
      name: 'boybeak'
      avatar: 'https://avatars.githubusercontent.com/u/6696502?v=4'
      slogan: '不是去哪里，而是去看日出'
      homepage: 'https://github.com/boybeak'
      socials:
        - title: 'Github'
          url: 'https://github.com/boybeak'
          icon: '/assets/ic-github.svg'
        - title: 'X'
          url: 'https://x.com/BeakInAir'
          icon: '/assets/ic-x-twitter.svg'
        - title: 'Email'
          url: 'mailto://boybeak@gmail.com'
          icon: '/assets/ic-mail.svg'

  menu:
    - title: 'Source Code'
      icon: '/assets/ic-github.svg'
      url: 'https://github.com/hexober/hexober.github.io'
    - title: 'MyBlog'
      icon: '/assets/ic-blog.svg'
      url: 'https://boybeak.github.io/'
    - title: 'About'
      icon: '/assets/ic-about.svg'
      url: '/about'
      
  showThemeToggle: true
  # googleAnalytics: G-XXXXXXXXXX
  # googleSiteVerification: XXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Theme highlight
```yml
syntax_highlighter: prismjs
prismjs:
  preprocess: true
  line_number: false
  line_threshold: 0
  tab_replace: ""
  hljs: false
```