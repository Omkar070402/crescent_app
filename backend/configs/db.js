import mysql from 'mysql2'


const db = mysql.createConnection({
  user : 'root',
  host : 'localhost',
  password : 'omkarSESHADRI070402$',
  database : 'crescentapp'
})

db.connect(err=>{
  if(err){
    console.error('MYSQL CONNECTION ERROR',err);
    return;
  }
  console.log('Connected to MYSQL');
  
})






export default db