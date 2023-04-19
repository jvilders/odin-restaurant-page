import { staffCards, IStaffCard } from "./staffCards.js";
import openingHours from "./openingHours.js";
import mapMarkerImage from "./map-marker.svg";
import phoneImage from "./phone-outline.svg";
import emailImage from "./at.svg";

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

function buildOpenVisualization(
  openingHour: number,
  closingHour: number
): HTMLElement {
  const graph = document.createElement("div");
  graph.classList.add("hours-graph");

  const hourElements: HTMLElement[] = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hour", "closed");
    hourDiv.setAttribute("data-hour", hour.toString());
    hourElements.push(hourDiv);
  }

  for (let openHour = openingHour; openHour < closingHour; openHour++) {
    hourElements[openHour].classList.remove("closed");
    hourElements[openHour].classList.add("open");
  }

  graph.append(...hourElements);
  return graph;
}

function buildHourGrid(): HTMLElement {
  const hourGrid = document.createElement("div");
  hourGrid.classList.add("hour-grid");

  for (const openingHoursObj of openingHours) {
    const day = document.createElement("span");
    day.innerText = openingHoursObj.day;

    const openVisualization = buildOpenVisualization(
      openingHoursObj.openingHour,
      openingHoursObj.closingHour
    );

    hourGrid.append(day, openVisualization);
  }

  return hourGrid;
}

function buildOpeningHours(): HTMLElement {
  const openingHours = document.createElement("div");
  openingHours.classList.add("opening-hours");

  const header = document.createElement("h2");
  header.innerText = "Opening hours";

  const hourGrid = buildHourGrid();

  openingHours.append(header, hourGrid);
  return openingHours;
}

function buildContactInformation(): HTMLElement {
  const contactInformation = document.createElement("div");
  contactInformation.classList.add("contact-information");

  const header = document.createElement("h2");
  header.innerText = "Contact information";

  const wrapGrid = document.createElement("div");
  wrapGrid.classList.add("wrap-grid");

  const contactGrid = document.createElement("div");
  contactGrid.classList.add("contact-grid");

  const mapMarkerIcon = document.createElement("div");
  mapMarkerIcon.classList.add("contact-icon");
  mapMarkerIcon.innerHTML = mapMarkerImage;

  const address = document.createElement("div");
  address.classList.add("address");
  const street = document.createElement("p");
  street.innerText = "RealStreet 4";
  const postalCode = document.createElement("p");
  postalCode.innerText = "123456 AB";
  const state = document.createElement("p");
  state.innerText = "North RealState";
  address.append(street, postalCode, state);

  const phoneIcon = document.createElement("div");
  phoneIcon.classList.add("contact-icon");
  phoneIcon.innerHTML = phoneImage;

  const phoneNumber = document.createElement("span");
  phoneNumber.innerText = "+11 8 12345678";

  const emailIcon = document.createElement("div");
  emailIcon.classList.add("contact-icon");
  emailIcon.innerHTML = emailImage;

  const emailAddress = document.createElement("span");
  emailAddress.innerText = "contact@maestroplastique.com";

  contactGrid.append(
    mapMarkerIcon,
    address,
    phoneIcon,
    phoneNumber,
    emailIcon,
    emailAddress
  );

  wrapGrid.appendChild(contactGrid);
  contactInformation.append(header, wrapGrid);

  return contactInformation;
}

function buildInfoBoxes(): HTMLElement {
  const InfoBoxes = document.createElement("div");
  InfoBoxes.classList.add("info-boxes");

  const openingHours = buildOpeningHours();
  const contactInformation = buildContactInformation();

  InfoBoxes.append(openingHours, contactInformation);
  return InfoBoxes;
}

export default function buildContactPage(): HTMLElement {
  const mainElement = document.createElement("main");
  mainElement.classList.add(
    "contact-main",
    "width-constrained",
    "margin-centered"
  );

  const staffSection = buildStaffSection();
  const infoBoxes = buildInfoBoxes();

  mainElement.append(staffSection, infoBoxes);
  return mainElement;
}
