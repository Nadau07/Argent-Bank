import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Home from './pages/Home'
import SignInPage from './pages/SignInPage';
import reportWebVitals from './reportWebVitals';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignInPage/>}/>
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
