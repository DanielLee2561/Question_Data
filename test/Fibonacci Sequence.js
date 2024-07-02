describe('Fibonacci Sequence', () => {

	it('foo(-2) should equal -1', () => {
		chai.expect(foo(-2)).to.eql(-1);
	});

	it('foo(-1) should equal -1', () => {
		chai.expect(foo(-1)).to.eql(-1);
	});

	it('foo(0) should equal 0', () => {
		chai.expect(foo(0)).to.eql(0);
	});

	it('foo(1) should equal 1', () => {
		chai.expect(foo(1)).to.eql(1);
	});

	it('foo(2) should equal 1', () => {
		chai.expect(foo(2)).to.eql(1);
	});

	it('foo(3) should equal 2', () => {
		chai.expect(foo(3)).to.eql(2);
	});

	it('foo(4) should equal 3', () => {
		chai.expect(foo(4)).to.eql(3);
	});

	it('foo(5) should equal 5', () => {
		chai.expect(foo(5)).to.eql(5);
	});

	it('foo(6) should equal 8', () => {
		chai.expect(foo(6)).to.eql(8);
	});

});

function foo_tests()
{
  let tests = new Array();
  tests.push(new test("foo(-2) should equal -1", "chai.expect(foo(-2)).to.eql(-1);"));
  tests.push(new test("foo(-1) should equal -1", "chai.expect(foo(-1)).to.eql(-1);"));
  tests.push(new test("foo(0) should equal 0", "chai.expect(foo(0)).to.eql(0);"));
  tests.push(new test("foo(1) should equal 1", "chai.expect(foo(1)).to.eql(1);"));
  tests.push(new test("foo(2) should equal 1", "chai.expect(foo(2)).to.eql(1);"));
  tests.push(new test("foo(3) should equal 2", "chai.expect(foo(3)).to.eql(2);"));
  tests.push(new test("foo(4) should equal 3", "chai.expect(foo(4)).to.eql(3);"));
  tests.push(new test("foo(5) should equal 5", "chai.expect(foo(5)).to.eql(5);"));
  tests.push(new test("foo(6) should equal 8", "chai.expect(foo(6)).to.eql(8);"));
  return tests;
}