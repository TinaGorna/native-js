import {sum} from './01'
import {mult} from './01'
import {splitIntoWords} from './01'

//data
let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
//action
    const result = sum(a, b);
    const result2 = sum(c, b);

    //expect
    expect(result).toBe(3);
    expect(result2).toBe(5);
} )
test('multiply should be correct', () => {


//action
    const result = mult(a, b);
    const result2 = mult(c, b);

    //expect
    expect(result).toBe(2);
    expect(result2).toBe(6);
} )
test ('splitting into words should be correct', () => {
    const sent1 = 'hello my friend!'
    const sent2 = 'JS is good.'

    const result = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result.length).toBe(3);
    expect(result2[0]).toBe('JS');
})