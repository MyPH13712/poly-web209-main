import instance from "./instance";
import { ProductType } from "../type/product";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const read = (id:number) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const deleteProduct = (id:number) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const update = (product: any) => {
    const url = `/products/${product.id}`;
    return instance.patch(url, product);
}
