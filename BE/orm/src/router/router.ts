import {Router} from "express";
import locationRouter from "./location/locationRouter";
import productRouter from "./product/productRouter";
import userRouter from "./user/userRouter";

const router = Router();
router.use('/location', locationRouter)
router.use('/products', productRouter)
router.use('/user', userRouter)

export default router;