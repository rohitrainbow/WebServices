import { ProdDescr } from './prod-descr';

export class CartProducts {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    prodDescr:ProdDescr;
    subTotal:number;
    total:number;
}
