import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:5005/api/pessoas'

function FormPessoa() {
  const { id } = useParams()
  const navigate = useNavigate()
  const editando = !!id

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    dataNascimento: ''
  })

  useEffect(() => {
    if (editando) {
      axios.get(`${API}/${id}`).then(res => {
        const p = res.data
        setForm({
          nome: p.nome,
          telefone: p.telefone,
          dataNascimento: p.dataNascimento
        })
      })
    }
  }, [id])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    if (editando) {
      await axios.put(`${API}/${id}`, form)
    } else {
      await axios.post(API, form)
    }
    navigate('/')
  }

  return (
    <div className="container">
      <h1>{editando ? 'Editar Pessoa' : 'Nova Pessoa'}</h1>

      <div className="form-group">
        <label>Nome</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome completo"
        />
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div className="form-group">
        <label>Data de Nascimento</label>
        <input
          type="date"
          name="dataNascimento"
          value={form.dataNascimento}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSubmit}>
          {editando ? 'Salvar alterações' : 'Cadastrar'}
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default FormPessoa