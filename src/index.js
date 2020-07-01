import Utilities from "./morutilities.js";
import "./styles.scss";

Utilities.log("Utilities loaded...");

function reverseString(str) {
  return str.split("").reverse().join("");
}

setTimeout(function () {
  for (var link of document.querySelectorAll(".email")) {
    let address = reverseString(link.innerHTML);
    link.innerHTML = address.replace("@", "@<wbr>");
    link.href = "mailto:" + address;
    link.classList.add("obfuscated");
  }
}, 1);

function getPositionY(el) {
  return Math.round(el.getBoundingClientRect().top + window.scrollY);
}
let hasScrolled = false;
Utilities.onScroll((scrollPos) => {
  if (hasScrolled === false && scrollPos > 20) {
    document.body.classList.add("has-scrolled");
    hasScrolled = true;
  } else if (hasScrolled === true && scrollPos < 20) {
    document.body.classList.remove("has-scrolled");
    hasScrolled = false;
  }
});
