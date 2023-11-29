"use strict";

export class SevoFilter {
  constructor(inputStuffList) {
    this._inputStuffList = inputStuffList;
    this.activeClass = "active";
    this.all = "All";
    this.onComplete = () => {};

    this._categories = new Set();
    this._buttonsContainer = null;
    this._buttons = null;

    this._extractCategories();
    this.createButtons();
  }

  get buttonsContainer() {
    return this._buttonsContainer;
  }

  _extractCategories() {
    this._inputStuffList.forEach((item) => {
      const categories = item.dataset.category.split(",");
      categories.forEach((category) => {
        this._categories.add(category);
      });
    });
  }

  createButtons() {
    this._buttonsContainer = document.createElement("div");
    this._categories.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item;
      button.dataset.filter = item;
      this._buttonsContainer.appendChild(button);
    });
    const allButton = document.createElement("button");
    allButton.textContent = this.all;
    allButton.dataset.filter = this.all;
    this._buttonsContainer.appendChild(allButton);
    return this._buttonsContainer;
  }

  run() {
    this._buttons = this._buttonsContainer.querySelectorAll(
      "button[data-filter]"
    );
    this._buttons.forEach((item) => {
      item.addEventListener("click", (evt) => {
        this.filterButtonClick(evt.target);
        this._filterContent(evt.target);
      });
    });
    this.onComplete();
  }

  filterButtonClick(target) {
    this._buttons.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    target.classList.add(this.activeClass);
  }

  _filterContent(target) {
    const filter = target.dataset.filter;
    this._inputStuffList.forEach((item) => {
      if (filter === this.all) {
        item.removeAttribute("hidden");
        return;
      }
      item.removeAttribute("hidden");
      if (!item.dataset.category.includes(filter)) {
        item.setAttribute("hidden", "");
      }
    });
  }
}
