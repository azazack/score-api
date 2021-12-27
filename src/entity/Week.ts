import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,OneToOne,JoinColumn} from "typeorm";
import {Score} from "./Score";
import {Player} from "./Player";
@Entity('Week')
export class Week extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id:number;

    @Column()
    public week_num:number;

    @OneToOne((type) => Player)
    @JoinColumn()
    winner:Player;

    @OneToMany(() => Score, score => score.week)
    scores: Score[];
}
