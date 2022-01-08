import {usersObj} from "./08_01";

test ('Should select corresponding user from obj', () => {
    expect(usersObj[0]).toBe('Andi');
    expect(usersObj[1]).toBe('Vera');
    expect(usersObj[2]).toBe('Sveta');
    expect(usersObj[3]).toBe('Artem');
})
