const petModal = document.getElementById("pet-modal");

const petModalCloseButton = document.getElementById("close-pet-modal-button");

const openPetModalClass = "pet-modal--opened";
const closePetModalClass = "pet-modal--closed";

function openPetModal() {
  petModal.style.display = "flex";
  petModal.classList.add(openPetModalClass);
}

function closePetModal() {
  petModal.classList.add(closePetModalClass);
  setTimeout(() => {
    petModal.classList.remove(openPetModalClass);
    petModal.classList.remove(closePetModalClass);
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
