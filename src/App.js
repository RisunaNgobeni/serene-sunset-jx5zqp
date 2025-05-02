// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ContentArea from "./components/ContentArea";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="dashboard">
      <Header />
      <div className="main">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ContentArea activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
