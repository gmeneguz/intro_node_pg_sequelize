const db = require('./_database')

async function insertData(){
  await db.connect()
  // Criar Eventos

  const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"

  await db.query(queryEvento, ['Encontro de Nodejs'])
  await db.query(queryEvento, ['Encontro de Postgresql'])

  //Criar Participantes

  const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"

  await db.query(queryParticipante,['Carlos'])
  await db.query(queryParticipante, ['Augusto'])
  await db.query(queryParticipante,['Janaína'])
  await db.query(queryParticipante,['Rafael'])

  // Adicionar participantes do evento Nodejs

  const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id) VALUES ($1, $2)"

  await db.query(queryEventoParticipante, [1, 1])
  await db.query(queryEventoParticipante, [1, 2])
  await db.query(queryEventoParticipante, [1, 3])

  // Adicionar participantes do evento Postgresql

  await db.query(queryEventoParticipante, [2, 3])
  await db.query(queryEventoParticipante, [2, 4])

  await db.end()

  console.log("Dados Inseridos");
}

insertData()
