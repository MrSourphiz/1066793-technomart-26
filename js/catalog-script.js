//скрипт попапа Оформления покупки

var buyLink = document.querySelectorAll(".open__popup-buy");
var buyPopup = document.querySelector(".popup-buy");
var buyClose = buyPopup.querySelector(".popup__close");
var buyContinue = buyPopup.querySelector(".buy-continue");

buyLink.forEach(function (entry) {
    entry.addEventListener("click", function (evt) {
        evt.preventDefault();
        buyPopup.classList.add("popup__show");
    });
});

buyClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("popup__show");
});

buyContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("popup__show");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("popup__show")) {
            evt.preventDefault();
            mapPopup.classList.remove("popup__show");
        }
    }
});
