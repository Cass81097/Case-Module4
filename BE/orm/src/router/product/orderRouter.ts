import {Router} from "express";
import orderController from "../../controller/product/orderController";

const orderRouter = Router()
orderRouter.get('/', orderController.findAll);
orderRouter.get('/user/:id', orderController.getAllOrderByUser);
orderRouter.post('/', orderController.add);
orderRouter.delete('/:id', orderController.delete);
orderRouter.put('/:id', orderController.update);
orderRouter.get('/:id', orderController.findById);
export default orderRouter
