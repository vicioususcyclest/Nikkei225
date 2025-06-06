import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Strategies from "./pages/Strategies";
import MarketEvents from "./pages/MarketEvents";
import Resources from "./pages/Resources";
import Calculator from "./pages/Calculator";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/strategies' element={<Strategies />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/market-events' element={<MarketEvents />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
