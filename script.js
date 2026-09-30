```javascript
const portfolioItems =
    document.querySelectorAll(".portfolio-item");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const lightboxClose =
    document.querySelector(".lightbox-close");

const lightboxNumber =
    document.querySelector(".lightbox-number");


portfolioItems.forEach((item) => {

    item.addEventListener("click", () => {

        const image =
            item.getAttribute("data-image");

        const number =
            item.getAttribute("data-number");

        lightboxImage.src = image;

        lightboxNumber.textContent =
            `${number} / 10`;

        lightbox.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow =
        "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);
```
