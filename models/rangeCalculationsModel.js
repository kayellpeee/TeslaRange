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
  methods.getNearestChargers = function(latitude, longitude){};
  methods.calculateDistance = function(location, destination, options){};
  methods.calculateChargeNeeded = function(distance, options){};
  return methods;
};