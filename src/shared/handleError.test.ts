import { handleError } from './handleError'

test('"handleError" should handle thrown strings', () => {
    const input = "this is a string"
    const result = handleError(input);

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(input);
})

test('"handleError" should handle Errors', () => {
    const input = new Error("this is an Error")
    const result = handleError(input);

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(input.message);
})

test('"handleError" should handle unknowns', () => {
    const input = 1234
    const result = handleError(input);

    expect(result.pass).toBe(false);
    expect(result.message()).toBe("Unknown Error Occurred: 1234");
})

