 let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6;
    let next = el.nextElementSibling;
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0];
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling;
    }
})

const movieBlocks = document.getElementsByClassName("movie-block");

for(movieBlock of movieBlocks) {
    movieBlock.addEventListener("mouseenter", (event) => {
        event.target.getElementsByTagName("div")[0].classList.add("show");
    });
    movieBlock.addEventListener("mouseleave", (event) => {
        event.target.getElementsByTagName("div")[0].classList.remove("show");
    });
}
console.log(movieBlocks);