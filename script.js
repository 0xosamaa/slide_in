const slides = document.querySelectorAll('.slide')

window.addEventListener('scroll', scrollIn)

function scrollIn() {
  slides.forEach((slide) => {
    if (slide.getBoundingClientRect().top < 0.8 * window.innerHeight) {
      slide.style.transform = 'translateX(0)'
      slide.style.opacity = 1
    } else {
      slide.style.transform = ''
      slide.style.opacity = ''
    }
    if (slide.getBoundingClientRect().bottom < 0.1 * window.innerHeight) {
      slide.style.transform = ''
      slide.style.opacity = ''
    }
  })
}

scrollIn()
