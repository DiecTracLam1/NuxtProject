import { User } from "../types/user.types"
export const userTransformer = (user : User)=>{
    return {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        username: user.username,
        phoneNumber : user.phoneNumber,
        profileImage: user.profileImage,
    }
}