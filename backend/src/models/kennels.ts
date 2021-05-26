import{Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn}from 'typeorm';
import Images from './images';

@Entity('Kennels')
export default class Kennels{

  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

  @Column()
  latitude:number;

  @Column()
  longitude:number;

  @Column()
  about:string;

  @Column()
  instructions:string;

  @Column()
  opening_hours:string;

  @Column()
  open_on_weekends:boolean;

  @OneToMany(()=>Images, image =>image.kennels,{
    cascade:['insert', 'update']
  }) 

  @JoinColumn({name:'kennel_id'})
  images:Images[];

}