import generateSeoFiles from '~/scripts/seoFiles/generateSeoFiles'

type PostBuild = () => void

const postBuild: PostBuild = () => {
  const scripts = [
    generateSeoFiles
  ]
  for (const script of scripts) script()
}

postBuild()
