import {add} from "./stringCalculator";

describe("String Calculator", () => {
    it("should return Application Started", () => {
    });

    it(`should return 0 for empty string`, () => {
        expect(add("")).toBe(0);
    });

    it(`should return 0 for empty string whith white spaces`, () => {
        expect(add("     ")).toBe(0);
    });

});

