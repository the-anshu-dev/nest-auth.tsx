


// Make the All data type Schema 


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from 'src/users/schemas/users.schema';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products{
    @Prop({required:true})
    name:string

    @Prop({required:true})
    quantity:number

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Users'})
    creator:Users

   
}




export const ProductsSchema=SchemaFactory.createForClass(Products)