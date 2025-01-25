import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./i18n";
import {
  Home,
  AboutUs,
  Contact,
  PageNotFound,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import Roominfo from "./pages/Roominfo";
import PurchasePage from "./pages/PurchasePage";
export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/services" element={<Services />} />
            <Route path="/roominfo" element={<Roominfo />} />
            <Route path="/purchase" element={<PurchasePage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
