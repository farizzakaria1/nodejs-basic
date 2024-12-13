import {hello} from "../src/hello.js"

test('Hello for you', () => {
    
    const result = hello("for you")
    expect(result).toBe("Hello for you")

});