const items = document.querySelectorAll(".section, .project, .mini-card");

items.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

items.forEach((item) => observer.observe(item));

const tabsTrack = document.querySelector(".tabs__track");
const tabsGroup = document.querySelector(".tabs__group");

if (tabsTrack && tabsGroup) {
  const clone = tabsGroup.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  tabsTrack.appendChild(clone);
}
