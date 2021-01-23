import { Body, Controller, Delete, Get, Logger, Param, Post as PostMethod, Put, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { KittenDTO } from '../../service/dto/kitten.dto';
import { KittenService } from '../../service/kitten.service';
import { PageRequest, Page } from '../../domain/base/pagination.entity';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { HeaderUtil } from '../../client/header-util';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/kittens')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('kittens')
export class KittenController {
  logger = new Logger('KittenController');

  constructor(private readonly kittenService: KittenService) {}

  @Get('/')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'List all records',
    type: KittenDTO
  })
  async getAll(@Req() req: Request): Promise<KittenDTO[]> {
    const pageRequest: PageRequest = new PageRequest(req.query.page, req.query.size, req.query.sort);
    const [results, count] = await this.kittenService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder()
    });
    HeaderUtil.addPaginationHeaders(req.res, new Page(results, count, pageRequest));
    return results;
  }

  @Get('/:id')
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: KittenDTO
  })
  async getOne(@Param('id') id: string): Promise<KittenDTO> {
    return await this.kittenService.findById(id);
  }

  @PostMethod('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ title: 'Create kitten' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: KittenDTO
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async post(@Req() req: Request, @Body() kittenDTO: KittenDTO): Promise<KittenDTO> {
    const created = await this.kittenService.save(kittenDTO);
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Kitten', created.id);
    return created;
  }

  @Put('/')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ title: 'Update kitten' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: KittenDTO
  })
  async put(@Req() req: Request, @Body() kittenDTO: KittenDTO): Promise<KittenDTO> {
    HeaderUtil.addEntityCreatedHeaders(req.res, 'Kitten', kittenDTO.id);
    return await this.kittenService.update(kittenDTO);
  }

  @Delete('/:id')
  @Roles(RoleType.ADMIN)
  @ApiOperation({ title: 'Delete kitten' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.'
  })
  async deleteById(@Req() req: Request, @Param('id') id: string): Promise<void> {
    HeaderUtil.addEntityDeletedHeaders(req.res, 'Kitten', id);
    return await this.kittenService.deleteById(id);
  }
}
