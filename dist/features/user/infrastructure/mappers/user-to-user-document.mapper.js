"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDocument = void 0;
const mongodb_1 = require("mongodb");
function userToUserDocument(user) {
    return {
        _id: user.id == null || user.id == undefined ? new mongodb_1.ObjectId() : mongodb_1.ObjectId.createFromHexString(user.id),
        email: user.email,
        password: user.password,
        name: user.name,
        lastname: user.lastname
    };
}
exports.userToUserDocument = userToUserDocument;
//# sourceMappingURL=user-to-user-document.mapper.js.map