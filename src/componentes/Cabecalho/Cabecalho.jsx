import React from "react";
import './Cabecalho.css';

import IconeDeCarrinho from "./IconeDeCarrinho/IconeDeCarrinho";
import CampoDeBusca from "./CampoDeBusca/CampoDeBusca";

function Cabecalho() {
    return (
        <header className="header">
            <div className="container">
                <CampoDeBusca />
                <IconeDeCarrinho />
            </div>
        </header>
    )
}

export default Cabecalho