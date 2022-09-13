const nav_list = document.getElementById("nav_list");
let nav_buttons = nav_list.getElementsByClassName("nav_button");

for (let i = 0; i < nav_buttons.length; i++) {
  nav_buttons[i].addEventListener("click", () => {
    let currNav = document.getElementsByClassName("active");
    currNav[0].className = currNav[0].className.replace("active", "");
    nav_buttons[i].className += " active";
  });
}
function valid() {
  if (document.getElementById("pn").value == "") {
    document.getElementById("prn").innerHTML = "** please enter property name";
    return false;
  } else {
    document.getElementById("prn").innerHTML = " ";
    if (document.getElementById("cn").value == "") {
      document.getElementById("cun").innerHTML =
        "** please enter customer name";
      return false;
    } else {
      document.getElementById("cun").innerHTML = " ";
      if (document.getElementById("email").value == "") {
        document.getElementById("em").innerHTML = "** please enter email name";
        return false;
      } else {
        document.getElementById("em").innerHTML = " ";
        if (document.getElementById("ba1").value == "") {
          document.getElementById("bia1").innerHTML =
            "** please enter BilingAdd1 name";
          return false;
        } else {
          document.getElementById("bia1").innerHTML = " ";
          if (document.getElementById("ba2").value == "") {
            document.getElementById("bia2").innerHTML =
              "** please enter BillingAdd2 name";
            return false;
          } else {
            document.getElementById("bia2").innerHTML = " ";
            if (document.getElementById("city").value == "") {
              document.getElementById("ct").innerHTML =
                "** please enter city name";
              return false;
            } else {
              document.getElementById("ct").innerHTML = " ";
              if (document.getElementById("Z").value == "") {
                document.getElementById("pin").innerHTML =
                  "** please enter Zip ";
                return false;
              } else {
                document.getElementById("pin").innerHTML = " ";
              }
            }
          }
        }
      }
    }
  }
}
