const Manager = require('../lib/Manager');
const m = new Manager('jared', '1', 'jared@gmail.com', '01')

test('test constructor values', ()=>{
    expect(m.name).toBe('jared');
    expect(m.id).toBe('1');
    expect(m.email).toBe('jared@gmail.com');
    expect(m.officeNumber).toBe('01')
});

test('Get the name using the getName function', () => {
    expect(m.getName()).toBe('jared');
});

test('Get the ID using the getId function', () => {
    expect(m.getId()).toBe('1');
});

test('Get email using the getEmail function', () => {
    expect(m.getEmail()).toBe('jared@gmail.com');
});

test('Get the role using the getOfficeNumber function', () => {
    expect(m.getOfficeNumber()).toBe('01');
});

test('Get the role using the getRole function', () => {
    expect(m.getRole()).toBe('Manager');
});


