describe('Map', () => {

	it('foo(1, []) should equal _', () => {
		chai.expect(foo(1, [])).to.eql([]);
	});

	it('foo(0, [6]) should equal _', () => {
		chai.expect(foo(0, [6])).to.eql([6]);
	});

	it('foo(1, [6]) should equal _', () => {
		chai.expect(foo(1, [6])).to.eql([7]);
	});

	it('foo(2, [6]) should equal _', () => {
		chai.expect(foo(2, [6])).to.eql([8]);
	});

	it('foo(0, [-1, 3, 6]) should equal _', () => {
		chai.expect(foo(0, [-1, 3, 6])).to.eql([-1, 3, 6]);
	});

	it('foo(1, [-1, 3, 6]) should equal _', () => {
		chai.expect(foo(1, [-1, 3, 6])).to.eql([0, 4, 7]);
	});

	it('foo(2, [-1, 3, 6]) should equal _', () => {
		chai.expect(foo(2, [-1, 3, 6])).to.eql([1, 5, 8]);
	});

});
