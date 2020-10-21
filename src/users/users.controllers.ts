import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService} from './users.service';

@Controller('users')
export class UsersControllers {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @Get()
  findUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUser(@Param('id') id) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id) {
    return this.usersService.remove(id);
  }
}
