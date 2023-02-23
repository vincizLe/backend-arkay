"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnectionProvider = void 0;
const mongodb_1 = require("mongodb");
exports.databaseConnectionProvider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
        try {
            const client = await mongodb_1.MongoClient.connect('mongodb://127.0.0.1:27017');
            return client.db('arkay');
        }
        catch (e) {
            throw e;
        }
    }
};
//# sourceMappingURL=database.providers.js.map