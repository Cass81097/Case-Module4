import {Router} from "express";
import userController from "../../controller/user/userController";

const listUserRouter = Router()
listUserRouter.post('/register', userController.register);
listUserRouter.post('/login', userController.login);
export default listUserRouter
