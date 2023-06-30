let petModal = document.getElementById("pet-modal");

let petModalCloseButton = document.getElementById("close-pet-modal-button");

const OPEN_PET_MODAL_CLASS = "pet-modal--opened";
const CLOSE_PET_MODAL_CLASS = "pet-modal--closed";

function openPetModal() {
  petModal.style.display = "flex";
  petModal.classList.add(OPEN_PET_MODAL_CLASS);
}

function closePetModal() {
  petModal.classList.add(CLOSE_PET_MODAL_CLASS);
  setTimeout(() => {
    petModal.classList.remove(OPEN_PET_MODAL_CLASS);
    petModal.classList.remove(CLOSE_PET_MODAL_CLASS);
    petModal.style.display = "none";
  }, 300);
}

modalLayout.addEventListener("click", (event) => {
  if (event.target.id === "modal-layout") {
    closePetModal();
  }
});

petModalCloseButton.addEventListener("click", () => {
  closePetModal();
  closeModal();
});
