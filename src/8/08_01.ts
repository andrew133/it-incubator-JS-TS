
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
delete users[user.id]
users [user.id].name = 'Victor'

export const userArray = [
{id: 102, name:'Andi'},
{id: 1002, name:'Vera'},
{id: 1012, name:'Sveta'},
{id: 1022, name:'Artem'},
]
//userArray.find(u => u.id === 1)
//var usersCopy =[...userArray.filter(), user]
//var usersArray = userArray.filter(u => u.id !== user.id)