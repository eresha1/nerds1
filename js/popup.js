var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".form-feedback");
 var close = popup.querySelector(".feedback-close");
 var form = document.querySelector("form");
 var username = popup.querySelector("[name=username]");
   var email = popup.querySelector("[name=email]");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  

 if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
  });
  


 close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");

    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
      evt.preventDefault();
       popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");

    popup.classList.remove("modal-error");
      }
    }
  });

