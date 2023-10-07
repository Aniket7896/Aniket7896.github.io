let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

function openResume() {
  window.open(
    "https://drive.google.com/file/d/1fLgozmtgw3A0Fo9lL0dnrtHZxHw_PiqJ/view?usp=sharing",
    "_blank"
  );
}

function paddingFunction() {
  let x = document.getElementById("home");
  x.style.padding = "100px";
}

document.querySelector("form").addEventListener("submit", saveFile);

function saveFile(e) {
  e.preventDefault();

  let Formdata = JSON.parse(localStorage.getItem("portfolioData")) || [];

  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let text = document.getElementById("subject").value;

  let data = {
    name: name,
    email: email,
    text: text,
  };
  Formdata.push(data);
  localStorage.setItem("portfolioData", JSON.stringify(Formdata));
}
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});