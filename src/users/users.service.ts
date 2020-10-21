import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  create(userData) {
    const user = new User();
    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.isActive = userData.isActive;
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
