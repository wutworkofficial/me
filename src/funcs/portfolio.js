import { player } from './video-player'

export const handleVideoPlayerControls = () => {
  const target = document.querySelector('.my-portfolio-1')
  const isActive = target.classList.contains('active')

  if (isActive) {
    player.play()
    return
  }

  player.pause()
  player.currentTime(0)
}

const handleParallaxSectionMove = () => {
  const target = document.querySelector('.parallax-section')
  const retard = target.getAttribute('data-retard') ?? 0.5
  const marginTop = window.scrollY * +retard

  if (marginTop >= 300) return

  target.style.marginTop = `-${window.scrollY * +retard}px`
}

const handlePortfolioPresent = () => {
  const targets = document.querySelectorAll('[class^=my-portfolio-]')

  targets.forEach((target) => {
    const rect = target.getBoundingClientRect()

    const scrollOffset = 300

    const top = rect.top
    const start = top - scrollOffset
    let scale = 0

    const image = target.querySelector('.portfolio-present-image')
    const retard = image.getAttribute('data-retard') ?? 0.5

    if (start < 0) {
      scale = Math.abs(start / (window.scrollY * +retard))
    } else {
      scale = 0
    }

    image.style.transform = `scale(${scale < 1 ? scale : 1})`
  })
}

export const setupPortfolioController = () => {
  window.addEventListener('scroll', () => {
    handleParallaxSectionMove()
    handlePortfolioPresent()
  })
}
