const add = (a, b) => a + b ;
const generateGreeting = (name = 'Anonymous') =>`Hello ${name} !`;

test('should add two numbers', () => {
     const result = add(12, 10);
     expect(result).toBe(22);
});

test('should generate good name', () => {
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike !');
});

test('should generate for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous !');
});

