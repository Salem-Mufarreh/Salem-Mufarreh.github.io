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
        console.log(entry.target);
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);