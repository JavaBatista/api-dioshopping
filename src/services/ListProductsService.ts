import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repository/ProductsRepository";

class ListProductService{
    async execute(){
        const productsRepository = getCustomRepository(ProductsRepository);

        const allProducts = await productsRepository.find();

        return allProducts
    }
}

export { ListProductService }
