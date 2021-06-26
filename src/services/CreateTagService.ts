import { EntityRepository, Entity, getCustomRepository } from "typeorm";
import "../repositories/tagRepositories"
import { TagsRepositories } from "../repositories/tagRepositories";

interface ITag{
    name: string
}

class CreateTagService{
    async execute({name} : ITag){
        const tagRepositories = getCustomRepository(TagsRepositories)

        if(!name){
            throw new Error("Name Void")
        }
        else
        {
            const alreadExistTag = await tagRepositories.findOne({name});
            if(alreadExistTag){
                throw new Error("This Tag Already Exist")
            }else
            {
                const newTag = tagRepositories.create({name});
                await tagRepositories.save(newTag);
                return newTag;
            }
        }
    }
}

export { CreateTagService }

