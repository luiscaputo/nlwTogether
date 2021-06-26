import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../entities/Tag";

@EntityRepository(Tags)
class TagsRepositories extends Repository<Tags> {}

export {TagsRepositories};