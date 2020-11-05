const knex = require('knex');
const dotenv = require("dotenv").config({path:'./.env'},(err,result) =>{
    if(err) console.log(err);
    else console.log(console.log(result))
});

const query = knex({
    // client:process.env.DATABASE_CLIENT,
    // connection:{
    //     host:process.env.DATABASE_HOST,
    //     user:process.env.DATABASE_USER,
    //     password:process.env.DATABASE_PASSWORD,
    //     database:process.env.DATABASE
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        password:'01224659503',
        database:'FoodApp'
    },
  
    pool:{min:0 , max:100}
});
module.exports = query;
     