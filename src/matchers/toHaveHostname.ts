import { handleError } from '../shared/handleError';
import { validateURL } from '../shared/validateUrl';

export function toHaveHostname(actual: string, expected: string): jest.CustomMatcherResult {
    try {
        const { hostname } = validateURL(actual)

        return {
            pass: hostname === expected,
            message: () => `Expected "${actual}" to have hostname "${expected}"`
        }

    } catch (error) {
        return handleError(error);
    }
}