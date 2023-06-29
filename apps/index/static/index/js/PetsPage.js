addPageClassName("pets-page");

useSideBar("left");

const HTMLdata = document.getElementById("data-pets").textContent;
const pets = JSON.parse(HTMLdata);

function onHandlerPetModalOpen(index) {
  const currentPet = pets[index];
  const currentPetHabitat = currentPet.habitat;

  const petName = document.getElementById("pet-name");
  const petImage = document.getElementById("pet-image");
  const petHabitat = document.getElementById("pet-habitat");
  const petDescription = document.getElementById("pet-description");

  petName.textContent = currentPet.name;
  petImage.src = currentPet.image;
  petHabitat.textContent = `${currentPetHabitat.place},
  ${currentPetHabitat.habitat_temperature}`;

  if (currentPet.description) {
    petDescription.textContent = currentPet.description;
  } else {
    petDescription.textContent = "Описания нет";
  }

  openModal();
  openPetModal();
}
