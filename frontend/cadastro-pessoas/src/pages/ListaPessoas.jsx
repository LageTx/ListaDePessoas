import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:5005/api/pessoas'

function ListaPessoas() {
  const [pessoas, setPessoas] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    carregarPessoas()
  }, [])

  async function carregarPessoas() {
    const response = await axios.get(API)
    setPessoas(response.data)
  }

  async function remover(id) {
    if (!confirm('Deseja remover esta pessoa?')) return
    await axios.delete(`${API}/${id}`)
    carregarPessoas()
  }

  function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  }

  return (
    <div className="container">
      <h1>Lista de Pessoas</h1>
      <button className="btn btn-primary" onClick={() => navigate('/nova')}>
        + Nova Pessoa
      </button>

      <br /><br />

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.length === 0 && (
            <tr>
              <td colSpan={4}>Nenhuma pessoa cadastrada.</td>
            </tr>
          )}
          {pessoas.map(p => (
            <tr key={p.id}>
              <td>{p.nome}</td>
              <td>{p.telefone}</td>
              <td>{formatarData(p.dataNascimento)}</td>
              <td>
                <button className="btn btn-primary" onClick={() => navigate(`/editar/${p.id}`)}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={() => remover(p.id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPessoas