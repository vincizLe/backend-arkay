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
            if (user.imageUrl != null || user.imageUrl != undefined) {
                currentUser.imageUrl = user.imageUrl;
            }
            if (user.generalScore != null || user.generalScore != undefined) {
                currentUser.generalScore = user.generalScore;
            }
            if (user.coins != null || user.coins != undefined) {
                currentUser.coins = user.coins;
            }
            if (user.goal != null || user.goal != undefined) {
                currentUser.goal = user.goal;
            }
            currentUser.hasReminder = user.hasReminder;
            if (user.hasReminder == true) {
                currentUser.reminderDate = user.reminderDate;
            }
            currentUser.purchasedItems = user.purchasedItems;
            user = currentUser;
        }
        await this.userRepository.save(user);
    }
}
exports.SaveUseCase = SaveUseCase;
//# sourceMappingURL=save.use-case.js.map