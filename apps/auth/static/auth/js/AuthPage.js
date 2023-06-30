addPageClassName("auth-page");

let navTabLogin = document.getElementById("nav-tab-login");
let navTabRegister = document.getElementById("nav-tab-register");

const NAV_TAB_ACTIVE_CLASS = "auth-page__nav-tab--active";

let pathname = window.location.pathname;
let currentURLPath = pathname
  .split("/")
  .find((elem) => elem === "login" || elem == "register");

if (currentURLPath === "login") {
  navTabLogin.classList.add(NAV_TAB_ACTIVE_CLASS);
} else {
  navTabRegister.classList.add(NAV_TAB_ACTIVE_CLASS);
}

let image = document.getElementById("image");
let imageInput = document.getElementById("image-input");

let uploadImageButton = document.getElementById("upload-image-button");
let uploadImageTextButton = document.getElementById(
  "upload-image-text-button"
);

let uploadTextAlert = document.getElementById("upload-text-alert");

if (uploadImageButton) {
  uploadImageButton.addEventListener("click", () => {
    imageInput.click();
  });

  imageInput.addEventListener("change", (event) => {
    let currentImage = URL.createObjectURL(event.target.files[0]);

    if (currentImage) {
      image.src = currentImage;
      image.style.display = "block";

      uploadImageTextButton.style.display = "none";
      uploadTextAlert.style.display = "flex";
    }
  });
}
