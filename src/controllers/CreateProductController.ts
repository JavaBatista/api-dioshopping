import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController{
    async handle(request: Request, response: Response){
        const { category, name_product, price, image, id_categorys, name_categorys, selected} = request.body;

        const createProductService = new CreateProductService();

        const newProduct = await createProductService.execute({ category, name_product, price, image, id_categorys, name_categorys, selected});

        return response.json(newProduct);
    }
}

export { CreateProductController }