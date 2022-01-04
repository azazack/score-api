import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,ManyToMany,JoinTable,ManyToOne,OneToMany} from "typeorm";
import {Score} from "./Score";
import {Week} from "./Week";
@Entity("Player")
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id:number;

  @Column('text',{nullable:true})
  public full_name:string;

  @OneToMany((type) => Week, week => week.winner)
  week_winner: Week[];

  @ManyToMany((type) => Score, score => score.winner)
  @JoinTable()
  winner:Score[];

  @ManyToMany((type) => Score, score => score.players)
  @JoinTable()
  scores: Score[];
}
