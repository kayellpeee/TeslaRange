function testMithril(mock) {
  // test rangeDashboard view

  test(function(){
    return typeof rangeDashboard.view === 'function';
  });

  var root = mock.window.document.createElement("div");
  m.render(root, rangeDashboard.view());

  test(function(){
    return root.childNodes.length === 1;
  });
  test(function(){
    return root.childNodes[0].tagName === "DIV";
  });
  test(function(){
    return root.childNodes[0].className === "rangeDashboard";
  });

};

testMithril(mock);

test.print(function(value) {console.log(value)});
