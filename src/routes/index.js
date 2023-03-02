import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


// Routes
import Header from '../components/Header';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Quiz from '../pages/Quiz';
import About from '../pages/About';
import Team from '../pages/About/Team';
import Contact from '../pages/Contact';
import Impact from '../pages/Impact';
import Stores from '../pages/Stores';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';

const Routes = () => {
    return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/quiz' exact component={Quiz} />
          <Route path='/about' exact component={About} />
          <Route path='/team' exact component={Team} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/impact' exact component={Impact} />
          <Route path='/stores' exact component={Stores} />
          <Route path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default Routes;
