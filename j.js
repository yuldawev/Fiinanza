const tarix = document.querySelector(".tarix");
const maqsad = document.querySelector(".maqsad");
const qadriyatlar = document.querySelector(".qadriyatlar");
const tarixBtn = document.querySelector("#tarix");
const maqsadBtn = document.querySelector("#oliy-maqsad");
const qadriyatBtn = document.querySelector("#qadriyatlar");
const u = document.querySelector(".u");
const b = document.querySelector(".b");
const k = document.querySelector(".k");

tarixBtn.addEventListener("click", () => {
  tarix.style.display = "block";
  maqsad.style.display = "none";
  qadriyatlar.style.display = "none";
  tarixBtn.style.background = "b";
  maqsadBtn.style.color = "rgb(255, 187, 60)";
  qadriyatBtn.style.color = "rgb(255, 187, 60)";
  tarixBtn.style.color = "black";
  maqsadBtn.style.color = "white";
  qadriyatBtn.style.color = "white";
});

maqsadBtn.addEventListener("click", () => {
  qadriyatBtn.style.background = "#318aeб";
  tarix.style.display = "none";
  maqsad.style.display = "block";
  qadriyatlar.style.display = "none";
  tarixBtn.style.color = "white";
  b.style.background = "#318aeб";
  maqsadBtn.style.color = "black";
  qadriyatBtn.style.color = "white";
});

qadriyatBtn.addEventListener("click", () => {
  tarix.style.display = "none";
  maqsad.style.display = "none";
  qadriyatlar.style.display = "block";
  qadriyatBtn.style.color = "black";
  r.style.background = "#318aeб"
  tarixBtn.style.color = "white";
  maqsadBtn.style.color = "white";
});
