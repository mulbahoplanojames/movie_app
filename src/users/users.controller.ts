import {
  Controller,
  Delete,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard.js';
import { Roles } from '../auth/roles.decorator.js';

export interface User {
  id: string;
  username: string;
  roles: string[];
}

const mockUsers: User[] = [
  { id: '1', username: 'alice', roles: ['admin'] },
  { id: '2', username: 'bob', roles: ['user'] },
];

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  @Get()
  getUsers(): User[] {
    return mockUsers;
  }

  @Delete(':id')
  @Roles('admin')
  deleteUser(@Param('id') id: string): { deleted: string } {
    return { deleted: id };
  }
}
