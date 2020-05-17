import { PageProps } from '~/@types'
import PostPage from '~/components/postPage'

const ProjectPage: React.FC<PageProps> = props => { 
  const html = `
    <h2>One of my very first larger frontend projects!</h2>
    <p>Why not <a href='https://www.holidayextras.co.uk/birthday.html'>visit the live webpage?</a>
    (available at the time of this article being created but no longer accepting entries!)</p>
    <p>This interactive competition was to promote Holiday Extras and celebrate their 36th birthday. 
    Customers who correctly guessed all 36 travel companies hidden inside the image could enter contact details to be entered
    into a prize draw to win some extras for their next holiday (airport hotel, lounge etc)</p>
    <img srcSet='/img/birthday-s.png 500w, /img/birthday-m.png 1000w, /img/birthday-l.png 1500w' />
    <p>Different parts of the image can be clicked, bringing up a popup asking for the name of the company that part of the image represents.
    After successfully guessing, the part of the image clicked turns grey to show that the user has correctly guessed that part.
    I implemented a progress bar for user feedback.</p>
    <p>Want to see this in action? Take a look below!</p>
    <video fillContainer=1 srcSet='{ "700": "/video/birthdays.mp4", "1000": "/video/birthdayl.mp4"}' controls=1 loop=1 autoPlay=1 />
    <p>A user's progress was saved, they could come back later and restore their progress thanks to browser local storage</p>
    <img srcSet='/img/birthday-retry-s.png 500w, /img/birthday-retry-m.png 1000w, /img/birthday-retry-l.png 1500w' />
    <p>Submissions were sent to a purpose built microservice to store entries in a MySQL database. 
    I made a small UI for this microservice so that others in the company could easily view the entries to the competition.</p>

    <h3>Implementation</h3>
    <p>What did I use for this?</p>
    <ul>
    <li><b>React.js</b> - the page, backend results UI and competition is built using this library</li>
    <li><b>HTML5 canvas</b> - I used a greyscale algorithm to turn relevant parts of the image grey upon correct guesses</li>
    <li><b>Node and Express.js</b> - build the API to accept entries to the competition and store them in a database</li>
    <li><b>MySQL</b> - CRUD operations on competition entries</li>
    <li><b>Local Storage</b> - for persisting the user progress between refreshes</li>
    </ul>
  `
  return (<><PostPage {...props} html={html}/></>)
}

export default ProjectPage

export async function getStaticProps() {
  return {
    props: Object.assign({
      titleText: 'Interactive competition',
    }, {})  
  }
}
