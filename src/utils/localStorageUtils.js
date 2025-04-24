// Definindo a chave usada no localStorage para armazenar as peças
const CHAVE_PECAS = "pecasHardware";

// Função para carregar as peças do localStorage
export const carregarPecas = () => {
  const dados = localStorage.getItem(CHAVE_PECAS); // Recupera os dados do localStorage usando a chave definida
  // Se houver dados, converte de JSON para um array de objetos, caso contrário, retorna um array vazio
  return dados ? JSON.parse(dados) : [];
};

// Função para salvar as peças no localStorage
export const salvarPecas = (pecas) => {
  // Converte o array de peças para JSON e salva no localStorage com a chave definida
  localStorage.setItem(CHAVE_PECAS, JSON.stringify(pecas));
};
