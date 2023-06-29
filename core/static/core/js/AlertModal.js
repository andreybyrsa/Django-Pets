let alertModal = document.getElementById("alert-modal");

const closeAlertModalButton = document.getElementById(
  "close-alert-modal-button"
);

const openingAlertModalClass = "alert-modal--opened";
const closingAlertModalClass = "alert-modal--closed";

if (alertModal !== null) {
  openAlertModal();
}

function openAlertModal() {
  alertModal.classList.add(openingAlertModalClass);
  openModal();
}

function closeAlertModal() {
  alertModal.classList.add(closingAlertModalClass);
  setTimeout(() => {
    alertModal.remove();
    alertModal = null;
  }, 300);
}

modalLayout.addEventListener("click", (event) => {
  if (event.target.id === "modal-layout") {
    if (alertModal) {
      closeAlertModal();
    }
  }
});

if (closeAlertModalButton) {
  closeAlertModalButton.addEventListener("click", () => {
    closeAlertModal();
    closeModal();
  });
}
