import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ServiceList from './components/ServiceList';
import ServiceCreate from './components/ServiceCreate';
import ServiceEdit from './components/ServiceEdit';
import CustomerList from './components/CustomerList';
import CustomerCreate from './components/CustomerCreate';
import CustomerEdit from './components/CustomerEdit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/service' element={<ServiceList />} />
        <Route path='/service/create' element={<ServiceCreate />} />
        <Route path='/service/edit' element={<ServiceEdit />} />
        <Route path='/customer' element={<CustomerList />} />
        <Route path='/customer/create' element={<CustomerCreate />} />
        <Route path='/customer/edit' element={<CustomerEdit />} />
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
