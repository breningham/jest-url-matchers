import { validateURL } from './validateUrl'

test('"validateURL" should throw an error if an invalid url is passed', () => {
    expect(() => validateURL("this is not a url")).toThrowError("URL \"this is not a url\" is not a valid url")
})

test('"validateURL" should return a URL object if a valid url is passed', () => {
    const actual = validateURL("http://localhost:4200");
    expect(actual).toBeInstanceOf(URL)
})