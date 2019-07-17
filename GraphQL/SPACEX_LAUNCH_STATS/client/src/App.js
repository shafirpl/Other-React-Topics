import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Launches from './components/Launches.jsx';
import Launch from './components/Launch.jsx';
 
import logo from './logo.png';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})


function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX logo"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path ="/launch/:flight_number" component = {Launch} />
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
