const Sequelize = require('sequelize')
const models = require('./models')
const Op = Sequelize.Op

async function select(){

  //Regra 1 : Listar apenas eventos que tenham Nodejs no nome
  //Regra 2 : Dentro desse(s) evento(s), listar apenas pessoas que NÃO tenham a letra "o" no nome

  const eventosComParticipantes = await models.evento.findAll({
    where: {
      nome: {
        [Op.like]: '%Nodejs%'
      }
    },
    include: [
      {
        model: models.participante,
        where: {
          nome: {
              [Op.notLike]: '%o%'
          },
        }
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
