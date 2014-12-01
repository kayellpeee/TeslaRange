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
        return typeof rangeCalculations.model.getLocation === 'function';
      });
      test(function(){
        return typeof rangeCalculations.model.getNearestChargers === 'function';
      });
      test(function(){
        return typeof rangeCalculations.model.calculateDistance === 'function';
      });
      return typeof rangeCalculations.model.calculateChargeNeeded === 'function';
    });

    test(function(){
      // getLocation should return a function that when called returns the current location
      var position = rangeCalculations.model.getLocation();
      test(function(){
        return typeof rangeCalculations.model.getLocation() === 'function';
      });
      test(function(){
        return Array.isArray(position().coordinates);
      });
      return typeof position().timestamp === 'number';
    });

    test(function(){
      // getNearestChargers should take in coordinates and return an array of charger locations (coordinates)
      test(function(){
        // latitude, longitude
        return Array.isArray(rangeCalculations.model.getNearestChargers(37.7836565, -122.409139));
      });
      test(function(){
        return typeof rangeCalculations.model.getNearestChargers(37.7836565, -122.409139)[0] === 'object' ;
      });
      test(function(){
        return typeof rangeCalculations.model.getNearestChargers(37.7836565, -122.409139)[0].name === 'string';
      });
      return typeof rangeCalculations.model.getNearestChargers(37.7836565, -122.409139)[0].latitude === 'number';
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
        return typeof rangeCalculations.model.calculateDistance(location, destination, options) === 'object';
      });
      test(function(){
        return typeof rangeCalculations.model.calculateDistance(location, destination, options).distance === 'number';
      });
      test(function(){
        return rangeCalculations.model.calculateDistance(location, destination, options).units === 'mi';
      });
      return rangeCalculations.model.calculateDistance(location, destination, options).elevationFrequency === 1000;
    });

    test(function(){
      // calculateChargeNeeded takes a distance & options (units, battery size, estimated buffer, avg. energy usage)
      // returns number of rated miles of charge needed to make the trip, as well as options used for calculation
      var distance = 100;
      var options = {
        units: 'mi',
        batterySize: 85,        // kWh  (kilowatt hour)
        buffer: 15,              // 15 miles
        averageEnergy: 300      // Wh/mi  (Watt hours per mile)
      };
      test(function(){
        return typeof rangeCalculations.model.calculateChargeNeeded(distance, options) === 'object';
      });
      test(function(){
        return typeof rangeCalculations.model.calculateChargeNeeded(distance, options).ratedChargeNeeded === 'number';
      });
      test(function(){
        // distance of 100 mi at averageEnergy of 300, 15 mi buffer = 115 mi of rated charge
        // rated charge is calculated assuming an average energy usage of 300 Wh/mi for the trip
        return typeof rangeCalculations.model.calculateChargeNeeded(distance, options).ratedChargeNeeded === 115;
      });
      test(function(){
        return rangeCalculations.model.calculateChargeNeeded(distance, options).batterySize === options.batterySize;
      });
      test(function(){
        return rangeCalculations.model.calculateChargeNeeded(distance, options).buffer === options.buffer;
      });
      test(function(){
        // should default to 85 kWh battery (defaults are in the options object above)
        return rangeCalculations.model.calculateChargeNeeded(ditance).batterySize === 85;
      });
      return rangeCalculations.model.calculateChargeNeeded(distance, options).averageEnergy === options.averageEnergy;
    });

  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
