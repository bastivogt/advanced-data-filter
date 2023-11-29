import { SevoFilter } from "./SevoFilter.js";

const stuffList = document.querySelectorAll("[data-category]");
const filterButtons = document.querySelector("#filter-buttons");

const sfConfig = { all: "Alle" };
const sf = new SevoFilter(stuffList, sfConfig);

filterButtons.appendChild(sf.buttonsContainer);

sf.onComplete = () => {
  sf.filterButtonClick(
    document.querySelector(`button[data-filter='${sfConfig.all}']`)
  );
};
sf.run();
