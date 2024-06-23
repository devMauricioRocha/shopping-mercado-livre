import React, { useContext, useEffect } from "react";
import './Carrinho.css'

import AppContext from "../../contexto/AppContext";
import formatarMoeda from "../../utilidades/formatarMoeda";
import ItemDoCarrinho from "./ItemDoCarrinho/ItemDoCarrinho";

function Carrinho() {

    const { itensDoCarrinho, estaVisivelOCarrinho, setEstaVisivelOCarrinho } = useContext(AppContext)
    const valorTotal = itensDoCarrinho.reduce((acc, item) => acc + (item.price * item.quantidade), 0)

    useEffect(() => {
        if (itensDoCarrinho.length === 0) {
            setEstaVisivelOCarrinho(false)
        }
    }, [itensDoCarrinho])

    return (
        <section className={`cartCarrinho ${estaVisivelOCarrinho ? "aparecerCarrinho" : ''}`}>
            <div className="itens">
                {itensDoCarrinho.map((produto) => {
                    return <ItemDoCarrinho key={produto.id} dados={produto} />
                })}
            </div>

            <div className="total"><h2>Total: {formatarMoeda(valorTotal, "BRL")}</h2></div>
        </section>
    )
}

export default Carrinho