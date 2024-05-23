import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import StoreContextProvider from "./context/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-nclweq57xl4c40dr.us.auth0.com"
      clientId="rUNKCOn7UTMXeeaXVdxuKRofSrp4LwrT"
      redirectUri={window.location.origin}
    >
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Auth0Provider>
  </BrowserRouter>
);
