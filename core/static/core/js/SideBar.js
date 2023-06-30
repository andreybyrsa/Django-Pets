function useSideBar(side) {
  let sideBar = document.getElementById(`${side}-side-bar`);

  let openSideBarButton = document.getElementById(
    `open-${side}-side-bar-button`
  );
  let closeSideBarButton = document.getElementById(
    `close-${side}-side-bar-button`
  );

  const OPENING_SIDE_BAR_CLASS = `${side}-side-bar--opened`;
  const CLOSING_SIDE_BAR_CLASS = `${side}-side-bar--closed`;

  const openSideBar = () => {
    sideBar.style.display = "flex";
    sideBar.classList.add(OPENING_SIDE_BAR_CLASS);
  };

  const closeSideBar = () => {
    sideBar.classList.add(CLOSING_SIDE_BAR_CLASS);
    setTimeout(() => {
      sideBar.classList.remove(OPENING_SIDE_BAR_CLASS);
      sideBar.classList.remove(CLOSING_SIDE_BAR_CLASS);
      sideBar.style.display = "none";
    }, 300);
  };

  modalLayout.addEventListener("click", (event) => {
    if (event.target.id === "modal-layout") {
      closeSideBar();
    }
  });

  if (openSideBarButton) {
    openSideBarButton.addEventListener("click", () => {
      openSideBar();
      openModal();
    });
  }

  if (closeSideBarButton) {
    closeSideBarButton.addEventListener("click", () => {
      closeSideBar();
      closeModal();
    });
  }
}
