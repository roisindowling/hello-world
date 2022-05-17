import { Body } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthDto}  from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("local/signin")
  signinLocal(@Body() dto: AuthDto){
      console.log(dto)
      return this.authService.signinLocal(dto);
  }
}
