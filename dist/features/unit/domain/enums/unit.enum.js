"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEnum = void 0;
var UnitEnum;
(function (UnitEnum) {
    UnitEnum["INTRODUCTION"] = "INTRODUCTION";
})(UnitEnum = exports.UnitEnum || (exports.UnitEnum = {}));
(function (UnitEnum) {
    const propertiesMap = new Map([[UnitEnum.INTRODUCTION, {}]]);
    function toArray() {
        return [...propertiesMap];
    }
    UnitEnum.toArray = toArray;
    function getProperties(key) {
        const props = propertiesMap.get(key);
        if (!props)
            throw new Error(`invalid key ${key}`);
        return props;
    }
    UnitEnum.getProperties = getProperties;
})(UnitEnum = exports.UnitEnum || (exports.UnitEnum = {}));
//# sourceMappingURL=unit.enum.js.map