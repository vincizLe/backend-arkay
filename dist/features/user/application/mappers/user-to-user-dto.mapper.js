"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDto = void 0;
const user_dto_1 = require("../dto/user.dto");
function userToUserDto(user) {
    return new user_dto_1.UserDto({
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
        lastname: user.lastname
    });
}
exports.userToUserDto = userToUserDto;
//# sourceMappingURL=user-to-user-dto.mapper.js.map