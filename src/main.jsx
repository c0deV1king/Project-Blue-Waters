import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'

// Project Blue Waters
// Small header bar
// Header

const WelcomeBar = () => {
  return (
    <div className='welcome-bar'>
      <p>helping you understand our oceans and the planet</p>
      <p><a href='#'>Link Here</a></p>
    </div>
  )
}

const Header = () => {
  return (
    <div className='banner-container'>
      <div className='slider-wrapper'>
            <div className="slider">
                <img id='slide-1' src='/src/assets/cristian-palmer-XexawgzYOBc-unsplash.jpg' alt='Description of image' />
                <img id='slide-2' src='/src/assets/yucar-studios-cfR-V1QuEKw-unsplash.jpg' alt='Desc of image' />
                <img id='slide-3' src='/src/assets/frank-mckenna-OD9EOzfSOh0-unsplash.jpg' alt='desc'/>
            </div>
            <div className='slider-nav'>
                <div className='slide-nav-1'></div>
                <div className='slide-nav-2'></div>
                <div className='slide-nav-3'></div>
            </div>
        </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <WelcomeBar />
      <Header />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
