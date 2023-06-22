export const productTransformer = (data : any) =>{
    return {
        products : data.products,
        offset : data._offset,
        limit : data._limit,
        total : data.total,
    }
}