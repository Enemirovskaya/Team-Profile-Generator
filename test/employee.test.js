// const { exportAllDeclaration } = require('@babel/types');
const Employee = require('../lib/Employee');
// const employee = new Employee('jared', '1', 'jared@gmail.com')

test('Get the name using the getName function', () => {
    const testValue = 'Jared';
    const e = new Employee(testValue);

    expect(e.getName()).toBe(testValue);
})