import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KittenController } from '../web/rest/kitten.controller';
import { KittenRepository } from '../repository/kitten.repository';
import { KittenService } from '../service/kitten.service';

@Module({
  imports: [TypeOrmModule.forFeature([KittenRepository])],
  controllers: [KittenController],
  providers: [KittenService],
  exports: [KittenService]
})
export class KittenModule {}
