import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const ComboPackages = lazy(() =>
  import("./components/ComboPackages/ComboPackages")
);
const DeliveryProcess = lazy(() => import("./components/DeliveryProcess"));
const Header = lazy(() => import("./components/Header/Header"));
const FoodOffer = lazy(() => import("./components/Foods/FoodOffer"));
const Hero = lazy(() => import("./components/Hero"));
const ImageLayout = lazy(() => import("./components/ImageLayout"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Menu = lazy(() => import("./components/Menu"));
const HeaderLogo = lazy(() => import("./components/Header/components/HeaderLogo"));

function App() {
  return (
    <Router basename="/"> 
      <Suspense fallback={<Loader />}>
        <div className="flex justify-center items-center flex-col">
          <Header />
          <HeaderLogo />
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Hero />
                  <div
                    className="w-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url(assets/other/waves.webp)", 
                    }}
                  >
                    <FoodOffer />
                    <DeliveryProcess />
                  </div>
                  <ComboPackages />
                  <ImageLayout />
                  <Testimonials />
                </>
              )}
            />
            <Route path="/menu" element={<Menu />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
