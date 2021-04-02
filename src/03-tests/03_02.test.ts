import {CityType} from "../02-tests/02_02"
import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildAt: 2012, repaired: false,
            address: {
                number: 100,
                street: {title: "White street"}
            }
        },
            {
                buildAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                buildAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 20000, staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION", budget: 50000, staffCount: 1000,
                address: {street: {title: "South Str"}}
            }
        ],
        citizensNumber: 1000000
    }
})

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 10000);

    expect(city.governmentBuildings[0].budget).toBe(30000);
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -10000);

    expect(city.governmentBuildings[1].budget).toBe(40000);
})

test ('House should be repared', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

test('to fire staff', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
