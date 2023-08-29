images = document.querySelectorAll(".carousel .carousel-item img");

function changeTitle(title) {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    })
}

images.forEach(img => {
    img.addEventListener("click", () => {
        const banner = document.querySelector(".banner");
        console.log(img.title)
        banner.style.background = `url(../img/movies/bg-${img.title}.jpeg)`;
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = "center";
        changeTitle(img.title)
    })
});