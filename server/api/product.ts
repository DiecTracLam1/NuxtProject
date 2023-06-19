import { getProducts } from "../db/product";

export default defineEventHandler(async (event) => {
    const products = await getProducts()
    return { data : products}
});