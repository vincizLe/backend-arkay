"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUseCase = void 0;
class DeleteUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        return await this.userRepository.deleteById(userId);
    }
}
exports.DeleteUseCase = DeleteUseCase;
//# sourceMappingURL=delete.use-case.js.map