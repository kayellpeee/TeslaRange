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
  test(function(){
    return root.childNodes[0].childNodes[0].tagName === "TABLE";
  });
  var table = root.childNodes[0].childNodes[0];
  test(function(){
    return table.childNodes[0].tagName === "TH";
  });
  test(function(){
    return table.childNodes[1].tagName === "TR";
  });
  test(function(){
    return table.childNodes[2].tagName === "TR";
  });
  test(function(){
    return table.childNodes[3].tagName === "TR";
  });
  test(function(){
    return table.childNodes[4].tagName === "TR";
  });

};

testMithril(mock);

test.print(function(value) {console.log(value)});
