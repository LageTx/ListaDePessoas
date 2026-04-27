import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaPessoas from './pages/ListaPessoas'
import FormPessoa from './pages/FormPessoa'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaPessoas />} />
        <Route path="/nova" element={<FormPessoa />} />
        <Route path="/editar/:id" element={<FormPessoa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App