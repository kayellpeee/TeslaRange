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

    test(function(){
      // getNearestChargers should take in coordinates and return an array of charger locations (coordinates)
      test(function(){
        // latitude, longitude
        return Array.isArray(rangeCalculations.model.getNearestChargers(37.7836565, -122.409139));
      });
      test(function(){
        return Array.isArray(rangeCalculations.model.getNearestChargers(37.7836565, -122.409139)[0]);
      });
      return typeof rangeCalculations.model.getLocation(37.7836565, -122.409139)[0][0] === 'number';
    });

  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
