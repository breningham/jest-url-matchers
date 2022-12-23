import { toHaveQueryString } from './toHaveQueryString'

test('"toHaveQueryString" should not pass with an invalid url', () => {
    const url = "this is not a valid url"
    const result = toHaveQueryString(url, "not-used", "not-used")

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`URL "${url}" is not a valid url`)
})

test('"toHaveQueryString" should fail with a valid url and a non-existant querystring', () => {
    const url = "http://test.com?test=true"
    const result = toHaveQueryString(url, "foo")

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`Expected http://test.com?test=true to have Query string of \"foo\"`)
})

test('"toHaveQueryString" should fail with a valid url and a non-matching querystring value', () => {
    const url = "http://test.com?test=true"
    const result = toHaveQueryString(url, "test", "false")

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`Expected \"http://test.com?test=true\" to have Query string of \"test\" with value \"false\"`)
})

test('"toHaveQueryString" should pass with a valid url and querystring', () => {
    const url = "http://test.com?test=true"
    const result = toHaveQueryString(url, "test")

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected http://test.com?test=true to have Query string of \"test\"`)
})


test('"toHaveQueryString" should pass with a valid url and querystring with valid querystring value', () => {
    const url = "http://test.com?test=true"
    const result = toHaveQueryString(url, "test", "true")

    expect(result.pass).toBe(true);
    expect(result.message()).toBe(`Expected \"http://test.com?test=true\" to have Query string of \"test\" with value \"true\"`)
})