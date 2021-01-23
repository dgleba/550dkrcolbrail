import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { KittenDTO } from '../service/dto/kitten.dto';
import { KittenMapper } from '../service/mapper/kitten.mapper';
import { KittenRepository } from '../repository/kitten.repository';

const relationshipNames = [];

@Injectable()
export class KittenService {
  logger = new Logger('KittenService');

  constructor(@InjectRepository(KittenRepository) private kittenRepository: KittenRepository) {}

  async findById(id: string): Promise<KittenDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.kittenRepository.findOne(id, options);
    return KittenMapper.fromEntityToDTO(result);
  }

  async findByfields(options: FindOneOptions<KittenDTO>): Promise<KittenDTO | undefined> {
    const result = await this.kittenRepository.findOne(options);
    return KittenMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<KittenDTO>): Promise<[KittenDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.kittenRepository.findAndCount(options);
    const kittenDTO: KittenDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(kitten => kittenDTO.push(KittenMapper.fromEntityToDTO(kitten)));
      resultList[0] = kittenDTO;
    }
    return resultList;
  }

  async save(kittenDTO: KittenDTO): Promise<KittenDTO | undefined> {
    const entity = KittenMapper.fromDTOtoEntity(kittenDTO);
    const result = await this.kittenRepository.save(entity);
    return KittenMapper.fromEntityToDTO(result);
  }

  async update(kittenDTO: KittenDTO): Promise<KittenDTO | undefined> {
    const entity = KittenMapper.fromDTOtoEntity(kittenDTO);
    const result = await this.kittenRepository.save(entity);
    return KittenMapper.fromEntityToDTO(result);
  }

  async deleteById(id: string): Promise<void | undefined> {
    await this.kittenRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
