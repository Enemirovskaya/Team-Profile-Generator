const Intern = require('../lib/Intern');
const i = new Intern('jared', '1', 'jared@gmail.com', 'School')

test('test constructor values', ()=>{
    expect(i.name).toBe('jared');
    expect(i.id).toBe('1');
    expect(i.email).toBe('jared@gmail.com');
    expect(i.school).toBe('School')
});

test('Get the name using the getName function', () => {
    expect(i.getName()).toBe('jared');
});

test('Get the ID using the getId function', () => {
    expect(i.getId()).toBe('1');
});

test('Get email using the getEmail function', () => {
    expect(i.getEmail()).toBe('jared@gmail.com');
});

test('Get the role using the getSchool function', () => {
    expect(i.getSchool()).toBe('School');
});

test('Get the role using the getRole function', () => {
    expect(i.getRole()).toBe('Intern');
});
