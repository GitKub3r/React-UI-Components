import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./styles/app.css";
import { Header } from "./common/components/header/Header";
import { Home } from "./common/pages/home/Home";
import { NotFound } from "./common/pages/404/NotFound";
import { Footer } from "./common/components/footer/Footer";
import { Components } from "./common/pages/comp/Components";
import { Pages } from "./common/pages/pg/Pages";
import { Testing } from "./common/pages/testing/Testing";

const App = () => {
  const items = [
    { name: "React Components", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Pages", path: "/pages" },
    { name: "Testing", path: "/testing" },
  ];

  return (
    <Router>
      <Header items={items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/components" element={<Components />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
