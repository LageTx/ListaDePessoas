-- Cria o banco de dados
CREATE DATABASE cadastro_pessoas;

-- Seleciona o banco para usar
USE cadastro_pessoas;

-- Cria a tabela de pessoas
CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insere uma pessoa de teste
INSERT INTO pessoas (nome, telefone, data_nascimento)
VALUES ('João Silva', '(31) 99999-0001', '1990-05-20');

-- Consulta para ver se apareceu
SELECT * FROM pessoas;