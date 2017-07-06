const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('should return `fizz-buzz` if input is divisible by 15, `buzz` if divisible by 5, `fizz` if divisible by 3, or the input itself if none of the above are true', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            {
                x: 2,
                expected: 2
            },
            {
                x: 60,
                expected: 'fizz-buzz'
            },
            {
                x: -24,
                expected: 'fizz'
            },
            {
                x: 35,
                expected: 'buzz'
            }
        ];
        // for each input (x), `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input.x);
            answer.should.equal(input.expected);
        });
    });

    it('should raise error if input is not a number', function () {
        // range of bad inputs where input is not a number
        const badInputs = [
            ['4'],
            [true],
            ['Constitution']
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            (function () {
                fizzBuzzer(input[0])
            }).should.throw(Error);
        });
    });
});
