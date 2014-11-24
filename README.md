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
  - dashboard view
  - settings view

model:
  - calculations model
  - settings model

controller:
  - calculations controller
  - settings controller

(view model:
  - dashboard vm
  - settings vm)

_____________________________________________________



~~~~~~~~~~~~~~~~~~~

pitch email of myself
- send to 10 random meetup organizers