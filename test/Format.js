// describe('Format Whitespace', () => {
// 	it('null', () => {
// 		chai.expect(removeWhitespace(null)).to.eql(null);
// 	});

// 	it('hello', () => {
// 		chai.expect(removeWhitespace("hello")).to.eql("hello");
// 	});

// 	it('_', () => {
// 		chai.expect(removeWhitespace(" ")).to.eql(" ");
// 	});

// 	it('\\n', () => {
// 		chai.expect(removeWhitespace("\n")).to.eql("\n");
// 	});

// 	it('\\n_', () => {
// 		chai.expect(removeWhitespace("\n ")).to.eql("\n");
// 	});

// 	it('\\n__', () => {
// 		chai.expect(removeWhitespace("\n  ")).to.eql("\n");
// 	});

// 	it('_\\n', () => {
// 		chai.expect(removeWhitespace(" \n")).to.eql(" \n");
// 	});

// 	it('__\\n', () => {
// 		chai.expect(removeWhitespace("  \n")).to.eql("  \n");
// 	});

// 	it('\\n_\\n_\\n', () => {
// 		chai.expect(removeWhitespace("\n \n \n")).to.eql("\n\n\n");
// 	});

// 	it('_\\n_\\n_', () => {
// 		chai.expect(removeWhitespace(" \n \n ")).to.eql(" \n\n");
// 	});

// 	it('hello\\n_world', () => {
// 		chai.expect(removeWhitespace("hello\n world")).to.eql("hello\nworld");
// 	});
// });

// describe('Remove Indent', () => {
// 	it('\\t}', () => {
// 		chai.expect(removeIndent("\t}")).to.eql("}");
// 	});

// 	it('\\t}\\t}', () => {
// 		chai.expect(removeIndent("\t}\t}")).to.eql("}}");
// 	});

// 	it('\\t}\\t}\\t', () => {
// 		chai.expect(removeIndent("\t}\t}\t")).to.eql("}}\t");
// 	});

// 	it('\\t\\t}\\t}', () => {
// 		chai.expect(removeIndent("\t\t}\t}")).to.eql("\t}}");
// 	});
// });

describe('Format Code Whitespace', () => {
	it('null', () => {
		chai.expect(formatCode(null)).to.eql(null);
	});

	it('hello', () => {
		chai.expect(formatCode("hello")).to.eql("hello");
	});

	it('_', () => {
		chai.expect(formatCode(" ")).to.eql(" ");
	});

	it('\\n', () => {
		chai.expect(formatCode("\n")).to.eql("\n");
	});

	it('\\n_', () => {
		chai.expect(formatCode("\n ")).to.eql("\n");
	});

	it('\\n__', () => {
		chai.expect(formatCode("\n  ")).to.eql("\n");
	});

	it('_\\n', () => {
		chai.expect(formatCode(" \n")).to.eql(" \n");
	});

	it('__\\n', () => {
		chai.expect(formatCode("  \n")).to.eql("  \n");
	});

	it('\\n_\\n_\\n', () => {
		chai.expect(formatCode("\n \n \n")).to.eql("\n\n\n");
	});

	it('_\\n_\\n_', () => {
		chai.expect(formatCode(" \n \n ")).to.eql(" \n\n");
	});

	it('hello\\n_world', () => {
		chai.expect(formatCode("hello\n world")).to.eql("hello\nworld");
	});
});

describe('Format Code {', () => {
	it('{', () => {
		chai.expect(formatCode("{")).to.eql("{");
	});
	
	it('{\\n', () => {
		chai.expect(formatCode("{\n")).to.eql("{\n\t");
	});

	it('\\n{', () => {
		chai.expect(formatCode("\n{")).to.eql("\n{");
	});

	it('{{\\n', () => {
		chai.expect(formatCode("{{\n")).to.eql("{{\n\t\t");
	});

	it('{\\n{\\n', () => {
		chai.expect(formatCode("{\n{\n")).to.eql("{\n\t{\n\t\t");
	});

	it('{\\n{\\n{\\n', () => {
		chai.expect(formatCode("{\n{\n{\n")).to.eql("{\n\t{\n\t\t{\n\t\t\t");
	});
});

describe('Format Code }', () => {
	it('\\t}', () => {
		chai.expect(formatCode("\t}")).to.eql("}");
	});

	it('\\t}\\t}', () => {
		chai.expect(formatCode("\t}\t}")).to.eql("}}");
	});

	it('\\t}\\t}\\t', () => {
		chai.expect(formatCode("\t}\t}\t")).to.eql("}}\t");
	});

	it('\\t\\t}\\t}', () => {
		chai.expect(formatCode("\t\t}\t}")).to.eql("\t}}");
	});
});

describe('Format Code {}', () => {
	it('{\\t}', () => {
		chai.expect(formatCode("{\t}")).to.eql("{}");
	});
	
	it('{\\n}', () => {
		chai.expect(formatCode("{\n}")).to.eql("{\n}");
	});

	it('{{\\n}\\n}', () => {
		chai.expect(formatCode("{{\n}\n}")).to.eql("{{\n\t}\n}");
	});

	it('{{{\\n}\\n}\\n}', () => {
		chai.expect(formatCode("{{{\n}\n}\n}")).to.eql("{{{\n\t\t}\n\t}\n}");
	});

	it('function Hello World', () => {
		chai.expect(formatCode("function foo() {\n return \"Hello World!\";\n}")).to.eql("function foo() {\n\treturn \"Hello World!\";\n}");
	});

	it('function Sum Of All Elements', () => {
		chai.expect(formatCode("function foo(n) {\n  var val = 0;\n  for (i = 0; i < n.length; i++) {\n val += n[i];\n  }\n return val;\n}")).to.eql("function foo(n) {\n\tvar val = 0;\n\tfor (i = 0; i < n.length; i++) {\n\t\tval += n[i];\n\t}\n\treturn val;\n}");
	});
});