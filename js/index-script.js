//скрипт попапа "напишите нам"

var link = document.querySelector(".contacts__btn");

var popup = document.querySelector(".popup-email");
var close = popup.querySelector(".popup__close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var text = popup.querySelector("[name=user-text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
}      catch (err) {
        isStorageSupport = false;
       }

try {
    storageEmail = localStorage.getItem("email");
}      catch (err) {
       isStorageSupport = false;
     }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__show");

    if (storageName) {
        name.value = storageName;
        email.focus();
     } if (storageEmail) {
               email.value = storageEmail;
               text.focus();
       } else {
           name.focus();
         }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup__show");
    popup.classList.remove("popup__error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("popup__error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup__error");
     } else {
         if (isStorageSupport) {
             localStorage.setItem("name", name.value);
             localStorage.setItem("email", email.value);
         }
       }
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

