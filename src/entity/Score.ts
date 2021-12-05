import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany} from "typeorm";
import {Player} from "./Player";

@Entity("Score")
export class Score extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: number;

    @Column("text")
    public result: string;

    @Column("date")
    public date: Date;

    @ManyToMany((type) => Player, (player) => player.scores)
    players: Player[];

    @OneToMany((type) => Player, (player) => player.winner)
    winner:Player;

}
