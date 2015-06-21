var phoneNumbers = 1;

var singleCaseHTML = '<div class="singleCase"><p>Patient info</p><ul>\
                    <li>Scheduling</li><li>IDX</li><li>Precert</li>\
                    <li>Confirmation</li><li>Cancel/Reschedule</li></ul></div>';

var scheduleDataEntryHTML = '<div id="darkenPage"></div><div id="dataEntry">\
                            <table>\
                            <tr>\
                            <td>Today\'s Date:</td><td><input type="text" name="todaysDateInput"></td>\
                            </tr>\
                            <tr>\
                            <td>Patient Name:</td><td><input type="text" name="patientNameInput"></td>\
                            </tr>\
                            <tr>\
                            <td>Date of Birth:</td><td><input type="text" name="dateOfBirthInput"></td>\
                            </tr>\
                            <tr>\
                            <td>Phone Number:</td><td><input type="text" name="phoneNumber'+phoneNumbers+'"></td>\
                            <td>Type:</td><td><input type="text" name="phoneNumberType'+phoneNumbers+'"></td>\
                            <td>Name:</td><td><input type="text" name="phoneNumberName'+phoneNumbers+'"></td>\
                            <td><button id="addPhoneButton'+phoneNumbers+'" type="button">Add phone number</button>\
                            </tr>\
                            </table>\
                            <div id="dataEntryButtonDiv"><button id="saveButton" type="button">\
                            Save</button><button id="closeButton" type="button">\
                            Close without saving</button></div></div>';




var main = function() {
  $("#addCaseButton").click(addCase);
  $("#addPhoneButton").click(addPhoneNumber);
}

$(document).ready(main);

function addCase() {
  $("#casesDiv").append(singleCaseHTML);
  $("#casesDiv").height("+=70px");
  var index = $("#casesDiv").children().length;
  $(".singleCase:nth-child("+index+") ul li:nth-child(1)").on("click", scheduleButton);
  $(".singleCase:nth-child("+index+") ul li:nth-child(2)").on("click", idxButton);
  $(".singleCase:nth-child("+index+") ul li:nth-child(3)").on("click", precertButton);
  $(".singleCase:nth-child("+index+") ul li:nth-child(4)").on("click", confirmationButton);
  $(".singleCase:nth-child("+index+") ul li:nth-child(5)").on("click", cancelButton);
  if ($("#casesDiv").children().length == 1) {
    $("#casesDiv").css("border", "solid");
  }
}

function scheduleButton() {
  $("html").append(scheduleDataEntryHTML);
  $("#dataEntry").height(.8*screen.height)
  $("#addPhoneButton1").on("click", addPhoneNumber);
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
    $("#casesDiv").css("border", "none");
  }
  $("#casesDiv").height('-=70px');
}

function addPhoneNumber() {
  phoneNumbers++;
  var newPhoneHTML = '</tr><tr>\
                      <td>Phone Number:</td><td><input type="text" name="phoneNumber'+phoneNumbers+'"></td>\
                      <td>Type:</td><td><input type="text" name="phoneNumberType'+phoneNumbers+'"></td>\
                      <td>Name:</td><td><input type="text" name="phoneNumberName'+phoneNumbers+'"></td>\
                      <td><button id="addPhoneButton'+phoneNumbers+'" type="button">Add phone number</button></td></tr>';

  $(newPhoneHTML).insertAfter($("#addPhoneButton"+(phoneNumbers-1)).parent().parent());
  $("#addPhoneButton"+phoneNumbers).on("click", addPhoneNumber);
  $("#addPhoneButton"+(phoneNumbers-1)).remove();

  //$(newPhoneButtonHTML).insertAfter($("[name='phoneNumberName"+phoneNumbers+"]'"));
}
