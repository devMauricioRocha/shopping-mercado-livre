import React, { useEffect, useContext } from "react";
import './Produtos.css'

import fetchProdutos from "../../api/fetchApi";
import Carregando from "./Carregando/Carregando";
import AppContext from "../../contexto/AppContext";
import CartaoDeProduto from "./CartaoDeProduto/CartaoDeProduto";
import BotaoScrollAoTopo from "./BotaoScrollAoTopo/BotaoScrollAoTopo";

const nomesAleatoriosDeProdutos = ['celular', 'computador', 'utensilios', 'ferramentas', 'relogio', 'cordao'];

const getRandomProductName = () => {
  const indiceAleatorio = Math.floor(Math.random() * nomesAleatoriosDeProdutos.length);
  return nomesAleatoriosDeProdutos[indiceAleatorio];
};

function Produtos() {

  const { produtos, setProdutos, carregando, setCarregando } = useContext(AppContext)

  useEffect(() => {
    setCarregando(true);

    const produtoInicial = getRandomProductName();
    fetchProdutos(produtoInicial)
      .then((response) => {
        setProdutos(response);
      })
      .catch((error) => {
        console.error('Erro ao carregar produtos:', error);
      })
      .finally(() => {
        setCarregando(false);
      });

  }, []);

  return (
    (carregando && <Carregando />) || (
      <main id="tela-produtos">
        <section className="produtos container ">
          {produtos.map(produto => <CartaoDeProduto key={produto.id} data={produto} />)}
        </section>
        <BotaoScrollAoTopo />
      </main>
    )
  )
}
export default Produtos