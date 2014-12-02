function testMithril(mockWindow) {
  window = m.deps(mockWindow);

  test(function(){

    // tests for rangeCalculations model
    test(function(){
      // should be an object with the proper methods & properties
      test(function(){
        return typeof rangeCalculations.model === 'object';
      });
      test(function(){
        return typeof rangeCalculations.model.location === 'object';
      });
      test(function(){
        return typeof Array.isArray(rangeCalculations.model.nearestChargers);
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

    // tests location property on model object
    test(function(){
      test(function(){
        return typeof rangeCalculations.model.location.latitude === 'number';
      });
      test(function(){
        return typeof rangeCalculations.model.location.longitude === 'number';
      });
      return typeof rangeCalculations.model.location.timestamp === 'number';
    });

    // tests nearestChargers property
    test(function(){
      // should be an array of objects
      test(function(){
        return typeof rangeCalculations.model.nearestChargers[0].name === 'string';
      });
      return typeof rangeCalculations.model.nearestChargers[0].longitude === 'number';
    });

    // tests getLocation method (call to tesla api)
    test(function(){
      // should return a function that when called returns the current location
      var position = rangeCalculations.model.getLocation();
      test(function(){
        return typeof rangeCalculations.model.getLocation() === 'function';
      });

      // this is a test that checks every tick whether or not the asynchronous call to navigator
      // get location has completed - must include additional test.print to log results
      // (should refactor this test)
      var testPosition = setInterval(function(){
        if( position().timestamp ){
          test(function(){
            return typeof position().timestamp === 'number';
          });
          test(function(){
            return typeof position().coordinates[0] === 'number';
          });
          clearInterval(testPosition);
          test.print(function(value) {console.log(value)});
        }
      }, 100);

      return Array.isArray(position().coordinates);
    });

    // tests getNearestChargers method (call to google maps api)
    test(function(){
      // should take in coordinates and return an array of charger locations (coordinates)
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

    // tests calculateDistance method (call to google maps api)
    test(function(){
      // takes in a location, destination & options. Returns distance in mi or specified unit
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

    // tests calculateChargeNeeded method
    test(function(){
      // takes a distance & options (units, battery size, estimated buffer, avg. energy usage)
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
        return rangeCalculations.model.calculateChargeNeeded(distance, options).ratedChargeNeeded === 115;
      });
      test(function(){
        return rangeCalculations.model.calculateChargeNeeded(distance, options).batterySize === options.batterySize;
      });
      test(function(){
        return rangeCalculations.model.calculateChargeNeeded(distance, options).buffer === options.buffer;
      });
      test(function(){
        // should default to 85 kWh battery (defaults are in the options object above)
        return rangeCalculations.model.calculateChargeNeeded(distance).batterySize === 85;
      });
      return rangeCalculations.model.calculateChargeNeeded(distance, options).averageEnergy === options.averageEnergy;
    });

    // this is here to make sure outermost test function passes (it fails otherwise because of the way tests are nested)
    return true
  });

};

testMithril(mock.window);

test.print(function(value) {console.log(value)});
