const aboutOverlayToggleCallback = () => {
  const overlay = document.querySelector('.about-overlay')
  const isActive = overlay.classList.contains('active')

  if (isActive) {
    overlay.classList.remove('active')
    return
  }

  overlay.classList.add('active')
}

export const setupAboutOverlayToggleController = () => {
  const aboutButton = document.querySelector('.about-button')
  const closeButton = document.querySelector('.about-close-button')

  aboutButton.addEventListener('click', aboutOverlayToggleCallback)
  closeButton.addEventListener('click', aboutOverlayToggleCallback)
}
