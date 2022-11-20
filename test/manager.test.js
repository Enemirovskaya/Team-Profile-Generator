const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('Can set office number via constractor', () => {
    const testValue = 100
    const e = new Manager('Jared', '1', 'jared@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
})


