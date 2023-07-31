import {Router} from "express";
import userController from "../../controller/user/userController";

const userRouter = Router()
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/', userController.findAll);
userRouter.delete('/:id', userController.delete);
userRouter.put('/:id', userController.update);
userRouter.get('/:id', userController.findById);

export default userRouter
