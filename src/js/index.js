//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";
import UnitSecondsCounter from "./component/UnitSecondsCounter.js";

//render your react application
let UnitSeconds = 0;

setInterval(() => {
    let digitoUno = Math.floor(UnitSeconds / 1 % 10)
    let digitoDos = Math.floor(UnitSeconds / 10 % 10)
    let digitoTres = Math.floor(UnitSeconds / 100 % 10)
    let digitoCuatro = Math.floor(UnitSeconds / 1000 % 10)
    let digitoCinco = Math.floor(UnitSeconds / 10000 % 10)
    let digitoSeis = Math.floor(UnitSeconds / 100000 % 10)

    ReactDOM.render(<div className="container mt-5">
        <div className="d-flex flex-row flex-nowrap align-items-center">
            <div className="col gx-0 unitSecond text-center">
                <i class="fa-regular fa-clock"></i>
            </div>
            <UnitSecondsCounter UnitSeconds={digitoSeis} />
            <UnitSecondsCounter UnitSeconds={digitoCinco} />
            <UnitSecondsCounter UnitSeconds={digitoCuatro} />
            <UnitSecondsCounter UnitSeconds={digitoTres} />
            <UnitSecondsCounter UnitSeconds={digitoDos} />
            <UnitSecondsCounter UnitSeconds={digitoUno} />
        </div>
    </div >, document.querySelector("#app"));
    UnitSeconds++;
}
    , 1000);

