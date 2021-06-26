import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/tagRepositories";

interface ITag{
    name: string
}

class CreateTagService{
    
    async execute(name: string) {
        
        const tagRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Incorrect name!");
        }
        
        const alreadExistsTag = await tagRepositories.findOne({name});
            
        if(alreadExistsTag){
            throw new Error("This Tag Already Exist!")
            
        }
        const newTag = tagRepositories.create({name});
        await tagRepositories.save(newTag);
        return newTag;
    }
}

export { CreateTagService }

