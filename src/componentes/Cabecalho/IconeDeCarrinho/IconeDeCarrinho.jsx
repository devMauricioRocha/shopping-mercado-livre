import React, { useContext } from "react";
import './IconeDeCarrinho.css'

import AppContext from "../../../contexto/AppContext";

function IconeDeCarrinho() {
    const { itensDoCarrinho, estaVisivelOCarrinho, setEstaVisivelOCarrinho } = useContext(AppContext)

    const tratarCliqueNoCarrinho = () => {
        setEstaVisivelOCarrinho(!estaVisivelOCarrinho)
    }
    return (
        <button id="carrinho" onClick={tratarCliqueNoCarrinho}>
            <i className="gg-shopping-cart"></i>
            <span className={itensDoCarrinho.length > 0 ? "contarItem" : "ocultar"}>{itensDoCarrinho.length}</span>
        </button>
    )
}

export default IconeDeCarrinho