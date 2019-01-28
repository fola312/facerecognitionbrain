import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

const particleOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  OnButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particleOptions}
             />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          OnButtonSubmit={this.OnButtonSubmit}
          />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
