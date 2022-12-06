import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { TextColorDto } from './text-color.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return {};
  }
  @Post()
  @Render('index')
  handleColor(@Body() body: TextColorDto): object {
    return body;
  }
}
