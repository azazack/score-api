import {Entity,Column,PrimaryGeneratedColumn,BaseEntity} from "typeorm";

@Entity("Player")
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id:number;

  
  @Column('text',{nullable:true})
  public full_name:string; 
}
