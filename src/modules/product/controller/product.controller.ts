import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('/')
  sayHello() {
    return 'Hello from product controller!!'
  }
}
