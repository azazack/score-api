import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToOne, ManyToOne,JoinColumn} from "typeorm";
import {Player} from "./Player";
import {Week} from "./Week";

@Entity("Score")
export class Score extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: number;

    @Column("text")
    public result: string;

    @Column("date")
    public date: Date;

    @ManyToMany((type) => Player, player => player.scores)
    players: Player[];

    @OneToOne((type) => Player)
    @JoinColumn()
    winner:Player;

    @ManyToOne(() => Week, week => week.scores)
    week:Week

}
