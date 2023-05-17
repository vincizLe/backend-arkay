"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDocumentToUser = void 0;
const user_entity_1 = require("../../domain/entities/user.entity");
function userDocumentToUser(userDocument) {
    var _a, _b, _c, _d;
    return new user_entity_1.User({
        id: userDocument._id.toHexString(),
        email: userDocument.email,
        password: userDocument.password,
        name: userDocument.name,
        lastname: userDocument.lastname,
        imageUrl: (_a = userDocument === null || userDocument === void 0 ? void 0 : userDocument.imageUrl) !== null && _a !== void 0 ? _a : null,
        generalScore: (_b = userDocument === null || userDocument === void 0 ? void 0 : userDocument.generalScore) !== null && _b !== void 0 ? _b : null,
        coins: (_c = userDocument === null || userDocument === void 0 ? void 0 : userDocument.coins) !== null && _c !== void 0 ? _c : null,
        hasReminder: userDocument.hasReminder,
        reminderDate: (_d = userDocument === null || userDocument === void 0 ? void 0 : userDocument.reminderDate) !== null && _d !== void 0 ? _d : null
    });
}
exports.userDocumentToUser = userDocumentToUser;
//# sourceMappingURL=user-document-to-user.mapper.js.map