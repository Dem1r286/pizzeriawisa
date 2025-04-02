import React from 'react';
import './App.css';
import ComboPackages from './components/ComboPackages/ComboPackages';
import DeliveryProcess from './components/DeliveryProcess';
import Header from './components/Header/Header'
import FoodOffer from './components/Foods/FoodOffer';
import Hero from './components/Hero';
import ImageLayout from './components/ImageLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex justify-center items-center flex-col mt-40 gap-40">
      <Header />
      <Hero />
      <FoodOffer />
      <DeliveryProcess />
      <ImageLayout />
      <ComboPackages />
      <Footer />
    </div>
  );
}

export default App;
