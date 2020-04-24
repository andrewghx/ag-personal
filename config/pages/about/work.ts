export interface WorkSettings {
  titleText: string
  jobs: Organisation[]
}

export interface Organisation {
  name: string
  location?: string
  roles: JobRole[]
}

export interface JobRole {
  title: string
  dates: string
  copy: string
}

const settings: WorkSettings = {
  titleText: 'My work experience',
  jobs: [
    {
      name: 'Holiday Extras',
      location: 'Hythe, UK',
      roles: [
        {
          title: 'Software Engineer',
          dates: 'dates',
          copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
        }
      ]
    },
    {
      name: 'Coop',
      location: 'Kent, UK',
      roles: [
        {
          title: 'Store Manager',
          dates: 'dates',
          copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
        },
        {
          title: 'Team Manager',
          dates: 'dates',
          copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
        }
      ]
    }
  ]
}

export default settings
