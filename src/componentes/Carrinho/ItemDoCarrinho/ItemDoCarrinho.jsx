import React, { useContext } from "react";
import AppContext from "../../../contexto/AppContext";
import formatarMoeda from "../../../utilidades/formatarMoeda";
import './ItemDoCarrinho.css'



function ItemDoCarrinho({ dados }) {
    const { setItensDoCarrinho } = useContext(AppContext)

    const removerItem = () => {
        setItensDoCarrinho(itensAnteriores => itensAnteriores.map(item => {
            if (item.id === dados.id) {
                if (item.quantidade > 1) {
                    return { ...item, quantidade: item.quantidade - 1 }
                }
                return null
            }
            return item
        }).filter(item => item !== null))
    }

    return (
        <article className="item">
            <img src={dados.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" className="imgProduto" />
            <div className="info">
                <h3 className="titulo">{dados.title}</h3>

                <div className="infoPreco">
                    <p>Qt: {dados.quantidade}</p>
                    <h3 className="preco">{formatarMoeda(dados.price, "BRL")}</h3>
                </div>
            </div>
            <button className="remover" onClick={removerItem}><i className="gg-close-r"></i></button>
        </article>
    )
}

export default ItemDoCarrinho