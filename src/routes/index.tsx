import React from 'react' 

import { Switch, Route } from 'react-router-dom' 

import Home from '../pages/Home' 
import Game from '../pages/Game' 


const Routes: React.FC = () => (
  <Switch>
    <Route path="/starwars-quiz" exact component={Home} />
    <Route path="/starwars-quiz/game" component={Game} />

  </Switch>
) 

export default Routes 