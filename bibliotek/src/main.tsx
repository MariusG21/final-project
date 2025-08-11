import { createRoot } from "react-dom/client";
import { AppProviders } from "@/context/AppProviders.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>
);
