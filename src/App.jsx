import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import HamburgerMenu from "./components/Header/components/HamburgerMenu";

// Lazy load components
const ComboPackages = lazy(() => import("./components/ComboPackages/ComboPackages"));
const DeliveryProcess = lazy(() => import("./components/DeliveryProcess"));
const Header = lazy(() => import("./components/Header/Header"));
const FoodOffer = lazy(() => import("./components/Foods/FoodOffer"));
const Hero = lazy(() => import("./components/Hero"));
const ImageLayout = lazy(() => import("./components/ImageLayout"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Menu = lazy(() => import("./components/Menu"));

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center flex-col">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<div>Loading Hero...</div>}>
                  <Hero />
                </Suspense>
                <Suspense fallback={<div>Loading Food Offer...</div>}>
                  <FoodOffer />
                </Suspense>

                <Suspense fallback={<div>Loading Delivery Process...</div>}>
                  <DeliveryProcess />
                </Suspense>

                <Suspense fallback={<div>Loading Combo Packages...</div>}>
                  <ComboPackages />
                </Suspense>

                <Suspense fallback={<div>Loading Image Layout...</div>}>
                  <ImageLayout />
                </Suspense>

                <FadeInSection>
                  <Suspense fallback={<div>Loading Testimonials...</div>}>
                    <Testimonials />
                  </Suspense>
                </FadeInSection>
              </>
            }
          />
          <Route path="/menu" element={
            <Suspense fallback={<div>Loading Menu...</div>}>
              <Menu />
            </Suspense>
          } />
        </Routes>

        {/* Wrap Footer in Suspense */}
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
