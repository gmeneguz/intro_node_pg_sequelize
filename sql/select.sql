---------------------
-- Verificar Dados --

SELECT * FROM evento;
SELECT * FROM participante;
SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id;
