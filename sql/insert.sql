
-- Criar Eventos

INSERT INTO evento (nome) VALUES ('Encontro de Nodejs');
INSERT INTO evento (nome) VALUES ('Encontro de Postgresql');

-- Criar Participantes

INSERT INTO participante (nome) VALUES ('Carlos');
INSERT INTO participante (nome) VALUES ('Augusto');
INSERT INTO participante (nome) VALUES ('Janaína');
INSERT INTO participante (nome) VALUES ('Rafael');

-- Adicionar participantes do evento Nodejs

INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 1); -- Carlos
INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 2); -- Augusto
INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 3); -- Janaína

-- Adicionar participantes do evento Postgresql

INSERT INTO evento_participante (evento_id,participante_id) VALUES (2, 3); -- Janaína
INSERT INTO evento_participante (evento_id,participante_id) VALUES (2, 4); -- Rafael
