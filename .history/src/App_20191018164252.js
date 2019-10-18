import React from 'react';
import logo from './logo.svg';
import MediaQuery,{useMediaQuery} from 'react-responsive'
import './App.css';
import {
  
  HashRouter,
} from 'react-router-dom'


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <Router history={hashHistory}>
        </Router>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <Router>
        </Router>
      </MediaQuery>
    </div>
  );
}

export default App;
