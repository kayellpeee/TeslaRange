rangeCalculations.model = new function(){
  var methods = {};
  methods.getLocation = function(){
    var latitude;
    var longitude;
    var timestamp;
    navigator.geolocation.getCurrentPosition(function(position){
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      timestamp = position.timestamp;
    });
    return function(){
      return {
        coordinates: [latitude, longitude],
        timestamp: timestamp
      }
    }
  };
  methods.getNearestChargers = function(latitude, longitude){
    return [{
      name: 'Freemont, CA',
      latitude: 37.493554,
      longitude: -121.945435
    }];
  };
  methods.calculateDistance = function(location, destination, options){
    if( !options ){
      options = {}
    }
    var units = options.units || 'mi';
    var elevationFrequency = options.elevationFrequency || 1000;
    return {
      distance: 40.1,
      units: units,
      elevationFrequency: elevationFrequency
    }
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
};
