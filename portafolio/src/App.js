import React, { Component } from 'react'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import AboutMe from './components/about/about'
import Resume from './components/resume/resume'
import Portfolio from './components/portfolio/portfolio'
import ContactUs from './components/contactus/contactus'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <AboutMe />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;