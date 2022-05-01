$('document').ready(function () {
    var typed = new Typed('#typed', {
        //stringsElement: '#typed-strings',
        backSpeed: 80,
        typeSpeed: 80,
        smartBackspace: true,
        strings: ['Web Developer ', 'Full Stack Developer ', 'Software Developer'],
        loop: true
    });
}); 

function download() {
    window.location.href = "./Files/Resume.pdf";

}

const navigation = document.querySelector(".primary_navigation");
const navtoggle = document.querySelector(".mobile-toggle");


navtoggle.addEventListener("click", () => {
    const visibility = navigation.getAttribute("data-visible");
    if (visibility === "false") {
        navigation.setAttribute("data-visible", true);
        navtoggle.setAttribute("aria-expanded", true);
    }
    else {
        navigation.setAttribute('data-visible', false);
        navtoggle.setAttribute("aria-expanded", false);
    }
});

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(".primary-header").style.backgroundColor = "transparent";
            

        }
        else {
            document.querySelector(".primary-header").style.backgroundColor = "white";
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);