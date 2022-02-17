/**
 * comment
 */

 "use strict";

(function() {

  let arrows = qsa(".arrowSmall");
  let projects = qsa(".projectExpanded");
  window.addEventListener("load", init);

  /**
  * the function that runs when the page loads;
  */
  function init() {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener("click", function() {
        toggleExpansion(arrows[i].dataset.target);
        //hideOthers(arrows[i].dataset.target);
      })
    }
  }

  function toggleExpansion(clickedTarget) {
    for (let i = 0; i < arrows.length; i++) {
      if (arrows[i].dataset.target != clickedTarget) {
        arrows[i].classList.toggle("hidden");
        arrows[i].parentNode.classList.toggle("disabledArrowButton");
      } else {
        //chaneg bottom margin or something??
      }
    }
  }

  /**
  * Returns the array of elements that match the given CSS selector.
  * @param {string} selector - CSS query selector
  * @returns {object[]} array of DOM objects matching the query.
  */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

})();