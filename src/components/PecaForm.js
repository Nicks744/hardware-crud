import React, { useState, useEffect } from "react"; // Importa o React e os hooks useState e useEffect

// Componente de formulário para adicionar ou editar peças
function PecaForm({ aoSalvar, pecaAtual }) {
  // Estado para armazenar os dados da peça (inicializado com valores vazios)
  const [peca, setPeca] = useState({
    nome: "",
    tipo: "",
    fabricante: "",
    preco: "",
  });

  // Hook useEffect para atualizar o estado 'peca' quando 'pecaAtual' mudar
  useEffect(() => {
    if (pecaAtual) setPeca(pecaAtual); // Se existir uma peça sendo editada, atualiza o estado com os dados da peça
  }, [pecaAtual]);

  // Função para lidar com a alteração dos campos do formulário
  const handleChange = (e) => {
    setPeca({ ...peca, [e.target.name]: e.target.value }); // Atualiza o estado da peça com o valor do campo editado
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio de formulário
    // Verifica se todos os campos estão preenchidos
    if (!peca.nome || !peca.tipo || !peca.fabricante || !peca.preco) {
      alert("Preencha todos os campos."); // Exibe um alerta se algum campo estiver vazio
      return;
    }
    aoSalvar(peca); // Chama a função de callback aoSalvar passando os dados da peça
    setPeca({ nome: "", tipo: "", fabricante: "", preco: "" }); // Limpa os campos após salvar
  };

  return (
    // Formulário para adicionar ou editar uma peça
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            name="nome"
            className="form-control"
            placeholder="Nome da Peça"
            value={peca.nome}
            onChange={handleChange} // Atualiza o estado ao alterar o valor do campo
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            name="tipo"
            className="form-control"
            placeholder="Tipo"
            value={peca.tipo}
            onChange={handleChange} // Atualiza o estado ao alterar o valor do campo
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="fabricante"
            className="form-control"
            placeholder="Fabricante"
            value={peca.fabricante}
            onChange={handleChange} // Atualiza o estado ao alterar o valor do campo
          />
        </div>
        <div className="col-md-2">
          <input
            type="text"
            name="preco"
            className="form-control"
            placeholder="Preço"
            value={peca.preco}
            onChange={handleChange} // Atualiza o estado ao alterar o valor do campo
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            {peca.id ? "Atualizar" : "Adicionar"} {/* Texto do botão depende se é edição ou adição */}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PecaForm; // Exporta o componente
