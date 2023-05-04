import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  const a = 'Diptayan'
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 9;
  const country = 'in';
  const category = 'general';
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

    const toggleMode = () =>{
        if(mode==='light'){
            setMode('dark');
            document.body.style.backgroundColor = '#212529eb';
            document.body.style.color = 'white';
        }
        if(mode==='dark'){
          setMode('light');
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
        }
    }
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <div className='container'>
          <Routes>

            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country={country} category='general' mode={mode} />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country={country} category='business' mode={mode} />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country={country} category='entertainment' mode={mode} />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country={country} category='health' mode={mode} />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country={country} category='science' mode={mode} />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country={country} category='technology' mode={mode} />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country={country} category='sports' mode={mode} />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country={country} category='sports' mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )

}

export default App