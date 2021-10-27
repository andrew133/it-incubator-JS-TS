import {CityType} from "./02_02";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            builtAt: 2012, repaired: false,
            address: {number: 100, street: {title: "While street"}}
        }, {

            builtAt: 2008, repaired: false,
            address: {number: 100, street: {title: "Happy street"}}
        }, {

            builtAt: 2020, repaired: false,
            address: {number: 101, street: {title: "Happy street"}}
        }],
        governmentBuildings:[],
            citizensNumber:1000000
}
})
test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("While street");

    expect(city.houses[1].builtAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].builtAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

test.skip