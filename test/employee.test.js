// const { exportAllDeclaration } = require('@babel/types');
const Employee = require('../lib/Employee');
const e = new Employee('jared', '1', 'jared@gmail.com');

test('test constructor values', ()=>{
    expect(e.name).toBe('jared');
    expect(e.id).toBe('1');
    expect(e.email).toBe('jared@gmail.com');
});

test('Get the name using the getName function', () => {
    expect(e.getName()).toBe('jared');
});

test('Get the ID using the getId function', () => {
    expect(e.getId()).toBe('1');
});

test('Get email using the getEmail function', () => {
    expect(e.getEmail()).toBe('jared@gmail.com');
});

test('Get the role using the getRole function', () => {
    expect(e.getRole()).toBe('Employee');
});