import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Home from './pages/Home'
import User from './pages/User'
import SignInPage from './pages/SignInPage';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {redux} from './services/redux'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={redux}>
  <Router>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignInPage/>}/>
        <Route path="/user/:userName" element={<User />} />
      </Route>
    </Routes>
  </Router>
    </Provider>
    </React.StrictMode>

);

reportWebVitals();
