
# Projeto de Busca de Produtos com React - Mercado Livre API

Este projeto em React utiliza a API do Mercado Livre para buscar e exibir produtos com base em uma pesquisa do usuário. Ele inclui funcionalidades para buscar itens, exibir detalhes dos produtos e gerenciar um carrinho de compras.

## Funcionalidades Principais

- **Busca de Produtos:** Um campo de busca permite que o usuário digite o nome do produto desejado. A API do Mercado Livre é consultada para obter até 50 itens relacionados à pesquisa.

- **Exibição de Produtos:** Os produtos são exibidos em uma sessão principal do aplicativo. Cada produto inclui detalhes como nome, preço e outras informações relevantes fornecidas pela API.

- **Inicialização com Produto Aleatório:** Ao iniciar o aplicativo pela primeira vez, um produto aleatório é pré-selecionado e exibido usando o hook useEffect para chamar a API.

- **Carrinho de Compras:** Os usuários podem adicionar produtos ao carrinho diretamente da lista de produtos exibidos. O carrinho mantém uma lista dos itens selecionados e permite visualizar o que foi adicionado. Cada vez que o usuário clica no mesmo produto, a quantidade é incrementada e exibida como um único item no carrinho.

- **Gestão do Carrinho:**
  - Ao clicar no ícone do carrinho amostrará os itens dentro dele com as quantidade adicionada.
  - Ao abrir o carrinho, todos os itens adicionados são listados, mostrando o nome do produto, a quantidade e botões para remover itens individualmente.

## Como Usar

1. **Instalação:**
   ```
   npm install
   ```

2. **Executar o Aplicativo:**
   ```
   npm start
   ```
   O aplicativo será executado em http://localhost:3000.

3. **Buscar Produtos:**
   - Digite o nome do produto desejado no campo de busca e pressione Enter.
   - Os resultados serão exibidos na seção de produtos.

4. **Gerenciar Carrinho:**
   - Clique no ícone do carrinho para ver todos os itens adicionados.
   - Cada item no carrinho possui a quantidade X, ao clicar em excluir ele irá diminuir a quantidade até finalmente excluir o item.

## Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- Mercado Livre API

Este projeto foi criado como parte do aprendizado em React e integração com APIs externas. Qualquer feedback ou sugestão é bem-vindo!
