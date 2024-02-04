import { Ship } from "./script"

test("ship length is what we give it", () => {
    const testShip = Ship(3);
    expect(testShip.getLength()).toBe(3);
});

test("Ship knows when it has been sunk", () => {
    const testShip = Ship(3);
    testShip.getHit();
    testShip.getHit();
    expect(testShip.isSunk()).toBe(false);
});

test("Ship knows when it has been sunk", () => {
    const testShip = Ship(3);
    testShip.getHit();
    testShip.getHit();
    testShip.getHit();
    expect(testShip.isSunk()).toBe(true);
});