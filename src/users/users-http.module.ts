import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
import { UsersControllers } from './users.controllers';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersControllers]
})
export class UserHttpModule {}
