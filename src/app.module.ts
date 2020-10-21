import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UserHttpModule } from './users/users-http.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'unicorn_user',
      password: 'magical_password',
      database: 'rainbow_database',
      entities: [User],
      synchronize: true,
    }),
    UserHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
