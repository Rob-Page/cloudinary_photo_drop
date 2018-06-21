import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ContactForm></ContactForm>
      </div>
    );
  }
}

export default App;
