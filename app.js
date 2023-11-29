import { SevoFilter } from "./SevoFilter.js";

const stuffList = document.querySelectorAll("[data-category]");
const filterButtons = document.querySelector("#filter-buttons");

const sf = new SevoFilter(stuffList);

filterButtons.appendChild(sf.buttonsContainer);

sf.onComplete = () => {
  sf.filterButtonClick(document.querySelector("button[data-filter='All']"));
};
sf.run();
