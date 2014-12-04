function testMithril(mock) {
  // test rangeDashboard view

  test(function(){
    return typeof rangeDashboard.view === 'function';
  });

  var root = mock.window.document.createElement("div");
  m.render(root, rangeDashboard.view());

  test(function(){
    return root.childNodes.length === 1;
  });
  test(function(){
    return root.childNodes[0].tagName === "DIV";
  });
  test(function(){
    return root.childNodes[0].className === "rangeDashboard";
  });
  test(function(){
    return root.childNodes[0].childNodes[0].tagName === "TABLE";
  });

  var table = root.childNodes[0].childNodes[0];
  test(function(){
    return table.childNodes[0].tagName === "TR";
  });
  test(function(){
    return table.childNodes[1].tagName === "TR";
  });
  test(function(){
    return table.childNodes[2].tagName === "TR";
  });
  test(function(){
    return table.childNodes[3].tagName === "TR";
  });
  test(function(){
    return table.childNodes[4].tagName === "TR";
  });

  var headerRow = table.childNodes[0];
  test(function(){
    return headerRow.childNodes[0].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[0].textContent === "Average Energy";
  });
  test(function(){
    return headerRow.childNodes[1].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[1].textContent === "Charge Needed";
  });
  test(function(){
    return headerRow.childNodes[2].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[2].textContent === "Distance";
  });
  test(function(){
    return headerRow.childNodes[3].tagName === "TH";
  });
  test(function(){
    return headerRow.childNodes[3].textContent === "Buffer";
  });

  // i.e.   250kw/h     136 rated range     140 mi to charger     5 mi buffer   (slow or descending)    (55 mph)    (4:03 pm)
  var rows = [].slice.call(table.childNodes, (1));
  rows.forEach(function(row){
    test(function(){
      return row.childNodes[0].tagName === "TD";
    });
    test(function(){
      return row.childNodes[1].tagName === "TD";
    });
    test(function(){
      return row.childNodes[2].tagName === "TD";
    });
    test(function(){
      return row.childNodes[3].tagName === "TD";
    });
  });

  test(function(){
    return rows[0].childNodes[0].textContent === "250 Wh/mi";
  });
  test(function(){
    return rows[1].childNodes[0].textContent === "300 Wh/mi";
  });
  test(function(){
    return rows[2].childNodes[0].textContent === "350 Wh/mi";
  });
  test(function(){
    return rows[3].childNodes[0].textContent === "400 Wh/mi";
  });

  // input row (for user-inputted parameters)
  test(function(){
    return rows[4].className === "userParameters";
  });
  test(function(){
    return rows[4].tagName === "TR";
  });
  test(function(){
    return rows[4].childNodes[0].tagName === "TD";
  });
  test(function(){
    // input for avg energy
    return rows[4].childNodes[0].childNodes[0].tagName === "INPUT";
  });
  test(function(){
    // input for Charge Needed
    return rows[4].childNodes[1].childNodes[0].tagName === "INPUT";
  });
  test(function(){
    // td for distance
    return rows[4].childNodes[2].tagName === "TD";
  });
  test(function(){
    // input for buffer
    return rows[4].childNodes[3].childNodes[0].tagName === "INPUT";
  });

};

testMithril(mock);

test.print(function(value) {console.log(value)});
