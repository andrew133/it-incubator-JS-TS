
export const usersObj = {
    '0': 'Andi',
    '1': 'Vera',
    '2': 'Sveta',
    '3': 'Artem',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '102': {id: 102, name:'Andi'},
    '1002': {id: 1002, name:'Vera'},
    '1012': {id: 1012, name:'Sveta'},
    '1022': {id: 1022, name:'Artem'},
}
var user = {id: 100200, name: 'Igor'}

users[user.id] = user

export const userArray = [
{id: 102, name:'Andi'},
{id: 1002, name:'Vera'},
{id: 1012, name:'Sveta'},
{id: 1022, name:'Artem'},
]