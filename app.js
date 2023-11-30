import { SevoContentFilter } from "./SevoFilter.js";

const contentList = document.querySelectorAll("[data-category]");
const filterButtons = document.querySelector("#filter-buttons");

const scfConfig = { all: "Alle" };
const scf = new SevoContentFilter(contentList, scfConfig);

filterButtons.appendChild(scf.buttonsContainer);

scf.onComplete = (target) => {
  console.log(target.categories);
  target.filter(
    document.querySelector(`button[data-filter='${target.categories[4]}']`)
  );

  /*   target.filter(
    document.querySelector(`button[data-filter='${target.categories[0]}']`)
  );*/
};
scf.run();
