import { handleError } from "../shared/handleError"
import { validateURL } from '../shared/validateUrl';

export function toHaveQueryStrings( actualUrl: string, ...queryStrings: [qsKey: string, qsValue?: string][] ): jest.CustomMatcherResult {
    try {
        const { searchParams } = validateURL(actualUrl)

        const pass = queryStrings.every(([ key, value ]) => {
            if (!value) {
                return searchParams.has(key)
            }

            return searchParams.has(key) && searchParams.get(key) === value
        })

        return {
            pass,
            message: () => { 
                const mappedQueryStrings = queryStrings.map(([key, value]) => `${key}=${value ? value : '[no value provided]'}`).join(', ')
                return `Expected ${actualUrl} to have the Querystrings: ${mappedQueryStrings}`
            }
        }

    } catch(error) {
        return handleError(error)
    }
}