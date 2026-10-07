// Always open website from the top
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});
// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
    ".section, .countdown-section, .about-card, .day-card, .tradition, .gallery-item"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});

// ================= INTERACTIVE NAVARATRI =================

const navData2026 = {

    1: [
        "Shailaputri",
        "Shailaputri is the first form of Goddess Durga. She represents strength, purity and devotion and is associated with the power of nature.",
        "She is worshipped for strength, peace and a strong beginning."
    ],

    2: [
        "Brahmacharini",
        "Brahmacharini is the second form of Goddess Durga. She represents devotion, determination, patience and spiritual strength.",
        "She is worshipped for peace, patience and inner strength."
    ],

    3: [
        "Chandraghanta",
        "Chandraghanta is the third form of Goddess Durga. She represents courage, peace and protection.",
        "She symbolizes bravery and the power to overcome challenges."
    ],

    4: [
        "Kushmanda",
        "Kushmanda is the fourth form of Goddess Durga. She is associated with energy, positivity and the creation of life.",
        "She is worshipped for health, prosperity and positive energy."
    ],

    5: [
        "Skandamata",
        "Skandamata is the fifth form of Goddess Durga and the mother of Lord Skanda. She represents motherhood, compassion and protection.",
        "She is worshipped for peace, wisdom and the well-being of children."
    ],

    6: [
        "Katyayani",
        "Katyayani is the sixth form of Goddess Durga. She represents courage, power and determination.",
        "She symbolizes strength and victory over difficulties."
    ],

    7: [
        "Kalaratri",
        "Kalaratri is the seventh form of Goddess Durga. She represents powerful protection and the removal of negativity and fear.",
        "She is worshipped for courage, protection and the removal of obstacles."
    ],

    8: [
        "Mahagauri",
        "Mahagauri is the eighth form of Goddess Durga. She represents purity, peace, calmness and spiritual strength.",
        "She is worshipped for peace, prosperity and a pure heart."
    ],

    9: [
        "Siddhidatri",
        "Siddhidatri is the ninth and final form of Goddess Durga. She represents spiritual wisdom, perfection and divine blessings.",
        "She is worshipped for knowledge, success and spiritual fulfilment."
    ]

};

document.querySelectorAll(".day-card").forEach(function(card) {

    card.addEventListener("click", function() {

        const selectedDay = card.getAttribute("data-day");
        const selectedData = navData2026[selectedDay];

        document.getElementById("detailDay").textContent =
            "Day " + selectedDay;

        document.getElementById("detailName").textContent =
            selectedData[0];

        document.getElementById("detailText").textContent =
            selectedData[1] + " " + selectedData[2];

    });

});
// ================= GALLERY LIGHTBOX =================

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        const image = item.querySelector("img");
        const caption = item.querySelector("p");

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = caption.textContent;

        lightbox.classList.add("show");
    });
});

lightboxClose.addEventListener("click", function() {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= ACTIVE NAVIGATION =================

const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
// ================= HAMBURGER MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});
/* ================= DASARA COUNTDOWN ================= */

const dasaraDate = new Date("October 20, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = dasaraDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);