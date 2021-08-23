import React from 'react'

import Header from './components/HeaderComponents/HeaderComponent'
import Banner from './components/BannerComponent/Banner'
import Main from './components/MainComponents/MainContainer'
import Footer from './components/FooterComponents/Footer'

import './index.css'

function App() {
  return (
      <div className="App">
        <Header />
        <Banner />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
