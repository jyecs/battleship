import { Ship } from "./script"

test("ship length is what we give it", () => {
    const testShip = Ship(3);
    expect(testShip.getLength()).toBe(3);
});

test("Ship is not sunk after too few hits", () => {
    const testShip = Ship(3);
    testShip.getHit();
    testShip.getHit();
    expect(testShip.isSunk()).toBe(false);
});

test("Ship is sunk after equal hits", () => {
    const testShip = Ship(3);
    testShip.getHit();
    testShip.getHit();
    testShip.getHit();
    expect(testShip.isSunk()).toBe(true);
});

test("Ship is sunk after too many hits", () => {
    const testShip = Ship(3);
    testShip.getHit();
    testShip.getHit();
    testShip.getHit();
    testShip.getHit();
    expect(testShip.isSunk()).toBe(true);
});