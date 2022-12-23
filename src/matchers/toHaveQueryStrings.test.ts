import { toHaveQueryStrings } from './toHaveQueryStrings'

test('"toHaveQueryStrings" should fail with an invalid url', () => {
    const url = "this is not a valid url"
    const result = toHaveQueryStrings(url, ["not-used", "not-used"])

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`URL "${url}" is not a valid url`)
})

test('"toHaveQueryStrings" should fail if the url does not have the provided query strings', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["not-found"])

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: not-found=[no value provided]`)
})

test('"toHaveQueryStrings" should fail if the url does have the provided query strings but not the value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1", "bad-value"])

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=bad-value`)
})


test('"toHaveQueryStrings" should pass if the url does have the provided query strings but not the value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1"])

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=[no value provided]`)
})

test('"toHaveQueryStrings" should pass if the url does have the provided query strings and the value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1", "1234"])

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=1234`)
})

test('"toHaveQueryStrings" should pass if the url does have the provided query strings without a value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1"], ["query2"], ["query3"])

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=[no value provided], query2=[no value provided], query3=[no value provided]`)
})

test('"toHaveQueryStrings" should pass if the url does have the provided query strings with a value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1", "1234"], ["query2", "5678"], ["query3", "abcd"])

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=1234, query2=5678, query3=abcd`)
})


test('"toHaveQueryStrings" should pass if the url does have the provided query strings where only some have a value', () => {
    const url = "https://some.long.url?query1=1234&query2=5678&query3=abcd"
    const result = toHaveQueryStrings(url, ["query1", "1234"], ["query2"], ["query3", "abcd"])

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected https://some.long.url?query1=1234&query2=5678&query3=abcd to have the Querystrings: query1=1234, query2=[no value provided], query3=abcd`)
})