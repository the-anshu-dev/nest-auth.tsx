import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './schemas/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProductsService {

    // .......... Call Schema Modal
    constructor(@InjectModel(Products.name) private model:Model<Products>)
    {
  
    }


 async create(createProductDto: CreateProductDto) {
    return await this.model.create(
      {
        name:createProductDto.name,
        quantity:createProductDto.quantity,
        creator: new Types.ObjectId(createProductDto.creator)
      }
    );
  }

  async findAll() {
    return await this.model.find().populate('creator'); 
  }

 async findOne(id: string) {
    return await this.model.findById(id);
    // return await this.model.findByIdAndDelete(id);
  }

   async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.model.findByIdAndUpdate(id,updateProductDto,{new:true});
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
