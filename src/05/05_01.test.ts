import {greetMessages, MyType} from "./05_01";

let people: Array<MyType> = []

 beforeEach( () => {
     people = [
         {name: "Dima Ivanov", age: 33},
         {name: "Ivan Petrov", age: 20},
         {name: "Alex Romov", age: 33},
     ]
 })

test("should get array", () => {


    const messages = greetMessages(people)
    expect(messages.length).toBe(3),
        expect(messages[0]).toBe("Hello Dima. Welcome to IT.")
        expect(messages[1]).toBe("Hello Ivan. Welcome to IT.")
        expect(messages[2]).toBe("Hello Alex. Welcome to IT.")

})