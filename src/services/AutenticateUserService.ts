import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/userRepositories"
import { sign } from "jsonwebtoken";

interface IAutenticateUser{
    email: string,
    password: string,
}

class AutenticateUserService{
    
    async execute({email, password} : IAutenticateUser){
        //verificar de usuario exist
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({email});
            
        if(!user){
                throw new Error("Email/Password Inválido")
            }

            const passwordMatch = await compare(password, user.password);
            if(!passwordMatch){
                throw new Error("Email/Password inválido")
            }

            const token = sign({
                email: user.email
            },"luiscaputodev", {
                subject: user.id,
                expiresIn: "1d"
            });

            return token;
    }
}

export {AutenticateUserService}