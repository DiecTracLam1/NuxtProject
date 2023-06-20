export const userTransformer = (user : any)=>{
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        phone : user.phone,
        profileImage: user.profileImage,
    }
}