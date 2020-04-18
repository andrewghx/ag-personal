import * as fs from 'fs'
import * as path from 'path'
import content from '~/config/seo/robots-content'
import findRoot from 'find-root'

type GenerateRobotsFunction = () => void

const generateRobots: GenerateRobotsFunction = () => {
  const __root = findRoot(__dirname)
  try {
    fs.writeFileSync(path.join(__root, 'public/robots.txt'), content, 'utf8')
  } catch (err) { console.log(err) }
}

export default generateRobots
