import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./styles/app.css";
import { Header } from "./common/components/header/Header";
import { Home } from "./common/pages/home/Home";
import { NotFound } from "./common/pages/404/NotFound";

const App = () => {
  const items = [
    { name: "React Components", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Pages", path: "/pages" },
    { name: "Testing", path: "/tests" },
  ];

  return (
    <Router>
      <Header items={items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
