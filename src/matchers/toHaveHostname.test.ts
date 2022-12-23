import { toHaveHostname } from './toHaveHostname'

test('"toHaveHostname" should not pass an invalid url', () => {
    const url = "this is not a valid url"
    const result = toHaveHostname(url, "localhost")

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`URL "${url}" is not a valid url`)
})

test('"toHaveHostname" should pass with a valid url', () => {
    const url = "https://www.google.com"
    const result = toHaveHostname(url, "google.com")

    expect(result.pass).toBe(false);
    expect(result.message()).toBe(`Expected "${url}" to have hostname "google.com"`)
})