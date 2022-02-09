$(document).ready(function () {
    $("#submitButton").click(function () {
  
      let a = $("#fname").val();
      if (a == "") {
        $("#name-error").css("display", "block");
        $("#name-error").text("Please enter a name.");
        $("#fname").focus();
        $("#fname").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#name-error").css("display", "none");
        $("#fname").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }

  
      let b = $("#mobile").val();
      var phoneno = /^\d{10}$/;
      if (b == "") {
        $("#mobile-error").css("display", "block");
        $("#mobile-error").text(
          "Please enter a phone number so we can call if there are any issues with delivery."
        );
        $("#mobile").focus();
        $("#mobile").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else if (!b.match(phoneno)) {
        $("#mobile-error").css("display", "block");
        $("#mobile-error").text(
          "Mobile number cannot be String. Enter valid 10 digit number."
        );
        $("#mobile").focus();
        $("#mobile").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#mobile-error").css("display", "none");
        $("#mobile").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }
  
  
      var c = $("#pincode").val();
      var pin = /^\d{6}$/;
      if (c == "") {
        $("#pincode-error").css("display", "block");
        $("#pincode-error").text("Please enter a ZIP or postal code.");
        $("#pincode").focus();
        $("#pincode").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else if (!c.match(pin)) {
        $("#pincode-error").css("display", "block");
        $("#pincode-error").text(
          "Pincode number cannot be String. Enter valid 6 digit number."
        );
        $("#pincode").focus();
        $("#pincode").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#pincode-error").css("display", "none");
        $("#pincode").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }
  
  
      var d = $("#farea").val();
      if (d == "") {
        $("#farea-error").css("display", "block");
        $("#farea-error").text("Please enter an address.");
        $("#farea").focus();
        $("#farea").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#farea-error").css("display", "none");
        $("#farea").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }
  
  
      var e = $("#varea").val();
      if (e == "") {
        $("#varea-error").css("display", "block");
        $("#varea-error").text("Please enter an area.");
        $("#varea").focus();
        $("#varea").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#varea-error").css("display", "none");
        $("#varea").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }
  
  
      var f = $("#tarea").val();
      if (f == "") {
        $("#tarea-error").css("display", "block");
        $("#tarea-error").text("Please enter a city name.");
        $("#tarea").focus();
        $("#tarea").css({ borderColor: "rgb(197, 4, 4)", borderWidth: "2px" });
      } else {
        $("#tarea-error").css("display", "none");
        $("#tarea").css({ borderColor: "#888c8c", borderWidth: "1px" });
      }
      

      var g = $("#state").val();
    if (g == "") {
      $("#state-error").css("display", "block");
      $("#state-error").text("Please enter a state, region or province.");
    } else {
      $("#state-error").css("display", "none");
    }
    });
  });