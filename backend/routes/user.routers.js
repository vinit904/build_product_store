import express from 'express';
import * as userController from '../controller/user.controller.js';

const router = express.Router();


router.post("/save",userController.save);

router.delete("/delete",userController.deleteProduct);

router.get("/fetch",userController.fetch);

router.patch("/update",userController.update)


export default router