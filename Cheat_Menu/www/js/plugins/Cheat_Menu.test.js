/**
 * @jest-environment jsdom
 */

/**
 * Mock to get tests running
 */
DataManager = {};



beforeEach(() => {
    const sut = require('./Cheat_Menu');
    jest.resetModules();

    // guard condition
    expect(Cheat_Menu.value_mult).toBe(1);
});

test('Default multiplier set to 1', () => {
    expect(Cheat_Menu.value_mod(42)).toBe(42);
});

test('Cycle multiplier to 10', () => {
    Cheat_Menu.cycle_value_mult();

    expect(Cheat_Menu.value_mod(42)).toBe(420);
});

test('Cycle multiplier wrap around', () => {
    Cheat_Menu.cycle_value_mult(); // 1 -> 10
    Cheat_Menu.cycle_value_mult(); // 10 -> 100
    Cheat_Menu.cycle_value_mult(); // 100 -> 1000
    Cheat_Menu.cycle_value_mult(); // 1000 -> 1

    expect(Cheat_Menu.value_mod(42)).toBe(42);
});
