let closeBtn = document.querySelector(".site-header__btn")
let closeImg = document.querySelector(".site-header__btn-img")
let closePhoto = document.querySelector(".site-header__btn-cl")
let closeSiteNav = document.querySelector(".sitenav")


closeBtn.addEventListener("click", function () {
    closeImg.classList.toggle("dn");
    closePhoto.classList.toggle("db");
    closeSiteNav.classList.toggle("dbb");
})
