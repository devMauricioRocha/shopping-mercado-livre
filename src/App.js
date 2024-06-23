import React from 'react';

import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Carrinho from './componentes/Carrinho/Carrinho';
import Produtos from './componentes/Produtos/Produtos';
import Provider from './contexto/Provider';

function App() {
  return (
    <Provider>
      <Cabecalho />
      <Produtos />
      <Carrinho />
    </Provider>
  );
}

export default App;
