function myFunction() {
  var element = document.querySelector("body");
  var buttonImage = document.querySelector(".toggle-button img");

  element.classList.toggle("dark-mode");

  // Växla mellan flip och flip-back
  if (buttonImage.classList.contains("flip")) {
    buttonImage.classList.remove("flip");
    buttonImage.classList.add("flip-back");
  } else {
    buttonImage.classList.remove("flip-back");
    buttonImage.classList.add("flip");
  }

  // Byt bild och spara temat i localStorage
  if (element.classList.contains("dark-mode")) {
    buttonImage.src = "/vectors/light-mode.svg";
    localStorage.setItem("theme", "dark"); // Spara mörkt tema
  } else {
    buttonImage.src = "/vectors/dark-mode.svg";
    localStorage.setItem("theme", "light"); // Spara ljust tema
  }
}

// Kontrollera sparade temat när sidan laddas
document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector("body");
  var buttonImage = document.querySelector(".toggle-button img");
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    element.classList.add("dark-mode");
    buttonImage.src = "/vectors/light-mode.svg";
    buttonImage.classList.add("flip"); // Antag att vi börjar med ljust tema
  } else {
    element.classList.remove("dark-mode");
    buttonImage.src = "/vectors/dark-mode.svg";
    buttonImage.classList.remove("flip");
  }
});
