/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

/**
 * A Kitten DTO object.
 */
export class KittenDTO extends BaseDTO {
  @ApiModelProperty({ description: 'name field', required: false })
  name: string;

  @ApiModelProperty({ description: 'color field', required: false })
  color: string;

  @ApiModelProperty({ description: 'size field', required: false })
  size: string;

  // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
