import { camelCase } from "./camelCase";

function testCamelCase() {
    function assertEqual(actual: string, expected: string, testName: string) {
        if (actual === expected) {
            console.log(`✅ Passed: ${testName}`);
        } else {
            console.log(`❌ Failed: ${testName}. Expected "${expected}", but got "${actual}"`);
        }
    }
    // Test case 1: Multiple words, mixed case
    const result1 = camelCase('React Utils Library');
    assertEqual(result1, 'reactUtilsLibrary', 'Test case 1: React Utils Library');

    // Test case 2: Two words, all lowercase
    const result2 = camelCase('hello world');
    assertEqual(result2, 'helloWorld', 'Test case 2: hello world');

    // Test case 3: Single word, all lowercase
    const result3 = camelCase('hello');
    assertEqual(result3, 'hello', 'Test case 3: hello');

    // Test case 4: Single word, all uppercase
    const result4 = camelCase('WORLD');
    assertEqual(result4, 'world', 'Test case 4: WORLD');

    // Test case 5: Mixed case with numbers and special characters
    const result5 = camelCase('JavaScript 101 guide');
    assertEqual(result5, 'javascript101Guide', 'Test case 5: JavaScript 101 guide');
}

// Run the test
testCamelCase();
