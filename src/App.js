import './App.css';
//packages
import Tilt from 'react-tilt'
//icons
import { Icon } from '@iconify/react';
//images
import logo from './assets/images/logo.png'
import chip from './assets/images/chip.png'
import ripples from './assets/images/ripples.jpg'
import fancy from './assets/images/fancy-pants.jpg'
import { useState } from 'react';

function App() {

  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
      <div className={`card ${ flipped && 'flipped' }`}>
        <div className="content">
          <div className="front" onClick={handleClick}>
            <div className="imageOverlay">
              <img src={ripples} alt="ripples" />
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
              <p className="digits nameDigits">john doe</p>
            </div>
            <div className="visaIconContainer">
              <Icon className='visaIcon' icon="simple-icons:visa" />
              {/* <Icon className='visaIcon' icon="logos:mastercard" /> */}
            </div>
          </div>
          <div className="back" onClick={handleClick}>
            <div className="magneticStrip"></div>
            <div className="signatureContainer">
              <div className="signature">John Doe</div>
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


  );
}

export default App;
