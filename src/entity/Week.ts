import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Score} from "./Score";

@Entity('Week')
export class Week extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id:number;

    @Column()
    public week_num:number;

    @OneToMany(() => Score, score => score.week)
    scores: Score[];
}
