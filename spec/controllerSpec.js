function testMithril(mock) {

  // test rangeDashboard controller
  test(function(){
    return typeof rangeDashboard.controller === 'object';
  });
  test(function(){
    // should have proper methods
    return typeof rangeDashboard.controller.displayEnergy === 'function';
  });
  test(function(){
    return typeof rangeDashboard.controller.displayCharge === 'function';
  });
  test(function(){
    return typeof rangeDashboard.controller.displayDistance === 'function';
  });
  test(function(){
    return typeof rangeDashboard.controller.displayBuffer === 'function';
  });
}

testMithril(mock);

test.print(function(value) {console.log(value)});
