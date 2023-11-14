// main.js

document.addEventListener("DOMContentLoaded", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content-item");

  // Select tab content item
  function selectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to the current tab item
    this.classList.add("tab-border");
    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add the show class
    tabContentItem.classList.add("show");
  }

  // Remove bottom borders from all tab items
  function removeBorder() {
    tabItems.forEach((item) => {
      item.classList.remove("tab-border");
    });
  }

  // Remove the show class from all content items
  function removeShow() {
    tabContentItems.forEach((item) => {
      item.classList.remove("show");
    });
  }

  // Listen for tab item click
  tabItems.forEach((item) => {
    item.addEventListener("click", selectItem);
  });
});
