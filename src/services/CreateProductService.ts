import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repository/ProductsRepository";

interface IProduct {

    category: string;
    name_product: string;
    price: number;
    image: string;
    id_categorys: number
    name_categorys: string;
    selected: boolean;
}

class CreateProductService {
    async execute({category, name_product, price, image, id_categorys, name_categorys, selected}: IProduct){
        const productsRepository = getCustomRepository(ProductsRepository);

        if(!category){
            throw new Error("Por favor informe category!")
        }

        if(!name_product){
            throw new Error("Por favor informe name_product!")
        }

        if(!price){
            throw new Error("Por favor informe price!")
        }

        if(!image){
            throw new Error("Por favor informe image!")
        }

        if(!id_categorys){
            throw new Error("Por favor informe id_categorys!")
        }

        if(!name_categorys){
            throw new Error("Por favor informe name_categorys!")
        }

        // if(!selected){
        //     throw new Error("Por favor escreva uma messagem!")
        // }

        const newProduct = productsRepository.create({ category, name_product, price, image, id_categorys, name_categorys, selected })

        await productsRepository.save(newProduct);

        return newProduct;
    }
}

export  { CreateProductService }