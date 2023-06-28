export const getColor = (value:string) =>{
    let color = ""
    switch(value){
        case 'black':
            color = 'bg-black-500'
            break
        case 'blue':
            color = 'bg-blue-500'
            break
        case 'green':
            color = 'bg-green-500'
            break   
        case 'grey':
            color = 'bg-grey-500'
            break
        case 'red':
            color = 'bg-red-500'
            break
        case 'yellow':
            color = 'bg-yellow-500'
            break
        case 'pink':
            color = 'bg-pink-500'
            break
        default:
            color = 'bg-white'
    }
    return color
}