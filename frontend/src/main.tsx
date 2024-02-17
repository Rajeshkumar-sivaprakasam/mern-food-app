import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import Auth0ProvoiderWithNavigation from "./auth/Auth0ProvoiderWithNavigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProvoiderWithNavigation>
        <AppRoutes />
      </Auth0ProvoiderWithNavigation>
    </Router>
  </React.StrictMode>
);
