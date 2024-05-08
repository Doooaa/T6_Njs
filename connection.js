
import { Sequelize } from "sequelize";
                              //database name, username, pass,
export const sequelize = new Sequelize('task5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

  export const connectionDB = async()=>{
    return  await  sequelize.sync.then(()=>{
        console.log("connected to database")
    })
  } 
 



