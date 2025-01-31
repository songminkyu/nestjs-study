import { Controller, Body, Post, Query, Get, Param } from '@nestjs/common';
import {
  CreateUserDto,
  UserInfo,
  UserLoginDDto,
  VerifyEmailDto,
} from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    // curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"honggildong\",\"email\":\"honggildong@naver.com\",\"password\":\"1234\"}"
    console.log(dto);
    return;
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    // curl -X POST "http://localhost:3000/users/email-verify?signupVerifyToken=your_token_here"
    console.log(dto);
    return 'a';
  }

  @Post('login')
  async login(@Body() dto: UserLoginDDto): Promise<string> {
    // curl -X POST http://localhost:3000/users/login -H "Content-Type: application/json" -d "{\"email\":\"honggildong@naver.com\",\"password\":\"1234\"}"
    console.log(dto);
    return 'b';
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    // curl -X GET http://localhost:3000/users/honggildong
    console.log(userId);
    return;
  }
}
