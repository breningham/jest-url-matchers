declare namespace jest {
      interface Matchers<R> {
        /**
         * Check if a string is a url with a given query string.
         * @param expectedQueryStringName  - the expected name of the query string
         * @param expectedQueryStringValue - the expected value of the query string
         */
        toHaveQueryString(expectedQueryStringName: string, expectedQueryStringValue?: string): CustomMatcherResult;
        /**
         * check if a url has the correct hostname
         * @param expected - the expected hostname
         */
        toHaveHostname(expected: string): CustomMatcherResult;
        /**
         * Check if a string is a url with multiple querystrings
         * @param expected - a spread array of key, value pairs of querystrings
         */
        toHaveQueryStrings(...expected: [qsName: string, qsValue?: string][]): CustomMatcherResult
      }
}
  
  