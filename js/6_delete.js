const db = require('./_database')

async function deleteData(){
  await db.connect()
  var result

  //evento 
  result = await db.query("DELETE FROM evento_participante WHERE evento_id = 1 AND participante_id = 1");
  console.log(result.rows);

  await db.end()

  console.log("Done!");
}

deleteData()
