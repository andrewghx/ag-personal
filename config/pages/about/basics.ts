import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  faGraduationCap,
  faMapMarkerAlt,
  
} from '@fortawesome/free-solid-svg-icons'

export interface InfoPoint {
  key: string
  img: IconDefinition
  text: string
}

export interface IntroductionSettings {
  titleText: string
  infoPoints: InfoPoint[]
  copy: string
}

const settings: IntroductionSettings = {
  titleText: 'The basics',
  infoPoints: [
    {
      key: 'location',
      img: faMapMarkerAlt,
      text: 'Kent, UK'
    },
    {
      key: 'education',
      img: faGraduationCap,
      text: 'University of Kent (BSc, Computer Science)'
    }
  ],
  copy: 'Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.'
}

export default settings
