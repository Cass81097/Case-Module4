import {Router} from "express";
import storehouseController from "../../controller/product/storehouseController";

const storehouseRouter = Router()
storehouseRouter.get('/', storehouseController.findAll);
storehouseRouter.post('/', storehouseController.add);
storehouseRouter.delete('/:id', storehouseController.delete);
storehouseRouter.put('/:id', storehouseController.update);
storehouseRouter.get('/:id', storehouseController.findById);
export default storehouseRouter
