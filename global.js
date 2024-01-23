function changeTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark'? 'light' : 'dark';
    root.className = newTheme;
}

let btn = document.querySelector('.theme-btn');
btn.addEventListener('click',changeTheme);