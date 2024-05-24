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
      domain="dev-sq665og2sla0gkh0.us.auth0.com"
      clientId="IJTM64nMQrOEEDQClvySbwAe4tAqVvM4"
      redirectUri={window.location.origin}
    >
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Auth0Provider>
  </BrowserRouter>
);
