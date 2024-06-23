import React, { useState, useContext } from "react";
import "./CampoDeBusca.css";

import fetchProdutos from "../../../api/fetchApi";
import AppContext from "../../../contexto/AppContext";

function CampoDeBusca() {

    const [valorDeEntrada, setValorDeEntrada] = useState('');
    const { setProdutos, setCarregando } = useContext(AppContext);

    const tratarInput = async (event) => {
        event.preventDefault();
        setCarregando(true);

        try {
            const produtos = await fetchProdutos(valorDeEntrada);
            setProdutos(produtos);
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
            setProdutos([]); // Define um valor padrão em caso de erro
        } finally {
            setCarregando(false);
        }
    };

    return (
        <form className="barra-pesquisa" onSubmit={tratarInput}>
            <input
                type="search"
                name="inputPesquisa"
                id="inputPesquisa"
                placeholder="Buscar produtos"
                value={valorDeEntrada}
                onChange={({ target }) => setValorDeEntrada(target.value)}
                required
            />
            <button type="submit" id="btnPesquisa">
                <i className="gg-search"></i>
            </button>
        </form>
    );
}

export default CampoDeBusca;
