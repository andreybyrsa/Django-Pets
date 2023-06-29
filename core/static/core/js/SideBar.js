function useSideBar(side) {
  const sideBar = document.getElementById(`${side}-side-bar`);

  const openSideBarButton = document.getElementById(
    `open-${side}-side-bar-button`
  );
  const closeSideBarButton = document.getElementById(
    `close-${side}-side-bar-button`
  );

  const openingSideBarClass = `${side}-side-bar--opened`;
  const closingSideBarClass = `${side}-side-bar--closed`;

  const openSideBar = () => {
    sideBar.style.display = "flex";
    sideBar.classList.add(openingSideBarClass);
  };

  const closeSideBar = () => {
    sideBar.classList.add(closingSideBarClass);
    setTimeout(() => {
      sideBar.classList.remove(openingSideBarClass);
      sideBar.classList.remove(closingSideBarClass);
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
