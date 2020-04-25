export interface InterestsSettings {
  titleText: string
  interests: Interest[]
}

export interface Interest {
  name: string
  copy: string
}

const settings: InterestsSettings = {
  titleText: 'Other things I like to do',
  interests: [
    {
      name: 'Web Development',
      copy: '<p>Even though this is my job, it is also a passion and I devote hours of time to finding out about new tech, expanding my horizons and the skills I can bring to my work and the people I work with. I feel like you can never be knowledgeable enough about the tech surrounding web apps and I strive to constantly improve and learn, refining my skills along the way.</p>'
    },
    {
      name: 'Hiking and Walking',
      copy: '<p>I love to get out into nature. A long walk in the countryside or a hike up a hill is so simple but so pleasing. A pass time of mine! One of my proudest achievements was hiking Scafell Pike (Okay I know it is only a small mountain but I enjoyed it!)</p>'
    },
    {
      name: 'Japan & the Japanese language',
      copy: '<p>I have studied the Japanese language for around five years. This is due to the amazing time I have had travelling in Japan in the past. I love to learn more about the culture, cook the food and expand my ability to speak the language. I can read and write a bit - am I fluent? Not at all, but I\'m proud of the progress I have made learning one of the most difficult languages there is for an English speaker!</p>'
    },
    {
      name: 'Final Fantasy',
      copy: '<p>This video game series is what got me into development in the first place - my very first website was a primitive one based on this game series! Unfortunately it has died a death now but at the time it was top stuff, I promise! I still love the series and will be eagerly playing the ff7 "remake" series.</p>'
    },
  ]
}

export default settings
