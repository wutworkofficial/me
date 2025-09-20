const handleAddOrRemoveActiveClass = (callback) => (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }

    callback?.()
  })
}

export const setupActiveSectionObserver = (callback) => {
  const options = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver(
    handleAddOrRemoveActiveClass(callback),
    options,
  )

  const targets = document.querySelectorAll('.parallax-section > div')
  targets.forEach((target) => observer.observe(target))
}
