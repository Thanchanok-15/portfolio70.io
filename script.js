const works = document.querySelectorAll(".work");

const lightbox = document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const closeButton =
    document.querySelector(".close");

const lightboxNumber =
    document.querySelector(".lightbox-number");


works.forEach((work) => {

    work.addEventListener("click", () => {

        const image =
            work.getAttribute("data-image");

        const number =
            work.querySelector(".work-info span")
                .textContent;

        lightboxImage.src = image;

        lightboxNumber.textContent =
            `${number} / 10`;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
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
