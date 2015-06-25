var phoneNumbers = 1;
var procedureNumber = 1;
var insuranceNumber = 1;

var testObject = {
  firstName: "John",
  lastName: "Smith"
};

var singleCaseHTML = '<div class="singleCase"><p>Patient info</p><ul>\
                    <li><p>Scheduling</p></li><li><p>IDX</p></li><li><p>Precert</p></li>\
                    <li><p>Confirmation</p></li><li><p>Cancel</p></li></ul></div>';

var scheduleFormHTML = '<div id="darkenPage"></div><div id="scheduleForm"><div id="scheduleFormFieldsDiv">\
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
                            <table>\
                            <tr>\
                            <td>Pre-op appointment:</td><td><input type="text" name="preopApptInput"></td>\
                            <td>Same Day Measurements?</td><td><input type="text" name="sdmInput"></td>\
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
                            <div id="scheduleFormButtonDiv"><button id="scheduleSaveButton" type="button">\
                            Save</button><button id="scheduleCloseButton" type="button">\
                            Close without saving</button></div>\
                            </div>';

var idxFormHTML = '<div id="darkenPage"></div><div id="idxForm"><div id="idxFormFieldsDiv">\
                  <table>\
                  <th colspan=2>Has this case been entered into IDX?</th>\
                  <tr>\
                  <td>Yes</td><td>No</td>\
                  </tr>\
                  </table>\
                  </div>\
                  <div id="idxFormButtonDiv"><button id="idxSaveButton" type="button">\
                  Save</button><button id="idxCloseButton" type="button">\
                  Close without saving</button></div>\
                  </div>';

var precertFormHTML = '<div id="darkenPage"></div><div id="precertForm"><div id="precertFormFieldsDiv">\
                      <table>\
                      <tr>\
                      <td>Patient Name:</td><td><input type="text" name="patientNameInput"></td>\
                      </tr>\
                      <tr>\
                      <td>Date of Birth:</td><td><input type="text" name="dateOfBirthInput"></td>\
                      </tr>\
                      <tr>\
                      <td>Procedure:</td><td><input type="text" name="procedureNumber'+procedureNumber+'"></td>\
                      <td>Side:</td><td><input type="text" name="procedureSide'+procedureNumber+'"></td>\
                      </tr>\
                      </table>\
                      <hr>\
                      <table>\
                      <tr>\
                      <td>Insurance:</td><td><input type="text" name="insurance'+insuranceNumber+'"></td>\
                      <td>Policy Number:</td><td><input type="text" name="policyNumber'+insuranceNumber+'"></td>\
                      <td>Precert Phone:</td><td><input type="text" name="phoneNumber'+insuranceNumber+'"></td>\
                      </tr>\
                      </table>\
                      <table id="precertInsuranceTable'+insuranceNumber+'">\
                      <tr>\
                      <td>Precert notes:</td>\
                      </tr>\
                      <tr>\
                      <td><textarea id="precertNotes'+insuranceNumber+'"></textarea></td>\
                      </tr>\
                      <tr>\
                      <td><button id="precertAddInsuranceButton'+insuranceNumber+'" type="button">Add insurance</button></td>\
                      </tr>\
                      </table>\
                      <hr>\
                      <table id="precertNotesTable">\
                      <tr>\
                      <td>Notes for Precertification Coordinator:</td>\
                      <td>Notes for Reservation:</td>\
                      </tr>\
                      <tr>\
                      <td><textarea id="notesForPrecert"></textarea></td>\
                      <td><textarea id="notesForReservation"></textarea></td>\
                      </tr>\
                      </table>\
                      <hr>\
                      <table id="reservationTasking">\
                      <tr>\
                      <td>OR Scheduling:</td><td><input type="text" name="taskToORScheduling"></td>\
                      <td>Pre-Registration:</td><td><input type="text" name="taskToPreReg"></td>\
                      </tr>\
                      <tr>\
                      <td>Precert entered in IDX:</td><td><input type="text" name="precertInIDX"></td>\
                      <td>Precert written in chart:</td><td><input type="text" name="precertInChart"></td>\
                      </tr>\
                      </table>\
                      </div>\
                      <div id="precertFormButtonDiv"><button id="precertSaveButton" type="button">\
                      Save</button><button id="precertCloseButton" type="button">\
                      Close without saving</button></div>\
                      </div>';

var confirmationFormHTML = '<div id="darkenPage"></div><div id="confirmationForm"><div id="confirmationFormFieldsDiv">\
                            <table>\
                            <tr>\
                            <td>Patient Name:</td><td><input type="text" name="patientNameInput"></td>\
                            </tr>\
                            <tr>\
                            <td>Date of Birth:</td><td><input type="text" name="dateOfBirthInput"></td>\
                            </tr>\
                            </table>\
                            <hr>\
                            <table>\
                            <tr>\
                            <td>Date of confirmation call:</td><td><input type="text" name="confirmationInput"></td>\
                            </tr>\
                            <tr>\
                            <td>Who is coming with the patient?</td><td><input type="text" name="comingWith"></td>\
                            </tr>\
                            <tr>\
                            <td>Insurance Okay?</td><td><input type="text" name="insuranceOkay"></td>\
                            </tr>\
                            </table>\
                            <table id="leftMessage">\
                            <tr>\
                            <td>Left Message:</td>\
                            </tr>\
                            <tr>\
                            <td><textarea id="messageNotes"></textarea></td>\
                            </tr>\
                            </table>\
                            <hr>\
                            </div>\
                            <div id="confirmationFormButtonDiv"><button id="confirmationSaveButton" type="button">\
                            Save</button><button id="confirmationCloseButton" type="button">\
                            Close without saving</button></div>\
                            </div>';

var cancelationFormHTML = '<div id="darkenPage"></div><div id="cancelationForm"><div id="cancelationFormFieldsDiv">\
                          <table>\
                          <th colspan=2>Would you like to reschedule this case?</th>\
                          <tr>\
                          <td>Yes</td><td>No</td>\
                          </tr>\
                          </table>\
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
  $("html").append(scheduleFormHTML);
  $("#scheduleForm").height(.75*screen.height)
  $("#addPhoneButton1").on("click", addPhoneNumber);
  $("#addProcedureButton1").on("click", addProcedure);
  $("#addInsuranceButton1").on("click", addInsurance);
  $("#scheduleSaveButton").on("click", closeScheduleForm);
  $("#scheduleCloseButton").on("click", closeScheduleForm);
  $('body').css("overflow", "hidden");
}

function idxButton() {
  $("html").append(idxFormHTML);
  $("#idxForm").height(.35*screen.height)
  $("#idxFormFieldsDiv table td").on("click", function() {
    $("#idxFormFieldsDiv table td").css("background-color", "white")
    $(this).css("background-color", "#cccccc");
    if ($(this).is(':nth-child(1)')) {
       testObject.IDX = "Yes";
    } else {
        testObject.IDX = "No";
    }
    alert(testObject.IDX);
  });
  $("#idxSaveButton").on("click", closeIDXForm);
  $("#idxCloseButton").on("click", closeIDXForm);
  $('body').css("overflow", "hidden");
}

function precertButton() {
  $("html").append(precertFormHTML);
  $("#precertForm").height(.75*screen.height)
  $("#precertAddInsuranceButton1").on("click", precertAddInsurance);
  $("#precertNotes1").width(.70*screen.width).height(.2*screen.height);
  $('body').css("overflow", "hidden");
  $("#precertSaveButton").on("click", closePrecertForm);
  $("#precertCloseButton").on("click", closePrecertForm);
}

function confirmationButton() {
  $("html").append(confirmationFormHTML);
  $("#confirmationForm").height(.75*screen.height);
  $('body').css("overflow", "hidden");
  $("#confirmationSaveButton").on("click", closeConfirmationForm);
  $("#confirmationCloseButton").on("click", closeConfirmationForm);
}

function cancelButton() {
  $("html").append(cancelationFormHTML);
  $("#cancelationForm").height(.25*screen.height);
  $('body').css("overflow", "hidden");
  $(this).parent().parent().remove();
  if ($("#casesDiv").children().length == 0) {
    $("#casesDiv").css("border", "none");
  }
  $("#casesDiv").height('-=70px');
  $("#cancelationFormFieldsDiv table tr td").click(closeCancelationForm);
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
  $('#scheduleForm').remove();
  $('body').css("overflow", "auto");
  phoneNumbers = 1;
  procedureNumber = 1;
  insuranceNumber = 1;
}

function closeIDXForm() {
  $('#darkenPage').remove();
  $('#idxForm').remove();
  $('body').css("overflow", "auto");
  phoneNumbers = 1;
  procedureNumber = 1;
  insuranceNumber = 1;



}

function closePrecertForm() {
  $('#darkenPage').remove();
  $('#precertForm').remove();
  $('body').css("overflow", "auto");
  phoneNumbers = 1;
  procedureNumber = 1;
  insuranceNumber = 1;
}

function closeConfirmationForm() {
  $('#darkenPage').remove();
  $('#confirmationForm').remove();
  $('body').css("overflow", "auto");
  phoneNumbers = 1;
  procedureNumber = 1;
  insuranceNumber = 1;
}

function closeCancelationForm() {
  $('#darkenPage').remove();
  $('#cancelationForm').remove();
  $('body').css("overflow", "auto");
  phoneNumbers = 1;
  procedureNumber = 1;
  insuranceNumber = 1;
}

function precertAddInsurance() {
  insuranceNumber++;
  var newInsuranceHTML = '<hr>\
                          <table>\
                          <tr>\
                          <td>Insurance:</td><td><input type="text" name="insurance'+insuranceNumber+'"></td>\
                          <td>Policy Number:</td><td><input type="text" name="policyNumber'+insuranceNumber+'"></td>\
                          <td>Precert Phone:</td><td><input type="text" name="phoneNumber'+insuranceNumber+'"></td>\
                          </tr>\
                          </table>\
                          <table id="precertInsuranceTable'+insuranceNumber+'">\
                          <tr>\
                          <td>Precert notes:</td>\
                          </tr>\
                          <tr>\
                          <td><textarea id="precertNotes'+insuranceNumber+'"></textarea></td>\
                          </tr>\
                          <tr><td><button id="precertAddInsuranceButton'+insuranceNumber+'" type="button">Add insurance</button></td>\
                          </tr>\
                          </table>';

  $(newInsuranceHTML).insertAfter($("#precertInsuranceTable"+(insuranceNumber-1)));
  $("#precertAddInsuranceButton"+insuranceNumber).on("click", precertAddInsurance);
  $("#precertAddInsuranceButton"+(insuranceNumber-1)).remove();
  $("#precertNotes"+insuranceNumber).width(.70*screen.width).height(.2*screen.height);
}
