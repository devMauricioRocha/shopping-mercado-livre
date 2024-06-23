import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [itensDoCarrinho, setItensDoCarrinho] = useState([]);
  const [estaVisivelOCarrinho, setEstaVisivelOCarrinho] = useState(false);
  
  const valor = {
    produtos, setProdutos,
    carregando, setCarregando,
    itensDoCarrinho, setItensDoCarrinho,
    estaVisivelOCarrinho, setEstaVisivelOCarrinho
  };

  return (
    <AppContext.Provider value={ valor }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
