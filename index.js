let d = document;
const firstDrop1 = d.getElementById("btn1");
const exitDrop1 = d.getElementById("btn2");
const info1 = d.getElementById("None1");
const info2 = d.getElementById("None2");
const l1 = d.getElementById("container1");

firstDrop1.addEventListener("click", open1);

function open1() {
  info1.style.display = "block";
  info1.style.paddingTop = "10px";
  info2.style.display = "block";
  l1.style.height = "90px";
  firstDrop1.style.display = "none";
  exitDrop1.style.display = "block";
}

exitDrop1.addEventListener("click", close1);

function close1() {
  info1.style.display = "none";
  info2.style.display = "none";
  l1.style.height = "10%";
  firstDrop1.style.display = "block";
  exitDrop1.style.display = "none";
}

const l2 = d.getElementById("container2");
const firstDrop2 = d.getElementById("btn3");
const exitDrop2 = d.getElementById("btn4");
const info3 = d.getElementById("info3");

firstDrop2.addEventListener("click", open2);
function open2() {
  info3.style.display = "block";
  info3.style.paddingTop = "10px";
  l2.style.height = "80px";
  firstDrop2.style.display = "none";
  exitDrop2.style.display = "block";
}

exitDrop2.addEventListener("click", close2);
function close2() {
  info3.style.display = "none";
  l2.style.height = "10%";
  firstDrop2.style.display = "block";
  exitDrop2.style.display = "none";
}

const l3 = d.getElementById("container3");
const firstDrop3 = d.getElementById("btn5");
const exitDrop3 = d.getElementById("btn6");
const info4 = d.getElementById("info4");
const info5 = d.getElementById("info5");

firstDrop3.addEventListener("click", open3);
function open3() {
  info4.style.display = "block";
  info4.style.paddingTop = "10px";
  info5.style.display = "block";
  l3.style.height = "90px";
  firstDrop3.style.display = "none";
  exitDrop3.style.display = "block";
}

exitDrop3.addEventListener("click", close3);

function close3() {
  info4.style.display = "none";
  info5.style.display = "none";
  l3.style.height = "10%";
  firstDrop3.style.display = "block";
  exitDrop3.style.display = "none";
}

const l4 = d.getElementById("container4");
const info6 = d.getElementById("info6");
const firstDrop4 = d.getElementById("btn7");
const exitDrop4 = d.getElementById("btn8");

firstDrop4.addEventListener("click", open4);

function open4() {
  info6.style.display = "block";
  info6.style.paddingTop = "10px";
  l4.style.height = "60px";
  firstDrop4.style.display = "none";
  exitDrop4.style.display = "block";
}

exitDrop4.addEventListener("click", close4);

function close4() {
  info6.style.display = "none";
  l4.style.height = "10%";
  firstDrop4.style.display = "block";
  exitDrop4.style.display = "none";
}

const l5 = d.getElementById("container5");
const info7 = d.getElementById("info7");
const firstDrop5 = d.getElementById("btn9");
const exitDrop5 = d.getElementById("btn10");

firstDrop5.addEventListener("click", open5);

function open5() {
  info7.style.display = "block";
  info7.style.paddingTop = "10px";
  l5.style.height = "80px";
  firstDrop5.style.display = "none";
  exitDrop5.style.display = "block";
}

exitDrop5.addEventListener("click", close5);
function close5() {
  info7.style.display = "none";
  l5.style.height = "10%";
  firstDrop5.style.display = "block";
  exitDrop5.style.display = "none";
}
