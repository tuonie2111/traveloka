// ==========================================
// FEATURE 1: GALLERY FILTER
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        galleryItems.forEach(function (item) {

            const category =
                item.dataset.category;


            if (
                filter === "all" ||
                filter === category
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});


// ==========================================
// FEATURE 2: DARK MODE
// ==========================================

const darkModeButton =
    document.getElementById(
        "darkModeButton"
    );


darkModeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );


        const dark =
            document.body.classList.contains(
                "dark-mode"
            );


        darkModeButton.innerHTML =
            dark
            ? '<i class="bi bi-sun"></i>'
            : '<i class="bi bi-moon"></i>';

    }
);


// ==========================================
// FEATURE 3: IMAGE MODAL
// ==========================================

const galleryImages =
    document.querySelectorAll(
        ".gallery-image"
    );

const imageModal =
    document.getElementById(
        "imageModal"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


galleryImages.forEach(function (image) {

    image.addEventListener(
        "click",
        function () {

            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

            imageModal.classList.add(
                "open"
            );

        }
    );

});


closeModal.addEventListener(
    "click",
    function () {

        imageModal.classList.remove(
            "open"
        );

    }
);


imageModal.addEventListener(
    "click",
    function (event) {

        if (event.target === imageModal) {

            imageModal.classList.remove(
                "open"
            );

        }

    }
);


// ESC closes image preview

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            imageModal.classList.remove(
                "open"
            );

        }

    }
);


// ==========================================
// FEATURE 4: BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);