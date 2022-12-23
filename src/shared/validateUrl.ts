export const validateURL = (input: string): URL => {
    try {
        return new URL(input)
    } catch {
        throw new Error(`URL "${input}" is not a valid url`)
    }
} 