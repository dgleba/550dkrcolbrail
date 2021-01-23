import { EntityRepository, Repository } from 'typeorm';
import { Kitten } from '../domain/kitten.entity';

@EntityRepository(Kitten)
export class KittenRepository extends Repository<Kitten> {}
