"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(entity) {
        this.imageUrl = null;
        this.generalScore = 0;
        this.coins = 0;
        this.reminderDate = null;
        Object.assign(this, entity);
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map