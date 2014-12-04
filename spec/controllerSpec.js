function testMithril(mock) {

  test(function(){
    return typeof rangeDashboard.controller === 'function';
  });

}

testMithril(mock);

test.print(function(value) {console.log(value)});
