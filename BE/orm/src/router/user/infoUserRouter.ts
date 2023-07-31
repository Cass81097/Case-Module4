import {Router} from "express";
import infoUserController from "../../controller/user/infoUserController";

const infoUserRouter = Router()
infoUserRouter.get('/', infoUserController.findAll);
infoUserRouter.post('/', infoUserController.add);
infoUserRouter.delete('/:id', infoUserController.delete);
infoUserRouter.put('/:id', infoUserController.update);
infoUserRouter.get('/:id', infoUserController.findById);
export default infoUserRouter
