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
  copy: `<p>My passion for development around web technologies emerged when I was just starting secondary school. I learned the ways of HTML and CSS back then and this has given me the knowledge and understanding that I draw upon today to find and implement practical solutions.<p>
  <p>I am now on a permanent career path which is taking me deep into the world of web apps and the tech stacks that back them up. I've had experience working in agile teams and I'm constantly looking to expand my knowledge and learn new stuff. My area of absolute expertise lies in the world of React. I am very capable and constantly developing my knowledge of the technology that drives information to the browser as well as cloud computing options such as AWS and Google Cloud.</p>
  <p>I'm a proven leader and responsible individual. My career has taken me in different directions, from managing and leading a retail team to a brief stint teaching and coaching. All of this has given me critical skills in organisation and being part of a team.</p>
  `
}

export default settings
