addPageClassName("index-page");

useSideBar("left");

usePet("snake", 500);
usePet("fish", 600);
usePet("fox", 200);

async function usePet(petName, delay) {
  await waitLoadingStyles("less:static-index-less-IndexPage");

  const currentPet = document.getElementById(`pet-${petName}`);
  const reversePetImageClass = "index-page__pet-image--reverse";

  const currentPetWidth = currentPet.clientWidth;
  let distance = 0;
  const step = 10;
  let side = "left";

  const go = () => {
    const maxDistance = document.getElementById(`${petName}-area`).offsetWidth;
    const currentDistance = currentPetWidth + distance;

    if (currentDistance + step < maxDistance) {
      distance += step;
      currentPet.style = `${side}: ${distance}px`;
    } else {
      distance = maxDistance - currentPetWidth;
      currentPet.style = `${side}: ${distance}px`;

      distance = 0;
      side = side === "left" ? "right" : "left";

      if (currentPet.classList.contains(reversePetImageClass)) {
        currentPet.classList.remove(reversePetImageClass);
      } else {
        currentPet.classList.add(reversePetImageClass);
      }
    }
  };

  setInterval(go, delay);
}
