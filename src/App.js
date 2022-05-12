import './App.css';
//packages
import Tilt from 'react-tilt'
//images
import ripples from './assets/images/ripples.jpg'

function App() {
  return (
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
      <div className="card">
        <div className="content">
          <div className="front">
            <div className="imageOverlay">
              <img src={ripples} alt="ripples" />
            </div>
            Front
          </div>
          <div className="back">
            Back!
          </div>
        </div>
      </div>
    </Tilt>


  );
}

export default App;
