// Color
let isDarkMode = false;
let buttonTheme = document.getElementById('theme-toggle');
buttonTheme.addEventListener("click", function() {
    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

function checkTheme(){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
       enableDarkMode();
    } else {
        enableLightMode();
    }
}
checkTheme()
function enableDarkMode(){
    isDarkMode = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    buttonTheme.textContent='Modo Claro';
    localStorage.setItem('theme','dark');
}
function enableLightMode(){
    isDarkMode = false;
    document.documentElement.removeAttribute('data-theme');
    buttonTheme.textContent='Modo Oscuro';
    localStorage.setItem('theme', 'light');
}
if(sessionStorage.getItem("logueado")==="true"){
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "inline-block";
}
