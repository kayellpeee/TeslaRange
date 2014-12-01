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
  methods.calculateDistance = function(location, destination, options){};
  methods.calculateChargeNeeded = function(distance, options){};
  return methods;
};