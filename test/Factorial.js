describe('Factorial', () => {

	it('foo(-2) should equal -1', () => {
		chai.expect(foo(-2)).to.eql(-1);
	});

	it('foo(-1) should equal -1', () => {
		chai.expect(foo(-1)).to.eql(-1);
	});

	it('foo(0) should equal 1', () => {
		chai.expect(foo(0)).to.eql(1);
	});

	it('foo(1) should equal 1', () => {
		chai.expect(foo(1)).to.eql(1);
	});

	it('foo(2) should equal 2', () => {
		chai.expect(foo(2)).to.eql(2);
	});

	it('foo(3) should equal 6', () => {
		chai.expect(foo(3)).to.eql(6);
	});

	it('foo(4) should equal 24', () => {
		chai.expect(foo(4)).to.eql(24);
	});

	it('foo(5) should equal 120', () => {
		chai.expect(foo(5)).to.eql(120);
	});

	it('foo(6) should equal 720', () => {
		chai.expect(foo(6)).to.eql(720);
	});

});

// RETURN

function test(title, assertion) {
	this.title = title;
	this.assertion = assertion;
}

let tests = [
	new test('foo(4) should equal 24', "chai.expect(foo(4)).to.eql(24);"),
	new test('foo(5) should equal 120', "chai.expect(foo(5)).to.eql(120);"),
	new test('foo(6) should equal 720', "chai.expect(foo(6)).to.eql(720);")
];

it(tests[0].title, () => {
	eval(tests[0].assertion);
});

it(tests[1].title, () => {
	eval(tests[1].assertion);
});

it(tests[2].title, () => {
	eval(tests[2].assertion);
});