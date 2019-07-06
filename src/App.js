import React, { Component } from 'react';
import './bootstrap.min.css'
import NewQuote from './components/NewQuotes';
import Header from './components/Header'   

class App extends Component{
  state = {

  }
  render() {
    return (
      <div>
        <Header
          title = 'Pets Smart'
        />
        <div className="container">
          <div className="row"> 
            <div className="col-md-10 mx-auto">
              <NewQuote></NewQuote>  
            </div>
          </div>  
        </div>

      </div>
    )
  }
}

export default App;
