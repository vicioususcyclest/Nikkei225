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
          <Route path='/Nikkei225/' element={<Home />} />
          <Route path='/Nikkei225/product' element={<Product />} />
          <Route path='/Nikkei225/strategies' element={<Strategies />} />
          <Route path='/Nikkei225/calculator' element={<Calculator />} />
          <Route path='/Nikkei225/market-events' element={<MarketEvents />} />
          <Route path='/Nikkei225/resources' element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
