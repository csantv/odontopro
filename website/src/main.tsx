// OdontoPro - Dental Office System
// Copyright (C) 2024-now  Carlos Toro
//
// This file is part of OdontoPro.
//
// OdontoPro is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// OdontoPro is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with OdontoPro.  If not, see <https://www.gnu.org/licenses/>.

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
