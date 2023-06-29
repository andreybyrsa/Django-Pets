const modalLayout = document.getElementById("modal-layout");

const openingModalLayoutClass = "page-layout-modal--opened";
const closingModalLayoutClass = "page-layout-modal--closed";

function openModal() {
  modalLayout.style.display = "grid";
  modalLayout.classList.add(openingModalLayoutClass);
}

function closeModal() {
  modalLayout.classList.add(closingModalLayoutClass);
  setTimeout(() => {
    modalLayout.classList.remove(openingModalLayoutClass);
    modalLayout.classList.remove(closingModalLayoutClass);
    modalLayout.style.display = "none";
  }, 300);
}

modalLayout.addEventListener("click", (event) => {
  if (event.target.id === "modal-layout") {
    closeModal();
  }
});

function addPageClassName(className) {
  const pageLayoutElements = Array.from(
    document.querySelectorAll("[class^=page-layout]")
  ).slice(1);

  pageLayoutElements.forEach((element) => {
    const currentClassName = element.className;
    const childClassName = element.className.split("__")[1];

    if (childClassName) {
      element.className = `${className}__${childClassName} ${currentClassName}`;
    } else {
      element.className = `${className} ${currentClassName}`;
    }
  });
}

async function waitLoadingStyles(styleSheetId) {
  await new Promise((resolve, reject) => {
    const loadedStyleSheet = document.getElementById(styleSheetId);

    if (loadedStyleSheet) {
      resolve("Style Sheet was load");
      return;
    }

    const intervalId = setInterval(() => {
      const loadedStyleSheet = document.getElementById(styleSheetId);

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
