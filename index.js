// Funzione Carosello
function Carousel(id) {
    let items = document.querySelectorAll(id + '.carousel .carousel-item');


    items.forEach((el) => {
        const minPerSlide = 6;
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

let carousels = document.querySelectorAll('.carousel.slide');

for (const carousel of carousels) {
    let id = '#' + carousel.id;
    Carousel(id);
}

//Inserisco una classe di appoggio sulla card al passaggio del mouse 
const movieBlocks = document.getElementsByClassName("movie-block");

for (movieBlock of movieBlocks) {
    movieBlock.addEventListener("mouseenter", (event) => {
        event.target.getElementsByTagName("div")[0].classList.add("show");
    });
    movieBlock.addEventListener("mouseleave", (event) => {
        event.target.getElementsByTagName("div")[0].classList.remove("show");
    });
}

// funzioe extra per animare le righe con lo scroll

let View = window.innerHeight - (window.innerHeight / 5);
let containers = document.querySelectorAll('.container-fluid ');
for (const container of containers) {

    FadeIn(container);
}
document.addEventListener('scroll', () => {
    let righe = document.querySelectorAll('.carousel');

    for (const Carosello of righe) {
        let c = Carosello.parentNode.parentNode;
    let rigaC= document.getElementById(c.id);
    FadeIn(rigaC)
    }
})

function FadeIn(div) {
    let View = window.innerHeight - (window.innerHeight / 5);
    if (div.getBoundingClientRect().top > View) {
        div.style.animation = 'FadeOut 0.5s ease-in-out forwards';
    } else {
        div.style.animation = 'FadeIn 1s ease-in-out forwards';
    }
}
