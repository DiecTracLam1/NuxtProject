import { User } from "../types/user.types"
export const userTransformer = (user : User)=>{
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        phone : user.phone,
        profileImage: user.profileImage,
    }
}