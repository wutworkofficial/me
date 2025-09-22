const aboutOverlayToggleCallback = () => {
  const target = document.body
  const isActive = target.classList.contains('show-about-us')

  if (isActive) {
    target.classList.remove('show-about-us')
    return
  }

  target.classList.add('show-about-us')
}

export const setupAboutController = () => {
  const aboutButton = document.querySelector('.about-button')
  const closeButton = document.querySelector('.about-close-button')

  aboutButton.addEventListener('click', aboutOverlayToggleCallback)
  closeButton.addEventListener('click', aboutOverlayToggleCallback)
}
