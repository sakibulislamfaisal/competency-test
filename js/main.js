//for input focus field using show.bs.modal
$("#modal-edit").on("show.bs.modal", function (e) {
  //simply identify which button click on the user using relatedTarget
  var name = $(e.relatedTarget).parents()[1].cells[0].innerText;
  var email = $(e.relatedTarget).parents()[1].cells[1].innerText;
  var phone = $(e.relatedTarget).parents()[1].cells[2].innerText;

  $("#name").val(name);
  $("#email").val(email);
  $("#phone").val(phone);
});
