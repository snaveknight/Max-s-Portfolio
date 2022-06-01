import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Im in the early stages of my software development career, but im excited every day that I
            get to make a living in this wonderful industry. I started out with a programming boot camp out of 
            Detroit called Tech Elevator where we learned and built Java applications. Since then I have been working
            at EJ(formally East Jordan Iron Works) where I've been doing full stack development by making changes and
            improvements to the current business applications as well as making new ones. I love the challenge of each new project and the feeling you get 
            when you finally crack through a problem.
          </p>
          <p >
            A little more about my life, I'm a husband to a lovely wife and a father to a wonderful baby girl. I'm an aspiring pianist and I enjoy 
            strength training and raising our chickens. I've tried my hand at gardening, and I think software development 
            is a lot easier. 
          </p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src="../portfolio-img/addydaddy.PNG" width="400" height="300"/>
            </div>
            <div className="face2">
            <img src="../portfolio-img/addyfamily.PNG" width="400" height="300"/>
            </div>
            <div className="face3">
            <img src="../portfolio-img/IMG-0292.JPG" width="400" height="300"/>
            </div>
            <div className="face4">
            <img src="../portfolio-img/IMG-7875.jpeg" width="400" height="300"/>
            </div>
            <div className="face5">
            <img src="../portfolio-img/IMG-7948.jpeg" width="400" height="300"/>
            </div>
            <div className="face6">
            <img src="../portfolio-img/IMG-9004.jpg" width="400" height="300"/>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
