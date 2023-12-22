let iconMenu = document.querySelector(".icon-menu")
let links = document.querySelector(".links")
let center = document.querySelector(".center")
let xMark = document.querySelector(".x-mark")

iconMenu.addEventListener('click', function(){
    links.classList.add('change')
    center.classList.add('change-center')
});
xMark.addEventListener('click', function(){
    links.classList.remove('change')
    center.classList.remove('change-center')
});
