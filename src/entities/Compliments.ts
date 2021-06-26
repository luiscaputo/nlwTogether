import { Column, Entity, CreateDateColumn, PrimaryColumn, UpdateQueryBuilder } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("compliments")
class Compliments{
    @PrimaryColumn()
    readonly id: string;


    @Column()
    message: string;
    @CreateDateColumn()
    created_at: Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}