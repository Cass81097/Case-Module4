import {Router} from "express";
import locationController from "../../controller/location/locationController";

const listLocationRouter = Router()
listLocationRouter.get('/', locationController.findAll);
listLocationRouter.post('/', locationController.add);
listLocationRouter.delete('/:id', locationController.delete);
listLocationRouter.put('/:id', locationController.update);
listLocationRouter.get('/:id', locationController.findById);
export default listLocationRouter
