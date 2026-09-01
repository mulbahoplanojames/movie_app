import { Controller, Get, Param } from '@nestjs/common';
import { ParsePositiveIntPipe } from '../pipes/parse-positive-int.pipe.js';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(
    @Param('id', ParsePositiveIntPipe) id: number,
  ): { id: number } {
    return { id };
  }
}
