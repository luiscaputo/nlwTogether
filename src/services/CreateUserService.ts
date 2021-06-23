import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/userRepositories"

interface IUserRequest{
    name: string,
    email: string,
    admin?:false
}
class CreateUserService{
    async execute({name, email, admin} : IUserRequest){
        
        const usersRepositoty = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepositoty.findOne({email});
        
        if(userAlreadyExists){
            throw new Error("User already exists")
        }else{
            const createUser = await usersRepositoty.create({name,email, admin});
            await usersRepositoty.save(createUser);
            return createUser;
        }
    }
}

export { CreateUserService }