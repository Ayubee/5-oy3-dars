// 1-savol HTMLCollection hamda NodeList o’rtasidagi 2 ta farq
// const divs = document.getElementsByTagName("div");
// const divs2 = document.querySelectorAll("div");
// console.log(divs);
// console.log(divs2);
// HTMLColectionda forEach() ishlatib bolmas ekan
// NodeListda forEach() ni ishlatsa boladi
// const nodes = document.querySelectorAll("p");
// nodes.forEach((node) => {
//   console.log(node.textContent);
// });

// 2-savol innerText hamda textContent o’rtasidagi 2 ta farq
// Innertext ekranda korngan matndi oladi
// textContent barcha matndi oladi display none bolsaxam oladi

// 3-savol DOM nma
// DOM Document Object Model
// JavaScript yordamida elementlar qoshish ozgartirish ochirish mumkin

// 4-savol 30 ta event nomini hamda vazifasini yozing.

// 1 click bosilganda
// 2 dblclick Ikki marta bosilganda
// 3 mousedown mishka bosilganda
// 4 mouseup mishka tugmasini qoyib yuborilganda
// 5 mouseover mishka hover
// 6 mouseout mishka berilganm obyectdan chiqib ketganida
// 7 mousemove mishka xarakatlanganda
// 8 keydown klaviatura tugmasi bosilganda
// 9 keyup tugma qoyib yuborilganda
// 10 keypress Tugma bosilganda
// 11 input input maydoniga yozilganda
// 12 change select o‘zgarishida
// 13 focus inputga kursor kirganda
// 14 blur inputdan kursor chiqqanda
// 15 submit Form jonatilganda
// 16 reset Form tozalanganda
// 17 load HTML yuklanganda
// 18 unload HTML yopilganda
// 19 resize Oyna hajmi o'zgarganda
// 20 scroll HTML skroll qilinganda
// 21 contextmenu O'ng tugma bosilganda
// 22 touchstart Sensor ekranga tegilganda
// 23 touchend touchbar qo'l olinanda
// 24 touchmove touchbar harakatlantirilganda
// 25 drag Obyekt sudraganda
// 26 dragstart surish boshlanganda
// 27 dragend surish tugaganda
// 28 drop Obyekt tashlanganda
// 29 copy nusxa olganda
// 30 paste nusxa qoyilganda

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const Btn = document.querySelector("#changeTextBtn");

Btn.addEventListener("click", () => {
  para1.textContent = "birinchi paragraf ozgardi";
  para2.textContent = "ikkinchi paragraf ozgardi";
});

const img = document.getElementById("myImage");
const Btn1 = document.getElementById("changeImageBtn");

Btn1.addEventListener("click", () => {
  img.src = "./img/dathNote.jpg";
});

const body = document.body;
const btn2 = document.getElementById("addElementBtn");
const div = document.createElement("div");
body.appendChild(div);
btn2.addEventListener("click", () => {
  const text = document.createElement("p");
  div.appendChild(text);
  text.textContent = "dathNote";
});
