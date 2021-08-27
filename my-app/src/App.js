import React from 'react';
import Cards from './components/Cards';
// import fetchAPI from './services/endpoints'

class App extends React.Component {
  
  render() {
    // fetchAPI('').then(r => r.json()).then(console.log)
    return <Cards />
  }
}

export default App;
