import { getCustomRepository } from "typeorm";

interface ICreateComplimentService{
    user_sender: string,
    user_receiver: string,
    tag_id: string,
    message: string,
}
class CreateComplimentService{
    
    async execute({user_sender, user_receiver, tag_id, message} : ICreateComplimentService){
        const createComplimentRepositorie = getCustomRepository(CreateComplimentService);
        
    }
}

export { CreateComplimentService }