const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-btn");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

/*
  BOOKING SETUP
  ----------------
  When you have your booking URL, change the href on #bookingButton to it.
  Example:
  document.getElementById("bookingButton").href = "https://cal.com/YOUR-NAME/30min";
  document.getElementById("bookingButton").target = "_blank";
  document.getElementById("bookingButton").rel = "noopener";
*/
