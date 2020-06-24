const db = require('./_database')

async function updateData(){
  await db.connect()
  var result

  //evento 
  result = await db.query("UPDATE participante SET nome = 'Carlos Augusto' WHERE nome = 'Carlos'");
  console.log("EVENTOS COM PARTICIPANTES:")
  console.log(result.rows);

  await db.end()

  console.log("Done!");
}

updateData()
