"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitEnum = void 0;
var UnitEnum;
(function (UnitEnum) {
    UnitEnum["UNIT_1"] = "UNIT_1";
    UnitEnum["UNIT_2"] = "UNIT_2";
    UnitEnum["UNIT_3"] = "UNIT_3";
    UnitEnum["UNIT_4"] = "UNIT_4";
    UnitEnum["UNIT_5"] = "UNIT_5";
})(UnitEnum = exports.UnitEnum || (exports.UnitEnum = {}));
(function (UnitEnum) {
    const propertiesMap = new Map([
        [UnitEnum.UNIT_1, null],
        [UnitEnum.UNIT_2, null],
        [UnitEnum.UNIT_3, null],
        [UnitEnum.UNIT_4, null],
        [UnitEnum.UNIT_5, null]
    ]);
    function toArray() {
        return [...propertiesMap.keys()];
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