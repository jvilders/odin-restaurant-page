import { staffCards, IStaffCard } from "./staffCards.js";

function buildStaffCard(staffCard: IStaffCard): HTMLElement {
  const staffCardElement = document.createElement("div");
  staffCardElement.classList.add("staff-card");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("staff-image");
  imageWrapper.innerHTML = staffCard.image;

  const name = document.createElement("span");
  name.classList.add("staff-name");
  name.innerText = staffCard.name;

  const title = document.createElement("span");
  title.classList.add("staff-title");
  title.innerText = staffCard.title;

  const blurb = document.createElement("p");
  blurb.classList.add("staff-blurb");
  blurb.innerText = staffCard.blurb;

  staffCardElement.append(imageWrapper, name, title, blurb);
  return staffCardElement;
}

function buildHiringCard(): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("staff-opening");
  card.innerHTML = "This spot could be <span>Yours!</span>";

  return card;
}

function buildStaffContainer(): HTMLElement {
  const staffCardsContainer = document.createElement("div");
  staffCardsContainer.classList.add("staff-cards");

  const staffCardElements = staffCards.map(buildStaffCard);
  const hiringCard = buildHiringCard();

  staffCardsContainer.append(...staffCardElements, hiringCard);
  return staffCardsContainer;
}

function buildStaffSection(): HTMLElement {
  const staff = document.createElement("div");
  staff.classList.add("staff");

  const staffH2 = document.createElement("h2");
  staffH2.innerText = "Who we are";

  const staffCardsContainer = buildStaffContainer();

  staff.append(staffH2, staffCardsContainer);
  return staff;
}

// function buildInfoBoxes(): HTMLElement {}

export default function buildContactPage(): HTMLElement {
  const mainElement = document.createElement("main");
  mainElement.classList.add(
    "contact-main",
    "width-constrained",
    "margin-centered"
  );

  const staffSection = buildStaffSection();
  //   const infoBoxes = buildInfoBoxes();

  mainElement.append(staffSection);
  return mainElement;
}
