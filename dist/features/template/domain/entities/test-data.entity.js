"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestData = void 0;
class TestData {
    static create(params) {
        const testData = new TestData();
        testData.input = params.input;
        testData.output = params.output;
        return testData;
    }
}
exports.TestData = TestData;
//# sourceMappingURL=test-data.entity.js.map