"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDocument = void 0;
const mongodb_1 = require("mongodb");
function userToUserDocument(user) {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        _id: user.id == null || user.id == undefined ? new mongodb_1.ObjectId() : mongodb_1.ObjectId.createFromHexString(user.id),
        email: user.email,
        password: user.password,
        name: user.name,
        lastname: user.lastname,
        imageUrl: (_a = user === null || user === void 0 ? void 0 : user.imageUrl) !== null && _a !== void 0 ? _a : null,
        generalScore: (_b = user === null || user === void 0 ? void 0 : user.generalScore) !== null && _b !== void 0 ? _b : null,
        coins: (_c = user === null || user === void 0 ? void 0 : user.coins) !== null && _c !== void 0 ? _c : null,
        goal: (_d = user === null || user === void 0 ? void 0 : user.goal) !== null && _d !== void 0 ? _d : null,
        hasReminder: user.hasReminder,
        reminderDate: (_e = user === null || user === void 0 ? void 0 : user.reminderDate) !== null && _e !== void 0 ? _e : null,
        purchasedItems: (_g = (_f = user.purchasedItems) === null || _f === void 0 ? void 0 : _f.map(item => {
            return {
                _id: new mongodb_1.ObjectId(item.id),
                name: item.name,
                type: item.type
            };
        })) !== null && _g !== void 0 ? _g : []
    };
}
exports.userToUserDocument = userToUserDocument;
//# sourceMappingURL=user-to-user-document.mapper.js.map