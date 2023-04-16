import {
  entreeItems,
  mainsItems,
  dessertsItems,
  drinksItems,
  IDrinkItem,
  IFoodItem,
} from "./menuItems.js";

function buildFoodCard(item: IFoodItem): HTMLElement {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("menu-item");

  const itemName = document.createElement("span");
  itemName.classList.add("menu-item__name");
  itemName.innerText = item.name;

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("menu-item__price");
  itemPrice.innerText = item.price.toString();

  const itemDescription = document.createElement("span");
  itemDescription.classList.add("menu-item__description");
  itemDescription.innerText = item.description;

  itemDiv.append(itemName, itemPrice, itemDescription);

  return itemDiv;
}

function buildDrinkCard(item: IDrinkItem): HTMLElement {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("drink-item");

  const itemName = document.createElement("span");
  itemName.classList.add("drink-item__name");
  itemName.innerText = item.name;

  const itemFiller = document.createElement("div");
  itemFiller.classList.add("drink-item__filler");

  const itemPrice = document.createElement("span");
  itemPrice.classList.add("drink-item__price");
  itemPrice.innerText = item.price.toString();

  itemDiv.append(itemName, itemFiller, itemPrice);

  return itemDiv;
}

function buildEntrees(): HTMLElement {
  const entrees = document.createElement("div");
  entrees.classList.add("entrees");

  const entreesHeader = document.createElement("span");
  entreesHeader.classList.add("menu-header", "span2");
  entreesHeader.innerText = "Entrees";

  const entreeItemElements: HTMLElement[] = entreeItems.map(buildFoodCard);

  entrees.append(entreesHeader, ...entreeItemElements);

  return entrees;
}

function buildMains(): HTMLElement {
  const mains = document.createElement("div");
  mains.classList.add("mains");

  const mainsHeader = document.createElement("span");
  mainsHeader.classList.add("menu-header", "span2");
  mainsHeader.innerText = "Mains";

  const mainsItemElements: HTMLElement[] = mainsItems.map(buildFoodCard);

  mains.append(mainsHeader, ...mainsItemElements);

  return mains;
}

function buildDesserts(): HTMLElement {
  const desserts = document.createElement("div");
  desserts.classList.add("desserts");

  const dessertsHeader = document.createElement("span");
  dessertsHeader.classList.add("menu-header");
  dessertsHeader.innerText = "Desserts";

  const dessertsItemElements: HTMLElement[] = dessertsItems.map(buildFoodCard);

  desserts.append(dessertsHeader, ...dessertsItemElements);

  return desserts;
}

function buildDrinks(): HTMLElement {
  const drinks = document.createElement("div");
  drinks.classList.add("drinks");

  const drinksHeader = document.createElement("span");
  drinksHeader.classList.add("menu-header");
  drinksHeader.innerText = "Drinks";

  const drinksItemElements: HTMLElement[] = drinksItems.map(buildDrinkCard);

  drinks.append(drinksHeader, ...drinksItemElements);

  return drinks;
}

export default function buildMenuPage(): HTMLElement {
  const mainElement = document.createElement("main");
  mainElement.classList.add(
    "menu-main",
    "width-constrained",
    "margin-centered"
  );

  const menuName = document.createElement("span");
  menuName.classList.add("menu-name");
  menuName.innerText = "MaestroPlastique";

  const entrees = buildEntrees();
  const mains = buildMains();
  const desserts = buildDesserts();
  const drinks = buildDrinks();

  mainElement.append(menuName, entrees, mains, desserts, drinks);

  return mainElement;
}
