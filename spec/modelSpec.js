function testMithril() {
  // tests for rangeCalculations model
  test(function(){

    // should be an object with the proper methods & properties
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

  // tests location property as well as getLocation method on model object
  rangeCalculations.model.getLocation(function(driveState){
    // only test location once we've made our call to getLocation

    rangeCalculations.model.location = driveState;
    test(function(){
      return typeof rangeCalculations.model.location === 'object';
    });
    test(function(){
      return typeof rangeCalculations.model.location.latitude === 'number';
    });
    test(function(){
      return typeof rangeCalculations.model.location.longitude === 'number';
    });
    test(function(){
      return typeof rangeCalculations.model.location.gps_as_of === 'number';
    });
    test(function(){
      return typeof rangeCalculations.model.location.heading === 'number';
    });
    test(function(){
      return typeof rangeCalculations.model.location.speed === 'number';
    });

    // test.print(function(value) {console.log(value)});
  });

  // tests getNearestChargers method (call to google maps api) & nearestChargers property
  // should take in coordinates & callback
  // gives callback access to an array of charger locations (coordinates)
  rangeCalculations.model.getNearestChargers(37.7836565, -122.409139, function(chargers){

    rangeCalculations.model.nearestChargers = chargers;
    test(function(){
      return Array.isArray(rangeCalculations.model.nearestChargers);
    });
    test(function(){
      return typeof rangeCalculations.model.nearestChargers[0] === 'object';
    });
    test(function(){
      return typeof rangeCalculations.model.nearestChargers[0].name === 'string';
    });
    test(function(){
      return typeof rangeCalculations.model.nearestChargers[0].latitude === 'number';
    });

    // test.print(function(value) {console.log(value)});
  });

  // tests calculateDistance method (call to google maps api)
  test(function(){

    // takes in a location, destination, options & callback.
    var location = [37.7836565, -122.409139];
    var destination = [37.493554, -121.945435];
    var options = {
      units: 'mi',
      elevationFrequency: 1000    // check elevation 1000 times / mi (once every ~5 ft)
    };
    rangeCalculations.model.calculateDistance(location, destination, options, function(distance, options){
      
      test(function(){
        return typeof distance === 'number';
      });
      test(function(){
        return typeof options === 'object';
      });
      test(function(){
        return options.units === 'mi';
      });
      test(function(){
        return options.elevationFrequency === 1000;
      });

      // test.print(function(value) {console.log(value)});
    });

    // should not need to hold onto distance or store in a variable
    return !rangeCalculations.model.distance;
  });

  // tests calculateChargeNeeded method
  test(function(){

    // takes a distance & options (units, battery size, estimated buffer, avg. energy usage)
    // returns number of rated miles of charge needed to make the trip, as well as options used for calculation
    var distance = 100;
    var options = {
      units: 'mi',
      batterySize: 85,          // kWh  (kilowatt hour)
      buffer: 15,               // 15 miles
      averageEnergy: 300        // Wh/mi  (Watt hours per mile)
    };
    rangeCalculations.model.chargeNeeded = rangeCalculations.model.calculateChargeNeeded(distance, options);
    test(function(){
      return typeof rangeCalculations.model.chargeNeeded === 'object';
    });
    test(function(){
      return typeof rangeCalculations.model.chargeNeeded.ratedChargeNeeded === 'number';
    });
    test(function(){
      // distance of 100 mi at averageEnergy of 300, 15 mi buffer = 115 mi of rated charge
      // rated charge is calculated assuming an average energy usage of 300 Wh/mi for the trip
      return rangeCalculations.model.chargeNeeded.ratedChargeNeeded === 115;
    });
    test(function(){
      return rangeCalculations.model.chargeNeeded.batterySize === options.batterySize;
    });
    test(function(){
      return rangeCalculations.model.chargeNeeded.buffer === options.buffer;
    });
    test(function(){
      // should default to 85 kWh battery (defaults are in the options object above)
      return rangeCalculations.model.calculateChargeNeeded(distance).batterySize === 85;
    });
    return rangeCalculations.model.chargeNeeded.averageEnergy === options.averageEnergy;
  });

}

testMithril();

test.print(function(value) {console.log(value)});
