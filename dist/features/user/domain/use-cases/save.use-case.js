"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUseCase = void 0;
class SaveUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(user) {
        if (user.id != null || user.id != undefined) {
            const currentUser = await this.userRepository.getById(user.id);
            currentUser.email = user.email;
            currentUser.password = user.password;
            currentUser.name = user.name;
            currentUser.lastname = user.lastname;
            user = currentUser;
        }
        await this.userRepository.save(user);
    }
}
exports.SaveUseCase = SaveUseCase;
//# sourceMappingURL=save.use-case.js.map