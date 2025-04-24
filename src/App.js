import React, { useState, useEffect } from "react"; // Importa hooks do React
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap
import PecaForm from "./components/PecaForm"; // Componente para adicionar/editar peças
import PecaTable from "./components/PecaTable"; // Componente para exibir a tabela de peças
import { carregarPecas, salvarPecas } from "./utils/localStorageUtils"; // Funções para carregar e salvar as peças no localStorage

function App() {
  const [pecas, setPecas] = useState([]); // Estado para armazenar as peças
  const [pecaEditando, setPecaEditando] = useState(null); // Estado para controlar qual peça está sendo editada

  // Carrega as peças ao montar o componente
  useEffect(() => {
    setPecas(carregarPecas());
  }, []);

  // Salva as peças sempre que o estado mudar
  useEffect(() => {
    salvarPecas(pecas);
  }, [pecas]);

  // Função para adicionar ou editar uma peça
  const adicionarOuEditarPeca = (peca) => {
    if (peca.id) {
      setPecas(pecas.map((p) => (p.id === peca.id ? peca : p))); // Edita a peça existente
    } else {
      peca.id = Date.now(); // Cria um ID único para a nova peça
      setPecas([...pecas, peca]); // Adiciona a nova peça
    }
    setPecaEditando(null); // Limpa o estado de edição
  };

  // Função para selecionar uma peça para edição
  const editarPeca = (peca) => {
    setPecaEditando(peca);
  };

  // Função para excluir uma peça
  const excluirPeca = (id) => {
    if (window.confirm("Deseja realmente excluir esta peça?")) {
      setPecas(pecas.filter((p) => p.id !== id)); // Exclui a peça
    }
  };

  // Renderiza a interface com o formulário e a tabela
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Catálogo de Peças de Hardware</h1>
      <PecaForm aoSalvar={adicionarOuEditarPeca} pecaAtual={pecaEditando} />
      <PecaTable pecas={pecas} aoEditar={editarPeca} aoExcluir={excluirPeca} />
    </div>
  );
}

export default App;
