import { Kitten } from '../../domain/kitten.entity';
import { KittenDTO } from '../dto/kitten.dto';

/**
 * A Kitten mapper object.
 */
export class KittenMapper {
  static fromDTOtoEntity(entityDTO: KittenDTO): Kitten {
    if (!entityDTO) {
      return;
    }
    let entity = new Kitten();
    const fields = Object.getOwnPropertyNames(entityDTO);
    fields.forEach(field => {
      entity[field] = entityDTO[field];
    });
    return entity;
  }

  static fromEntityToDTO(entity: Kitten): KittenDTO {
    if (!entity) {
      return;
    }
    let entityDTO = new KittenDTO();

    const fields = Object.getOwnPropertyNames(entity);

    fields.forEach(field => {
      entityDTO[field] = entity[field];
    });

    return entityDTO;
  }
}
