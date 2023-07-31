import {Router} from "express";
import invenController from "../../controller/product/invenController";

const invenRouter = Router()
invenRouter.get('/', invenController.findAll);
invenRouter.post('/', invenController.add);
invenRouter.delete('/:id', invenController.delete);
invenRouter.put('/:id', invenController.update);
invenRouter.get('/:id', invenController.findById);
export default invenRouter
