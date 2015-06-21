var phoneNumbers = 1;
var procedureNumber = 1;
var insuranceNumber = 1;

var singleCaseHTML = '<div class="singleCase"><p>Patient info</p><ul>\
                    <li><p>Scheduling</p></li><li><p>IDX</p></li><li><p>Precert</p></li>\
                    <li><p>Confirmation</p></li><li><p>Cancel/Reschedule</p></li></ul></div>';

var scheduleDataEntryHTML = '<div id="darkenPage"></div><div id="dataEntry"><div id="dataEntryFieldsDiv">\
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
                            </table>\
                            <hr>\
                            <table>\
                            <tr class="underlineRow">\
                            <td>Phone Number:</td><td><input type="text" name="phoneNumber'+phoneNumbers+'"></td>\
                            <td>Type:</td><td><input type="text" name="phoneNumberType'+phoneNumbers+'"></td>\
                            <td>Name:</td><td><input type="text" name="phoneNumberName'+phoneNumbers+'"></td>\
                            <td><button id="addPhoneButton'+phoneNumbers+'" type="button">Add phone number</button>\
                            </tr>\
                            </table>\
                            <hr>\
                            <table>\
                            <tr>\
                            <td>Procedure:</td><td><input type="text" name="procedureNumber'+procedureNumber+'"></td>\
                            <td>Side:</td><td><input type="text" name="procedureSide'+procedureNumber+'"></td>\
                            <td><button id="addProcedureButton'+procedureNumber+'" type="button">Add procedure</button>\
                            </tr>\
                            </table>\
                            <hr>\
                            <table>\
                            <tr>\
                            <td>Insurance:</td><td><input type="text" name="insurance'+insuranceNumber+'"></td>\
                            <td><button id="addInsuranceButton'+insuranceNumber+'" type="button">Add insurance</button>\
                            </tr>\
                            </table>\
                            <hr>\
                            <table id="notesTable">\
                            <tr>\
                            <td>Notes for Reservation:</td>\
                            <td>Notes for Surgical Coordinator:</td>\
                            <td>Notes for Precertification Coordinator:</td>\
                            </tr>\
                            <tr>\
                            <td><textarea id="notesForReservation"></textarea></td>\
                            <td><textarea id="notesForSurgCoord"></textarea></td>\
                            <td><textarea id="notesForPrecert"></textarea></td>\
                            </tr>\
                            </table>\
                            </div>\
                            <div id="dataEntryButtonDiv"><button id="saveButton" type="button">\
                            Save</button><button id="closeButton" type="button">\
                            Close without saving</button></div>\
                            </div>';




var main = function() {
  $("#addCaseButton").click(addCase);
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
  $("#dataEntry").height(.75*screen.height)
  $("#addPhoneButton1").on("click", addPhoneNumber);
  $("#addProcedureButton1").on("click", addProcedure);
  $("#addInsuranceButton1").on("click", addInsurance);
  $("#saveButton").on("click", closeScheduleForm);
  $("#closeButton").on("click", closeScheduleForm);
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

function addProcedure() {
  procedureNumber++;
  var newProcedureHTML = '</tr><tr>\
                          <td>Procedure:</td><td><input type="text" name="procedureNumber'+procedureNumber+'"></td>\
                          <td>Side:</td><td><input type="text" name="procedureSide'+procedureNumber+'"></td>\
                          <td><button id="addProcedureButton'+procedureNumber+'" type="button">Add procedure</button>';

  $(newProcedureHTML).insertAfter($("#addProcedureButton"+(procedureNumber-1)).parent().parent());
  $("#addProcedureButton"+procedureNumber).on("click", addProcedure);
  $("#addProcedureButton"+(procedureNumber-1)).remove();
}

function addInsurance() {
  insuranceNumber++;
  var newInsuranceHTML = '</tr><tr>\
                          <td>Insurance:</td><td><input type="text" name="insurance'+insuranceNumber+'"></td>\
                          <td><button id="addInsuranceButton'+insuranceNumber+'" type="button">Add Insurance</button>';

  $(newInsuranceHTML).insertAfter($("#addInsuranceButton"+(insuranceNumber-1)).parent().parent());
  $("#addInsuranceButton"+insuranceNumber).on("click", addInsurance);
  $("#addInsuranceButton"+(insuranceNumber-1)).remove();
}

function closeScheduleForm() {
  $('#darkenPage').remove();
  $('#dataEntry').remove();
}
