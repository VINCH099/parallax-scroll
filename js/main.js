window.addEventListener('scroll', (у) => {
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
})
