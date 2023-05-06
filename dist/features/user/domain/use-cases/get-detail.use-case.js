"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDetailUseCase = void 0;
class GetDetailUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        return await this.userRepository.getById(userId);
    }
}
exports.GetDetailUseCase = GetDetailUseCase;
//# sourceMappingURL=get-detail.use-case.js.map