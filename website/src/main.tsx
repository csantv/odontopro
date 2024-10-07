import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";

const root = document.getElementById("root");

console.log(import.meta.env.VITE_API_BASE_URL);

if (root != null) {
    createRoot(root).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    );
} else {
    console.log("root element not found");
}
