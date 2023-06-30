addPageClassName("pets-page");

useSideBar("left");

let HTMLdata = document.getElementById("data-pets").textContent;
let pets = JSON.parse(HTMLdata);

function onHandlerPetModalOpen(index) {
  let currentPet = pets[index];
  let currentPetHabitat = currentPet.habitat;

  let petName = document.getElementById("pet-name");
  let petImage = document.getElementById("pet-image");
  let petHabitat = document.getElementById("pet-habitat");
  let petDescription = document.getElementById("pet-description");

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
