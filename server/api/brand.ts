import { getBrands } from "../db/brand";

export default defineEventHandler(async (event) => {
    const brands = await getBrands()
    return { data : brands}
});