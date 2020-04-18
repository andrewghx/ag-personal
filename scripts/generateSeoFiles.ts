import generateSitemap from '~/scripts/seoFiles/generateSitemap'
import generateRobots from '~/scripts/seoFiles/generateRobots'

type GenerateSeoFiles = () => void
const generateSeoFiles: GenerateSeoFiles = () => {
  generateSitemap()
  generateRobots()
}

export default generateSeoFiles
