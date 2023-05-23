import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateDto } from '../dto/create.dto';
import { PurchasedItemDto } from '../dto/purchased-item.dto';
import { UserDto } from '../dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(createDto: CreateDto): Promise<void>;
    update(userDto: UserDto): Promise<void>;
    detail(userId: string): Promise<UserDto>;
    getUserId(email: string, password: string): Promise<string>;
    delete(userId: string): Promise<void>;
    listPurchasedItem(userId: string, itemType: string): Promise<Array<PurchasedItemDto>>;
}
