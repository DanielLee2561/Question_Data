describe('Map', () => {

	it('foo(1, []) should equal []', () => {
		chai.expect(foo(1, [])).to.eql([]);
	});

	it('foo(0, [6]) should equal [6]', () => {
		chai.expect(foo(0, [6])).to.eql([6]);
	});

	it('foo(1, [6]) should equal [7]', () => {
		chai.expect(foo(1, [6])).to.eql([7]);
	});

	it('foo(2, [6]) should equal [8]', () => {
		chai.expect(foo(2, [6])).to.eql([8]);
	});

	it('foo(0, [-1, 3, 6]) should equal [-1, 3, 6]', () => {
		chai.expect(foo(0, [-1, 3, 6])).to.eql([-1, 3, 6]);
	});

	it('foo(1, [-1, 3, 6]) should equal [0, 4, 7]', () => {
		chai.expect(foo(1, [-1, 3, 6])).to.eql([0, 4, 7]);
	});

	it('foo(2, [-1, 3, 6]) should equal [1, 5, 8]', () => {
		chai.expect(foo(2, [-1, 3, 6])).to.eql([1, 5, 8]);
	});

});

function foo_tests()
{
  let tests = new Array();
  tests.push(new test("foo(1, []) should equal []", "chai.expect(foo(1, [])).to.eql([]);"));
  tests.push(new test("foo(0, [6]) should equal [6]", "chai.expect(foo(0, [6])).to.eql([6]);"));
  tests.push(new test("foo(1, [6]) should equal [7]", "chai.expect(foo(1, [6])).to.eql([7]);"));
  tests.push(new test("foo(2, [6]) should equal [8]", "chai.expect(foo(2, [6])).to.eql([8]);"));
  tests.push(new test("foo(0, [-1, 3, 6]) should equal [-1, 3, 6]", "chai.expect(foo(0, [-1, 3, 6])).to.eql([-1, 3, 6]);"));
  tests.push(new test("foo(1, [-1, 3, 6]) should equal [0, 4, 7]", "chai.expect(foo(1, [-1, 3, 6])).to.eql([0, 4, 7]);"));
  tests.push(new test("foo(2, [-1, 3, 6]) should equal [1, 5, 8]", "chai.expect(foo(2, [-1, 3, 6])).to.eql([1, 5, 8]);"));
  return tests;
}