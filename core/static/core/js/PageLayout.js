let modalLayout = document.getElementById("modal-layout");

const OPENING_MODAL_LAYOUT_CLASS = "page-layout-modal--opened";
const CLOSING_MODAL_LAYOUT_CLASS = "page-layout-modal--closed";

function openModal() {
  modalLayout.style.display = "grid";
  modalLayout.classList.add(OPENING_MODAL_LAYOUT_CLASS);
}

function closeModal() {
  modalLayout.classList.add(CLOSING_MODAL_LAYOUT_CLASS);
  setTimeout(() => {
    modalLayout.classList.remove(OPENING_MODAL_LAYOUT_CLASS);
    modalLayout.classList.remove(CLOSING_MODAL_LAYOUT_CLASS);
    modalLayout.style.display = "none";
  }, 300);
}

modalLayout.addEventListener("click", (event) => {
  if (event.target.id === "modal-layout") {
    closeModal();
  }
});

function addPageClassName(className) {
  let pageLayoutElements = Array.from(
    document.querySelectorAll("[class^=page-layout]")
  ).slice(1);

  pageLayoutElements.forEach((element) => {
    let currentClassName = element.className;
    let childClassName = element.className.split("__")[1];

    if (childClassName) {
      element.className = `${className}__${childClassName} ${currentClassName}`;
    } else {
      element.className = `${className} ${currentClassName}`;
    }
  });
}

async function waitLoadingStyles(styleSheetId) {
  await new Promise((resolve, reject) => {
    let loadedStyleSheet = document.getElementById(styleSheetId);

    if (loadedStyleSheet) {
      resolve("Style Sheet was load");
      return;
    }

    let intervalId = setInterval(() => {
      let loadedStyleSheet = document.getElementById(styleSheetId);

      if (loadedStyleSheet) {
        resolve("Style Sheet was load");
        clearInterval(intervalId);
      }
    }, 200);

    setTimeout(() => {
      reject("Error to load Style Sheet");
    }, 20000);
  });
}
