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

    test(function(){
      // getLocation should return coordinates, along with epoch timestamp
      test(function(){
        return Array.isArray(rangeCalculations.model.getLocation());
      });
      test(function(){
        return rangeCalculations.model.getLocation().length === 3;
      });
      return typeof rangeCalculations.model.getLocation()[0] === 'number';
    });

  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
