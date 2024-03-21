import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://avinnya:avinya7815@avinya.smnuime.mongodb.net/', {
      dbName:"avinyadata"
    }),    // make it at top [ if env exist : make it at first ]
    UsersModule, ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
