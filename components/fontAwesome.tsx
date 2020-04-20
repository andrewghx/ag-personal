import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { 
  faBars, 
  faTimes,
  faLaptopCode,
  faAt,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false 
library.add(faBars, faTimes, faLaptopCode, faAt, faFileAlt)

const FontAwesome = () => null

export default FontAwesome
