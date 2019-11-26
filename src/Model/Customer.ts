import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  no: number;

  @Column()
  ID: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;
}
