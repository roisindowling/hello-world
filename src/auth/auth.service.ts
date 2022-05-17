import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {

    constructor(
      private jwtService: JwtService, 
      private usersService: UsersService
      ) {}

    async signinLocal(dto : AuthDto){
    const user = await this.usersService.findOne(dto.username);
    if (!user) throw new UnauthorizedException('Credentials incorrect un');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect pwd');
      
    return this.signUser(user.id, user.email, 'user');
  }

    async signUser(userId: number, email: string, type: string) {
        return this.jwtService.sign({
          sub: userId,
          email,
          type: type,
        });
      }

}
