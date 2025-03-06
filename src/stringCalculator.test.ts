import { add } from "./stringCalculator";

describe("String Calculator", () => {
    it("should return Application Started", () => {
    });

    //Test-1
    it(`should return 0 for empty string`, () => {
        expect(add("")).toBe(0);
    });

    //Test-2
    it(`should return 0 for empty string whith white spaces`, () => {
        expect(add("     ")).toBe(0);
    });

    //Test-3
    it("should return the number itself if there is only one number", () => {
        expect(add("1")).toBe(1);
    });

    //Test-4
    it("should return the sum of two numbers", () => {
        expect(add("1,3")).toBe(4);
        expect(add("4,5")).toBe(9);
    });

    //Test-5
    it(`should allow new lines "\\n" between numbers instead of ","`, () => {
        expect(add("1\n3")).toBe(4);
        expect(add("4 \n 5")).toBe(9);
    });
});



