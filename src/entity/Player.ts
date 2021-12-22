import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,ManyToMany,JoinTable,ManyToOne} from "typeorm";
import {Score} from "./Score";

@Entity("Player")
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id:number;

  @Column('text',{nullable:true})
  public full_name:string;

  @ManyToMany((type) => Score, score => score.players)
  @JoinTable()
  scores: Score[];
}
