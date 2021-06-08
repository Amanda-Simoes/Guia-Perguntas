CREATE DATABASE sistemaDeCadastro;

USE sistemaDeCadastro

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    idade int
)

INSERT INTO usuarios VALUES ("Amanda","amanda.simoes1707@gmail.com",21);
INSERT INTO usuarios VALUES ("Igor","igorjosebda@gmail.com",21);
INSERT INTO usuarios VALUES ("Jennifer","jennifer@gmail.com",23);

SELECT * FROM usuarios

DELETE FROM usuarios WHERE nome = 'Jennifer';

UPDATE usuarios SET nome = "Igor José" WHERE nome = "Igor";