let thumbnails = document.getElementsByClassName("thumbnail")
let activeImages = document.getElementsByClassName("active")

for (let i = 0; i < thumbnails.length; i++) {
    const element = thumbnails[i];
    element.addEventListener('mouseover', () => {
        if(activeImages.length > 0) {
            activeImages[0].classList.remove("active")
        }
        this.classList.add("active")
        document.getElementById("featured").src = this.src
    })
}
let buttonRight = document.getElementById("slideRight")
let buttonLeft = document.getElementById("slideLeft")

buttonLeft.addEventListener("click", () => {
    document.getElementById("slider").scrollLeft -= 180
})
buttonRight.addEventListener("click", () => {
    document.getElementById("slider").scrollLeft += 180
})