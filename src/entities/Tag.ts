import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tags")
    class Tags{
        @PrimaryColumn()
        readonly id: string;
        @Column()
        name: string;
        @CreateDateColumn()
        created_at: Date;
        @CreateDateColumn()
        updated_at: Date;

        constructor (){
            if(!this.id){
                this.id = uuid();
            }
        }
    }

    export { Tags }