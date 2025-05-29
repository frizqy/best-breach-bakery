import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Navbar from './Navbar.tsx'
import Home from './Home.tsx'
import Menu from './Menu.tsx'
import Reserve from './Reserve.tsx'
import ContactUs from './ContactUs.tsx'
import Footer from './Footer.tsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </StrictMode>
)