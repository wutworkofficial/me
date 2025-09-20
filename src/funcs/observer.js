const addOrRemoveActiveClassCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  })
}

export const setupAddOrRemoveActiveClassObserver = () => {
  const options = {
    threshold: 0.2,
  }
  const observer = new IntersectionObserver(
    addOrRemoveActiveClassCallback,
    options,
  )

  const targets = document.querySelectorAll('.parallax-section > div')
  targets.forEach((target) => observer.observe(target))
}
