const toggleButton = document.querySelector('.toggle-theme-container');

const lightImage = document.querySelector('.to-light');
const darkImage = document.querySelector('.to-dark');

let toggleThemeSchema = () => {
    let root = document.querySelector(':root');

    if (darkImage.classList.contains('active')){
        darkImage.classList.remove('active');
        lightImage.classList.add('active');
        toggleButton.classList.remove('dark');
    }else{
        darkImage.classList.add('active');
        lightImage.classList.remove('active');
        toggleButton.classList.add('dark');
    }

    root.getAttribute('color-scheme') == 'dark' ? root.setAttribute('color-scheme', 'light') : root.setAttribute('color-scheme', 'dark');
};

toggleButton.addEventListener('click', () => {
    toggleThemeSchema();
});