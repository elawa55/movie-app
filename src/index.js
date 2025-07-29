import React from "react";
import ReactDOM from "react-dom/client"; // هذا الاستيراد صحيح لـ React 18

import App from "./App";

// 1. قم بإنشاء جذر جديد لتطبيقك باستخدام createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. استخدم root.render() لتشغيل التطبيق
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
