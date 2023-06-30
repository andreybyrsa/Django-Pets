addPageClassName("profile-page");

useSideBar("left");
useSideBar("bottom");

let image = document.getElementById("image");
let imageInput = document.getElementById("image-input");

let updateImageButton = document.getElementById("update-image-button");
let updateImageText = document.getElementById("update-image-text");

let DBImageSrc = imageInput.attributes.value.value;

if (DBImageSrc) {
  image.src = DBImageSrc;
} else {
  image.style.display = "none";
  updateImageText.style.display = "block";
}

updateImageButton.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener("change", (event) => {
  let currentImage = URL.createObjectURL(event.target.files[0]);

  if (currentImage) {
    image.style.display = "block";
    image.src = currentImage;

    updateImageText.style.display = "none";
  }
});
