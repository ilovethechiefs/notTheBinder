var singleCaseHTML = '<div class="singleCase"><p>Patient info</p><ul>\
                    <li>Scheduling</li><li>IDX</li><li>Precert</li>\
                    <li>Confirmation</li><li>Cancel/Reschedule</li></ul></div>';

var main = function() {
  $("#addCaseButton").click(addCase);
}

$(document).ready(main);

function addCase() {
  $("#casesDiv").append(singleCaseHTML);
  $("#casesDiv").height("+=70px");
  if ($("#casesDiv").children().length == 1) {
    alert("First case");
    $("#casesDiv").css("border", "solid");
    $(".singleCase ul li:nth-child(1)").on("click", scheduleButton);
    $(".singleCase ul li:nth-child(2)").on("click", idxButton);
    $(".singleCase ul li:nth-child(3)").on("click", precertButton);
    $(".singleCase ul li:nth-child(4)").on("click", confirmationButton);
    $(".singleCase ul li:nth-child(5)").on("click", cancelButton);
  }


}

function scheduleButton() {
  alert("scheduleButton");
}

function idxButton() {
  alert("idxButton");
}

function precertButton() {
  alert("precertButton");
}

function confirmationButton() {
  alert("confirmationButton");
}

function cancelButton() {
  $(this).parent().parent().remove();
  if ($("#casesDiv").children().length == 0) {
    alert("Removed only case");
    $("#casesDiv").css("border", "none");
  }
  $("#casesDiv").height('-=70px');
}
