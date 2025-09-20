import videojs from 'video.js'

const options = {
  loop: true,
  autoplay: 'muted',
}

export const player = videojs('my-player', options)

player.ready(() => {
  console.info('The player is ready!')
})
