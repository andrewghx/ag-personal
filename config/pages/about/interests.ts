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
      name: 'Interest',
      copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
    },
    {
      name: 'Interest',
      copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
    },
    {
      name: 'Interest',
      copy: '<p>Do ipsum exercitation id voluptate fugiat. Eu eiusmod aute pariatur Lorem exercitation ipsum in consectetur anim ullamco in excepteur ut excepteur. Excepteur ex dolor adipisicing magna. Sint aute laboris exercitation aute est aliqua pariatur. Et reprehenderit aute veniam adipisicing officia in enim ullamco quis deserunt ullamco. Eiusmod non voluptate consequat magna cupidatat aliqua anim incididunt elit sit eiusmod eu voluptate cillum.</p>'
    },
  ]
}

export default settings
