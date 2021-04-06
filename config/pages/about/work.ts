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
      name: 'Feedr',
      location: 'London, UK',
      roles: [
        {
          title: 'Full Stack Developer',
          dates: 'September 2019 - Current',
          copy: `<p>Working on full stack React / Node / Typescript / ReactNative stack with PostgreSQL and MongoDB.</p>
          <p>Projects of note</p>
          <p>Helping to break a monolith into separate services by building a new service to handle loyalty and promotions</p>
          <p>Building a new promotions centre UI to allow promotions to be created and edited</p>
          <p>Migration of users from separate tables in SQL db to a single table with roles and permissions attached</p>`
        }
      ]
    },
    {
      name: 'Supersolid',
      location: 'London, UK',
      roles: [
        {
          title: 'Server Developer',
          dates: 'June 2019 - September 2019',
          copy: `<p>Worked on NodeJS servers for free to play mobile games.</p>
          <p>Deploying to kubernetes I worked with strict Typescript to help build real time game servers for a new title - this included server side physics calculations.</p>
          <p>Optimum memory and computational performance in Node was highly important.</p>`
        }
      ]
    },
    {
      name: 'Holiday Extras',
      location: 'Hythe, UK',
      roles: [
        {
          title: 'Software Engineer',
          dates: 'March 2019 - June 2019',
          copy: `<p>Working as part of an agile team. We write our tech in Javascript. We work in a microservice infrastructure and my responsibilities involve maintaining the various services that provide data to the static pages that drive bookings.</p>
          <p>Our frontend pages are written in React with our back ends primarily Expressjs. I have been a major contributer to an in house static site generator as well as surrounding technology.</p>
          <p>We use a combination of cloud services to implement our CI and service infrastructure and I have got my hands dirty with all of it including deploying to S3 and dealing with cache, dealing with SQL and Redis, passport authentication and deployment to Kubernetes clusters.</p>`
        }
      ]
    },
    {
      name: 'The Whitstable School',
      location: 'Whitstable, UK',
      roles: [
        {
          title: 'Unqualified Teacher of Computing',
          dates: 'September 2017 - August 2018',
          copy: '<p>Planning and delivering lessons to secondary students as an assistant to a main class teacher. I learned important time management skills and working to strict deadlines with delivery of marking and planning.</p>'
        }
      ]
    },
    {
      name: 'Coop',
      location: 'Kent, UK',
      roles: [
        {
          title: 'Store Manager',
          dates: 'September 2014 - August 2017',
          copy: '<p>Full responsibility for the running of a food store. Ultimately responsible for satisfying the requirements for availability of products, effective profit and loss, minimising costs and delivery of excellent customer service.</p><p>In this role I was fully responsible for dealing with payroll and HR matters arising in store, ensuring legal compliance, managing the schedules for the team and most importantly coaching and guiding my team to deliver what was required to get the products to the customer.</p>'
        },
        {
          title: 'Team Manager',
          dates: 'July 2012 - September 2014',
          copy: '<p>Acting as a deputy to a store manager. I was second in command of the running of a food store. Responsible for leading and coaching the team as well as delivery of the smooth and effective running of the store. Responsibilities included ensuring legal requirements were met, dealing with scheduling and payroll and ensuring high standards of customer service were delivered by the team.</p>'
        },
        {
          title: 'Team Leader',
          dates: 'May 2010 - July 2012',
          copy: '<p>Promoted to this position in my final year of University due to my proactive nature and leadership skills. Responsibilities included leading a small team of up to 5 people on a shift while ensuring the customer service levels were maintained in store. I was also responsible for opening/closing a store and handling cash in the absence of a more senior member of the team.</p>'
        },
        {
          title: 'Team Member',
          dates: 'May 2005 - May 2010',
          copy: '<p>Part time job during education. I was responsible for replenishment of shelves and serving customers on the checkout. I dealt with customer queries and provided excellent customer service.</p>'
        }
      ]
    }
  ]
}

export default settings
