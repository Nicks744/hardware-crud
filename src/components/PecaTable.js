import React from "react"; // Importa o React

// Componente que exibe a tabela de peças
function PecaTable({ pecas, aoEditar, aoExcluir }) {
  // Caso não haja peças, exibe uma mensagem informando
  if (pecas.length === 0) {
    return <p className="text-center">Nenhuma peça cadastrada.</p>;
  }

  return (
    // Tabela exibindo as peças cadastradas
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Fabricante</th>
          <th>Preço</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapeia todas as peças e exibe cada uma em uma linha da tabela */}
        {pecas.map((peca) => (
          <tr key={peca.id}>
            <td>{peca.nome}</td>
            <td>{peca.tipo}</td>
            <td>{peca.fabricante}</td>
            <td>{peca.preco}</td>
            <td className="text-center">
              {/* Botão para editar a peça */}
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => aoEditar(peca)} // Chama a função 'aoEditar' passando a peça
              >
                Editar
              </button>
              {/* Botão para excluir a peça */}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => aoExcluir(peca.id)} // Chama a função 'aoExcluir' passando o id da peça
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PecaTable; // Exporta o componente
