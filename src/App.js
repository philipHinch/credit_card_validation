//css
import './App.css';
//packages
import Tilt from 'react-tilt'
//components
import Form from './components/Form';
//context
import { useContext } from 'react';
import { Context } from './context/Context';
//icons
import { Icon } from '@iconify/react';
//images
import logo from './assets/images/logo.png'
import chip from './assets/images/chip.png'
import ripples from './assets/images/ripples.jpg'
import fancy from './assets/images/fancy-pants.jpg'
import triangles from './assets/images/triangles.gif'
import zigZag from './assets/images/zig-zag.png'
import squares from './assets/images/squares.png'
import { useState } from 'react';

function App() {

  const context = useContext(Context)

  const { name, title, front_theme, back_color } = context

  const [flipped, setFlipped] = useState(false)

  //handles card click
  const handleClick = () => {
    setFlipped(!flipped)
  }
  //handle front card theme
  const handleTheme = () => {
    if (front_theme === 'ripples') {
      return ripples
    } else if (front_theme === 'fancy') {
      return fancy
    } else if (front_theme === 'triangles') {
      return triangles
    } else if (front_theme === 'zigZag') {
      return zigZag
    } else if (front_theme === 'squares') {
      return squares
    } else {
      return ripples
    }
  }
  //handles back card background color
  const handleBackground = () => {
    if (back_color === 'blue') {
      return 'blueColor'
    } else if (back_color === 'pink') {
      return 'pinkColor'
    } else if (back_color === 'red') {
      return 'redColor'
    } else if (back_color === 'black') {
      return 'blackColor'
    } else if (back_color === 'yellow') {
      return 'yellowColor'
    } else if (back_color === 'green') {
      return 'greenColor'
    } else if (back_color === 'white') {
      return 'whiteColor'
    }
    else {
      return 'blueColor'
    }
  }
  //capitalize signature 
  const capitalize = (text) => {
    let textArr = text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    })
    let newText = textArr.join(' ')
    return newText;
  }

  return (
    <>
      <div className="container">
        <div className="flipContainer">
          <Icon className="flipIcon" icon="akar-icons:arrow-clockwise" />
          <small className="flipText">Click Card</small>
        </div>
        <Tilt className="Tilt" options={{ max: 25 }}  >
          <div className={`card ${ flipped && 'flipped' }`}>
            <div className="content">
              <div className="front" onClick={handleClick}>
                <div className="imageOverlay">
                  <img src={handleTheme()} alt="ripples" />
                </div>
                <div className="logoContainer">
                  <img src={logo} alt="logo" />
                </div>
                <div className="chipContainer">
                  <img src={chip} alt="chip image" />
                  <Icon className='contactlessIcon' icon="mdi:contactless-payment" />
                </div>
                <div className="cardNumber">
                  <p className="digits">4501</p>
                  <p className="digits">8835</p>
                  <p className="digits">0051</p>
                  <p className="digits">6377</p>
                </div>
                <div className="validContainer">
                  <div className="validLeft">
                    <small className="validText">valid</small><small className="validText">thru</small>
                    <Icon className='triangleIcon' icon="entypo:triangle-right" />
                  </div>
                  <div className="validRight">
                    <p className="digits validationDigits">05/24</p>
                  </div>
                </div>
                <div className="nameContainer">
                  <p className="digits titleDigits">{title ? title : ''}</p>
                  <p className="digits nameDigits">{name ? name : 'john doe'}</p>
                </div>
                <div className="visaIconContainer">
                  <Icon className='visaIcon' icon="simple-icons:visa" />
                  {/* <Icon className='visaIcon' icon="logos:mastercard" /> */}
                </div>
              </div>
              <div className={`back ${ handleBackground() }`} onClick={handleClick}>
                <div className="magneticStrip"></div>
                <div className="signatureContainer">
                  <div className="signature">{name ? capitalize(name) : 'John Doe'}</div>
                  <div className="cvv">734</div>
                </div>
                <div className="backText">
                  <h3>authorized signature</h3>
                  <p>If this card is found please send it to the bank. Misuse is criminal.</p>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
      <Form />
    </>


  );
}

export default App;
