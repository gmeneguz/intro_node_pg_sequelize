const models = require('./models')

async function select(){
  console.log("\n");
  
  //Eventos
  const eventos = await models.evento.findAll()
  eventos.forEach((evento) => {
    console.log("Evento: ", evento.nome)
  })
  console.log("\n");

  //Participantes
  const participantes  = await models.participante.findAll()
  participantes.forEach((participante) => {
    console.log("Participante: ", participante.nome)
  })
  console.log("\n");

  //Participantes em eventos
  const eventosComParticipantes = await models.evento.findAll({
    include: [
      {
        model: models.participante
      }
    ]
  })
  eventosComParticipantes.forEach((evento) => {
    console.log("Evento: ", evento.nome)
    evento.participantes.forEach((participante) => {
      console.log("----------> Participante: ", participante.nome)
    })
  })
  console.log("\n");

  await models.sequelize.close()
}
select()
