import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Products";

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {}

export { ProductsRepository }