import {Router} from "express";
import listUserRouter from "./listUserRouter";
import infoUserRouter from "./infoUserRouter";

const userRouter = Router()
userRouter.use('/list', listUserRouter)
userRouter.use('/infoUser', infoUserRouter)

export default userRouter