import { Controller, Get, Post, Res, Response, Request, Body, HttpStatus } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('/')
  sayHello() {
    return 'Hello from product controller!!'
  }

  @Post()
  postProducto(@Res() res: Response, @Body() payload: any) {
    return res.ok().json({
      msg: 'Add a new product',
      payload,
    });
  }
}
