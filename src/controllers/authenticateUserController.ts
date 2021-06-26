import {Request, Response} from "express"
import { AutenticateUserService } from "../services/AutenticateUserService"


class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const authenticateUserService = new AutenticateUserService();

        const {email, password} = request.body;

        const token = await authenticateUserService.execute({email, password});

        return response.json(token);
    }
}

export {AuthenticateUserController}