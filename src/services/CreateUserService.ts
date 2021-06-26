import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/userRepositories"

interface IUserRequest{
    name: string,
    email: string,
    admin?:false,
    password: string,
}
class CreateUserService{
    async execute({name, email, admin, password} : IUserRequest){
        
        const usersRepositoty = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("Email Incorrect")
        }
            
        const userAlreadyExists = await usersRepositoty.findOne({email});

        if(userAlreadyExists){
            throw new Error("User already exists")
        }else{
            const createUser = await usersRepositoty.create({name, email, admin, password});
            await usersRepositoty.save(createUser);
            return createUser;
        }
    }
}

export { CreateUserService }