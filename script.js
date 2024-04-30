let num = document.getElementById("number");

let output = document.getElementById("output");

function convert() {
  if (num.value === "") {
    alert("Please enter a valid number");
  } else if (num.value <= 0) {
    output.innerHTML = `<h2 class="mess">Please enter a number greater than or equal to 1</h2>`;
  } else if (num.value >= 4000) {
    output.innerHTML = `<h2 class="mess">Please enter a number less than or equal to 3999</h2>`
  } else {
    let arr = num.value.split("");

    let roman = "";

    round();
    function round() {
      if (arr.length === 4) {
        if (arr[0] === "1") {
          roman += "M";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
            if (arr[0] === "0") {
              arr.shift();
            }
          }
          round();
        } else if (arr[0] === "2") {
          roman += "MM";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
            if (arr[0] === "0") {
              arr.shift();
            }
          }
          round();
        } else if (arr[0] === "3") {
          roman += "MMM";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
            if (arr[0] === "0") {
              arr.shift();
            }
          }
          round();
        }
      } else if (arr.length === 3) {
        if (arr[0] === "1") {
          roman += "C";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "2") {
          roman += "CC";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "3") {
          roman += "CCC";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "4") {
          roman += "CD";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "5") {
          roman += "D";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "6") {
          roman += "DC";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "7") {
          roman += "DCC";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "8") {
          roman += "DCCC";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        } else if (arr[0] === "9") {
          roman += "CM";
          arr.shift();
          if (arr[0] === "0") {
            arr.shift();
          }
          round();
        }
      } else if (arr.length === 2) {
        if (arr[0] === "1") {
          roman += "X";
          arr.shift();
          round();
        } else if (arr[0] === "2") {
          roman += "XX";
          arr.shift();
          round();
        } else if (arr[0] === "3") {
          roman += "XXX";
          arr.shift();
          round();
        } else if (arr[0] === "4") {
          roman += "XL";
          arr.shift();
          round();
        } else if (arr[0] === "5") {
          roman += "L";
          arr.shift();
          round();
        } else if (arr[0] === "6") {
          roman += "LX";
          arr.shift();
          round();
        } else if (arr[0] === "7") {
          roman += "LXX";
          arr.shift();
          round();
        } else if (arr[0] === "8") {
          roman += "LXXX";
          arr.shift();
          round();
        } else if (arr[0] === "9") {
          roman += "XC";
          arr.shift();
          round();
        }
      } else if (arr.length === 1) {
        if (arr[0] === "1") {
          roman += "I";
        } else if (arr[0] === "2") {
          roman += "II";
        } else if (arr[0] === "3") {
          roman += "III";
        } else if (arr[0] === "4") {
          roman += "IV";
        } else if (arr[0] === "5") {
          roman += "V";
        } else if (arr[0] === "6") {
          roman += "VI";
        } else if (arr[0] == "7") {
          roman += "VII";
        } else if (arr[0] === "8") {
          roman += "VIII";
        } else if (arr[0] === "9") {
          roman += "IX";
        }
      }
    }
    output.innerHTML = `<h2 class="mess">${roman}</h2>`
  }
}
