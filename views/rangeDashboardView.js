rangeDashboard.view = function(){
  return m("div .rangeDashboard", [
    m("table", [
      m("tr", [
        m("th", "Average Energy"),
        m("th", "Estimated Charge Needed"),
        m("th", "distance"),
        m("th", "Estimated Buffer")
        ]),
      m("tr"),
      m("tr"),
      m("tr"),
      m("tr")
      ])
    ]);
}