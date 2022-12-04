const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const circles = document.querySelectorAll(".circle")
const progress = document.getElementById('progress')
let currentPosition = 1;

prev.addEventListener("click", function (evt) {
    currentPosition--;
    if (currentPosition < 1) {
        currentPosition = 1;
    }
    updateActiveStatus()
})


next.addEventListener("click", function (evt) {
    currentPosition++;
    if (currentPosition > circles.length) {
        currentPosition = circles.length
    }
    updateActiveStatus()
})

const updateActiveStatus = () => {
    circles.forEach((circle, index) => {
        if (index + 1 == currentPosition ) {
            circle.classList.add("active")
        } else if (currentPosition < index + 1){
            circle.classList.remove("active")
        }
    })
    progress.style.width = ((currentPosition - 1) * (100 / (circles.length - 1))) + "%"
    if (currentPosition === circles.length) {
        next.setAttribute("disabled", true)
    } else if (currentPosition === 1) {
        prev.setAttribute("disabled", true)
    }
    else {
        prev.removeAttribute('disabled')
        next.removeAttribute('disabled')
    }
}

