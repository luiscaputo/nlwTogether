import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/userRepositories"
import { hash } from "bcryptjs"

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
            const passwordHash = await hash(password, 8);
            const createUser = usersRepositoty.create({name, email, admin, password: passwordHash});
            await usersRepositoty.save(createUser);
            return createUser;
        }
    }
}

export { CreateUserService }