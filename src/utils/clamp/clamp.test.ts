import { clamp } from './clamp';

function testClamp() {
    console.assert(clamp(5, 1, 10) === 5, 'Test Case 1 Failed');
    console.assert(clamp(0, 1, 10) === 1, 'Test Case 2 Failed');
    console.assert(clamp(15, 1, 10) === 10, 'Test Case 3 Failed');

    try {
        clamp('5' as any, 1, 10);
    } catch (e) {
        console.assert(e instanceof TypeError, 'Test Case 4 Failed');
    }

    try {
        clamp(5, 10, 1);
    } catch (e) {
        console.assert(e instanceof RangeError, 'Test Case 5 Failed');
    }

    console.log('All test cases passed');
}

testClamp();
