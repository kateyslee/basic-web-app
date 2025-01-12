import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return an andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "yoonseol"
        ));
    });

    test('should return max', () => {
        const query = "Which of the following numbers is the largest: 49, 66, 52?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "66"
        ));
    });

    test('should return sum', () => {
        const query = "What is 27 plus 23?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "50"
        ));
    });

    test('should return sum', () => {
        const query = "What is 18 minus 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "-33"
        ));
    });

    test('should return product', () => {
        const query = "What is 4 multiplied by 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "48"
        ));
    });

    test('should return pow', () => {
        const query = "What is 4 to the power of 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "16"
        ));
    });

    test('should return cube and square', () => {
        const query = "Which of the following numbers is both a square and a cube: 1, 64, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1,64"
        ));
    });

    test('should return cube and square', () => {
        const query = "Which of the following numbers is both a square and a cube: 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "None"
        ));
    });

});