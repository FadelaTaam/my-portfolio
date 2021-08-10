import './App.css';
import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
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

import GithubCorner from 'react-github-corner';
import TypeAnimation from './components/TypeAnimation.js'
import ReactCountryFlag from "react-country-flag"

import { useTranslation } from 'react-i18next';
import { ThemeContext, themes } from './components/Button/ThemeContext'


function App() {
  const { t, i18n } = useTranslation();

  const handleclick = lang => {
    i18n.changeLanguage(lang)
  }
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = useCallback(() => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }, [setTheme, theme])

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ ...theme }}>
        <BrowserRouter>
          <header>
            <GithubCorner href="https://github.com/FadelaTaam/" />

            <div id="flags">

              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="Français"
              />
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title="English"
              />

              <p>
                {t("header.0")}
              </p>
              <button onClick={() => handleclick('fr')}>Français</button>
              <button onClick={() => handleclick('en')}>English</button>


            </div>


            <div>
              <span class="iconify" data-icon="la:laptop-code" data-width="150" data-height="150"></span>
              <h1 class="mb-0">
                <p> Taam Fadela
                </p>
              </h1>
              <div class='title-container'>
                <Typo></Typo>
              </div>
            </div>
            <ButtonDark onClick={toggleTheme} id='button-switch'></ButtonDark>

          </header>

          <div>
            <nav >
              <ul id='nav'>
                <li ><Link id="navText" to="/">Accueil</Link></li>
                <li ><Link id="navText" to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>

          </div>


          <section id='about'>
            <div className='col-md12'>
              <div className='row center mx-auto mb-5'>
                <Polaroid></Polaroid>
              </div>
              <div className='col-md-8 center'>
                <About></About>
              </div>
            </div>
          </section>

          <Projets></Projets>
          <Skills>
            <p>
              {t("header.1")}
            </p>
          </Skills>
          <Experiences></Experiences>
          <div id='TypeAnimation'>
            <TypeAnimation></TypeAnimation>
          </div>
          <Footer></Footer>

        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );

}
export default App;
