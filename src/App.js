import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import ContactForm from './components/contact/ContactForm';
import ContactLists from './components/contact/ContactLists';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Navbar />
            {/* <div className="container"> */}
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/contact-form' component={ContactForm} />
                <Route exact path='/contact-data' component={ContactLists} />
              </Switch>
            {/* </div> */}
          </div>
        </Router>
    </Provider>
  );
}

export default App;
