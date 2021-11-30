export type MyType = {
    name: string
    age: number
}

const people: Array<MyType> = [
    {name: "Dima Ivanov", age: 33},
    {name: "Ivan Petrov", age: 20},
    {name: "Alex Romov", age: 33},
]

const DimishTransformator = (man: MyType) => ({
      stack: ["CSS", "JS", "HTML", "tdd", "REACT"],
      firstName: [man.name.split("")[0]],
      lastName: [man.name.split("")[1]]
  })

const dev3 = people.map(DimishTransformator)

const dev4 = people.map(man => ({
    stack: ["CSS", "JS", "HTML", "tdd", "REACT"],
    firstName: [man.name.split("")[0]],
    lastName: [man.name.split("")[1]],
}))

const messages = people.map( man => `Hello ${man.name.split("")[0]}. Welcome to IT.`)

export const greetMessages = (people:Array<MyType>) => {
   return  people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT.`)
}