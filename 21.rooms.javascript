document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".thumbnail-track");
    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    const mainImg = document.querySelector(".main-preview-img");
    const thumbs = document.querySelectorAll(".thumb-box");

    if (prevBtn && nextBtn && track) {
        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -100, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: 100, behavior: "smooth" });
        });
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
            thumbs.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            
            const newSrc = thumb.querySelector("img").src;
            if (mainImg) mainImg.src = newSrc;
        });
    });
});
const track = document.querySelector(".thumbnail-track");
const cards = document.querySelectorAll(".thumb-box");


const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.prepend(lastClone);


track.scrollLeft = cards[0].offsetWidth;

track.addEventListener("scroll", () => {

    // If reached cloned last card on the left
    if (track.scrollLeft <= 0) {

        // Disable smooth scrolling temporarily
        track.style.scrollBehavior = "auto";
        track.scrollLeft =
            track.scrollWidth - (2 * cards[0].offsetWidth);

        // Re-enable smooth scrolling
        track.style.scrollBehavior = "smooth";
    }

    else if (
        track.scrollLeft >=
        track.scrollWidth - track.offsetWidth
    ) {

        track.style.scrollBehavior = "auto";

        track.scrollLeft = cards[0].offsetWidth;

        // Re-enable smooth scrolling
        track.style.scrollBehavior = "smooth";
    }
});