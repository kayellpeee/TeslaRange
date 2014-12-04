rangeDashboard.view = function(){
  return m("div .rangeDashboard", [
    m("table", [
      m("tr", [
        m("th", "Average Energy"),
        m("th", "Charge Needed"),
        m("th", "Distance"),
        m("th", "Buffer")
        ]),
      m("tr", [
        m("td", "250 Wh/mi"),   // avg energy
        m("td"),                // estimated charge needed
        m("td"),                // distance
        m("td")                 // estimated buffer
        ]),
      m("tr", [
        m("td", "300 Wh/mi"),
        m("td"),
        m("td"),
        m("td")
        ]),
      m("tr", [
        m("td", "350 Wh/mi"),
        m("td"),
        m("td"),
        m("td")
        ]),
      m("tr", [
        m("td", "400 Wh/mi"),
        m("td"),
        m("td"),
        m("td")
        ]),
      m("tr .userParameters", [
        m("td", m("input", {type: "text"})),
        m("td", m("input", {type: "text"})),
        m("td"),
        m("td", m("input", {type: "text"}))
        ])
      ])
    ]);
}