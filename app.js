var singleCaseHTML = '<div class="singleCase"><p>Patient info</p><ul>\
                    <li>Button 1</li><li>Button 2</li><li>Button 3</li>\
                    <li>Button 4</li><li>Button 5</li></ul></div><hr>';

var main = function() {
  $("#addCaseButton").click(addCase);
}

$(document).ready(main);

function addCase() {
  $("#casesDiv").css("border", "solid");
  $("#casesDiv").append(singleCaseHTML);
  $("#casesDiv").height("+=84px");
}
