/*
tag ids info
#service 
#service_price 
#service_subtotal


*/

var masteringPrice = 9.99;
var mixingPrice = 29.99;
var remixPrice = 189.99;

//Initital Prices

var total;
vocalTuningSubtotal =
  vocalTrackSubtotal =
  artificialHarmoniesSubtotal =
  addInstrumentSubtotal =
  additionalMasterSubtotal =
  additionalTimeSubtotal =
  additionalRevisionSubtotal =
  additionalInstrumentArrangementSubtotal =
  rushSubtotal =
    0;

function addAll() {
  var total =
    serviceSubtotal +
    vocalTuningSubtotal +
    vocalTrackSubtotal +
    artificialHarmoniesSubtotal +
    addInstrumentSubtotal +
    additionalMasterSubtotal +
    additionalTimeSubtotal +
    additionalRevisionSubtotal +
    additionalInstrumentArrangementSubtotal +
    rushSubtotal;

  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

//close modal
function modalClose() {
  resetAll();
  document.getElementById("proceed").style.display = "none";
  document.getElementById("contact_us").style.display = "none";
}

//reset all fields
function resetAll() {
  document.getElementById("vocal_tuning_quantity").value = 0;
  document.getElementById("vocal_track_quantity").value = 0;
  document.getElementById("artificial_harmonies_quantity").value = 0;
  document.getElementById("instrument_track_quantity").value = 0;
  document.getElementById("additional_master_quantity").value = 0;
  document.getElementById("additional_time_quantity").value = 0;
  document.getElementById("additional_revision_quantity").value = 0;
  document.getElementById(
    "additional_instrument_arrangement_quantity"
  ).value = 0;
  document.getElementById("rush_button").checked = false;

  document.getElementById("vocal_tuning_subtotal").innerHTML = "";
  document.getElementById("vocal_track_subtotal").innerHTML = "";
  document.getElementById("artificial_harmonies_subtotal").innerHTML = "";
  document.getElementById("instrument_track_subtotal").innerHTML = "";
  document.getElementById("additional_master_subtotal").innerHTML = "";
  document.getElementById("additional_time_subtotal").innerHTML = "";
  document.getElementById("additional_revision_subtotal").innerHTML = "";
  document.getElementById(
    "additional_instrument_arrangement_subtotal"
  ).innerHTML = "";
  document.getElementById("rush_subtotal").innerHTML = "";
  total = 0;
}

//set Price on Modal
function setMastering() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Mastering";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + masteringPrice;
  document.getElementById("service_subtotal").innerHTML = masteringPrice;

  document.getElementById("service").innerHTML = service;

  serviceSubtotal = masteringPrice;
  resetAll();
  document.getElementById("total").innerHTML = "$" + masteringPrice;
}

function setMixing() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Mixing";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + mixingPrice;
  document.getElementById("service_subtotal").innerHTML = mixingPrice;

  document.getElementById("service").innerHTML = service;

  serviceSubtotal = mixingPrice;
  resetAll();
  document.getElementById("total").innerHTML = "$" + mixingPrice;
}

function setRemix() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Original Arrangement/ Remix";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + remixPrice;
  document.getElementById("service_subtotal").innerHTML = remixPrice;

  document.getElementById("service").innerHTML = service;

  serviceSubtotal = remixPrice;
  resetAll();
  document.getElementById("total").innerHTML = "$" + remixPrice;
}

//Compute Price Upon Clicking Button
function vocalTuningPrice() {
  let quantity = parseFloat(
    document.getElementById("vocal_tuning_quantity").value
  );
  let price = parseFloat(
    document.getElementById("vocal_tuning_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("vocal_tuning_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  vocalTuningSubtotal = subtotal;
  addAll();
}

function vocalTrackPrice() {
  let quantity = parseFloat(
    document.getElementById("vocal_track_quantity").value
  );
  let price = parseFloat(
    document.getElementById("vocal_track_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("vocal_track_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  vocalTrackSubtotal = subtotal;
  addAll();
}

function artificialHarmoniesPrice() {
  let quantity = parseFloat(
    document.getElementById("artificial_harmonies_quantity").value
  );
  let price = parseFloat(
    document.getElementById("artificial_harmonies_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("artificial_harmonies_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  artificialHarmoniesSubtotal = subtotal;
  addAll();
}

function addInstrumentPrice() {
  let quantity = parseFloat(
    document.getElementById("instrument_track_quantity").value
  );
  let price = parseFloat(
    document.getElementById("instrument_track_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("instrument_track_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  addInstrumentSubtotal = subtotal;
  addAll();
}

function additionalMasterPrice() {
  let quantity = parseFloat(
    document.getElementById("additional_master_quantity").value
  );
  let price = parseFloat(
    document.getElementById("additional_master_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("additional_master_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  additionalMasterSubtotal = subtotal;
  addAll();
}

function additionalTimePrice() {
  let quantity = parseFloat(
    document.getElementById("additional_time_quantity").value
  );
  let price = parseFloat(
    document.getElementById("additional_time_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("additional_time_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  additionalTimeSubtotal = subtotal;
  addAll();
}

function additionalRevisionPrice() {
  let quantity = parseFloat(
    document.getElementById("additional_revision_quantity").value
  );
  let price = parseFloat(
    document.getElementById("additional_revision_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById("additional_revision_subtotal").innerText =
    "$" + subtotal.toFixed(2);

  additionalRevisionSubtotal = subtotal;
  addAll();
}

function additionalInstrumentArrangementPrice() {
  let quantity = parseFloat(
    document.getElementById("additional_instrument_arrangement_quantity").value
  );
  let price = parseFloat(
    document.getElementById("additional_instrument_arrangement_price").innerHTML
  );
  let subtotal = quantity * price;

  document.getElementById(
    "additional_instrument_arrangement_subtotal"
  ).innerText = "$" + subtotal.toFixed(2);

  additionalInstrumentArrangementSubtotal = subtotal;
  addAll();
}

function rushPrice() {
  let checkbox = document.getElementById("rush_button");
  let test = checkbox.checked; // it returns Boolean value
  let price = parseFloat(document.getElementById("rush_price").innerHTML);

  if (test == true) {
    document.getElementById("rush_subtotal").innerText = "$" + price;
    rushSubtotal = price;
    addAll();
  } else {
    document.getElementById("rush_subtotal").innerText = "";
    rushSubtotal = 0;
    addAll();
  }
}
