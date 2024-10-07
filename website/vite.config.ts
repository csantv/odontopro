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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                }
            }
        }
    }
});
