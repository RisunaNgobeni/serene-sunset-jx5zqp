// src/components/ContentArea.js
import React from "react";
import Profile from "../pages/Profile";
import Schedule from "../pages/Schedule";
import FAQs from "../pages/FAQs";
import Notify from "../pages/Notify";
import Progress from "../pages/Progress";

const ContentArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "schedule":
        return <Schedule />;
      case "faqs":
        return <FAQs />;
      case "notify":
        return <Notify />;
      case "progress":
        return <Progress />;
      default:
        return <Profile />;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default ContentArea;
