import {Router} from "express";
import invenRouter from "./invenRouter";
import orderRouter from "./orderRouter";
import storehouseRouter from "./storehouseRouter";

const productsRouter = Router()
productsRouter.use('/inventory', invenRouter)
productsRouter.use('/order', orderRouter)
productsRouter.use('/storehouse', storehouseRouter)
export default productsRouter
