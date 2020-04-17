import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { 
  faBars, 
  faTimes 
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false 
library.add(faBars, faTimes)

const FontAwesome = () => null

export default FontAwesome
