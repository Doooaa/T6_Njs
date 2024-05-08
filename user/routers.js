import { Router } from "express";
import {
  addUser,
  updateUser,
  getAllusers,
  deleteUser,
  getUsersStartingWithA,
  getUsersWithAge2030,
} from "./controlers.js";
export const router = Router();

router.post("/addUser", addUser);
router.delete("/delUser/:id", deleteUser);
router.patch("/updateUser/:id", updateUser);
router.get("/getAllusers", getAllusers);
router.get("/userStartA", getUsersStartingWithA);
router.get("/getUsersWithAge2030", getUsersWithAge2030);

export default router ;

