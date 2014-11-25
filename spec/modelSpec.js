function testMithril(mockWindow) {
  window = m.deps(mockWindow);

  test(function(){
    // tests for rangeCalculations model

    test(function(){
      // should be an object with the proper methods
      test(function(){
        return typeof rangeCalculations.model === 'object';
      });
      test(function(){
        return rangeCalculations.model.getLocation === 'function';
      });
      test(function(){
        return rangeCalculations.model.getNearestChargers === 'function';
      });
      test(function(){
        return rangeCalculations.model.calculateDistance === 'function';
      });
      test(function(){
        return rangeCalculations.model.calculateChargeNeeded === 'function';
      });
    });

  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
