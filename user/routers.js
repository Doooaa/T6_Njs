import { Router } from "express";
import {  addUser,
    updateUser,
    getAllusers,
    deleteUser,
    getUsersStartingWithA,
    getUsersWithAge2030,} from './controlers'
const router=Router();

router.get('/addUser',addUser);
router.get('/delUser',deleteUser);
router.get('/updateUser',updateUser);
router.get('/getAllusers',getAllusers);
router.get('/userStartA',getUsersStartingWithA);
router.get('/getUsersWithAge2030',getUsersWithAge2030);


module.exports={
    userRouter
}


