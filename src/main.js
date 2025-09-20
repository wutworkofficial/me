import './styles.css'
import { setupParallaxScrolling } from './funcs/portfolio'
import { setupAboutOverlayToggleController } from './funcs/about'
import { setupAddOrRemoveActiveClassObserver } from './funcs/observer'

setupParallaxScrolling()
setupAddOrRemoveActiveClassObserver()
setupAboutOverlayToggleController()
