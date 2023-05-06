"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserIdUseCase = void 0;
class GetUserIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(email, password) {
        const user = await this.userRepository.getByEmailAndPassword(email, password);
        return user.id;
    }
}
exports.GetUserIdUseCase = GetUserIdUseCase;
//# sourceMappingURL=get-user-id.use-case.js.map