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

import React from "react";

const App = () => {
    const [num, setNum] = React.useState(0);

    return (
        <>
            <h1>Hello, World!: {num}</h1>
            <button onClick={() => { setNum(num => num + 1); }}>Next</button>
        </>
    );
};

export default App;
