import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity("products")
class Product {
    
    @PrimaryColumn()
    readonly id_product: number;

    @Column()
    category: string;

    @Column()
    name_product: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @Column()
    id_categorys: number

    @Column()
    name_categorys: string;

    @Column()
    selected: boolean;

    constructor() {
        this.selected = false;
    }

}

export { Product }
