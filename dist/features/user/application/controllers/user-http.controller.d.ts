import { CreateDto } from '../dto/create.dto';
import { UserIdDto } from '../dto/user-id.dto';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';
export declare class UserHttpController {
    private readonly userService;
    constructor(userService: UserService);
    create(createDto: CreateDto): Promise<void>;
    update(userDto: UserDto): Promise<void>;
    detail({ id }: UserIdDto): Promise<UserDto>;
    delete({ id }: UserIdDto): Promise<void>;
}
