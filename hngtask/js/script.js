const buttons = document.querySelectorAll(".profile-buttons button");
const sections = document.querySelectorAll(".profile-section");
const profile = document.querySelector(".profile");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  profile.classList.add("is-active") :
  profile.classList.remove("is-active");
  profile.setAttribute("data-testid", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
