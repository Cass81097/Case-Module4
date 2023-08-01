import {Router} from "express";
import localPostController from "../../controller/location/localPostController";

const localpostRouter = Router()
localpostRouter.get('/', localPostController.findAll);
localpostRouter.post('/', localPostController.add);
localpostRouter.delete('/:id', localPostController.delete);
localpostRouter.put('/:id', localPostController.update);
localpostRouter.get('/:id', localPostController.findById);
export default localpostRouter
