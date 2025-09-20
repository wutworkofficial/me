import 'video.js/dist/video-js.css'
import './styles/main.css'
import './styles/responsive.css'

import {
  setupPortfolioController,
  handleVideoPlayerControls,
} from './funcs/portfolio'
import { setupAboutController } from './funcs/about'
import { setupActiveSectionObserver } from './funcs/observer'

setupActiveSectionObserver(handleVideoPlayerControls)

setupPortfolioController()
setupAboutController()
