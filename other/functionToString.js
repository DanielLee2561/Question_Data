// This file does not include tests, but rather code to print the function and tests as JSON.

describe('JSON Test', () => {
	let tests = foo_tests();
	for (let i = 0; i < tests.length; i++) {
		it(tests[i].title, () => {
			eval(tests[i].assertion);
		});
	}
});

describe('JSON', () => {
	it(JSON.stringify(foo.toString()), () => {});
	it(JSON.stringify(foo_tests()), () => {});
});