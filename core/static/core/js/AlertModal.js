let alertModal = document.getElementById("alert-modal");

let closeAlertModalButton = document.getElementById(
  "close-alert-modal-button"
);

const OPENING_ALERT_MODAL_CLASS = "alert-modal--opened";
const CLOSING_ALERT_MODAL_CLASS = "alert-modal--closed";

if (alertModal !== null) {
  openAlertModal();
}

function openAlertModal() {
  alertModal.classList.add(OPENING_ALERT_MODAL_CLASS);
  openModal();
}

function closeAlertModal() {
  alertModal.classList.add(CLOSING_ALERT_MODAL_CLASS);
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
