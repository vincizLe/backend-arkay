import { CreateDto } from '../dto/create.dto';
import { GetUserIdDto } from '../dto/get-user-id.dto';
import { UserIdDto } from '../dto/user-id.dto';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';
export declare class UserHttpController {
    private readonly userService;
    constructor(userService: UserService);
    create(createDto: CreateDto): Promise<void>;
    update(userDto: UserDto): Promise<void>;
    detail({ id }: UserIdDto): Promise<UserDto>;
    getUserId({ email, password }: GetUserIdDto): Promise<string>;
    delete({ id }: UserIdDto): Promise<void>;
}
