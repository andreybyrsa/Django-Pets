addPageClassName("profile-page");

useSideBar("left");
useSideBar("bottom");

const image = document.getElementById("image");
const imageInput = document.getElementById("image-input");

const updateImageButton = document.getElementById("update-image-button");
const updateImageText = document.getElementById("update-image-text");

const DBImageSrc = imageInput.attributes.value.value;

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
  const currentImage = URL.createObjectURL(event.target.files[0]);

  if (currentImage) {
    image.style.display = "block";
    image.src = currentImage;

    updateImageText.style.display = "none";
  }
});
