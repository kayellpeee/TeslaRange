rangeCalculations.model = (function(){
  var methods = {};
  methods.getLocation = function(callback){
    var driverState = {
      latitude: 37.7836298,
      longitude: -122.409107,
      gps_as_of: 1417554704013,
      heading: 49,
      speed: 30
    };
    callback(driverState);
  };
  methods.getNearestChargers = function(latitude, longitude, callback){
    var nearestChargers = [{
      name: 'Freemont, CA',
      latitude: 37.493554,
      longitude: -121.945435
    }];
    callback(nearestChargers);
  };
  methods.calculateDistance = function(location, destination, options, callback){
    if( typeof options === 'function' ){
      callback = options;
      options = {};       // set defaults here? or later on to escape edge cases (passed in options only has units) both?
    }
    var units = options.units || 'mi';
    var elevationFrequency = options.elevationFrequency || 1000;
    var distance = 40.1;
    var options = {
      units: units,
      elevationFrequency: elevationFrequency
    };
    callback(distance, options);
  };
  methods.calculateChargeNeeded = function(distance, options){
    if( !options ){
      options = {};
    }
    var units = options.units || 'mi';
    var batterySize = options.batterySize || 85;          // kWh  (kilowatt hour)
    var buffer = options.buffer || 15;                    // 15 miles
    var averageEnergy = options.averageEnergy || 300;     // Wh/mi  (Watt hours per mile)
    return {
      ratedChargeNeeded: 115,
      units: units,
      batterySize: batterySize,
      buffer: buffer,
      averageEnergy: averageEnergy
    }
  };
  return methods;
}())
