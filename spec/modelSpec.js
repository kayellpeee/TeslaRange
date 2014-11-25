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

    test(function(){
      // calculateDistance takes in a location, destination & options. Returns distance in mi or specified unit
      var location = [37.7836565, -122.409139];
      var destination = [37.493554, -121.945435];
      var options = {
        units: 'mi',
        elevationFrequency: 1000    // check elevation 1000 times / mi (once every ~5 ft)
      };
      test(function(){
        return Array.isArray(calculateDistance(location, destination, options));
      });
      test(function(){
        return typeof calculateDistance(location, destination, options)[0] === 'number';
      });
      test(function(){
        return typeof calculateDistance(location, destination, options)[1] === 'object';
      });
      test(function(){
        return calculateDistance(location, destination, options)[1].units === 'mi';
      });
      return calculateDistance(location, destination, options)[1].elevationFrequency === 1000;
    });

  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
