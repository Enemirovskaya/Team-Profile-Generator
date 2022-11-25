const Engineer = require('../lib/Engineer');
const eng = new Engineer('jared', '1', 'jared@gmail.com', 'GitHub')

test('test constructor values', ()=>{
    expect(eng.name).toBe('jared');
    expect(eng.id).toBe('1');
    expect(eng.email).toBe('jared@gmail.com');
    expect(eng.github).toBe('GitHub')
});

test('Get the name using the getName function', () => {
    expect(eng.getName()).toBe('jared');
});

test('Get the ID using the getId function', () => {
    expect(eng.getId()).toBe('1');
});

test('Get email using the getEmail function', () => {
    expect(eng.getEmail()).toBe('jared@gmail.com');
});

test('Get the role using the getGitHub function', () => {
    expect(eng.getGitHub()).toBe('GitHub');
});

test('Get the role using the getRole function', () => {
    expect(eng.getRole()).toBe('Engineer');
})
