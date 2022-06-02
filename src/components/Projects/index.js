import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { visitors } from "./visitorapp"
import { regions }  from "./salesregion"
import './index.scss'
import { notes } from './notes';

const animateScroll = {
  overflowX: 'hidden',
  overflowY: 'scroll'
};

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (

<>
      <div  className="container contact-page hide-scroll hide-scroll2" style={animateScroll}>
        <div className="text-zone">

          <p>
            Here are some of the bigger applications I've helped develop in my time at EJ. If you go to my github
            there are a few additional smaller apps I've built while I was at TechElevator. 
          </p>
          <h1>
           Visitor Log
          </h1>
          <br></br>
          <p>So this is an app I built that we use at some of our facilities to register and checkout
            visitors as they come and go. This app has the ability to add a photo of the guests with their information. I made
            and additional administration page on a separate url and that we gave to the few individuals who will be checking guest in and out
            as well as editing any information about the guest. 
          </p>
          <br></br>
          {visitors.map((visitor) => (
            <a>
              <div >
                  <h2>
                    {visitor.title}
                  </h2>
              </div>
              <div>
              <p>{visitor.description}</p>
                <img
                  alt="gallery"
                  src={visitor.image}
                  width={900}
                  height={600}
                />
              </div>
              <br></br>
            </a>
          ))}
           <br></br>
           <h1>
           Sales Region Map
          </h1>
          <br></br>
          <p>This was one of the earlier projects I worked on, the goal for this app was to give the sales representatives the ability
            to view or "map out" their sales territories and track what customers they will be working with. 
          </p>
          <br></br>
          {regions.map((region) => (
            <a>
              <div >
                  <h2>
                    {region.title}
                  </h2>
              </div>
              <div>
              <p>{region.description}</p>
                <img
                  alt="gallery"
                  src={region.image}
                  width={900}
                  height={600}
                />
              </div>
              <br></br>
            </a>
          ))}
          <br></br>
           <h1>
           Shift notes app
          </h1>
          <br></br>
          <p>We had some users that wanted an app so that across all shifts they could combine and track their notes. This app 
            gives anyone the ability to view these notes and if they are a power user they can edit them as well as add tables photos to the notes. 
          </p>
          <br></br>
          {notes.map((note) => (
            <a>
              <div >
                  <h2>
                    {note.title}
                  </h2>
              </div>
              <div>
              <p>{note.description}</p>
                <img
                  alt="gallery"
                  src={note.image}
                  width={900}
                  height={600}
                />
              </div>
              <br></br>
            </a>
          ))}
        </div>
      </div>
        <Loader type="pacman" />
      </>
  )
}

export default Projects
