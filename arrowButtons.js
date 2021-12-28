/**
 * This is the JavaScript to change any arrow buttons on the page when clicked to the opposite direction.
 * This gives users feedback by creating an implied "show more"/"show less" button that changes to the
 * opposite of whatever it was when it was clicked, so users can expand or hide content and the button
 * reflects the current state of the content.
 */

"use strict";

(function() {

  window.addEventListener("load", init);

  /**
   * the function that runs when the page loads; finds all arrow buttons on page and runs function to change them when clicked
   */
  function init() {
    let arrowButtons = qsa(".arrowButton");
    for (let i = 0; i < arrowButtons.length; i++) {
      arrowButtons[i].addEventListener("click", function() {
        changeArrow(arrowButtons[i]);
      })
    }
  }

    /**
   * the function that changes the arrows when clicked (i.e. flips the arrow)
   * @param {node} arrow - any given arrow button
   */
  function changeArrow(arrow) {
    if (arrow.src.includes("/img/show-more-arrow.png")) {
      arrow.src = arrow.src.replace("-more", "-less");
    } else {
      arrow.src = arrow.src.replace("-less", "-more");
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