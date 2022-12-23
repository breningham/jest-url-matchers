# jest-url-matchers

A little library with some jest matchers for working with and validating URL's

## Installation

- Install with npm or yarn

```bash
$ npm install --save-dev jest-url-matchers
# $ yarn add --dev jest-url-matchers
```

- Set up the types in the `tsconfig.json`/`tsconfig.spec.json`

```json5
    {
        // ...rest of the file
        "types": ["jest", "node", "jest-url-matchers/types" ]
    }
```

- import at the top of your `jest.setup.ts`;

```typescript
import 'jest-url-matchers'
```

## Usage

```typescript
    # In your write your tests like this: 
    expect("https://www.google.com?s=search+query").toHaveQueryString("s");
```

```typescript
    // In your write your tests like this: 
    expect("https://www.google.com?s=search").toHaveQueryString("s");
    // ensure it has the correct value too!
    expect("https://www.google.com?s=search").toHaveQueryString("s", "search");
    // need to check multiple query strings? 
    // Accepts arrays of [ querystring name, querystring value ], where the value is not required.
    expect("https://www.long-url.com?abcd=1234&efgh=5678").toHaveQueryStrings(["abcd"], ["efgh", "5678"]);


```