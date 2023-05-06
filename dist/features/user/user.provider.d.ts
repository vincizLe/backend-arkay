import { Provider } from '@nestjs/common';
import { UserService } from './application/services/user.service';
import { UserRepository } from './domain/repositories/user.repository';
export declare const userRepositoryProvider: Provider<UserRepository>;
export declare const userServiceProvider: Provider<UserService>;
