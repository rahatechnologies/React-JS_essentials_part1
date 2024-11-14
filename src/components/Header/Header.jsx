import reactImg from '../../assets/react-core-concepts.png';

import './Header.css';
const DESCRIPTION = ['Fundamental', 'Crucial', 'Core'];

function getRandomDescription() {
  return  DESCRIPTION[Math.floor(Math.random() * DESCRIPTION.length)];
}

export default function Header() {
    const description = getRandomDescription();
    return <header>
              <img src= {reactImg} alt="Stylized atom" />
              <h1>React Essentials</h1>
              <p>
                {description} React concepts you will need for almost any app you are
                going to build!
              </p>
          </header>            
    }