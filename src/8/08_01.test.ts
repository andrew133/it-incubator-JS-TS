import {usersObj} from "./08_01";

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach( ()=> {
    users = {
        '102': {id: 102, name:'Andi'},
        '1002': {id: 1002, name:'Vera'},
        '1012': {id: 1012, name:'Sveta'},
        '1022': {id: 1022, name:'Artem'},
    }
})


test ('Should update corresponding user', () => {
    users['1002'].name = 'Andi'

    expect(users['1002']).toEqual({id: 1002, name:'Andi'})
})
test ('Should delete corresponding user', () => {
   delete users['1002']

    expect(users['1002']).toBeUndefined()
})
