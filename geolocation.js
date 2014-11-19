navigator.geolocation.getCurrentPosition(function(position){
  console.log(position);
});


// find client location

// find nearest superchargers

// call google api -> find distance + total elevation change along route



// load page
// see closest superchargers (in range), based on battery size
// select charger
// see distance to charger (incl. elevation change) & corresponding route
// see several avg energy usage and charge limit
// i.e.   250kw/h     136 rated range     140 mi to charger     5 mi buffer   (slow or descending)    (55 mph)    (4:03 pm)
// i.e.   350kw/h     165 rated range     140 mi to charger     5 mi buffer
// i.e.   450kw/h     205 rated range     140 mi to charger     5 mi buffer   (climbing or high winds or fast)  (80 mph)...
// input for energy usage || rated range || time of arrival will calculate the rest

// UI
// button to refresh
// button to increase size
// button change display mode (night vs day)
