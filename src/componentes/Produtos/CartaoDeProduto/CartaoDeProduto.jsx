import React, { useContext } from "react";
import './CartaoDeProduto.css'

import AppContext from "../../../contexto/AppContext";
import formatarMoeda from "../../../utilidades/formatarMoeda.js"

function CartaoDeProduto({ data }) {

  const { itensDoCarrinho, setItensDoCarrinho } = useContext(AppContext)

  const adicionarAoCarrinho = () => {
    const itemExistente = itensDoCarrinho.some(produto => produto.id === data.id); // Verifica se o item já existe no carrinho
    if (itemExistente) {
      setItensDoCarrinho(itensDoCarrinho.map(produto =>  // Atualiza a quantidade do item existente
        produto.id === data.id
          ? { ...produto, quantidade: produto.quantidade + 1 }
          : produto
      ));
    } else {
      setItensDoCarrinho([...itensDoCarrinho, { ...data, quantidade: 1 }]); // Adiciona o novo item ao carrinho
    }
  }

  return (
    <article className="item-card">
      <img src={data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="produto" className="img-card" />
      <article className="info_produto">
        <h2 className="preco">{formatarMoeda(data.price, "BRL")}</h2>
        <h2 className="titulo">{data.title}</h2>
      </article>
      <button className="addProduto" onClick={adicionarAoCarrinho}>+</button>
    </article>
  )
}

export default CartaoDeProduto