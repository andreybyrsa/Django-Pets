addPageClassName("index-page");

useSideBar("left");

usePet("snake", 500);
usePet("fish", 600);
usePet("fox", 200);

async function usePet(petName, delay) {
  await waitLoadingStyles("less:static-index-less-IndexPage");

  let currentPet = document.getElementById(`pet-${petName}`);
  const REVERSE_PET_IMAGE_CLASS = "index-page__pet-image--reverse";

  let currentPetWidth = currentPet.clientWidth;
  let distance = 0;
  let step = 10;
  let side = "left";

  const go = () => {
    let maxDistance = document.getElementById(`${petName}-area`).offsetWidth;
    let currentDistance = currentPetWidth + distance;

    if (currentDistance + step < maxDistance) {
      distance += step;
      currentPet.style = `${side}: ${distance}px`;
    } else {
      distance = maxDistance - currentPetWidth;
      currentPet.style = `${side}: ${distance}px`;

      distance = 0;
      side = side === "left" ? "right" : "left";

      if (currentPet.classList.contains(REVERSE_PET_IMAGE_CLASS)) {
        currentPet.classList.remove(REVERSE_PET_IMAGE_CLASS);
      } else {
        currentPet.classList.add(REVERSE_PET_IMAGE_CLASS);
      }
    }
  };

  setInterval(go, delay);
}
