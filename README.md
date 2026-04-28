#  Lista de Pessoas
 
Aplicação web fullstack para gerenciar uma lista de pessoas, com funcionalidades completas de cadastro, listagem, edição e remoção (CRUD).
 
##  Site
 
- [lista-de-pessoas.vercel.app](https://lista-de-pessoas.vercel.app)

##  Tecnologias
 
- **Frontend:** React + Vite + Axios + React Router DOM
- **Backend:** .NET 10 (C#) + Entity Framework Core
- **Banco de dados:** MySQL
- **Hospedagem:** Vercel (frontend) + Railway (backend e banco)
##  Funcionalidades
 
- Listar todas as pessoas cadastradas
- Cadastrar nova pessoa (nome, telefone e data de nascimento)
- Editar informações de uma pessoa
- Remover uma pessoa da lista
##  Estrutura do projeto
 
```
cadastro-pessoas/
├── backend/
│   └── CadastroPessoas/        # API REST em .NET
│       ├── Controllers/         # Endpoints da API
│       ├── Data/                # Contexto do banco de dados
│       ├── Models/              # Modelo de dados
│       └── Program.cs           # Configuração da aplicação
├── frontend/
│   └── cadastro-pessoas/        # Interface em React
│       └── src/
│           └── pages/           # Páginas da aplicação
├── database/
│   └── init.sql                 # Script de criação do banco
└── README.md
```
 
##  Como rodar localmente
 
### Pré-requisitos
 
- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org)
- [MySQL](https://www.mysql.com/downloads/)
### 1. Clone o repositório
 
```bash
git clone https://github.com/LageTx/ListaDePessoas.git
cd ListaDePessoas
```
 
### 2. Configure o banco de dados
 
Abra o MySQL e execute o script:
 
```bash
mysql -u root -p < database/init.sql
```
 
### 3. Configure e rode o backend
 
```bash
cd backend/CadastroPessoas
```
 
Edite o arquivo `appsettings.json` e coloque suas credenciais do MySQL:
 
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=cadastro_pessoas;User=root;Password=SUA_SENHA;"
  }
}
```
 
Rode a API:
 
```bash
dotnet run
```
 
A API estará disponível em `http://localhost:5005`
 
### 4. Configure e rode o frontend
 
```bash
cd frontend/cadastro-pessoas
npm install
npm run dev
```
 
O frontend estará disponível em `http://localhost:5173`
 
##  Endpoints da API
 
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/pessoas` | Lista todas as pessoas |
| GET | `/api/pessoas/{id}` | Busca uma pessoa pelo ID |
| POST | `/api/pessoas` | Cadastra uma nova pessoa |
| PUT | `/api/pessoas/{id}` | Atualiza os dados de uma pessoa |
| DELETE | `/api/pessoas/{id}` | Remove uma pessoa |
 
