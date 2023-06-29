addPageClassName("auth-page");

const navTabLogin = document.getElementById("nav-tab-login");
const navTabRegister = document.getElementById("nav-tab-register");

const navTabActiveClass = "auth-page__nav-tab--active";

const pathname = window.location.pathname;
const currentURLPath = pathname
  .split("/")
  .find((elem) => elem === "login" || elem == "register");

if (currentURLPath === "login") {
  navTabLogin.classList.add(navTabActiveClass);
} else {
  navTabRegister.classList.add(navTabActiveClass);
}

const image = document.getElementById("image");
const imageInput = document.getElementById("image-input");

const uploadImageButton = document.getElementById("upload-image-button");
const uploadImageTextButton = document.getElementById(
  "upload-image-text-button"
);

const uploadTextAlert = document.getElementById("upload-text-alert");

if (uploadImageButton) {
  uploadImageButton.addEventListener("click", () => {
    imageInput.click();
  });

  imageInput.addEventListener("change", (event) => {
    const currentImage = URL.createObjectURL(event.target.files[0]);

    if (currentImage) {
      image.src = currentImage;
      image.style.display = "block";

      uploadImageTextButton.style.display = "none";
      uploadTextAlert.style.display = "flex";
    }
  });
}
