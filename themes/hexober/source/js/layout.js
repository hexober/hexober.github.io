function onPageReady() {
    const appbarNavBtn = document.getElementById('appbarNavBtn')
    if (appbarNavBtn) {
        appbarNavBtn.onclick = () => {
            document.getElementById('mainDrawer').toggle()
        }
    }
    const authorAvatar = document.getElementById('authorAvatar')
    
    if (authorAvatar) {
        const colorThief = new ColorThief();
        const authorContainer = document.getElementById('authorContainer')
        if (authorAvatar.complete) {
            const color = colorThief.getColor(authorAvatar)
            const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            authorContainer.style.backgroundColor = rgbColor
        } else {
            authorAvatar.addEventListener('load', function () {
                const color = colorThief.getColor(authorAvatar)
                const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                authorContainer.style.backgroundColor = rgbColor
            })
        }
    }

    const mainPage = document.getElementById('mainPage')
    const themeToggleBtn = document.getElementById('themeToggleBtn')
    if (themeToggleBtn) {
        const themeToggleTipText = document.getElementById('themeToggleTipText')
        const themeToggleBtnIcon = document.getElementById('themeToggleBtnIcon')

        function setTheme(theme) {
            mainPage.setAttribute('theme', theme)
            sessionStorage.setItem('themeMode', theme)
            themeToggleTipText.innerText = theme
            themeToggleBtnIcon.innerHTML = document.getElementById('theme-' + theme).innerHTML
        }

        const currentMode = sessionStorage.getItem('themeMode') || 'auto'
        setTheme(currentMode)
        
        themeToggleBtn.onclick = () => {
            const currentMode = sessionStorage.getItem('themeMode') || 'auto'
            switch(currentMode) {
                case 'dark':
                    setTheme('light')
                    break
                case 'light':
                    setTheme('auto')
                    break
                case 'auto':
                    setTheme('dark')
                    break
            }
        }
    }

    manageTheme()
}

function manageTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('当前为深色模式');
    } else {
    console.log('当前为浅色模式');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // 设置初始模式
    function handleColorSchemeChange(event) {
    if (event.matches) {
        // 深色模式
        console.log('切换到深色模式');
    } else {
        // 浅色模式
        console.log('切换到浅色模式');
    }
    }

    // 监听颜色模式的变化
    mediaQuery.addEventListener('change', handleColorSchemeChange);
}

function gotoPage(page) {
    if (page == 1) {
        window.location.href = window.location.origin
        return
    }
    window.location.href = window.location.origin + '/page/' + page
}