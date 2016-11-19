import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx'
import Main from './main/Main.jsx'

class App extends React.Component {
    constructor(props){
      super(props);
    }

   render() {
      return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
