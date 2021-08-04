import './App.css';
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projets from './components/Projets';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Footer from './components/Footer/Footer';
import ButtonDark from './components/Button/ButtonDark';
import Polaroid from './components/polaroid'
import Typo from './components/Typography';
import { ThemeContext, themes } from '/Users/fadela/Desktop/stage/Portfolio/portfolio/src/components/Button/ThemeContext.js'
import { Icon } from '@iconify/react';
import laptopCode from '@iconify-icons/la/laptop-code';
import GithubCorner from 'react-github-corner';
import { Typography } from '@material-ui/core';
import TypeAnimation from './components/TypeAnimation.js'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <header>
          <GithubCorner href="https://github.com/FadelaTaam/" />
          <div>
            <Icon icon={laptopCode} class='iconify header-icon' />
            <h1 class="mb-0">
              <p> Taam Fadela
              </p>
            </h1>
            <div class='title-container'>
              <Typo></Typo>
            </div>

          </div>
          <ButtonDark id='button-switch'></ButtonDark>
          <div class="col-md-12 mx-auto text-center language">

          </div>
        </header>

        <div>
          <nav >
           { /*<Photo></Photo>*/}
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>


        <section id='about'>
           <div className='col-md12'>
           <div className ='row center mx-auto mb-5'>
             <Polaroid></Polaroid>
           </div>
           <div className='col-md-8 center'>
            <About></About>
            </div>
            </div>
            
        </section>

        <Projets></Projets>
        <Skills></Skills>
        <Experiences></Experiences>
        <div id='TypeAnimation'>
        <TypeAnimation></TypeAnimation>
        </div>
        <Footer></Footer>

      </BrowserRouter>
    );
  }
}
export default App;
