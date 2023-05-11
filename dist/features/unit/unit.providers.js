"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitRepositoryProvider = void 0;
const unit_repository_1 = require("./domain/repositories/unit.repository");
const unit_impl_repository_1 = require("./infrastructure/repositories/unit-impl.repository");
exports.unitRepositoryProvider = {
    provide: unit_repository_1.UnitRepository,
    useClass: unit_impl_repository_1.UnitImplRepository
};
//# sourceMappingURL=unit.providers.js.map