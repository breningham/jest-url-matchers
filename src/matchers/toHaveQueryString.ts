import { handleError } from "../shared/handleError"
import { validateURL } from '../shared/validateUrl';

export function toHaveQueryString(actual: string, expectedQueryStringName: string, expectedQueryStringValue?: string): jest.CustomMatcherResult {
    try {
    const { searchParams } = validateURL(actual)
    const hasQueryString = searchParams.has(expectedQueryStringName)

    if ( expectedQueryStringValue === undefined ) {
        return {
            pass: hasQueryString,
            message: () => `Expected ${actual} to have Query string of "${expectedQueryStringName}"`
        }
    }

    return {
        pass: searchParams.get(expectedQueryStringName) === expectedQueryStringValue,
        message: () =>  `Expected "${actual}" to have Query string of "${expectedQueryStringName}" with value "${expectedQueryStringValue}"`
    }


    } catch (error) {
       return handleError(error)
    }

}