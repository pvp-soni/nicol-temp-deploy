import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar_Footer from './pages/NavBar_Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Customize from './pages/Customize';
import Blog from './pages/Blog';
import About_us from './pages/About_us';
import Contact_us from './pages/Contact_us';
import Cart from './pages/Cart';
import Profile_user from './pages/Profile_user';
import Profile_notification from './pages/Profile_notification';
import Profile_favourites from './pages/Profile_favourites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar_Footer/>}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/categories' element={<Categories />}></Route>
      <Route path='/customize' element={<Customize />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/about-us' element={<About_us />}></Route>
      <Route path='/contact-us' element={<Contact_us />}></Route>

      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/profile-user' element={<Profile_user />}></Route>
      <Route path='/profile-notifications' element={<Profile_notification />}></Route>
      <Route path='/profile-favourites' element={<Profile_favourites />}></Route>
    </Route>
    </Routes>
  </BrowserRouter>
);
