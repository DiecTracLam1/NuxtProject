
export const userTransformer = (order:any , quantity:number , size:string , color:string)=>{
    const mapProductFromOrder = ()=>{
        order.product.map((item:any)=>{
            
        })
    }
    return {
        ...order,
        product : {
            ...order.product
        }
    }
}