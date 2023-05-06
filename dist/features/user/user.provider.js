"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceProvider = exports.userRepositoryProvider = void 0;
const user_service_1 = require("./application/services/user.service");
const user_repository_1 = require("./domain/repositories/user.repository");
const user_impl_repository_1 = require("./infrastructure/repositories/user-impl.repository");
exports.userRepositoryProvider = {
    provide: user_repository_1.UserRepository,
    useClass: user_impl_repository_1.UserImplRepository
};
exports.userServiceProvider = {
    provide: user_service_1.UserService,
    inject: [user_repository_1.UserRepository],
    useFactory: (userRepository) => {
        return new user_service_1.UserService(userRepository);
    }
};
//# sourceMappingURL=user.provider.js.map