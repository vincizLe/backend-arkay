"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDocumentToUser = void 0;
const user_purchased_item_entity_1 = require("../../domain/entities/user-purchased-item.entity");
const user_entity_1 = require("../../domain/entities/user.entity");
function userDocumentToUser(userDocument) {
    var _a, _b, _c, _d, _e;
    return new user_entity_1.User({
        id: userDocument._id.toHexString(),
        email: userDocument.email,
        password: userDocument.password,
        name: userDocument.name,
        lastname: userDocument.lastname,
        imageUrl: (_a = userDocument === null || userDocument === void 0 ? void 0 : userDocument.imageUrl) !== null && _a !== void 0 ? _a : null,
        generalScore: (_b = userDocument === null || userDocument === void 0 ? void 0 : userDocument.generalScore) !== null && _b !== void 0 ? _b : null,
        coins: (_c = userDocument === null || userDocument === void 0 ? void 0 : userDocument.coins) !== null && _c !== void 0 ? _c : null,
        goal: (_d = userDocument === null || userDocument === void 0 ? void 0 : userDocument.goal) !== null && _d !== void 0 ? _d : null,
        hasReminder: userDocument.hasReminder,
        reminderDate: (_e = userDocument === null || userDocument === void 0 ? void 0 : userDocument.reminderDate) !== null && _e !== void 0 ? _e : null,
        purchasedItems: userDocument.purchasedItems.map(item => new user_purchased_item_entity_1.UserPurchasedItem({
            id: item._id.toHexString(),
            name: item.name,
            type: item.type
        }))
    });
}
exports.userDocumentToUser = userDocumentToUser;
//# sourceMappingURL=user-document-to-user.mapper.js.map