const fetchProdutos = async (query) => {
  try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      if (!response.ok) {
          throw new Error(`Erro na API: ${response.statusText}`);
      }
      const data = await response.json();
      return data.results;
  } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error; // Re-throw the error to be handled by the calling function
  }
};

export default fetchProdutos;
