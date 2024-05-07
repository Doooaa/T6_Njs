import {sequelize} from '../connection'
export const user =sequelize.define('user',{
   id:{
    type: DataTypes.INTEGER(30),
    primaryKey: true,
    autoIncrement: true
   },
   name:{
    type: DataTypes.STRING(40),
    unique: true
   },
   email:
   {
    type: DataTypes.STRING(40),
    unique: true
   },
   password:
   {
    type: DataTypes.STRING(40),
    unique: true
   },
   age:
   {
    type: DataTypes.INTEGER(150),
    unique: true
   },

});