//скрипт попапа "напишите нам"

var link = document.querySelector(".contacts__btn");

var popup = document.querySelector(".popup-email");
var close = popup.querySelector(".popup__close");

var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var text = popup.querySelector("[name=user-text]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
}      catch (err) {
        isStorageSupport = false;
       }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__show");

    if (storage) {
        name.value = storage;
        email.focus();
     } else {
           name.focus();
       }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup__show");
    popup.classList.remove("popup__error");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup__show")) {
            popup.classList.remove("popup__show");
            popup.classList.remove("popup__error");
        }
    }
});

//скрипт попапа-карты

var mapLink = document.querySelector(".open-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".popup__close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup__show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup__show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("popup__show")) {
            evt.preventDefault();
            mapPopup.classList.remove("popup__show");
        }
    }
});

