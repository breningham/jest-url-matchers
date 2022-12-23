export const handleError = (error: unknown): jest.CustomMatcherResult => {
    let errorMessage = `Unknown Error Occurred: ${error}`;
    if ( typeof error === "string" ) {
        errorMessage = error;
    }

    if ( error instanceof Error ) {
        errorMessage = error.message
    }

    return {
        pass: false,
        message: () => errorMessage
    }
}

