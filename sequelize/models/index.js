const sequelize = require('../_database')

const models = {
  evento: require('./evento'),
  participante: require('./participante'),
  sequelize: sequelize
}

module.exports = models
