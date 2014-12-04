function testMithril(mockWindow) {
  window = m.deps(mockWindow);

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
