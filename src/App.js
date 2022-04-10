
import React from 'react';
import { AppProvider } from './movie/context';
import Home from './movie/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SingleMovie from './movie/SingleMovie';
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} exact>
        
        </Route>
        <Route path="/movies/:id" element={<SingleMovie/>}></Route>
        </Routes>
        </Router>
    </AppProvider>
  );
}

export default App;
