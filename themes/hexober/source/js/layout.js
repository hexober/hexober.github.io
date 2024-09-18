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
        const currentMode = sessionStorage.getItem('themeMode') || 'auto'
        
        themeToggleBtn.onclick = () => {
            const currentMode = sessionStorage.getItem('themeMode') || 'auto'
            switch(currentMode) {
                case 'dark':
                    mainPage.setAttribute('theme', 'light')
                    sessionStorage.setItem('themeMode', 'light')
                    break
                case 'light':
                    mainPage.setAttribute('theme', 'auto')
                    sessionStorage.setItem('themeMode', 'auto')
                    break
                case 'auto':
                    mainPage.setAttribute('theme', 'dark')
                    sessionStorage.setItem('themeMode', 'dark')
                    break
            }
        }
    }
}

function gotoPage(page) {
    if (page == 1) {
        window.location.href = window.location.origin
        return
    }
    window.location.href = window.location.origin + '/page/' + page
}