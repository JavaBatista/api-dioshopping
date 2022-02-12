import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductController } from "./controllers/ListProductController";

const router = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.hanle)
router.post('/message', createMessageController.handle)

router.get('/product', listProductController.hanle)
router.post('/product', createProductController.handle)

export { router }
