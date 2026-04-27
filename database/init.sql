CREATE DATABASE IF NOT EXISTS cadastro_pessoas;
USE cadastro_pessoas;

CREATE TABLE pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);