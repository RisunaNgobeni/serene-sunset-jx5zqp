// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div onClick={() => setActiveTab("profile")}>🧑‍🏫 My Profile</div>
      <div onClick={() => setActiveTab("schedule")}>📅 Schedule Tutorials</div>
      <div onClick={() => setActiveTab("faqs")}>❓ Manage FAQs</div>
      <div onClick={() => setActiveTab("notify")}>📣 Notify Students</div>
      <div onClick={() => setActiveTab("progress")}>📊 Student Progress</div>
    </div>
  );
};

export default Sidebar;
