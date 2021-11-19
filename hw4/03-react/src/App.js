import React, { useState } from 'react';
import { BrowserRouter as Router,
                          Route,
                          Switch
                      
                        } from 'react-router-dom';  
import Navbar from './Components/Navbar/Navbar';
//import 'bootstrap/dist/css/bootstrap.min.css';

import House from './Components/House';
import Search from './Components/Search';
import Home from './Components/Home';


function App() {
  
  


  return(
    <>
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home}>
          <Home />
        </Route>
        <Route path='/search' exact component={Search}>
          <Search />
        </Route>
        <Route path='/house' exact component={House}>
          <House />
        </Route>
        
      </Switch>
    </Router>

    
    </>
  )
}

export default App;
