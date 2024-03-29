import { CreateDto } from '../dto/create.dto';
import { GetUserIdDto } from '../dto/get-user-id.dto';
import { ListPurchasedItemsDto } from '../dto/list-purchased-items.dto';
import { PurchasedItemDto } from '../dto/purchased-item.dto';
import { UserIdDto } from '../dto/user-id.dto';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';
export declare class UserHttpController {
    private readonly userService;
    constructor(userService: UserService);
    create(createDto: CreateDto): Promise<void>;
    update(userDto: UserDto): Promise<void>;
    detail({ userId }: UserIdDto): Promise<UserDto>;
    list(): Promise<Array<UserDto>>;
    getUserId({ email, password }: GetUserIdDto): Promise<string>;
    delete({ userId }: UserIdDto): Promise<void>;
    listPurchasedItems({ userId }: UserIdDto, { itemType }: ListPurchasedItemsDto): Promise<Array<PurchasedItemDto>>;
}
