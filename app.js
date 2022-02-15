var at1 = document.getElementById("at1");
var at2 = document.getElementById("at2");
var at3 = document.getElementById("at3");
var at4 = document.getElementById("at4");
var at5 = document.getElementById("at5");

var finishLine = document.getElementById("final").offsetLeft - 180;
var total = 0,
  total1 = 0,
  total2 = 0,
  total3 = 0,
  total4 = 0;
var randomNumber = function () {
  var rndm = Math.floor(Math.random() * 100) + 1;
  return rndm;
};

function go() {
  if (total < finishLine) {
    total = total + randomNumber();
    at1.style.marginLeft = total + "px";
    if (total >= finishLine) {
      total = finishLine;
      clearInterval(yarisma);
      at1.style.marginLeft = finishLine + "px";
      setTimeout(function () {
        window.alert("1.AT KAZANDI!!!!"), 2000;
      });
    }
  }
  if (total1 < finishLine) {
    total1 = total1 + randomNumber();
    at2.style.marginLeft = total1 + "px";
    if (total1 >= finishLine) {
      total1 = finishLine;
      clearInterval(yarisma);
      at2.style.marginLeft = finishLine + "px";
      setTimeout(function () {
        window.alert("2.AT KAZANDI!!!!"), 2000;
      });
    }
  }
  if (total2 < finishLine) {
    total2 = total2 + randomNumber();
    at3.style.marginLeft = total2 + "px";
    if (total2 >= finishLine) {
      total2 = finishLine;
      clearInterval(yarisma);
      at3.style.marginLeft = finishLine + "px";
      setTimeout(function () {
        window.alert("3.AT KAZANDI!!!!"), 2000;
      });
    }
  }
  if (total3 < finishLine) {
    total3 = total3 + randomNumber();
    at4.style.marginLeft = total3 + "px";
    if (total3 >= finishLine) {
      total3 = finishLine;
      clearInterval(yarisma);
      at4.style.marginLeft = finishLine + "px";
      setTimeout(function () {
        window.alert("4.AT KAZANDI!!!!"), 2000;
      });
    }
  }

  if (total4 < finishLine) {
    total4 = total4 + randomNumber();
    at5.style.marginLeft = total4 + "px";
    if (total4 >= finishLine) {
      total4 = finishLine;
      clearInterval(yarisma);
      at5.style.marginLeft = finishLine + "px";
      setTimeout(function () {
        window.alert("5.AT KAZANDI!!!!"), 2000;
      });
    }
  }
}

var race = function () {
  go();
};
function start() {
  yarisma = setInterval(race, 1000);
}

function refresh() {
  window.location.reload();
}
