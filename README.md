Website for fast range estimate

1 view:
  - main view for page (only 1 page)

1 model:   (responsible for data storage, state management and business logic)
  - distance model, logic behind all calculations

view models:  (model level entity that stores UI state - also responsible for handling business logic that revolves around UI-specific restrictions)
  - refresh button
  - custom parameters
  - settings

controllers:    expose a scoped set of model-level functionality (the controller defines what part of the (view) model is relevant for the current page)
  - 



_______________________________________________________________________________

view:
  - dashboard view                  √
  - settings view
  (- car data view)

model:
  - calculations models             √
  (- car data model)
  - settings model

controller:
  - calculations controller
  - settings controller

(view model:
  - dashboard vm
  - settings vm)

_____________________________________________________

MODEL
range calculations
  - nearest chargers                √
  - get nearest chargers            √
  - calculate distance              √
  - charge needed                   √
  - calculate charge needed         √
  - location                        √
  - getLocation                     √
  - (avg energy needed)
  - (calculate avg energy needed)
  - (time till charge)
  - (calc time till charge)
  - (distance)
  -
  -
  -

(car data
  - location
  - current charge
  - misc. charge stats
  - get current charge
  - get location)
  - 

------------------------------------------------------

VIEW
range dashboard
  - current location                                          div
    (- refresh button)                                          (button)
  - nearest chargers              -----------\                table
    (- refresh button)                        \                 button
  - trip information                          /               table & (table.row * 4) // 250, 300, 350, 400
    - distance                    -----------/                  th + td
    - buffer                                                    th + td
    - avg energy                                                th + td
    - rated charge needed                                       th + td
  - input for customizable trip                                 th + input
  - 


```````````````````````````````````````````````````````````

controller - glue (defines what part of the (view) model is relevant for the current page)
range dashboard
  - avg energy
  - distance
  - charge needed
  - buffer
  - fnc to render user input to page


~~~~~~~~~~~~~~~~~~~
MVP : get correct calcs from charging station or elsewhere
+ live updates (charge till time, avg energy, buffer etc. - with some view for current car stats on an interval refresh)

~~~~~~~~~~~~~~~~~~~

UI
// load page
// see closest superchargers (in range), based on battery size
// select charger
// see distance to charger (incl. elevation change) & corresponding route
// see several avg energy usage and charge limit
// i.e.   250 Wh/mi     136 rated range     140 mi to charger     5 mi buffer   (slow or descending)    (55 mph)    (4:03 pm)
// i.e.   350 Wh/mi     165 rated range     140 mi to charger     5 mi buffer
// i.e.   450 Wh/mi     205 rated range     140 mi to charger     5 mi buffer   (climbing or high winds or fast)  (80 mph)...
// input for energy usage || rated range || buffer || time of arrival will calculate the rest

// UI
// button to refresh
// button to increase size
// button change display mode (night vs day)


~~~~~~~~~~~~~~~~~~~~~~~~~

pitch email of myself
- send to 10 random meetup organizers