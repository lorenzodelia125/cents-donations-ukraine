let importo = 0;
const url = window.location.origin;

$(document).ready(() => {
  $(".submit-button").prop("disabled", true);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const status = urlParams.get("status") || "";

  if (status == "success") {
    $("#popup-thank-you").removeClass("hide");
  } else if (status == "failed") {
    $("#popup-fail").removeClass("hide");
  }

  window.history.pushState({}, document.title, window.location.pathname);
});

function clearForms() {
  $(":hidden").not(":button, :submit, :reset, :checkbox, :radio").val("");
}

$("#checkbox-serafico").change(function () {
  if (this.checked) {
    $("#checkbox-soleterre")[0].checked = true;
    $("#checkbox-sosteniamoci")[0].checked = true;
    $(".checkbox-org")
      .not($(".checkbox-org")[0])
      .addClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).addClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", false);
    $(".org").removeClass("hidden");
    $(".org").prop("required", true);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if ($("#checkbox-serafico")[0].checked) {
      $(".txt-ricevuta").addClass("hidden");
      $(".ricevuta").addClass("hidden");
      $(".ricevuta").prop("required", false);
    }

    clearForms();
    importo = 0;
  } else {
    $("#checkbox-soleterre")[0].checked = false;
    $("#checkbox-sosteniamoci")[0].checked = false;
    $(".checkbox-org")
      .not($(".checkbox-org")[0])
      .removeClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).removeClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", true);
    $(".org").addClass("hidden");
    $(".org").prop("required", false);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if (
      !$("#checkbox-serafico")[0].checked &&
      $("#ricevuta-serafico")[0].checked
    ) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }

    clearForms();
    importo = 0;
  }
});

$("#checkbox-soleterre").change(function () {
  if (this.checked) {
    $("#checkbox-serafico")[0].checked = true;
    $("#checkbox-sosteniamoci")[0].checked = true;
    $(".checkbox-org")
      .not($(".checkbox-org")[1])
      .addClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).addClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", false);
    $(".org").removeClass("hidden");
    $(".org").prop("required", true);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if ($("#checkbox-soleterre")[0].checked) {
      $(".txt-ricevuta").addClass("hidden");
      $(".ricevuta").addClass("hidden");
      $(".ricevuta").prop("required", false);
    }

    clearForms();
    importo = 0;
  } else {
    $("#checkbox-serafico")[0].checked = false;
    $("#checkbox-sosteniamoci")[0].checked = false;
    $(".checkbox-org")
      .not($(".checkbox-org")[1])
      .removeClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).removeClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", true);
    $(".org").addClass("hidden");
    $(".org").prop("required", false);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if (
      !$("#checkbox-soleterre")[0].checked &&
      $("#ricevuta-soleterre")[0].checked
    ) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }

    clearForms();
    importo = 0;
  }
});

$("#checkbox-sosteniamoci").change(function () {
  if (this.checked) {
    $("#checkbox-serafico")[0].checked = true;
    $("#checkbox-soleterre")[0].checked = true;
    $(".checkbox-org")
      .not($(".checkbox-org")[2])
      .addClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).addClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", false);
    $(".org").removeClass("hidden");
    $(".org").prop("required", true);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if ($("#checkbox-sosteniamoci")[0].checked) {
      $(".txt-ricevuta").addClass("hidden");
      $(".ricevuta").addClass("hidden");
      $(".ricevuta").prop("required", false);
    }

    clearForms();
    importo = 0;
  } else {
    $("#checkbox-serafico")[0].checked = false;
    $("#checkbox-soleterre")[0].checked = false;
    $(".checkbox-org")
      .not($(".checkbox-org")[2])
      .removeClass("w--redirected-checked");
    $(".utente").not($(".ricevuta")).removeClass("hidden");
    $(".utente").not($(".ricevuta")).prop("required", true);
    $(".org").addClass("hidden");
    $(".org").prop("required", false);
    $(".donation-import").addClass("unselect");
    $(".submit-button").prop("disabled", true);

    if (
      !$("#checkbox-sosteniamoci")[0].checked &&
      $("#ricevuta-sosteniamoci")[0].checked
    ) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }

    clearForms();
    importo = 0;
  }
});

$("#ricevuta-serafico").change(function () {
  if (this.checked) {
    $("#ricevuta-soleterre")[0].checked = true;
    $("#ricevuta-sosteniamoci")[0].checked = true;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[0])
      .addClass("w--redirected-checked");

    if (!$("#checkbox-serafico")[0].checked) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }
  } else {
    $("#ricevuta-soleterre")[0].checked = false;
    $("#ricevuta-sosteniamoci")[0].checked = false;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[0])
      .removeClass("w--redirected-checked");
    $(".txt-ricevuta").addClass("hidden");
    $(".ricevuta").addClass("hidden");
    $(".ricevuta").prop("required", false);
  }
});

$("#ricevuta-soleterre").change(function () {
  if (this.checked) {
    $("#ricevuta-serafico")[0].checked = true;
    $("#ricevuta-sosteniamoci")[0].checked = true;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[1])
      .addClass("w--redirected-checked");

    if (!$("#checkbox-soleterre")[0].checked) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }
  } else {
    $("#ricevuta-serafico")[0].checked = false;
    $("#ricevuta-sosteniamoci")[0].checked = false;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[1])
      .removeClass("w--redirected-checked");
    $(".txt-ricevuta").addClass("hidden");
    $(".ricevuta").addClass("hidden");
    $(".ricevuta").prop("required", false);
  }
});

$("#ricevuta-sosteniamoci").change(function () {
  if (this.checked && !$("#checkbox-sosteniamoci")[0].checked) {
    $("#ricevuta-soleterre")[0].checked = true;
    $("#ricevuta-serafico")[0].checked = true;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[2])
      .addClass("w--redirected-checked");

    if (!$("#checkbox-sosteniamoci")[0].checked) {
      $(".txt-ricevuta").removeClass("hidden");
      $(".ricevuta").removeClass("hidden");
      $(".ricevuta").prop("required", true);
    }
  } else {
    $("#ricevuta-soleterre")[0].checked = false;
    $("#ricevuta-serafico")[0].checked = false;
    $(".checkbox-ricevuta")
      .not($(".checkbox-ricevuta")[2])
      .removeClass("w--redirected-checked");
    $(".txt-ricevuta").addClass("hidden");
    $(".ricevuta").addClass("hidden");
    $(".ricevuta").prop("required", false);
  }
});

$(".donation-import").click((e) => {
  $(".donation-import").addClass("unselect");
  $(e.target.parentElement).removeClass("unselect");
  switch (e.target.parentElement.id) {
    case "15":
      importo = 1500;
      $(".submit-button").prop("disabled", false);
      break;
    case "30":
      importo = 3000;
      $(".submit-button").prop("disabled", false);
      break;
    case "100":
      importo = 10000;
      $(".submit-button").prop("disabled", false);
      break;
    case "250":
      importo = 25000;
      $(".submit-button").prop("disabled", false);
      break;
    case "500":
      importo = 50000;
      $(".submit-button").prop("disabled", false);
      break;
    case "1000":
      importo = 100000;
      $(".submit-button").prop("disabled", false);
      break;
    case "customOrg":
      importo = -2;
      $(".submit-button").prop("disabled", true);
      break;
    case "customUtente":
      importo = -1;
      $(".submit-button").prop("disabled", true);
      break;
  }
});

$(".text-block-4").click(() => {
  $(".donation-import").addClass("unselect");
  importo = 0;
  $(".submit-button").prop("disabled", true);
  clearForms();
});

$(".donation-field").keypress((evt) => {
  $(".submit-button").prop("disabled", false);
  let charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
});

$("#dona-ora-serafico").click(() => {
  if (importo == -1) {
    importo = $("#custom-serafico-user")[0].value * 100;
  } else if (importo == -2) {
    importo = $("#custom-serafico-org")[0].value * 100;
  }

  let data = {
    associazione: "serafico",
    importo: importo,
    societa: $("#checkbox-serafico")[0].checked,
    email: $("#email-serafico")[0].value,
    nome: $("#nome-serafico")[0].value || "-",
    cognome: $("#cognome-serafico")[0].value || "-",
    ragione: $("#ragione-sociale-serafico")[0].value || "-",
    piva: $("#partita-iva-serafico")[0].value || "-",
    cf: $("#codice-fiscale-serafico")[0].value || "-",
    nascita: $("#compleanno-serafico")[0].value || "-",
    indirizzo: $("#indirizzo-serafico")[0].value,
    cap: $("#cap-serafico")[0].value,
    citta: $("#citta-serafico")[0].value,
    privacy: $("#privacy-serafico")[0].checked,
    marketing: $("#marketing-serafico")[0].checked,
    profilazione: $("#profilazione-serafico")[0].checked,
    url: url,
  };
  if (importo > 0) {
    localStorage.setItem("donationData", JSON.stringify(data));
  }
});

$("#dona-ora-soleterre").click(() => {
  if (importo == -1) {
    importo = $("#custom-soleterre-user")[0].value * 100;
  } else if (importo == -2) {
    importo = $("#custom-soleterre-org")[0].value * 100;
  }
  let data = {
    associazione: "soleterre",
    importo: importo,
    societa: $("#checkbox-soleterre")[0].checked,
    email: $("#email-soleterre")[0].value,
    nome: $("#nome-soleterre")[0].value || "-",
    cognome: $("#cognome-soleterre")[0].value || "-",
    ragione: $("#ragione-sociale-soleterre")[0].value || "-",
    piva: $("#partita-iva-soleterre")[0].value || "-",
    cf: $("#codice-fiscale-soleterre")[0].value || "-",
    nascita: $("#compleanno-soleterre")[0].value || "-",
    indirizzo: $("#indirizzo-soleterre")[0].value,
    cap: $("#cap-soleterre")[0].value,
    citta: $("#citta-soleterre")[0].value,
    privacy: $("#privacy-soleterre")[0].checked,
    marketing: $("#marketing-soleterre")[0].checked,
    profilazione: $("#profilazione-soleterre")[0].checked,
    url: url,
  };
  if (importo > 0) {
    localStorage.setItem("donationData", JSON.stringify(data));
  }
});

$("#dona-ora-sosteniamoci").click(() => {
  if (importo == -1) {
    importo = $("#custom-sosteniamoci-user")[0].value * 100;
  } else if (importo == -2) {
    importo = $("#custom-sosteniamoci-org")[0].value * 100;
  }
  let data = {
    associazione: "sosteniamoci",
    importo: importo,
    societa: $("#checkbox-sosteniamoci")[0].checked,
    email: $("#email-sosteniamoci")[0].value,
    nome: $("#nome-sosteniamoci")[0].value || "-",
    cognome: $("#cognome-sosteniamoci")[0].value || "-",
    ragione: $("#ragione-sociale-sosteniamoci")[0].value || "-",
    piva: $("#partita-iva-sosteniamoci")[0].value || "-",
    cf: $("#codice-fiscale-sosteniamoci")[0].value || "-",
    nascita: $("#compleanno-sosteniamoci")[0].value || "-",
    indirizzo: $("#indirizzo-sosteniamoci")[0].value,
    cap: $("#cap-sosteniamoci")[0].value,
    citta: $("#citta-sosteniamoci")[0].value,
    privacy: $("#privacy-sosteniamoci")[0].checked,
    marketing: $("#marketing-sosteniamoci")[0].checked,
    profilazione: $("#profilazione-sosteniamoci")[0].checked,
    url: url,
  };
  if (importo > 0) {
    localStorage.setItem("donationData", JSON.stringify(data));
  }
});
