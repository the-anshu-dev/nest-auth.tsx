


// Make the All data type Schema 


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Users>;

@Schema()
export class Users{
    @Prop()
    first_name:string

    @Prop()
    last_name:string

    @Prop({required:true})
    email:string

    @Prop({required:true})
    password: string

    @Prop()
    dob:string
}




export const UsersSchema=SchemaFactory.createForClass(Users)