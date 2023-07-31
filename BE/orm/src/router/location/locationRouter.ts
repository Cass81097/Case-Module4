import {Router} from "express";
import listLocationRouter from "./listLocationRouter";
import localpostRouter from "./localpostRouter";

const locationRouter = Router()
locationRouter.use('/list', listLocationRouter)
locationRouter.use('/localpost', localpostRouter)
export default locationRouter