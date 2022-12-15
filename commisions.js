/*
tag ids info
#service 
#service_price 
#service_subtotal


*/

var masteringPrice = 9.99;
var mixingPrice = 29.99;
var remixPrice = 189.99;

//set Price on Modal
function setMastering() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Mastering";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + masteringPrice;
  document.getElementById("service_subtotal").innerHTML = "$" + masteringPrice;

  document.getElementById("service").innerHTML = service;
}

function setMixing() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Mixing";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + mixingPrice;
  document.getElementById("service_subtotal").innerHTML = "$" + mixingPrice;

  document.getElementById("service").innerHTML = service;
}

function setRemix() {
  //display modal
  document.getElementById("proceed").style.display = "block";
  var service = "Original Arrangement/ Remix";

  //display variables for mastering
  document.getElementById("service_price").innerHTML = "$" + remixPrice;
  document.getElementById("service_subtotal").innerHTML = "$" + remixPrice;

  document.getElementById("service").innerHTML = service;
}

//Compute Price Upon Clicking Button
function vocalTuningPrice() {
  var quantity = parseFloat(
    document.getElementById("vocal_tuning_quantity").value
  );
  var price = parseFloat(
    document.getElementById("vocal_tuning_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("vocal_tuning_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function vocalTrackPrice() {
  var quantity = parseFloat(
    document.getElementById("vocal_track_quantity").value
  );
  var price = parseFloat(
    document.getElementById("vocal_track_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("vocal_track_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function artificialHarmoniesPrice() {
  var quantity = parseFloat(
    document.getElementById("artificial_harmonies_quantity").value
  );
  var price = parseFloat(
    document.getElementById("artificial_harmonies_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("artificial_harmonies_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function addInstrumentPrice() {
  var quantity = parseFloat(
    document.getElementById("instrument_track_quantity").value
  );
  var price = parseFloat(
    document.getElementById("instrument_track_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("instrument_track_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function additionalMasterPrice() {
  var quantity = parseFloat(
    document.getElementById("additional_master_quantity").value
  );
  var price = parseFloat(
    document.getElementById("additional_master_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("additional_master_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function additionalTimePrice() {
  var quantity = parseFloat(
    document.getElementById("additional_time_quantity").value
  );
  var price = parseFloat(
    document.getElementById("additional_time_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("additional_time_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function additionalRevisionPrice() {
  var quantity = parseFloat(
    document.getElementById("additional_revision_quantity").value
  );
  var price = parseFloat(
    document.getElementById("additional_revision_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById("additional_revision_subtotal").innerText =
    "$" + subtotal.toFixed(2);
}

function additionalInstrumentArrangementPrice() {
  var quantity = parseFloat(
    document.getElementById("additional_instrument_arrangement_quantity").value
  );
  var price = parseFloat(
    document.getElementById("additional_instrument_arrangement_price").innerHTML
  );
  var subtotal = quantity * price;

  document.getElementById(
    "additional_instrument_arrangement_subtotal"
  ).innerText = "$" + subtotal.toFixed(2);
}

function rushPrice() {
  var checkbox = document.getElementById("rush_button");
  var test = checkbox.checked; // it returns Boolean value
  var price = parseFloat(document.getElementById("rush_price").innerHTML);

  if (test == true) {
    document.getElementById("rush_subtotal").innerText = "$" + price;
  } else {
    document.getElementById("rush_subtotal").innerText = "";
  }
}
