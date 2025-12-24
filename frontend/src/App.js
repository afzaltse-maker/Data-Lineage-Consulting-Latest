import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import About from "./pages/About";
import Staffing from "./pages/Staffing";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
