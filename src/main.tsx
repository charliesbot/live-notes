import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocalStateProvider } from "./context/LocalState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalStateProvider>
      <App />
    </LocalStateProvider>
  </StrictMode>,
);
